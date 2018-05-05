const Hapi = require('hapi')
const chalk = require('chalk')

const { SERVER } = require('./src/config')

const server = Hapi.Server({
	host: SERVER.HOST,
	port: SERVER.PORT
})

const init = async () => {

	try {
		await server.start()

	server.route({
		method: 'GET',
		path: '/',
		handler: (req, h) => ({ message: "It's work!" })
	})

	console.log(chalk.green(`Server running at port ${server.info.uri}`))
} catch (error) {
	console.log(error)
}
	
}

process.on('unhandleRejection', err => {
  console.log(c.red('unhandleRejection error : ', err))
  process.exit(1)
})

init()