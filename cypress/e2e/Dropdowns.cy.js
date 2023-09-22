describe('Handle dropdowns', () => {
	const dropdownUrl = '/dropdowns'
	const dummyUrl =
		'https://www.dummyticket.com/dummy-ticket-for-visa-application/'
	const wikiUrl = 'https://www.wikipedia.org/'
	it('Dropdown with select', () => {
		cy.visit(dropdownUrl)
		cy.get('#dropdown-menu')
			.select('Belarus')
			.wait(5000)
			.should('have.value', 'Belarus')
	})

	it('Dropdown without select', () => {
		cy.visit(dummyUrl)
		cy.get('#select2-billing_country-container').click()
		cy.get('.select2-search__field').type('Belarus', '{ enter }')
		cy.get('#select2-billing_country-container').should('have.text', 'Belarus')
	})

	it.only('Auto suggest dropdown', () => {
		cy.visit(wikiUrl)
		cy.get('#searchInput').type('Belarus')
		cy.get('.suggestion-title').contains('Belarusian language').click()
		cy.get('#firstHeading').should('contain', 'Belarusian language')
	})
})
