let Product = require("mongoose").model("Product");

class ProductController{
	create(req,res){
		let product = new Product(req.body);
		product.save(e=>{
			if(e) return res.json(e);
			return res.json(product);
		})
	}

	all(req,res){
		Product.find({},(e,products)=>{
			if(!products) return res.json(e);
			return res.json(products);
		});
	}

	findById(req,res){
		Product.findOne({_id:req.params.id},(e,product)=>{
			if(!product)return res.json(e);
			return res.json(product);
		});
	}

	update(req,res){	
		Product.findOne({_id:req.params.id},(e,product)=>{
			if(!product)return res.json(e);
			product.name = req.body.name || product.name;
			product.quantity = req.body.quantity || product.quantity;
			product.price = req.body.price || product.price;
			product.save(e=>{
				if(e)return res.json(e);
				return res.json(product);
			});
		})
	}

	destroy(req,res){
		Product.findOne({_id:req.params.id},(e,product)=>{
			if(!product)return res.json(e);
			Product.remove({_id:req.params.id},(e)=>{
				if(e)return res.json(e);
				return res.json(product);
			});
		});
	}
}
module.exports = new ProductController();