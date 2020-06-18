const mongoose = require("mongoose");

const Product = mongoose.model("contacts");

module.exports = {
    async index(req, res){
        try{
            const { page = 2 } = req.query;
            const products = await Product.paginate({}, {page, limit: 10});
            return res.json(products);
        }catch(err){
            console.log("Erro aqui - " + {err});
        }
    },
    async show(req, res){
        const products = await Product.findById(req.params.id);
        return res.json(products);
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
    async store(req, res){
        try{
            const products = await Product.create(req.body);
            console.log(products);
            return res.json(products);
        }catch(err){
            console.log("Erro linha 17 a 19 {ProductController} Type: " + {err});
        }
    }
};