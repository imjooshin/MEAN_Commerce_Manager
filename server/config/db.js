let db     = require('mongoose');
let fs     = require('fs');
let path   = require('path');
let models = path.join(__dirname, '../models');
db.connect('mongodb://localhost:27017/products',{useNewUrlParser:true});

fs.readdirSync(models).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		require(models + '/' + file);
	}
});