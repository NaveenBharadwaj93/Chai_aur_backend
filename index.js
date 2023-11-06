require('dotenv').config()
const express = require('express')
// import  {express} from 'express';

const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/myHome',(req,res)=>{
  res.send('Home page')
})

app.get('/login',(req,res)=>{
  res.send('<h1>"Hello there"</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
