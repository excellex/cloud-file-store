const express = require('express')
const app = require('express')()
const morgan = require('morgan')
const mongoose = require('mongoose')
const fetch = require('node-fetch');
const path = require('path')
require('dotenv').config()

const authRouter = require('./routes/route.auth')
const indexRouter = require('./routes/route.index')
// const app = express()
app.use(morgan("dev"))
app.use(express.json())
// app.use(express.static('/home/user/elbrus/projects/cloudstore/public'))
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
