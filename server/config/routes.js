let path   = require("path");
let fs     = require("fs");
let routes = path.join(__dirname, '../routes');
let ProductController = require("../controllers/ProductController.js");

module.exports =(app)=>{
	app.post("/api/products",ProductController.create);
	app.get("/api/products",ProductController.all);
	app.get("/api/products/:id",ProductController.findById);
	app.patch("/api/products/:id",ProductController.update);
	app.delete("/api/products/:id",ProductController.destroy);

	// ********************************************************
	// Angular
    // ********************************************************
    
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/client/index.html"))
	});
}
