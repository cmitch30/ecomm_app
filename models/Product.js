import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    title: {type : String, required : true},
    description : String,
    price : {type : Number, required : true},
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);