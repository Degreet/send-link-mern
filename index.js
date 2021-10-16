const path = require('path')
const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(require('./middlewares/db.middleware'))
app.use('/link', require('./routes/links.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log('started'))
