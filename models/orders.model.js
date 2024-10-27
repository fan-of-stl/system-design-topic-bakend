const { default: mongoose } = require("mongoose")

const orderSchema = mongoose.Schema({
    customer: String,
    product: String,
    status: ['Ordered', 'Preparing', 'Deliver', 'On the way'],
    timestamp: Date
})


module.exports = mongoose.model('Orders', orderSchema)