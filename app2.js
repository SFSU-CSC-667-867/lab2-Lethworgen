const express = require('express') //import
const axios = require('axios')//import

const app = express()//Constructor
const port = 3001

app.get('/', (req, res) => res.send('Hello There Visitor!'))

app.get('/world', (req, res) => res.send('Hello Network'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))