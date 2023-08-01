describe('My first test suite', () => {
	it('verify title - positive', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/')
		cy.title().should('eq', 'OrangeHRM')
	})
	it('verifify title - negative', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/')
		cy.title().should('not.eq', 'OrangeHRM123')
	})
})
