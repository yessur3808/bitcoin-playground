# Bitcoin Playground Web App

 A“Bitcoin playground” web app that supports the following operations:
1. 	Generate a random mnemonic words following BIP39 standard
2. 	Generate a Hierarchical Deterministic (HD) Segregated Witness (SegWit) bitcoin address from a given seed and path
3. 	***(Bonus)** Generate an n-out-of-m Multisignature (multi-sig) Pay-To-Script-Hash (P2SH) bitcoin address, where n, m and public keys can be specified


## - Documentation Includes -


**Table of Contents**

[TOCM]

[TOC]







---

## Tech Stack

**Frontend:** Javascript, NodeJS, ReactJS

**Other Technologies**:
- VSCode - IDE


## Folder Structure

    ├── controllers        # Express Route Controllers for all endpoints of the app
    ├── data               # Where Data files are stored (JSON)
    ├── models             # Database models (for future replacement of JSON)
    ├── node_modules       # Modules installed for developing and testing the current backend
    ├── package.json       # 
    └── README.md          # Explain all parts of the current project


## Run Locally

Clone the project

`git clone https://github.com/yessur3808/bitcoin-playground`

Go to the project directory

(assuming you have downloaded it on your local computer / server)
` cd my-project`

Install dependencies

(make sure you have node installed on the device that will be running this project)

`npm install`

Start the server


  `npm start`
  (starts the backend at http://localhost:3030/)

To check or test
if the backend is running check

@ http://localhost:3030/test/

## Running Site

To run tests, run the following command

```bash
  http://localhost:3030/test
```



## Author

- [@yaseribrahim](https://www.github.com/yessur3808)


