const express = require('express');
const {createProduct, getProduct} = require('../Controls/productControls')
const router = express.Router();

router.get('/', getProduct)
router.post('/', createProduct)

module.exports = router