var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res , next) {
    Product.find(function(err, docs) {
        var productChuncks = [];
        var chunkSize = 3;
        console.log(docs.length);
        for(var i=0; i<docs.length;i+= chunkSize) {
            productChuncks.push(docs.slice(i, i+chunkSize));
        }
        res.render('shop/index', {title : 'Express', products: productChuncks});
    });
});
console.log("hello");
module.exports = router;