const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create model

const PresentSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Name field is requried']
    },
    present:{
        type:String,
        required: [true, 'Present is required']
    },
    description: String,
    url: String
});

const Present = mongoose.model('present', PresentSchema);

module.exports = Present;