import Spotify_logo from "../assets/images/spotify_logo_white.svg";
import  IconText from "../componenets/shared/iconText";

const home = () => {
    return(
    <div className="h-full w-full flex ">
        {/* this is the left pannel of the spotify home page */}
        <div className="h-full w-1/5 bg-black">
            {/* this div is for logo */}
            <div className="logoDiv p-6">
                <img src= {Spotify_logo} alt="spotify_Logo" width ={125}></img>

            </div>
            <div>
                <IconText iconName={"jam:home-f"} displayText={"Home"}/>
            </div>
            <div>
                <IconText iconName={"jam:home-f"} displayText={"Home"}/>
            </div>
            <div>
                <IconText iconName={"jam:home-f"} displayText={"Home"}/>
            </div>

        </div>
        {/* this is right working part */}
        <div className="h-full">

        </div>

    </div> )
   
};

export default home;