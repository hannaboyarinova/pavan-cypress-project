describe('Alerts', () => {
	//JS Alert: it will have some text and 'OK' button
	it('JS Alert', () => {
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.get('[onclick="jsAlert()"]').click()
		cy.on('window:alert', t => {
			expect(t).to.contains('I am a JS Alert')
		})

		//Alert is automatically closed by Cypress
		cy.get('#result').should('contain', 'You successfully clicked an alert')
	})

	// - JS Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons

	it('JS Confirm Alert - OK Button', () => {
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.get('[onclick="jsConfirm()"]').click()
		cy.on('window:confirm', t => {
			expect(t).to.contains('I am a JS Confirm')
		})
		//Alert Confirm window is automatically closed by clicking OK button
		cy.get('#result').should('have.text', 'You clicked: Ok')
	})

	it('JS Confirm Alert - Cancel Button', () => {
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.get('[onclick="jsConfirm()"]').click()
		cy.on('window:confirm', t => {
			expect(t).to.contains('I am a JS Confirm')
		})
		cy.on('window:confirm', () => false)

		//Alert Confirm window is automatically closed by clicking Cancel button
		cy.get('#result').should('have.text', 'You clicked: Cancel')
	})

	//JS Prompt Alert: it will have some text with a text box for user input along with 'OK' button
	it('JS Prompt Alert - OK Button', () => {
		var message = 'Welcome'
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.window().then(win => {
			cy.stub(win, 'prompt').returns(message)
		})
		cy.get('[onclick="jsPrompt()"]').click()

		//Cypress wil automaticalli close prompted JS alert by clicking OK button
		cy.get('#result').should('have.text', `You entered: ${message}`)
	})

	it('JS Prompt Alert - Cancel Button', () => {
		var message = 'Welcome'
		cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
		cy.window().then(win => {
			cy.stub(win, 'prompt')
				.returns(message)
				.callsFake(() => null)
		})
		cy.get('[onclick="jsPrompt()"]').click()

		//Cypress wil automatically close prompted JS alert by clicking Cancel button
		cy.get('#result').should('have.text', `You entered: null`)
	})

	//Authenticated Alert
	it('Authenticated Alert', () => {
		//approach 1
		cy.visit('https://the-internet.herokuapp.com/basic_auth', {
			auth: {
				username: 'admin',
				password: 'admin',
			},
		})
		cy.get('div.example p').should(
			'contain',
			'Congratulations! You must have the proper credentials.'
		)
	})
	it('Authenticated Alert', () => {
		//approach 2
		cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
		cy.get('div.example p').should(
			'contain',
			'Congratulations! You must have the proper credentials.'
		)
	})
})
