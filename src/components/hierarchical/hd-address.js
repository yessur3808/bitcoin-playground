import React from "react"
import * as Yup from 'yup';
import * as bip32 from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';

import { useFormik } from 'formik';

class GenerateHDAddress extends React.Component {
    state = {};



    customHandleUpdate = (name, val) => {
        this.setState({
            [name]: val
        },() => { 
            console.log('current state is ', this.state);
        });
    }

    
    
    // genSegWitBtcAddress = (seedPath) => {
    //     let seedHex = seedPath.seed

    //     //compute path
    //     const path = "m/" + seedPath.purpose + "'/" + seedPath.coin + "'/" + seedPath.account + "'/" + seedPath.change + "/" + seedPath.addressIndex; //Can compute path automatically when one prop is updated?
    //     this.customHandleUpdate("path",path)

    //     try {
    //         const seed = Buffer.from(seedHex, 'hex')
    //         const root = bip32.fromSeed(seed)
    //         const child = root.derivePath(path)
    //         const keyPair = bitcoin.ECPair.fromWIF(child.toWIF())
    
    //         const { address } = bitcoin.payments.p2sh({
    //         redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey }),
    //         });
    
    //         if (address) {
            
    //             this.customHandleUpdate("addressBtc",address)
            
    //             this.customHandleUpdate("PubKey",keyPair.publicKey.toString('hex'))
    //             if (keyPair.privateKey)
    //                 this.customHandleUpdate("PrivKey",keyPair.privateKey.toString('hex'))
    //         }
    //     } catch (error) {
    //         alert("Failed to generate SegWit BTC Address")
    //         console.log(error)
    //     }
    // }


    render(){
        const formikProps = ({
            initialValues: {
              seed: '',
              purpose: 44,
              coin: 0,
              account: 0,
              change: 0,
              addressIndex: 0
            },
            validationSchema,
            onSubmit: values => this.genSegWitBtcAddress(values)
          })

          let validationSchema = Yup.object({
            seed: Yup.string()
              .required("Seed is a required field")
              .test('check-seed','Invalid Seed',
                function(value) {
                  if (value) {
                    try {
                      const seed = Buffer.from(value, 'hex')
                      bip32.fromSeed(seed)
                    } catch (error) {
                      return false
                    }
                    return true
                  }
                  return false
                }),
            purpose: Yup.number()
              .required("Purpose is a required field")
              .typeError("A number is required"),
            coin: Yup.number()
              .required("Coin is a required field")
              .typeError("A number is required"),
            account: Yup.number()
              .required("Account is a required field")
              .min(0, 'Please specify a number between 0 and 100')
              .max(100, 'Please specify a number between 0 and 100')
              .typeError("A number is required"),
            change: Yup.number()
              .required("Change is a required field")
              .min(0, 'Change must be etiher 0 (external) or 1 (internal)')
              .max(1, 'Change must be etiher 0 (external) or 1 (internal)')
              .typeError("A number is required"),
            addressIndex: Yup.number()
              .required("Address Index is a required field")
              .typeError("A number is required"),
        })

        return(
            <section id="hd_segwit" className="pgSection">
                <h3 className="subheading">
                Generate a Hierarchical Deterministic Segregated Witness bitcoin address
                </h3>


                <label className="inputLabel">
                    <div className="fieldName">Seed</div>
                    <input id="companyname_reg" className="fieldInput" type="text" name="Company Name" placeholder="Google" onChange={this.handleUpdate}  value={this.state["seed"]}  />
                    
                </label>


                <label className="inputLabel disabled">
                    <div className="fieldName">Purpose</div>
                    <input id="companyname_reg" className="fieldInput" type="text" name="Company Name" placeholder="Google" onChange={this.handleUpdate}  value={this.state["seed"]} disabled={true} />
                    
                </label >

                <label className="inputLabel disabled">
                    <div className="fieldName">Coin</div>
                    <input id="companyname_reg" className="fieldInput" type="text" name="Company Name" placeholder="Google" onChange={this.handleUpdate}  value={this.state["seed"]} disabled={true}/>
                    
                </label>


                <label className="inputLabel">
                    <div className="fieldName">Account</div>
                    <input id="companyname_reg" className="fieldInput" type="text" name="Company Name" placeholder="Google" onChange={this.handleUpdate}  value={this.state["seed"]}/>
                    
                </label>

                <label className="inputLabel">
                    <div className="fieldName">Change</div>
                    <input id="companyname_reg" className="fieldInput" type="text" name="Company Name" placeholder="Google" onChange={this.handleUpdate}  value={this.state["seed"]}/>
                    
                </label>

                <label className="inputLabel disabled">
                    <div className="fieldName">Address Index</div>
                    <input id="companyname_reg" className="fieldInput" type="text" name="Company Name" placeholder="Google" onChange={this.handleUpdate}  value={this.state["seed"]} disabled={true}/>
                    
                </label>


            </section>
        )
    }

}
export default GenerateHDAddress