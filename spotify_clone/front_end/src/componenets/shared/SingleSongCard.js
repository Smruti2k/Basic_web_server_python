import {useContext} from "react";
// import songContext from "../../contexts/songContext";

const SingleSongCard = ({info , playSound}) => {
  // console.log("Song Info:", info); // Debugging
  return (
    <div className=" flex hover:bg-gray-300  hover:bg-opacity-20 p-2 rounded-sm" onClick={()=>{playSound(info?.track)}}>
      <div
        className=" w-12 h-12 bg-center bg-cover"
        style={{
          backgroundImage: `url("${info?.thumbnail}")`,
        }}
      ></div>
      <div className="flex w-full">
        <div className="text-white flex flex-col justify-center pl-4 w-5/6">
          <div className="cursor-pointer hover:underline">{info?.name}</div>
          <div className="text-xs text-gray-400 cursor-pointer hover:underline">{info?.artist?.username}</div>
        </div>
        <div className="w-1/6 flex justify-center items-center text-gray-400 text-sm">
          <div>3:44</div>
          <div className="text-gray-400 text-lg flex justify-center items-center pl-3">...</div>
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
