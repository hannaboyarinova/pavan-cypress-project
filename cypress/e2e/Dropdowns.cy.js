describe('Handle dropdowns', () => {
	const dropdownUrl = '/dropdowns'
	it('Dropdown with select', () => {
		cy.visit(dropdownUrl)
		cy.get('#dropdown-menu')
			.select('Belarus')
			.wait(5000)
			.should('have.value', 'Belarus')
	})
})
