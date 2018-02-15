var express = require("express");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
var router = express.Router();


let liveTasks = [
{username: 'shikamaru', doing: 'some ninja stuff'}, 
{username: 'john doe', doing: 'coding some kickass app'}, 
{username: 'jane doe', doing: 'refurnishing my website'}, 
{username: 'aqua man', doing: 'nothing..'}];

router.get("/livetasks", (req, res) => {
    res.send(liveTasks);
});


router.post("/livetasks", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send({
       type: "GET",
       username: req.body.username,
       doing: req.body.doing
    });
});

router.delete("/livetasks/:task", (req, res) => {
    res.send({'type': 'DELETE'});
});


router.put("/livetasks/:task", (req, res) => {
    res.send({'type': 'PUT'})
})

















module.exports = router;