const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const path = require('path')
const dotenv = require('dotenv')

const isProduction = process.env.NODE_ENV === 'production'
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`

const PORT = process.env.NODE_ENV === 'production' ? `${process.env.PG_PORT}` : 3001

// const AppRouter = require('./routes/AppRouter') // Uncomment this once AppRouter is setup

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

// app.use('/api', AppRouter) // Uncomment this once AppRouter is setup

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
