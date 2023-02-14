const express = require('express');
const path = require('path');
// logs the different requests to our server
const logger = require('morgan');
// cross origin access
const cors = require('cors');
require('dotenv').config();
require('./config/database.js')



const app = express()

// access
app.use(cors({
    origin: "*"
}));

 //logs different requests to our server automatically
 app.use(logger('dev'))

// parse stringified objects (JSON)
app.use(express.json())
// server build folder
app.use(express.static(path.join(__dirname, 'build')));



app.get('test_route', (req, res) =>{
    res.send("good route");
})


app.post('/api/users', (req, res) => {
    console.log(req.body);
    // doing authentication here

    // sending user response after creation or login
    res.json("good route")
})

// have as very last route, used as catch all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

 

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})