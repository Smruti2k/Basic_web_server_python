const express = require("express");
//here we are not calling only express because it will incure much more functionalities than we require
const router = express.Router();
const User = require("../models/user_model/user");
const bcrypt= require("bcrypt");
const {getToken} = require("../utils/helpers");

//this POST route will help us register an User
router.post("/register", async (req,res) =>{
    //this code is called when /register api is called as a post request
    //my req.body will be of the fromat {email , passsword,firstname ,lastname, username}
    const {email,password,firstName,lastName,username}= req.body;

    //step2: Does a user with this email already exist?

    const user= await User.findOne({email: email});
    if(user)
    {
        //if status code is not given then by default it takes 200 status code
        return res
            .status(403)
            .json({error:"A user with this email already exists"});
    }

    //this is a valid request
    //step3: create a new user in the DB
    //step 3.1 we do not store password in plaintext
        //we convert the plain text password in hash
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserData = {email,password: hashedPassword,firstName,lastName,username};
    const newUser = await User.create(newUserData);

    //step 4: we want to create a token for the user to return
    const token = await getToken (email,newUser);

    //step 5: return the result to user
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);

    
 
});

//this will implement the login function

router.post("/login" , async(req,res) =>{

    //step 1
    //get email and password from req.body

    //step2 if the email is okay or else wrong email

    //step3 check if password is correct if not invalid password

    //step 4 logiin if creds are correct and send a toke to user

    const {email, password} = req.body;


    const user = await User.findOne({email: email});
    if(!user)
    {
        return res.status(403).json({err: "Invalid Credentials"});

    }

    const isPasswordValue = await bcrypt.compare(password,user.password);
    if(!isPasswordValue)
    {
        res.status(403).json({err:"Inavild credentials"});
    }

    const token = await getToken (user.email , user);
    const userToReturn = {...user.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

module.exports = router;
