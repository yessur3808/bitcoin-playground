describe('Heading Menu', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        cy.visit('https://yessur3808.github.io/bitcoin-playground/');
    })

    it('Check Main Header', () => {
        
        cy.get('.navbar .navheading h2')
        .find('.txtBitcoin')
        .should('have.text', 'Bitcoin ')

        cy.get('.navbar .navheading h2')
        .find('.txtPg')
        .should('have.text', 'Playground')

        cy.get('.navbar .navheading .author')
        .should('have.text', 'by Yaser Ibrahim')
    })

    it('Desktop menu render', () => {

        cy.get('.navbar .linklist a')
        .should('have.length', 4)

        cy.get('.navbar .linklist a')
        .first()
        .find('.linktxt')
        .should('have.text', 'Top Coins')

        cy.get('.navbar .linklist a')
        .eq(1)
        .find('.linktxt')
        .should('have.text', 'Mnemonic')

        cy.get('.navbar .linklist a')
        .eq(2)
        .find('.linktxt')
        .should('have.text', 'HD SegWit')

        cy.get('.navbar .linklist a')
        .eq(3)
        .find('.linktxt')
        .should('have.text', 'Multi-Sig')
    });

    it('Mobile Menu render', () => {

        cy.viewport(360, 480)
        cy.get('.mainmenu ul li').should('have.length', 5)
        cy.get('.mainmenu ul.list .list-item').first().should('have.text', 'Top Coins')
        cy.get('.mainmenu ul.list .list-item').eq(1).should('have.text', 'Mnemonic')
        cy.get('.mainmenu ul.list .list-item').eq(2).should('have.text', 'HD SegWit')
        cy.get('.mainmenu ul.list .list-item').eq(3).should('have.text', 'Multi-Sig')
        cy.get('.mainmenu ul.list .list-item').last().find('.pull-left').should('have.text', 'Follow me on')
    });

    it('Open and close mobile navbar', () => {
    
        cy.viewport(360, 480)

        cy.wait(5000)

        cy.get('.burger')
        .click()
        .should('have.class', 'active')

        cy.wait(5000)
        
        cy.get('.burger')
        .click()
        .should('not.have.class', 'active')
    })
});