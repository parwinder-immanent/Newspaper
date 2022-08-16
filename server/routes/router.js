'use strict';
const { json } = require("body-parser");
//const { application, response } = require("express");
const express = require("express");
const users = require("../models/userSchema");

const router = express.Router();
const jwt =require('jsonwebtoken');
//const middleware = require('./middleware');



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


    /////check user  exist/////////////
    try {

        const preuser = await users.findOne({ email: email })
        console.log(preuser)
        if (preuser) {
            res.status(422).json("User are already exist");
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


// router.get('/middleware', middleware, (req,res) => {
//     res.json(data.special);
//   })
/////////Login////////////////////////

router.post("/login",async(req,res)=>{
        const {email,password}=req.body
    const user = await users.findOne(req.body);
    console.log(user)
    if(user)
    {    console.log(user.email);
        const token_payload = {email: user.email, password: user.password,age:user.age};
        
        let token = jwt.sign(token_payload, "jwt_secret_password", { expiresIn: '10s' });
        let result=jwt.verify(token, "jwt_secret_password") ;
          let response = {message: 'Token Created, Authentication Successful!', token: token, ...token_payload };
        //   navigate("/components/home.js", { replace: true });
        return res.status(201).json(response);
    }
    else{
        return res.json({result:"No User found"});}
//      console.log(user)
//    const result =user.email;

//       if (user.length){
//         // console.log(user.length)
//           // create a token using user name and password vaild for 2 hours
//           const token_payload = {name: user[0].email, password: user[0].password};
//           console.log(token_payload)
//           let token = jwt.sign(token_payload, "jwt_secret_password", { expiresIn: '2h' });
//           let response = { message: 'Token Created, Authentication Successful!', token: token };
    
//           // return the information including token as JSON
//           return res.status(200).json(response);
    
//       } else {
//           return res.status("409").json("Authentication failed. admin not found.");
//       }
    })
   
    // if(req.body.password && req.body.email){
    // let postUser= await users.findOne(req.body) ;
    // console.log (postUser)

    // if (postUser){
        
    //     res.status(201).json(postUser);
        
    // }
    
    // else{
    //     res.send({result:"No User found"})
    // }
    
    // }
    // else
    // {
    //     res.send({result:"No data Found"});
    // }
//})





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
/////////search bar.........
router.get("/search/:key",async (req,res)=>{
    //console.log (req.params.key)
    let data=await users.find(
        {
            "$or":[
                {"name":{$in:req.params.key}}
            ]
        }
       
    )
    console.log(data)
    res.send(data)
})
////////////////////////////////
module.exports = router;