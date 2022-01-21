describe('Generate Bip39 Seed', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        cy.visit('http://localhost:7000/#mnemonic');
    })

    it('Test Generator Word Count', () => {

        cy.get('#entropySelect')
        .select('160 bits >> 15 words')
        .get('#mnemonicTxt')
        .then((res) => {
            if(evalArrLen(res.val()) === 15){ return true }
            return false
        })  

        cy.get('#entropySelect')
        .select('224 bits >> 21 words')
        .get('#mnemonicTxt')
        .then((res) => {
            if(evalArrLen(res.val()) === 21){ return true }
            return false
        })
    })


    it('Test Refresh Button', () => {
        var xyz = ''
        cy.get('#bipSeedTxt').then((val) => {
            xyz = val.val();
            cy.log(xyz);
        });

        cy.get('.refreshIcon')
        .click()
        .wait(1200)

        cy.get('#bipSeedTxt')
        .then((res) => {
            return res.val() != xyz
        })



    })
});


function evalArrLen(txt){
    var tempArr = txt.split(" ")
    if(txt && tempArr && tempArr.length > 0)
        return tempArr.length
    
    return 0
}
