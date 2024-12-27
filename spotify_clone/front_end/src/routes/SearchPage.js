import { useState } from "react";
import LoggedInContainer from "../containers/LoggedinContainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../componenets/shared/SingleSongCard";

const SearchPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    //this function will call the song search API
    const response = await makeAuthenticatedGETRequest(
      "/song/get/songname/" + searchText
    );
    // console.log(response.data);
    setSongData(response.data);
  };

  return (
    <LoggedInContainer curActiveScreen="search">
      <div className=" w-full py-6">
        <div
          className={`flex w-1/3 p-3 text-sm rounded-full bg-gray-900 px-5 text-white space-x-3 items-center ${
            isInputFocused ? "border-white" : ""
          }`}
        >
          <Icon icon="ic:outline-search" className="text-lg" />
          <input
            className="w-full bg-gray-900 focus:outline-none"
            type="text"
            placeholder="What do you want to listen to?"
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchSong();
              }
            }}
          />
        </div>
        {
            songData.length>0?
          <div className="pt-10 space-y-2">
            <div className="text-gray-600">
              {" "}
              Results for <span className="font-semibold">{searchText}</span>
            </div>
            {songData.map((item) => {
              return (
                <SingleSongCard
                  info={item}
                  key={JSON.stringify(item)}
                  playSound={() => {}}
                />
              );
            })}
          </div>
          :<div className="text-white pt-10">
            No results Found
          </div>
        }
      </div>
    </LoggedInContainer>
  );
};

export default SearchPage;
