import Spotify_logo from "../assets/images/spotify_logo_white.svg";
import CloudinaryUpload from "../componenets/shared/CloudinaryUpload";
import IconText from "../componenets/shared/iconText";
import TextInput from "../componenets/shared/textInput";
import TextWithHover from "../componenets/shared/TextWithHover";
import { useState } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelper"
import { useNavigate } from "react-router-dom";

const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlayListUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFilename] = useState("");
  const navigate = useNavigate();

  const SubmitSong = async() => {
    const data = {name,thumbnail,track:playlistUrl}
    console.log(data);
    const response = await makeAuthenticatedPOSTRequest(
      "/song/create",
      data
    );
    if(response.err){
      alert("Could not create song")
      return;
    }
    alert("Sucess");
    navigate("/home");

  }

  return (
    <div className="h-full w-full flex ">
      {/* this is the left pannel of the spotify home page */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between py-8">
        <div>
          {/* this div is for logo */}
          <div className="logoDiv p-6">
            <img src={Spotify_logo} alt="spotify_Logo" width={125}></img>
          </div>
          <div className="pt-1">
            <div className="m-1 cursor-pointer">
              <IconText iconName={"jam:home-f"} displayText={"Home"} active />
            </div>
            <div className="m-1 cursor-pointer">
              <IconText iconName={"mynaui:search"} displayText={"Search"} />
            </div>
            <div className="m-1 cursor-pointer">
              <IconText
                iconName={"fluent:library-28-filled"}
                displayText={"Your Library"}
              />
            </div>
            <div className="m-1 cursor-pointer">
              <IconText
                iconName={"mynaui:music-solid"}
                displayText={"My Music"}
              />
            </div>
          </div>

          <div className="pt-7">
            <div className="m-1 cursor-pointer">
              <IconText
                iconName={"ph:plus-fill"}
                displayText={"Create Playlist"}
              />
            </div>
            <div className="m-1 cursor-pointer">
              <IconText
                iconName={"line-md:heart-filled"}
                displayText={"Liked Songs"}
              />
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="border border-gray-100 rounded-full flex justify-center items-center px-1 py-2 w-1/2  h-12 hover:border-white cursor-pointer">
            <div className="w-12">
              <IconText iconName={"bitcoin-icons:globe-outline"} />
            </div>
            <div className="mr-9">
              <button className="text-white text-sm font-semibold">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* this is right working part */}
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full bg-black h-1/10 bg-opacity-40 flex items-center justify-end">
          {/* this is the nav bar div */}

          <div className="w-1/2 h-full flex">
            <div className="flex w-2/3 justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              {/* this the command for giving it the broeder in spotify */}
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="flex w-1/3 justify-around h-full items-center">
              <TextWithHover displayText={"Upload Song"} />
              <div className="bg-white  w-1/4 p-3 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                SS
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow auto">
          <div className="text-white text-2xl font-semibold mb-5">
            Upload Your Music
          </div>
          <div className="w-2/3 flex space-x-3">
            <div className="w-1/2">
              <TextInput
                label="Name"
                labelClassName={"text-white"}
                placeHolder={"Name"}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="Thumbnail"
                labelClassName={"text-white"}
                placeHolder={"Thumbnail"}
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className="py-5" >
            {uploadedSongFileName ? (
              <div className="bg-white text-black rounded-full p-2 w-1/3 ">
                {uploadedSongFileName.substring(0,30)}...
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlayListUrl}
                setName={setUploadedSongFilename}
              />
            )}
          </div>
          <div className="bg-white w-40 flex items-center justify-center p-3 rounded-full cursor-pointer font-semibold" onClick={SubmitSong}>
            Submit Song
            </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
