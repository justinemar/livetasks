var express = require("express");
var routes = require("../routes/routes");
var app = express();

app.use('/api', routes);

app.listen(8080, () => {
    console.log('Listening to specified port');
})





