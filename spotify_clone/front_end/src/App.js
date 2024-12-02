import "./output.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogInComponent from "./routes/login";
import SignUpComponent from "./routes/signUp";
import HomeComponent from "./routes/home";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookies] = useCookies(["token"]);
  console.log(cookie.token);
  return (
    <div className="w-screen h-screen font-poppins">
      {/* this is the command to take up the full screen for the app div such that the routes things /login could take up the whole screen as well */}
      <BrowserRouter>
      {/* these are the routes which works only if i am loggin in */}
        {cookie.token ? (
          <Routes>
            {/* adding routes componets here indicates the package that we are starting to define our routes inside it */}
            <Route path="/" element={<HelloComponent />}>
              {" "}
            </Route>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="*" element={<Navigate to="/home" />}></Route>
          </Routes>
        ) : (
          // these are the routes which works if you are logged out so that anyone who knows the routs could not access the webpages
          <Routes>
            <Route path="/login" element={<LogInComponent />}></Route>
            <Route path="/signup" element={<SignUpComponent />}></Route>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="*" element={<Navigate to="/login" />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div> This is hello from component</div>;
};

export default App;
