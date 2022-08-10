const { json } = require("body-parser");
const { application, response } = require("express");
const express = require("express");
const users = require("../models/userSchema");

const router = express.Router();
//const user = require("../models/userSchema");



// router.get("/",(req,res)=>{
//     console.log("connect");
// });
/////register users



//////register user
router.post("/register", async (req, res) => {
    console.log(req.body);
    const { name, age, email, password } = req.body;
    if (!name || !email || !age || !password) {

        res.status(422).json("plz fill the data0");
    }
    try {

        const preuser = await users.findOne({ email: email })
        console.log(preuser)
        if (preuser) {
            res.status(422).json("this is user is are present");
        }
        else {
            const adduser = new users({
                name, email, age, password
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    }
    catch (error) {
        res.status(422).json(error);
    }
})
/////////Login
router.post("/login",async(req,res)=>{

    if(req.body.password && req.body.email){
    let postUser= await users.findOne(req.body) ;
    console.log (postUser)

    if (postUser){
        
        res.status(201).json(postUser);
        
    }
    
    else{
        res.send({result:"No User found"})
    }
    
    }
    else
    {
        res.send({result:"No data Found"});
    }
})





//////////////get userdata
router.get("/getdata", async (req, res) => {
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);

    } catch (error) {
        res.status(422).json(error);
    };
})
//////////////get indiviual userdata
router.get("/getindividualuser/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userindividual = await users.findById({ _id: id });
        res.status(201).json(userindividual);
        console.log(userindividual);

    } catch (error) {
        res.status(422).json(error);
    };
})
//////update user
router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
    } catch (error) {
        res.status(422).json(error);
    }
})
////delete user
router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteuser = await users.findByIdAndDelete({ _id: id });
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports = router;