describe('Handle dropdowns', () => {
	const dropdownUrl = '/dropdowns'
	it('Dropdown with select', () => {
		cy.visit(dropdownUrl)
		cy.get('#dropdown-menu')
			.select('Belarus')
			.wait(5000)
			.should('have.value', 'Belarus')
	})

	it.only('Dropdown without select', () => {
		cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
		cy.get('#select2-billing_country-container').click()
		cy.get('.select2-search__field').type('Belarus', '{ enter }')
		cy.get('#select2-billing_country-container').should('have.text', 'Belarus')
	})
})
