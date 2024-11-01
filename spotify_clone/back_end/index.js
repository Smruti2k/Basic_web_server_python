//npm init this makes the package and states it as node project
//to sue express we sued npm i express to install express --project came to know know that we used express

//we now use express

const express =require("express");// this exports as a function 
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port=3001;


//the above code helps to import all the expres code to local

//now this code will help to connect our node app to mongodb

//VVIMP the passwrod for mongoDB should not contain any special Charecter or else the mongoose can not bypass that

mongoose.connect("mongodb+srv://smrutimallick979:" + process.env.MONGO_PASSWORD +"@cluster0.1jtmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then((x)=>{
    console.log("connected to Mongo");
    
})
.catch((err) =>
{
    console.log("Error while connecting to mongo",err.message);
    
});

//API :GET type where / we return hello world
app.get("/",(req,res) => {
    //re contains all data for furthur request
    //res contains all data for the response

    res.send("Hello World");

});

//now we want to tell express that server will run on a specific port

app.listen(port, ()=>
    {
        console.log("App is running on port  "+ port );
    });