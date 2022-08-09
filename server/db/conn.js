const mongoose =require("mongoose");

const DB ="mongodb+srv://crud:crud@cluster0.zoi8g9r.mongodb.net/crudapp?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=> console.log("connection start")).catch((error)=>console.log(error.message));