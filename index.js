const express = require('express')
const config = require('config')

const port = config.get('port')
const app = express()

app.use(express.json())
app.use(require('./middlewares/db.middleware'))
app.use('/link', require('./routes/links.routes'))

app.listen(port, () => console.log('started'))
