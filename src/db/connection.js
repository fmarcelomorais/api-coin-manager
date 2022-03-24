const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://marcelomorais:dinha1409@dbcoinmanager.1zrfh.mongodb.net/dbCoinManager?retryWrites=true&w=majority'

async function connect(){
    await mongoose.connect(connectionString)
    console.log('conectado com sucesso')
}
connect().catch(err => console.log(err))

module.exports = mongoose
