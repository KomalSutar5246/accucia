const express = require ('express');
const { create } = require('../models/user');

const { default: slugify } = require('slugify');
const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();

router.post('/category/create', requireSignin, adminMiddleware, addCategory);   
router.get('/category/getcategory', getCategories);   

module.exports = router;