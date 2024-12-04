import { Icon } from "@iconify/react";
import TextInput from "../componenets/shared/textInput";
import PasswordInput from "../componenets/shared/passwordInput";
import { Link ,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
// import { useEffect } from "react";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";

//this is the signup component used for styling the signup page

const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  // console.log(email);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const nagivate = useNavigate ();
  
  //below code is used for debugging and not required actually its used for checking if the values are reflected in console or not
  // useEffect(() => {
  //   console.log("Email updated:", email);
  // }, [email]);

  //this is the function thats called upon when you hit signUp in the signup page it collects the data required in the format needed by the  API in backend

 const signUp = async () => {
    if (email !== confirmEmail) {
      alert("Email and its Confirmation Must match !! Please Check Again");
      return;
    } 

    const data = { email, password, username, firstName, lastName };
    console.log(data);
    const response = await makeUnauthenticatedPOSTRequest(
      "/auth/register",
      data
    );
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      nagivate ("/home");
      

    } else {
      alert("failure");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center overflow-auto">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="160" />
      </div>
      <div className="InputRegion w-1/3 py-5 flex items-center justify-center flex-col">
        <div className="font-bold mb-12 text-4xl">
          Sign Up to start listening
        </div>
        {/* will make all the login part over here */}
        <TextInput
          label="Email address"
          placeHolder="Enter your Email"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="confirm Email address"
          placeHolder=" confirm Email adress"
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="UserName"
          placeHolder=" Please Enter User Name"
          className="mb-6"
          value={username}
          setValue={setUserName}
        />
        <PasswordInput
          label="Create Password"
          placeHolder="Enter a strong Password Here"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeHolder="Please Enter First Name"
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeHolder="Please Enter Last Name"
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>

        <div className=" w-full flex items-center justify-center my-6">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            Sign up
          </button>
        </div>

        <div className="w-full border border-solid border-gray-300"></div>
        <div className="my-6 font-semibold text-lg">
          Already Have an account
        </div>
        <div className="border border-gray-500  text-gray-500 font-bold w-full rounded-full flex items-center justify-center py-4">
          <Link to="/login">LOG IN</Link>
        </div>
      </div>

      {/* flex is used for positioning here */}
    </div>
  );
};

export default SignUpComponent;
