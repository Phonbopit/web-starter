require('dotenv').config()

module.exports = {
  SERVER: {
    HOST: process.env.SERVER_HOST || '127.0.0.1',
    PORT: process.env.SERVER_PORT || 5555
  }
}
