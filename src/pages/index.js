import React from "react"
import PlaygroundLayout from "../layouts/playground"
import CoinDisplay from "../components/coindisplay/coin";
import "../styles/index.css"

export default function Home() {
  return (
    <PlaygroundLayout path={"/"}>
      <CoinDisplay />
    </PlaygroundLayout>
  )
}
