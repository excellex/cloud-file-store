const express = require('express')
const app = require('express')()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const authRouter = require('./routes/route.auth')
// const app = express()
app.use(morgan("dev"))
app.use(express.json())
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

app.get('/', (req, res) => {
  res.send('hey')
})

listen()
