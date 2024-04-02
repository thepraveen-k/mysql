const express = require('express')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/postRoutes')
const http = require('http')



const app = express()

app.use(bodyParser.json())

app.use('/posts', postRoutes)


const port = 8000;

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports=app;