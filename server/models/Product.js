let mongoose = require("mongoose");
let Schema = mongoose.Schema;
// let ForeignKey = Schema.Types.ObjectId;

let ProductSchema = new Schema({
	name:{
		type:String,
		required:[true,"Name is required!"],
		minlength:[3,"Name must be at least 3 characters."]
	},

	quantity:{
		type:Number,
        required:[true,"Quantity is required!"],
        min: 0
    },
    
    price:{
		type:Number,
        required:[true,"Price is required!"],
        min: 1
	},
	
},{timestamps:true});

var Product = mongoose.model("Product",ProductSchema);
module.exports = Product;