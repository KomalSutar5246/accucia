const Product = require('../models/product');
const Slugify = require ('slugify');
const { default: slugify } = require('slugify');
const shortid = require ('shortid');
const path = require('path');
const Category = require('../models/category');

exports.createProduct = (req, res) => {
    
// res.status(200).json({file: req.files, body: req.body });
// lets finally add the product


const { 
    name, price, description, category, quantity, createdBy
} = req.body;

let productPictures = [];

if(req.files.length > 0) 
{
    productPictures = req.files.map(file => {
     return {img : file.filename }
 });

}

const product = new Product ({

    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    createdBy : req.user._id
      
});

    product.save(((error, product) => {

        if(error) return res.status(400).json({ error });

        if(product) {
            res.status(201).json({ product });
        }
    }));

};
