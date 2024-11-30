import { Icon } from "@iconify/react";
import TextInput from "../componenets/shared/textInput";
import PasswordInput from "../componenets/shared/passwordInput";
import { Link } from "react-router-dom";

const SignUpComponent = () => {
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
        />
        <TextInput
          label="confirm Email address"
          placeHolder=" confirm Email adress"
          className="mb-6"
        />
        <PasswordInput
          label="Create Password"
          placeHolder="Enter a strong Password Here"
        />

        <TextInput
          label="What Should we call You"
          placeHolder="Enter a Profile Name"
          className="my-6"
        />

        <div className=" w-full flex items-center justify-center my-6">
          <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
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
