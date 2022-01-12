import React from "react"
import * as bip32 from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';
import ECPairFactory from 'ecpair';
import * as ecc from 'tiny-secp256k1';

import '../../styles/hd-address.css'

class GenerateHDAddress extends React.Component {
    state = {
      seed: null,
      purpose: 44,
      coin: 0,
      account: 0,
      change: 0,
      addressIndex: 0,
      valid: false
    };

    customHandleUpdate = (name, val) => {
        this.setState({
            [name]: val
        },() => { 
            this.validateFields();
        });
    }

    handleUpdate = ev => {
      var val = ev.target.value,
      name = ev.target.getAttribute("data-name");
      this.customHandleUpdate(name, val);
    }
  
    genSegWitBtcAddress = (curobj) => {
        let seedHex = curobj.seed

        const path = "m/" + curobj.purpose + "'/" + curobj.coin + "'/" + curobj.account + "'/" + curobj.change + "/" + curobj.addressIndex; 

        this.customHandleUpdate("path",path);
        const ECPair = ECPairFactory(ecc);

        try {
            const seed = Buffer.from(seedHex, 'hex')
            const root = bip32.fromSeed(seed)
            const child = root.derivePath(path)
            const keyPair = ECPair.fromWIF(child.toWIF())
    
            const { address } = 
            bitcoin.payments.p2sh({
              redeem: bitcoin.payments.p2wpkh({       pubkey: keyPair.publicKey 
              }),
            });
    
            if (address) {
                this.customHandleUpdate("addressBtc",address)
                this.customHandleUpdate("PubKey",keyPair.publicKey.toString('hex'))
                if (keyPair.privateKey)
                    this.customHandleUpdate("PrivKey",keyPair.privateKey.toString('hex'))
            }
        } catch (error) {
            alert("Failed to generate SegWit BTC Address")
            console.error("Failed to generate SegWit BTC Address - Error: ", error)
        }
    }

     // set Error messages near where the error occurs
    setErrorMsg(class_name,msg, active){
        var class_name_all = class_name+' .errorMsg';
        var msgClassName = class_name_all+' p'; 
        if(active){
            document.querySelector(class_name_all).classList.add('active');
            document.querySelector(msgClassName).innerHTML = msg;
        }else{
            document.querySelectorAll(class_name_all).forEach(function(el) { // reset all validation icons
                el.classList.remove('active');
              });
        }
    }

    checkVal = (val) => {
      if(val === 0){ return true; }
      if(val != undefined && val != null && val != false){
        return true
      }
      return false
    }

    validateFields = () => {
        var seed = this.state.seed,
        purpose = this.state.purpose,
        coin = this.state.coin,
        account = this.state.account,
        change = this.state.change,
        addressIndex = this.state.addressIndex,
        validateBool = true;

        if(!this.checkVal(seed)){
          validateBool = false;
          this.setErrorMsg("#seedLabel","Seed is a required field",true)
        }else{
          this.setErrorMsg("#seedLabel", "", false)
        }

        if(!this.testSeed(seed)){
          validateBool = false;
          this.setErrorMsg("#seedLabel","Invalid seed value",true)
        }else{
          this.setErrorMsg("#seedLabel", "", false)
        }

        if(!this.checkVal(purpose) || isNaN(purpose)){
          validateBool = false;
          this.setErrorMsg("#purposeLabel","A number is required for the field",true)
        }else{
          this.setErrorMsg("#purposeLabel", "", false)
        }

        if(!this.checkVal(coin) || isNaN(coin)){
          validateBool = false;
          this.setErrorMsg("#coinLabel","A number is required for the field",true)
        }else{
          this.setErrorMsg("#coinLabel", "", false)
        }

        if(!this.checkVal(account) || isNaN(account) || (parseInt(account) > 100) || (parseInt(account) < 0)){
          validateBool = false;
          this.setErrorMsg("#accountLabel","A number is required for the field (between 0 & 100)",true)
        }else{
          this.setErrorMsg("#accountLabel","",false)  
        }

        if(!this.checkVal(change) || isNaN(change)){
          validateBool = false;
          this.setErrorMsg("#changeLabel","Either 0 or 1 is required",true)
        }else{
          this.setErrorMsg("#changeLabel","",false) 
        }

        if(this.checkVal(change) && !isNaN(change) && (( (change) != 0) && ((change) != 1))){
          this.setErrorMsg("#changeLabel","Either 0 or 1 is required",true)
          validateBool = false;
        }else{
          this.setErrorMsg("#changeLabel","",false) 
        }

        if(!this.checkVal(addressIndex) || isNaN(addressIndex)){
          validateBool = false;
          this.setErrorMsg("#addressidxLabel","A number is required",true)
        }else{
          this.setErrorMsg("#addressidxLabel","",false) 
        }

        document.getElementById("hdsegwitBtn").disabled = !validateBool;
 
      return validateBool
    }

    testSeed = (val) => {
      if (val) {
        try {
          const seed = Buffer.from(val, 'hex')
          bip32.fromSeed(seed)
        } catch (error) {
          return false
        }
        return true
      }
      return false
    }

    handleSubmit = ev => {
      ev.preventDefault();
      if(this.validateFields()){
        var tempObj = {
          "seed": this.state.seed,
          "purpose": this.state.purpose,
          "coin": this.state.coin,
          "account": this.state.account,
          "change": this.state.change,
          "addressIndex": this.state.addressIndex
        };
        this.genSegWitBtcAddress(tempObj)
      }
      return false
    }


    handleFocus = ev => {
      ev.target.select();
    }


    render(){

        return(
            <section id="hd_segwit" className="pgSection">
                <h3 className="subheading">
                Generate a Hierarchical Deterministic Segregated Witness bitcoin address
                </h3>
                <div className="section-container">


                  <div className="input-section">
                  <form 
                    method="post"
                    onSubmit={ev => {
                        
                        this.handleSubmit(ev)
                    }}
                    >


                <label id="seedLabel" className="inputLabel">
                    <div className="fieldName">Seed</div>
                    <input id="seedName" className="fieldInput" type="text" name="Seed" placeholder="Enter a valid Seed" data-name="seed" onChange={this.handleUpdate}  value={this.state["seed"]}  />
                    <div className="errorMsg"><p></p></div>
                </label>


                <label id="purposeLabel" className="inputLabel disabled">
                    <div className="fieldName">Purpose</div>
                    <input id="purposeInput" className="fieldInput" type="text" name="Purpose" placeholder="44" onChange={this.handleUpdate}  value={this.state["purpose"]} disabled={true} data-name="purpose"/>
                    <div className="errorMsg"><p></p></div>
                </label >

                <label id="coinLabel" className="inputLabel disabled">
                    <div className="fieldName">Coin</div>
                    <input id="coinInput" className="fieldInput" type="text" name="Coin" placeholder="0" onChange={this.handleUpdate}  value={this.state["coin"]} disabled={true} data-name="coin"/>
                    <div className="errorMsg"><p></p></div>
                </label>


                <label id="accountLabel" className="inputLabel">
                    <div className="fieldName">Account</div>
                    <input id="accountInput" className="fieldInput" type="text" name="Account" placeholder="0" onChange={this.handleUpdate}  value={this.state["account"]} data-name="account"/>
                    <div className="errorMsg"><p></p></div>
                </label>

                <label id="changeLabel" className="inputLabel">
                    <div className="fieldName">Change</div>
                    <input id="changeInput" className="fieldInput" type="text" name="Change" placeholder="0" onChange={this.handleUpdate}  value={this.state["change"]} data-name="change"/>  
                    <div className="errorMsg"><p></p></div>     
                </label>

                <label id="addressidxLabel" className="inputLabel disabled">
                    <div className="fieldName">Address Index</div>
                    <input id="addressIndexInput" className="fieldInput" type="text" name="Address Index" placeholder="0" onChange={this.handleUpdate}  value={this.state["Address Input"]} disabled={true}/>
                    <div className="errorMsg"><p></p></div>
                </label>


                <input id="hdsegwitBtn" className="generatebtn" type="submit" value="Generate" disabled/>

              </form>



                </div>
                <div className="output-section">


                    {(this.state.path) ? (<b>Path</b> - this.state.path) : ""}


                  <div className="displayVal">
                      <div className="displayHeading">Address</div>
                      <div className="copyVal">
                          <textarea id="addressTxt" readOnly onFocus={this.handleFocus} value={(this.state.addressBtc) ? this.state.addressBtc : ""}></textarea> 
                      </div>
                  </div>


                  <div className="displayVal">
                      <div className="displayHeading">Public Key</div>
                      <div className="copyVal">
                          <textarea id="publickeyTxt" readOnly onFocus={this.handleFocus} value={(this.state.PubKey) ? this.state.PubKey : ""}></textarea> 
                      </div>
                  </div>


                  <div className="displayVal">
                      <div className="displayHeading">Private Key</div>
                      <div className="copyVal">
                          <textarea id="privatekeyTxt" readOnly onFocus={this.handleFocus} value={(this.state.PrivKey) ? this.state.PrivKey : ""}></textarea> 
                      </div>
                  </div>

                </div>
              </div>

            </section>
        )
    }
}
export default GenerateHDAddress