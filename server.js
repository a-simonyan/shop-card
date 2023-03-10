const express = require('express')
const port = process.env.PORT || 5000
const app = express()

app.use(express.static(__dirname + '/dist/'))

app.get(/.*/, (req,res) => {
    res.sendFile(__dirname +'/dist/index.html')
})

app.listen(port, ()=> {
    console.log('Server is connected');    
})

