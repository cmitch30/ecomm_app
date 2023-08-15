import Product from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";


export default async function handle(req, res) {
    const {method} = req
    await mongooseConnect();
    if (method === 'GET') {
        if(req.query?.id) {
            res.json(await Product.findOne({_id: req.query.id}))
        } else {
            res.json(await Product.find())
        }
    }

    if (method === 'POST') {
        const {title, price, description, image} = req.body
        const productDoc = await Product.create({
            title,
            price,
            description,
            image    
        })
        res.status(200).json(productDoc)
    }

    if (method === 'PUT') {

    }
}
