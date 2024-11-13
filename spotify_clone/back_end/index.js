//npm init this makes the package and states it as node project
//to sue express we sued npm i express to install express --project came to know know that we used express

//we now use express

const express =require("express");// this exports as a function 
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song")
const passport=require("passport");
const User= require("./models/user_model/user");
const app = express();
require("dotenv").config();
const port=3001;

app.use(express.json());
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

//setup passport jwt


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETKEY;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        //done (error,doesTheUserExist)
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

//API :GET type where / we return hello world
app.get("/",(req,res) => {
    //re contains all data for furthur request
    //res contains all data for the response

    res.send("Hello World");

});
app.use("/auth", authRoutes );
app.use("/song", songRoutes);

//now we want to tell express that server will run on a specific port

app.listen(port, ()=>
    {
        console.log("App is running on port  "+ port );
    });