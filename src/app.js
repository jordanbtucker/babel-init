export default class App {
	async run () {
		const message = await Promise.resolve(`Hello, ${process.env.NAME}!`)
		console.log(message)
	}
}
