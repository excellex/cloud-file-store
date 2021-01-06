const express = require('express')
const app = require('express')()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const authRouter = require('./routes/route.auth')
// const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(express.static('/home/user/elbrus/projects/cloudstore/public'))
app.use(express.static('/home/user/elbrus/projects/cloudstore/public/build'))
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
// console.log('\n\n\n\n\n\n',app.locals,'\n\n\n\n\n\n');

app.get('/', (req, res) => {
  res.sendFile('/home/user/elbrus/projects/cloudstore/public/index.html')
})

listen()
