describe('Assertions demo', () => {
	it('Implicit assertion', () => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		//implicit assertions should() and and()
		cy.url().should('include', 'orangehrmlive.com')
		cy.url().should(
			'eq',
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.url().should('contain', 'opensource-demo')

		//is the same as
		cy.url()
			.should('include', 'orangehrmlive.com')
			.should(
				'eq',
				'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
			)
			.should('contain', 'opensource-demo')

		//is the same as
		cy.url()
			.should('include', 'orangehrmlive.com')
			.and(
				'eq',
				'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
			)
			.and('not.contain', 'demon')

		cy.title()
			.should('include', 'Orange')
			.and('eq', 'OrangeHRM')
			.and('contain', 'HRM')

		cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') //logo is visible and exists in DOM
		cy.get('a').should('have.length', '5') //number of links on the page
		cy.get('input[name="username"]').clear().type('Admin') //provides a value to username input
		cy.get('input[name="username"]').should('have.value', 'Admin') //check the value of username input
	})
	it.only('explicit assertions', () => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.get('input[name="username"]').type('Admin')
		cy.get('input[name="password"]').type('admin123')
		cy.get('button[type="submit"]').click()

		let expName = 'Paul Collings'
		cy.get('.oxd-userdropdown-name').then(x => {
			let actName = x.text()

			//BDD approach
			expect(actName).to.equal(expName)
			expect(actName).to.not.equal(expName + 1)

			//TDD approach
			assert.equal(actName, expName)
			assert.notEqual(actName, expName + 1)
		})
	})
})
