import Debug from 'debug'

const debug = Debug('babel-init')

export default class App {
	async run () {
		const message = await Promise.resolve(`Hello, ${process.env.NAME}!`)
		debug('message: %s', message)
		console.log(message)
	}
}
