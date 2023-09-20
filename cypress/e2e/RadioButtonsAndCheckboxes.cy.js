describe('Check UI elements', () => {
	const radioButtonsUrl = '/radiobuttons'
	const checkboxUrl = '/checkboxes'

	it('Checking radiobuttons', () => {
		cy.visit(radioButtonsUrl)
		//visibility of radiobuttons
		cy.get('input#radio-button1').should('be.visible')
		cy.get('input#radio-button2').should('be.visible')
		cy.get('input#radio-button3').should('be.visible')
		cy.get('input#radio-button4').should('be.visible')

		//selecting radiobutton1
		cy.get('input#radio-button1').check().should('be.checked')
		cy.get('input#radio-button2').should('not.be.checked')
		cy.get('input#radio-button3').should('not.be.checked')

		//selecting radiobutton2
		cy.get('input#radio-button2').check().should('be.checked')
		cy.get('input#radio-button1').should('not.be.checked')
		cy.get('input#radio-button3').should('not.be.checked')

		//selecting radiobutton3
		cy.get('input#radio-button3').check().should('be.checked')
		cy.get('input#radio-button1').should('not.be.checked')
		cy.get('input#radio-button2').should('not.be.checked')

		//checking disabled radiobutton4
		cy.get('input#radio-button4')
			.should('be.disabled')
			.and('have.attr', 'disabled')
	})

	it('Checking/unchecking checkboxes', () => {
		cy.visit(checkboxUrl)

		//verifying visibility of the checkboxes one by one
		cy.get('#checkbox1').should('be.visible')
		cy.get('#checkbox2').should('be.visible')
		cy.get('#checkbox3').should('be.visible')

		//verifying visibility of all checkboxes
		cy.get('[type = "checkbox"]').should('be.visible')

		//verifying the labels of the checkboxes
		cy.get('#checkbox1~label').should('contain', 'Check me out - 1')
		cy.get('#checkbox2~label').should('contain', 'Check me out - 2')
		cy.get('#checkbox3~label').should('contain', 'Check me out - 3')

		//checking single checkbox
		cy.get('#checkbox1').check().should('be.checked')
		cy.get('#checkbox2').check().should('be.checked')
		cy.get('#checkbox3').check().should('be.checked')

		//checking all checkboxes
		cy.get('[type = "checkbox"]').check().should('be.checked')

		//unchecking single checkbox
		cy.get('#checkbox1').uncheck().should('not.be.checked')
		cy.get('#checkbox2').uncheck().should('not.be.checked')
		cy.get('#checkbox3').uncheck().should('not.be.checked')

		//unchecking all checkboxes
		cy.get('[type = "checkbox"]').uncheck().should('not.be.checked')
	})

	it('Checking and unchecking specific checkboxes', () => {
		cy.visit(checkboxUrl)

		//checking the first checkbox
		cy.get('[type = "checkbox"]').first().check().should('be.checked')

		//checking the last checkbox
		cy.get('[type = "checkbox"]').last().check().should('be.checked')
	})
	it('Reset button resets state of checkboxes', () => {
		cy.visit(checkboxUrl)

		//verifying visibility of all checkboxes
		cy.get('[type = "checkbox"]').should('be.visible')

		//checking all checkboxes
		cy.get('[type = "checkbox"]').check().should('be.checked')

		//reset state of checkboxes to unchecked
		cy.get('button[type = "reset"]').click()

		//verify that all checkboxes are unchecked
		cy.get('[type = "checkbox"]').should('not.be.checked')
	})
})
