const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());               //only accept the http request



mongoose.connect("mongodb+srv://Raichu:Rishi1234@cluster0.xw5ct.mongodb.net/group20Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
