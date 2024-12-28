import TextInput from "../componenets/shared/textInput";
const CreateModalPlaylist = ({ closeModal }) => {
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
            //value={name}
            //setValue={setName}
          />
          <TextInput
            label="thumbnail"
            labelClassName={"text-white"}
            placeHolder={"Thumbnail"}
            //value={name}
            //setValue={setName}
          />
          <div className="bg-white w-1/3 py-3 rounded flex justify-center items-center font-semibold mt-10 cursor-pointer hover:bg-gray-500">
            Create
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateModalPlaylist;
