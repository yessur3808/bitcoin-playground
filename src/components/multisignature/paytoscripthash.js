import React from "react"

class GenerateMultisignature extends React.Component {
    state = {};

    customHandleUpdate = (name, val) => {
        this.setState({
            [name]: val
        },() => { 
            console.log('current state is ', this.state);
        });
    }

    render(){
        return(
            <section id="multi-sig" className="pgSection">
                <h3 className="subheading">
                Generate a Multisignature Pay-To-Script-Hash bitcoin address
                </h3>

                

            </section>
        )
    }

}
export default GenerateMultisignature