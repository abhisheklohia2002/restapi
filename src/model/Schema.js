const mongoose = require("mongoose");
const validator = require("validator");


//To Make The Schema File 
const mongoose_schema = new mongoose.Schema({
Name : {
    type : String,
    required : true,
    minlength : 3
},
Rollno : {
    type : Number,
    required : true,
    minlength:1
},
Email: {
    type : String,
    required: true,
    unique  : [true,"Email is Already Present"],
    validate(value){
        if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
        }
    }
},

Phone : {
    type : Number,
    minlength: 10,
    maxlength:10,
    required:true,
    unique: true,
},
address : {
    type : String,
    required:true

}
}

)




//we have create model mean to make Collections 

const mongoose_model = new mongoose.model("info_students",mongoose_schema);


module.exports = mongoose_model;

