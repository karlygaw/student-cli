const mongoose = require('mongoose');

//Customer  Schema
const studentSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String},
    phone: { type: String},
    email: { type: String},
    age: { type: Number},
    major: { type: String },
    courseNumber: { type: Number }
});

// export
module.exports = mongoose.model('Student', studentSchema);