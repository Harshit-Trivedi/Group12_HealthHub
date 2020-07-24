const mongoose = require('mongoose');

const orderMedicineSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        default: "orderMedicine"
    },
    pharmacyName: {
        type: String,
        required: true,
    },
    apartmentNo: {
        type: Number,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    prescriptionFile: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const orderMedicine = mongoose.model('orderMedicine', orderMedicineSchema);

module.exports = orderMedicine;