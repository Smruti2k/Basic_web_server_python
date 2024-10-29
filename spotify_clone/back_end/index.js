//npm init this makes the package and states it as node project
//to sue express we sued npm i express to install express --project came to know know that we used express

//we now use express

const express =require("express")// this exports as a function 
const app = express();
const port=3001;

//the above code helps to import all the expres code to local

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



