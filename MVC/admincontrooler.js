const path = require('path');
const rootDir = require('../util/path');

exports.getadmin=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))};

exports.postadmin=(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  };


