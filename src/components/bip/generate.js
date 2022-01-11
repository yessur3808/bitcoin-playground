import React from "react"
import * as bip39 from 'bip39';
import CachedIcon from '@mui/icons-material/Cached';


class GenerateBipSeed extends React.Component {
    state = {
        lang_list: [
            { label: "English", value: "english", abbr: "en" },
            { label: "French", value: "french" , abbr: "fr" },
            { label: "Italian", value: "italian" , abbr: "it" },
            { label: "Japanese", value: "japanese" , abbr: "jp" },
            { label: "Korean", value: "korean" , abbr: "kr" },
            { label: "Portuguese", value: "portuguese" , abbr: "pt" },
            { label: "Spanish", value: "spanish" , abbr: "es" },
            { label: "Chinese Simplified", value: "chinese_simplified", abbr: "zh" },
            { label: "Chinese Traditional", value: "chinese_traditional" , abbr: "zh-cn" },
            { label: "Czech", value: "czech" , abbr: "cz"},
        ],
        entropy_list:[
            { label: "128 bits >> 12 words", value: "128" },
            { label: "160 bits >> 15 words", value: "160" },
            { label: "192 bits >> 18 words", value: "192" },
            { label: "224 bits >> 21 words", value: "224" },
            { label: "256 bits >> 24 words", value: "256" },
        ],
        "seedNum": "128",
        "curlang": "english",
        "mnemonicCopyStatus": "none"
    };

    componentDidMount = () => {
        this.generateCurrentSeed();
    }

    updateFields = ev => {
        var val = ev.target.value, 
        name = ev.target.getAttribute("data-name");

        this.setState({
            [name]: val
        },() => { 
            this.generateCurrentSeed();
        });
    }


 
    generateCurrentSeed = () => {
        var num = this.state.seedNum,
        lang = this.state.curlang;
        bip39.setDefaultWordlist(lang);
        const myMnemonic = bip39.generateMnemonic(num);
        const mySeed = bip39.mnemonicToSeedSync(myMnemonic);

        this.customHandleUpdate("mnemonic", myMnemonic);
        this.customHandleUpdate("bipSeed", mySeed.toString('hex'));
    }

    customHandleUpdate = (name, val) => {
        this.setState({
            [name]: val
        },() => { 
            console.log('current state is ', this.state);
        });
    }

    clipboardCopy = ev => {
        ev.target.select();
        ev.target.focus();
        document.execCommand("copy");
        this.setState({ copySuccess: 'Copied!' });
    }

    handleFocus = (ev) => {
        ev.target.focus();ev.target.select();
    }

    render(){
        return(
            <section id="mnemonic" className="pgSection">

                <h3 className="subheading">
                    Generate mnemonic words following BIP39 standard
                </h3>

                <div className="section-container">


                    <div className="input-section">
                        <label className="inputLabel inline-label">
                            <div className="fieldName">Language</div>
                            <select id="langSelect" className="fieldSelect" defaultValue={(this.state.curlang) ? this.state.curlang : "english"} onChange={this.updateFields} data-name="curlang" >
                            {this.state.lang_list.map((element, idx) => (
                                <option value={element.value} key={idx}>
                                    {element.label}
                                </option>
                            ))}                            
                            </select>
                        </label>

                        <label className="inputLabel inline-label">
                            <div className="fieldName">Length</div>

                            <select id="entropySelect" className="fieldSelect" defaultValue={(this.state.seedNum) ? this.state.seedNum : "128"} onChange={this.updateFields}  data-name="seedNum">
                            {this.state.entropy_list.map((element, idx) => (
                                <option value={element.value} key={idx}>
                                    {element.label}
                                </option>
                            ))}                            
                            </select>
                        </label>

                        <div className="refreshIcon" onClick={this.generateCurrentSeed}>
                            <CachedIcon />
                        </div>
                    </div>

                    <div className="output-section">
                        <div className="displayVal">
                            <div className="displayHeading">Mnemonic</div>
                            <div className="copyVal">
                                <textarea id="mnemonicTxt" readOnly onFocus={this.handleFocus} value={(this.state.mnemonic) ? this.state.mnemonic : ""}></textarea> 
                            </div>
                        </div>

                        <div className="displayVal">
                            <div className="displayHeading">BIP39 Seed</div>
                            <div className="copyVal">
                                <textarea id="bipSeedTxt" readOnly onFocus={this.handleFocus} value={(this.state.bipSeed) ? this.state.bipSeed : ""}>
                                    
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default GenerateBipSeed