describe('Handle dropdowns', () => {
	const dropdownUrl = '/dropdowns'
	const dummyUrl =
		'https://www.dummyticket.com/dummy-ticket-for-visa-application/'
	const googleUrl = 'https://www.google.com/'
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

	it('Auto suggest dropdown', () => {
		cy.visit(wikiUrl)
		cy.get('#searchInput').type('Belarus')
		cy.get('.suggestion-title').contains('Belarusian language').click()
		cy.get('#firstHeading').should('contain', 'Belarusian language')
	})

	it.only('Dynamic dropdown', () => {
		cy.visit(googleUrl)
		cy.get('[name = "q"]').type('cypress automation')
		cy.wait(3000)
		cy.get('div.wM6W7d>span').should('have.length', 12)
		cy.get('div.wM6W7d>span').each(($el, index, $list) => {
			if ($el.text() == 'cypress automation resume') {
				cy.wrap($el).click()
			}
		})
		cy.get('[name = "q"]').should('have.value', 'cypress automation resume')
	})
})
