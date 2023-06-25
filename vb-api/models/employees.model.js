const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({

    name: String,
    designation: String,
    email: String,
    mobile: Number,
    dob: Date,
    active: Boolean

});

const employeeModel = mongoose.model('Employees', employeeSchema);

module.exports = employeeModel;