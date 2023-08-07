describe('CSS Locators', () => {
	it('css locators', () => {
		const keyword = 'Pants'
		cy.visit('https://magento.softwaretestingboard.com/')
		cy.get('#search').type(`${keyword} {Enter}`) //locator by id
		cy.get('.base').contains(keyword) //locator by class
	})
})
