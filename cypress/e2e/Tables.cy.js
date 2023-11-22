describe('Tables Handling', () => {
	beforeEach('Login', () => {
		cy.visit('https://demo.opencart.com/admin/index.php')
		cy.get('[name="username"]').clear().type('demo')
		cy.get('[name="password"]').clear().type('demo')
		cy.get('[type="submit"]').click()
		//customer -> customer menu
		cy.get('.btn-close').click()
		cy.get('#menu-customer').click()
		cy.get('#menu-customer>ul>li:first-child').click()
	})
	it('Check number of rows and columns', () => {
		cy.get('table[class = "table table-bordered table-hover"]>tbody>tr').should(
			'have.length',
			'10'
		)
		cy.get(
			'table[class = "table table-bordered table-hover"]>thead>tr>td'
		).should('have.length', '7')
	})
	it('Check cell data specific row and column', () => {
		cy.get(
			'table[class = "table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)'
		).contains('gorankrezic90@gmail.com')
	})
	it('Read all the rows and columns', () => {
		cy.get('table[class = "table table-bordered table-hover"]>tbody>tr').each(
			($row, index, $rows) => {
				cy.wrap($row).within(() => {
					cy.get('td').each(($col, index, $cols) => {
						cy.log($col.text())
					})
				})
			}
		)
	})
	it.only('Pagination', () => {
		//find total number of pages
		/*cy.get('.col-sm-6.text-end').then(e => {
			let mytext = e.text() //mytext gets value 'Showing 1 to 10 of 16445 (1645 Pages)'
			let totalPages = mytext.substring(
				//returns number of pages
				mytext.indexOf('(') + 1,
				mytext.indexOf('Pages') - 1
			)
			cy.log('Total number of pages is ' + totalPages)
		})*/
		let mockTotalPages = 5
		for (let p = 1; p <= mockTotalPages; p++) {
			if (mockTotalPages > 1) {
				cy.log('Active page is ' + p)
				cy.get('ul.pagination>li:nth-child(' + p + ')').click()
				cy.wait(3000)

				cy.get(
					'table[class = "table table-bordered table-hover"]>tbody>tr'
				).each(($row, index, $rows) => {
					cy.wrap($row).within(() => {
						cy.get('td:nth-child(3)').then(e => {
							cy.log(e.text())
						})
					})
				})
			}
		}
	})
})
