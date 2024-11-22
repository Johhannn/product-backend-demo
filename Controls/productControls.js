const mongoose = require('mongoose');
const Product = require('../models/productModels');

const createProduct = async(req, res) => {
    const {productname, price, quantity} = req.body
    try{
        const product = await Product.create({productname, price, quantity})
        res.status(200).json(product)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const getProduct = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json(products)
}
module.exports = {createProduct, getProduct};