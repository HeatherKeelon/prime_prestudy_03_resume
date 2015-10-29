/**
 * Created by user on 10/29/15.
 */
//this is the router

var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;

