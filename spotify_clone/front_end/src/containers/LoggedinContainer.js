import Spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../componenets/shared/iconText";
import TextWithHover from "../componenets/shared/TextWithHover";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Howl, Howler } from "howler";
import { Icon } from "@iconify/react";






const LoggedInContainer = ({children}) => {
  const Navigate = useNavigate();
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  const playSound = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({ src: [songSrc], html5: true });
    setSoundPlayed(sound);
    sound.play();
    // console.log(sound);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const tooglePlayPause = () => {
    if (isPaused) {
      playSound(
        "https://res.cloudinary.com/dwcccsf2j/video/upload/v1734201011/ykv4scrioiqnvasd60x8.mp3"
      );
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <div className="h-full w-full bg-app-black">
      <div className="h-9/10 w-full flex">
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
          <div className="Content p-8 pt-0 ">
            {children}
          </div>
        </div>
      </div>
      {/* this div is the current playing song */}
      <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
        <div className="w-1/4 flex items-center">
          <img
            src="https://pagalnew.com/coverimages/Bhool-Bhulaiyaa-Pritam-500-500.jpg"
            alt=" Thumbnail of Bhool Bhuleiya"
            className="h-14 w-14 rounded "
          ></img>
          <div className="pl-4">
            <div className="text-sm hover:underline cursor-pointer">
              Bhool Bhuleiya
            </div>
            <div className="text-xs text-gray-500 hover:underline cursor-pointer">
              K.K
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center h-full flex-col items-center">
          <div className="flex w-1/3 justify-between items-center">
            {/* control */}
            <Icon
              icon="iconamoon:playlist-shuffle-light"
              fontSize={30}
              className="cursor-pointer text-gray-500  hover:text-white"
            />
            <Icon
              icon="mage:previous-fill"
              fontSize={30}
              className="cursor-pointer text-gray-500 hover:text-white"
            />
            <Icon
              icon={isPaused ? "heroicons-solid:play" : "heroicons-solid:pause"}
              fontSize={50}
              className="cursor-pointer text-gray-500 hover:text-white"
              onClick={tooglePlayPause}
            />
            <Icon
              icon="mage:next-fill"
              fontSize={30}
              className="cursor-pointer text-gray-500 hover:text-white"
            />
            <Icon
              icon="mi:repeat"
              fontSize={30}
              className="cursor-pointer text-gray-500 hover:text-white"
            />
          </div>
          <div>{/* //play bar */}</div>
        </div>
        <div className="w-1/4 flex justify-end">Hello</div>
      </div>
    </div>
  );
};

// this is a component but in home only as there is no need for it to be shared
//now this component means this playlist is called multiple times thus we are converting it to a call prop calling titleText and cardsData


export default LoggedInContainer;
