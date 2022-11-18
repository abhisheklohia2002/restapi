const mongoose = require("mongoose");
//write the Connection code 


mongoose.connect("mongodb://localhost:27017/info_student",{
//to solve the deplication warning


useNewUrlParser:true,
useUnifiedTopology:true,
}).then(()=>{
    console.log("Database is Connected ")
}).catch((err)=>{
    console.log("Not Connected Database ")
})



