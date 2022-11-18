

const express= require("express");
const port = 3000 || process.env.PORT;
require("./Database/connection")
const info_student = require("./model/Schema");

const app = express();
app.use(express.json());




//post Request
app.post("/user", async (req,res)=>{
    
    try {
        console.log(req.body)
        const user = new info_student(req.body)
        const save = await user.save();
    
        res.send(req.body);
        
    } catch (error) {
        console.log("Error In post Req")
    }

    
})


//get all request
app.get("/users", async (req,res)=>{
    try {
        
        
       const find = await info_student.find();
       
       res.send(find);

console.log(find);




    } catch (error) {
        console.log("Error in get Req")
    }
})

//get individual Request 

app.get("/users/:id", async (req,res)=>{
    try {
        const id = req.params.id;

        
       const find = await info_student.findById(id);
       console.log(find,"id");
       res.send(find);






    } catch (error) {
        console.log("Error in get Req")
    }
})




//Patch or Put request
app.patch("/users/:id", async (req,res)=>{
    try {
        const id = req.params.id;

        
       const find = await info_student.findByIdAndUpdate(id,req.body);

       res.send(find);

console.log(find);




    } catch (error) {
        console.log("Error in patch Req")
    }
})




//delete Request
app.delete("/users/:id", async (req,res)=>{
    try {
        const id = req.params.id;

        
       const find = await info_student.findByIdAndDelete(id);
       
       res.send(find);

console.log(find);




    } catch (error) {
        console.log("Error in delete Req")
    }
})



app.listen(port,()=>{
console.log(`${port} connected...`)
})


