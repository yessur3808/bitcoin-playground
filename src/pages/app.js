import React from "react";
import PlaygroundLayout from "../layouts/playground";
import GenerateBipSeed from "../components/bip/generate";
import GenerateHDAddress from "../components/hierarchical/hd-address"
import GenerateMultisignature from "../components/multisignature/paytoscripthash";
import CoinDisplay from "../components/coindisplay/coin";
import "../styles/index.css";

class App extends React.Component {
    state = {};
    render(){
        return(
            <>
             <PlaygroundLayout path={"/"}>
                <CoinDisplay />
                <GenerateBipSeed />
                <GenerateHDAddress />
                <GenerateMultisignature />
             </PlaygroundLayout>
            </>
        )
    }
}
export default App