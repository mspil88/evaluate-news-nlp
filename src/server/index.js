var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const axios = require("axios");
dotenv.config();

const app = express()
const PORT = 8080
const API_URL = "https://api.meaningcloud.com/sentiment-2.1"

//https://api.meaningcloud.com/sentiment-2.1?key=2e30ec7bbff2260d0fb2fc30a6be564b&&url=https://bbc.co.uk

class HTTPCodes {
    constructor() {
        this.OK = 200;
        this.BAD_REQUEST = 400;
        this.NOT_FOUND = 404;
    }
}

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Cors for cross origin allowance
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//post route for the API call
//using axios post, inspiration from here https://blog.logrocket.com/understanding-axios-post-requests/
app.post("/articleResponse", async (req, res) => {
    axios.post(`${API_URL}?=${process.env.API_KEY}&url=${req.body.url}&lang=en`)
    .then((response) => {
        res.send(response.data);
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
})