
# Bitcoin Playground Web App

A “Bitcoin playground” web app that supports the following operations:

1. Generate a random mnemonic words following BIP39 standard

2. Generate a Hierarchical Deterministic (HD) Segregated Witness (SegWit) bitcoin address from a given seed and path

3. ***(Bonus)** Generate an n-out-of-m Multisignature (multi-sig) Pay-To-Script-Hash (P2SH) bitcoin address, where n, m and public keys can be specified

##  Documentation Includes
**Table of Contents**

=====================
<!--ts-->
* [Tech Stack](#Tech-Stack)
* [Folder Structure](#Folder-Structure)
*  [Run Site](#Run-site)
*  [Create a new site](#Create-a-new-site)
*  [Libraries](#Libraries)
<!--te-->

---

## Tech Stack

**Frontend:** - Javascript, NodeJS, ReactJS, GatsbyJS
**IDE** - VSCode

## Folder Structure
├── src
    │   ├── components  # different components used to make up the web application
    │   ├── layouts # layouts used for consistent themes
    │   ├── pages # (app.js & index.js)
    │   ├── styles # custom css styling for the web apps different components
├── node_modules # Modules installed for developing and testing the current backend
├── static # static assets like icons or images
├── package.json #
└── README.md # Explain all parts of the current project

  
  
## Run Site


[Check Live Site](https://yessur3808.github.io/bitcoin-playground/)

`https://yessur3808.github.io/bitcoin-playground/`



### Create a new site
```
npm install -g gatsby-cli
gatsby new new-bitcoin-playground https://github.com/yessur3808/bitcoin-playground
```

### Develop the site locally
```bash
npm install
gatsby develop -H 0.0.0.0 --port 8000
```

Open at `http://localhost:8000` in the browser.



### Deploy to GitHub Pages using GitHub Actions

Add the `pathPrefix` to `gatsby-config.js`.

```js
module.exports = {
  pathPrefix: `/(repository name)`,
}
```

Update the build script to `package.json`.

```diff
-"build": "gatsby build",
+"build": "gatsby build --prefix-paths",
```




### Libraries


- [Axios](https://github.com/axios/axios): A promise-based HTTP Client for node.js and the browser
- [bip32](https://github.com/bitcoinjs/bip32): Address path (BIP32) defines how to derive private and public keys of a wallet from a binary master seed (m) and an ordered set of indices
- [bip39](https://github.com/bitcoinjs/bip39): BIP39 is the use of a mnemonic phrase -- a group of easy to remember words -- to serve as a back up to recover your wallet and coins in the event your wallet becomes compromised, lost, or destroye
- [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib): Used to generate random addresses, testnet address, wallet import formats, and more
- [ecpair](https://github.com/bitcoinjs/ecpair) : is the ECPair class for single keys, for managing SECP256k1 keypairs
- [Gatsby](https://www.gatsbyjs.com/):  is a React-based open source framework with performance, scalability and security built-in
- [React](https://reactjs.org/): it's an open-source front-end JavaScript library for building user interfaces based on reusable UI components
- [Material Icons](https://mui.com/components/material-icons/): an icon set used for easy to use on websites & webapps



### Documentation

https://www.ledger.com/academy/difference-between-segwit-and-native-segwit
https://www.mobilefish.com/download/ethereum/hd_wallet.html
https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
https://iancoleman.io/bip39/
https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki






### Features to be added

- [ ] Add more derivation paths (bip44, bip49, bip84, bip141)
- [ ] Add Coin (3rd party blockchain) Choices which could be derived from top coins or the search located at the top of the page
- [ ] Autofill for fields that have been generated in previous steps as an option for ease
- [ ] Loader with some kind of crypto related imagery or design


  
## Author

  

-  [@yaseribrahim](https://www.github.com/yessur3808)



Twitter: [@CurlyCoffee3808](https://twitter.com/curlycoffee3808)

