import { useState } from "react";
import TextInput from "../componenets/shared/textInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";

const CreateModalPlaylist = ({ closeModal }) => {
  const [playlistName, setPlaylistName] = useState("");
  const [playListThumbnail, setPlayListThumbnail] = useState("");


  const createPlaylist = async () => {
    const response = await makeAuthenticatedPOSTRequest("/playlist/create", {
      name: playlistName,
      thumbnail: playListThumbnail,
      songs: [],
    });
    if(response.data._id)
    {
      closeModal(); 
    }
  };

  return (
    <div
      className="absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-app-black w-1/3 rounded-md p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-white mb-5 font-semibold text-lg">
          Create Playlist
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <TextInput
            label="Name"
            labelClassName={"text-white"}
            placeHolder={"PlaylistName"}
            value={playlistName}
            setValue={setPlaylistName}
          />
          <TextInput
            label="thumbnail"
            labelClassName={"text-white"}
            placeHolder={"Thumbnail"}
            value={playListThumbnail}
            setValue={setPlayListThumbnail}
          />
          <div
            className="bg-white w-1/3 py-3 rounded flex justify-center items-center font-semibold mt-10 cursor-pointer hover:bg-gray-500"
            onClick={createPlaylist}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateModalPlaylist;
