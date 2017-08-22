import request from 'supertest'
import app from '../src/app'

describe('app', () => {
	before(done => {
		app.listen(3000, done)
	})

	after(done => {
		app.close(done)
	})

	describe('GET /', () => {
		it(`responds with 'Hello, World!`, async () => {
			return request(app)
				.get('/')
				.expect(200, 'Hello, World!')
		})
	})
})
