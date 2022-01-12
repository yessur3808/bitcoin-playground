import React from "react"
import * as bitcoin from 'bitcoinjs-lib';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../../styles/multisig.css'

class GenerateMultisignature extends React.Component {
    state = {
        public_keys: [null],
        approvals: 1,
        addressMultiSig: null,
        valid: false
    };

    customHandleUpdate = (name, val) => {
        this.setState({
            [name]: val
        });
    }

    updatePublicKey = ev => {
        var index = ev.target.getAttribute("data-index"),
        val = ev.target.value,
        curPublicKey = [...this.state.public_keys];

        curPublicKey[index] = val;
        this.customHandleUpdate("public_keys", curPublicKey)
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

    genMultiSigAddress = () => {
        var m = this.state.approvals,
        pubkeys = this.state.public_keys
        try {
            const pubkeysBuff = pubkeys.map(hex => Buffer.from(hex, 'hex'));
            const { address } = bitcoin.payments.p2sh({
                redeem: bitcoin.payments.p2wsh({
                    redeem: bitcoin.payments.p2ms({ m: +m, pubkeys: pubkeysBuff }),
                }),
            });
            if (address) {
                this.customHandleUpdate("addressMultiSig", address)
            }
        } catch (error) {
            alert("Failed to generate MultiSig address")
            console.error("Failed to generate MultiSig address - Error:", error)
        }
    }

    addPublicKey = ev => {
        var curPublicKey = [...this.state.public_keys];
        curPublicKey.push(null);
        this.customHandleUpdate("public_keys", curPublicKey)
    }

    removePublicKey = ev => {
        var curindex = ev.target.getAttribute('data-index');
        var curPublicKey = [...this.state.public_keys];
        curPublicKey.splice(curindex, 1);
        this.customHandleUpdate("public_keys", curPublicKey)
    }

    validateFields = () => {
        var public_key = this.state.public_keys,
        approvals = this.state.approvals,
        validateBool = true;
        
        if(!public_key){
            validateBool = false;
            this.setErrorMsg("#pubkeyLabel0","A Public Key is required",true)
        }else{
            this.setErrorMsg("#pubkeyLabel0","",false)
        }

        for(var i = 0; i < public_key.length; i++){
            var curkey = public_key[i];

            if(!curkey){
                validateBool = false;
                this.setErrorMsg("#pubkeyLabel"+i,"A Public Key is required, Invalid Public Key",true)
            }else{
                this.setErrorMsg("#pubkeyLabel"+i,"",false)
            }
        }

        if(!approvals){
            validateBool = false;
        }

        this.customHandleUpdate("valid", validateBool)
        return validateBool
    }

    handleSubmit = ev => {
        ev.preventDefault();
        if(this.validateFields()){
            this.genMultiSigAddress();
        }
    }

    render(){
        return(
            <section id="multi-sig" className="pgSection">
                <h3 className="subheading">
                Generate a Multisignature Pay-To-Script-Hash bitcoin address
                </h3>
                <div className="section-container">
                    <div className="input-section">
                        {
                            (this.state.public_keys.map((elem, idx) => 
                            (
                                <label id={"pubkeyLabel"+idx} className="inputLabel publickeyLabel">
                                    {
                                        (idx > 0) ? (
                                        <div className="removeKey" data-index={idx} onClick={this.removePublicKey}>
                                            <RemoveCircleIcon />
                                        </div>
                                        ) : ""
                                    }
                                    <div className="fieldName">Public Key #{(idx+1)}</div>
                                    <input id={"publickey"+idx} className="fieldInput" type="text" name="Public Key" placeholder="Enter a Public Key" onChange={this.updatePublicKey} data-index={idx} value={(elem) ? (elem) : ""}  />

                                    <div className="errorMsg"><p></p></div>
                                </label>
                            )
                        ))
                    }
                          
                    <div id="addpubkey" className="generatebtn" onClick={this.addPublicKey}>
                            <div className="addicon">
                                <AddCircleOutlineIcon />
                            </div>
                            Add Public Key
                    </div>
                    <label id="approvalLabel" className="inputLabel">
                        <div className="fieldName">Approvals</div>
                        <input id="approvalsNum" className="fieldInput" type="text" name="Approvals" placeholder="0" data-name="approvals" onChange={this.handleUpdate}  value={this.state["approvals"]}  />
                        <div className="errorMsg"><p></p></div>
                    </label> 
                    <div id="submitBtn" className={(this.state.valid) ? ("generatebtn") : ("generatebtn disabled")} onClick={this.handleSubmit} >
                        Submit
                    </div>
                </div>

                    <div className="output-section">
                        <div className="displayVal full">
                            <div className="displayHeading">Address</div>
                            <div className="copyVal">
                                <textarea id="addressTxt" readOnly onFocus={this.handleFocus} value={(this.state.addressMultiSig) ? this.state.addressMultiSig : ""}></textarea> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default GenerateMultisignature