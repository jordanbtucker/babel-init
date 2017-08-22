import http from 'http'

const app = http.createServer(async (req, res) => {
	const message = await Promise.resolve('Hello, World!')
	res.end(message)
})

export default module.exports = app
