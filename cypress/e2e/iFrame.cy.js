describe('iFrame Handle', () => {
	it('Approach 1', () => {
		cy.visitPage('https://the-internet.herokuapp.com/iframe')

		const iframe = cy
			.get('#mce_0_ifr')
			.its('0.contentDocument.body')
			.should('be.visible')
			.then(cy.wrap)
		iframe.clear().type('Welcome to the Frame handling {ctrl+A}')
		cy.get('[aria-label="Bold"]').click()
	})

	it('Approach 2 - by using custom command', () => {
		cy.visitPage('https://the-internet.herokuapp.com/iframe')
		cy.getIFrame('#mce_0_ifr')
			.clear()
			.type(
				'Welcome to the Frame handling with the second approach using custom command {ctrl+A}'
			)
		cy.get('[aria-label="Bold"]').click()
	})

	it.only('Approach 3 - using Cyppres iFrame plugin', () => {
		cy.visitPage('https://the-internet.herokuapp.com/iframe')
		cy.frameLoaded('#mce_0_ifr') //loads a frame
		cy.iframe('#mce_0_ifr') //allows to interact with a frame
			.clear()
			.type(
				'Welcome to the Frame handling with the third approach using cypress-iframe plugin {ctrl+A}'
			)
		cy.get('[aria-label="Bold"]').click()
	})
})
