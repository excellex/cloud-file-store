const express = require('express')
const app = require('express')()
const morgan = require('morgan')
const mongoose = require('mongoose')
const fetch = require('node-fetch');
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const authRouter = require('./routes/route.auth')
const indexRouter = require('./routes/route.index')

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public', 'build')))


app.use('/', indexRouter)
app.use('/api/auth', authRouter)

const listen = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(process.env.PORT, () => {
      console.log(`Server is started on port: ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

listen()

setInterval(() => {
  fetch('https://myhertestapp.herokuapp.com/')
}, 15 * 60 * 1000)
