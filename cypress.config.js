const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: 'o36jxu',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'https://qa-automation-practice.netlify.app/',
	},
	video: false,
})
