describe('Generate a Multisignature Pay-To-Script-Hash bitcoin address', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        cy.visit('https://yessur3808.github.io/bitcoin-playground/#multi-sig');

    })

    it('Test with One Public Key' , () => {
        cy.get('#publickey0')
        .type('02b1d3ea175bc91bcbab7c565e3dfefe6eeaf3a2bfa482c8b5955cdc038ecf3589')

        cy.get('#submitBtn')
        .should('not.have.class', 'disabled')
        .click()
    })

    it('Adding & Removing Public Keys' , () => {
        cy.get('#addpubkey').click() // 1
        .wait(500)
        .click() // 2
        .wait(500)
        .click() // 3
        .wait(500)
        .click() // 4

        cy.get('#publickey0')
        .type('0238fa60bceb4e0b501d83841fc4d811c496a7b9eeed54770d2553b31665f6238a')
        .wait(2000)

        cy.get('#publickey4')
        .type('02b1d3ea175bc91bcbab7c565e3dfefe6eeaf3a2bfa482c8b5955cdc038ecf3589')
        .wait(2000)

        cy.get('#removeKey3').wait(2500)
        cy.get('#removeKey2').wait(2000)
 
    })

    it('Test with more than One Public Key' , () => {
        cy.get('#publickey0')
        .type('02b1d3ea175bc91bcbab7c565e3dfefe6eeaf3a2bfa482c8b5955cdc038ecf3589')

        cy.get('#addpubkey').click()
        .wait(500)
        .click()

        cy.get('#publickey1')
        .type('0238fa60bceb4e0b501d83841fc4d811c496a7b9eeed54770d2553b31665f6238a')
        .wait(2000)
 
        cy.wait(500)

        cy.get('#publickey2')
        .type('0238fa60bceb4e0b501d83841fc4d811c496a7b9eeed54770d2553b31665f6238a')

        cy.get('#submitBtn')
        .should('not.have.class', 'disabled')
        .click()
    })
});