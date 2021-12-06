// const MongoClient = require("mongodb").MongoClient;
// console.log("hello")

const express = require('express')
const app = express()
 
app.get('/app/index.html', (req, res) => {
    res.send('Hello World!')
})
 
app.listen(3000, () => console.log('blog server running on port 3000!'))