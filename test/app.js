import sinon from 'sinon'

import App from '../src/app'

describe('App', () => {
	describe('run', () => {
		it(`logs 'Hello, $NAME!'`, async () => {
			const message = `Hello, ${process.env.NAME}!`

			const mock = sinon.mock(console)
			mock
				.expects('log')
				.calledWithExactly(message)

			const app = new App()
			await app.run()

			mock.verify()
			mock.restore()
		})
	})
})
