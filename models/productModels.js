const mongoose = require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({
    productname:{
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
},
{timestamps: true}
);

module.exports = mongoose.model('Prodect', productSchema);