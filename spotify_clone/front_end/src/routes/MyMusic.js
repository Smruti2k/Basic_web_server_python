import SingleSongCard from "../componenets/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useState, useEffect } from "react";
import LoggedInContainer from "../containers/LoggedinContainer";

const MyMusic = () => {

  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      // console.log("log", response.data);
      setSongData(response.data);
      // console.log("songData ", songData);
    };

    getData();
  }, []);

  return (
    <LoggedInContainer curActiveScreen={"myMusic"}>
      <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">My Songs</div>
      <div className="space-y-3">
        {songData.map((item) => {
          return (
            <SingleSongCard info={item} playSound={()=>{}} />
          );
        })}
      </div>
    </LoggedInContainer>
  );
};



export default MyMusic;
