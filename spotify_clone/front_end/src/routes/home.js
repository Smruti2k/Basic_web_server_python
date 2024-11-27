import Spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../componenets/shared/iconText";

const home = () => {
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
      <div className="h-full"></div>
    </div>
  );
};

export default home;
