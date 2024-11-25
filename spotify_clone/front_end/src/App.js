
import "./output.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogInComponent from "./routes/login";
import SignUpComponent from "./routes/signUp";

function App() {
  return (
    <div className="w-screen h-screen font-poppins"> 
    {/* this is the command to take up the full screen for the app div such that the routes things /login could take up the whole screen as well */}
      <BrowserRouter>
          <Routes>
            {/* adding routes componets here indicates the package that we are starting to define our routes inside it */}
            <Route path = "/" element = {<HelloComponent/>}> </Route>
            <Route path = "/login" element = {<LogInComponent/>}></Route>
            <Route path="/signup" element ={<SignUpComponent/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div> This is hello from component</div>;
}


export default App;
