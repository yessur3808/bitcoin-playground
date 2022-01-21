describe('Generate a Hierarchical Deterministic Segregated Witness bitcoin address', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        cy.visit('http://localhost:7000/#hd_segwit');
    })


    it('Test with Seed 1 - (128 bits >> 12 words)', () => {
       cy.get('#seedName')
       .type('2c9736a7b944507ea36e337b9c76dd14a940928422a97dcd0f6387a2009692c1cdb63f3c1b3431317bf2831a56102af17844acca114e5d95907f0bda18cce5cd')

       cy.get('#accountInput')
       .type(getRandomNum(0,100))

       cy.get('#changeInput')
       .type(getRandomNum(0,1))

       cy.get('#hdsegwitBtn').should('not.be.disabled').click()
    })

    it('Test with Seed 2 - (224 bits >> 21 words)', () => {
        cy.get('#seedName')
       .type('8844dfe5c1c8aadd05f12bd985135ad9f0e1096812d0a3d981eb0c5326525e6fbb6613125f47d4d1cf8651835dd614fbcc9f73d356a1f62e4f8c4460632d1b33')

       cy.get('#accountInput')
       .type(getRandomNum(0,100))

       cy.get('#changeInput')
       .type(getRandomNum(0,1))

       cy.get('#hdsegwitBtn').should('not.be.disabled').click()
    })

    it('Test with Seed 3 - (256 bits >> 24 words)', () => {
        cy.get('#seedName')
        .type('7227f601ff8ea500a71a426ad66f8a30c1e15aed2218583a8e2303c208b47d2dc10a290356353958b91e237ec6157c71c9c8608830c53dd49447560eff3c4b75')
 
        cy.get('#accountInput')
        .type(getRandomNum(0,100))
 
        cy.get('#changeInput')
        .type(getRandomNum(0,1))
 
        cy.get('#hdsegwitBtn').should('not.be.disabled').click()
    })


    it('Test with incorrect Seed', () => {
        cy.get('#seedName')
        .type('4740e389h87h78h8jkjbjbkbkjbkjbkj0293b')
 
        cy.get('#accountInput')
        .type(getRandomNum(0,100))
 
        cy.get('#changeInput')
        .type(getRandomNum(0,1))
 
        cy.get('#hdsegwitBtn').should('be.disabled')
    })

    it('Test with incorrect Change', () => {
        cy.get('#seedName')
        .type('08a93159d50b03f8e835134e13a392eb7fbb4188de547ed40c59604fb65a39be8e0360d459b4e5ad7d5ce6352b74794f1d5ba9624c254f552956b52ab85f9f40')
 
        cy.get('#accountInput')
        .type(getRandomNum(0,100))
 
        cy.get('#changeInput')
        .type(getRandomNum(2, 50))
 
        cy.get('#hdsegwitBtn').should('be.disabled')
    })


    it('Test with incorrect Account', () => {
        cy.get('#seedName')
        .type('82e309e9dfcb4e7592f0fb5aa527749ef0f3d0ba585b88c4697d396e941a073898544bf5e47ff5409f06dd9dc07ba12c32c061e030bee4fa4d8eae0618fba19e')
 
        cy.get('#accountInput')
        .type(getRandomNum(101, 300))
 
        cy.get('#changeInput')
        .type(getRandomNum(0,1))
 
        cy.get('#hdsegwitBtn').should('be.disabled')
    })



})


function getRandomNum(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}