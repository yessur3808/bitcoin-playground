import React from "react"
import PlaygroundLayout from "../layouts/playground"
import generateBipSeed from "../components/bip/generate"
import generateHDAddress from "../components/hierarchical/hd-address"
// import generateMultisignature from "../components/multisignature/paytoscripthash"
import CoinDisplay from "../components/coindisplay/coin";
import "../styles/index.css"

export default function Home() {
  return (
    <PlaygroundLayout path={"/"}>
      <CoinDisplay />
    </PlaygroundLayout>
  )
}
