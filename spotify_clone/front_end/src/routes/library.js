import LoggedInContainer from "../containers/LoggedinContainer";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";

const Library = () => {
  const [myPlaylists, setMyPlaylists] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/playlist/get/me");
      setMyPlaylists(response.data);
    };
    getData();
  }, []);

  return (
    <LoggedInContainer curActiveScreen={"library"}>
      <div className="text-white text-xl pt-8 font font-semibold">My Playlists</div>
      <div className="py-5 grid gap-4 grid-cols-5">
        {myPlaylists.map((item) => {
          return (
            <Card
              key={JSON.stringify(item)}
              title={item.name}
              description={""}
              imgUrl={item.thumbnail}
            />
          );
        })}
      </div>
    </LoggedInContainer>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-full p-4 rounded-lg">
      <div className="pt-2 pb-4">
        <img className="w-full rounded-md" src={imgUrl} alt="Espresso Alb" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Library;
