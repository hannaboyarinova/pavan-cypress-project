describe('Handle Tabs', () => {
	it('Approach 1', () => {
		cy.visit('https://the-internet.herokuapp.com/windows') //a parent tab
		cy.get('.example>a').invoke('removeAttr', 'target').click() //remove attribute + click the link
		cy.url().should('include', '/windows/new') //assert that new url is opened in the parent tab (cypress doesn't support new tab verification)
		cy.wait(5000)
		//some operations on the child page

		cy.go('back') //back to the parent page
	})

	it.only('Approach 2', () => {
		cy.visit('https://the-internet.herokuapp.com/windows') //a parent tab
		cy.get('.example>a').then(e => {
			let url = e.prop('href')
			cy.visit(url)
		})
		cy.url().should('include', '/windows/new') //assert that new url is opened in the parent tab (cypress doesn't support new tab verification)
		cy.wait(5000)
		cy.go('back') //back to the parent page
	})
})
