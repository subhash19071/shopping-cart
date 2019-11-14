var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//mongoose.connect('mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb');
mongoose.connect('mongodb://127.0.0.1:27017/shopping');
mongoose.connection
    .once("open", () => console.log("All good"))
    .on("error", error => {
        console.log("your error", error);
    });

var products = [
    new Product({
        imagepath: 'https://smedia2.intoday.in/btmt/images/stories/pub_660x450_010219045955.jpg" alt="..." class = "img-responsive',
        title: 'PUBG video game',
        description: 'Awesome game',
        price : 10
    }),
    new Product({
        imagepath: 'https://smedia2.intoday.in/btmt/images/stories/pub_660x450_010219045955.jpg" alt="..." class = "img-responsive',
        title: 'PUBG video game',
        description: 'Awesome game',
        price : 10
    }),
    new Product({
        imagepath: 'https://smedia2.intoday.in/btmt/images/stories/pub_660x450_010219045955.jpg" alt="..." class = "img-responsive',
        title: 'PUBG video game',
        description: 'Awesome game',
        price : 10
    }),
    new Product({
        imagepath: 'https://smedia2.intoday.in/btmt/images/stories/pub_660x450_010219045955.jpg" alt="..." class = "img-responsive',
        title: 'PUBG video game',
        description: 'Awesome game',
        price : 10
    }),
    new Product({
        imagepath: 'https://smedia2.intoday.in/btmt/images/stories/pub_660x450_010219045955.jpg" alt="..." class = "img-responsive',
        title: 'PUBG video game',
        description: 'Awesome game',
        price : 10
    }),
    new Product({
        imagepath: 'https://smedia2.intoday.in/btmt/images/stories/pub_660x450_010219045955.jpg" alt="..." class = "img-responsive',
        title: 'PUBG video game',
        description: 'Awesome game',
        price : 10
    })
];

var done = 0;
for(var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}


