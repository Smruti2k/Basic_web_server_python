
import LoggedInContainer from "../containers/LoggedinContainer";

const RecentsCardsData = [
  {
    title: "Espresso",
    description: "Sabrina Carpenter",
    imgUrl: "/924892-espresso_162600.jpg",
  },
  {
    title: "GLORY",
    description: "Honey Singh",
    imgUrl:
      "https://imgs.search.brave.com/RdCSOm94hLuWmBRmeri5F-K3HTlR2udCZUpTN0dxP_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLU8zM2gw/Q2FneGpDalVMOGkt/TVNUNjF3LXQ1MDB4/NTAwLmpwZw",
  },
  {
    title: "Jo Tum Mere Ho",
    description: "Anuv Jain",
    imgUrl:
      "https://imgs.search.brave.com/nQM9UF47E32ektyIrfS3xh4pYVTE2JruUV9uF046JaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLm14/bWNkbi5uZXQvaW1h/Z2VzLXN0b3JhZ2Uv/YWxidW1zNS8yLzIv/OS83LzAvMy83ODMw/NzkyMl81MDBfNTAw/LmpwZw",
  },
  {
    title: "Making Memories",
    description: "Karan Aujla",
    imgUrl:
      "https://imgs.search.brave.com/laI9mSn1O1Vy6dR1UmqhinQuZymJ_ZleSvkuLMGS_lo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS81/MzgvTWFraW5nLU1l/bW9yaWVzLUVuZ2xp/c2gtMjAyMy0yMDIz/MDgxODA3NTAxNS01/MDB4NTAwLmpwZw",
  },
  {
    title: "Apt.",
    description: "Rosie and Bruno Mars",
    imgUrl:
      "https://imgs.search.brave.com/46d0K0MGYkjPRbS-sI0g-bIp0WPv8hDUek9nPsOAIo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2ZmaWNpYWxjaGFy/dHMuY29tL3NpdGVz/L2RlZmF1bHQvZmls/ZXMvc3R5bGVzL2Nv/bnRlbnRfY29sdW1u/X21vYmlsZS9wdWJs/aWMvMjAyNC0xMC9y/b3NlJTIwYnJ1bm8l/MjBtYXJzJTIwYXB0/JTIwYmxhY2twaW5r/LmpwZWc_aXRvaz1f/aGNBdy0wTA",
  },
];

const PopularRadiosCardsData = [
  {
    title: "Arijit",
    description: "Arijit Singh Radio",
    imgUrl: "/arijit.png",
  },
  {
    title: "Diljit",
    description: "Diljit Dosanjh Radio",
    imgUrl: "/diljit.png",
  },
  {
    title: "KK",
    description: "KK's Radio",
    imgUrl: "/kk.png",
  },
  {
    title: "Shreya",
    description: "Shreya Ghosal Radio",
    imgUrl: "shreya ghosal.png",
  },
  {
    title: "A R Rehman",
    description: "AR Rehman's Radio",
    imgUrl: "Ar rehman.png",
  },
];

const ChartsCardsData = [
  {
    title: "Top Songs Global",
    description:
      "Your weekly update of the most played tracks right now - Global.",
    imgUrl: "/top global.png",
  },
  {
    title: "Top Songs USA",
    description: "Your weekly update of the most played tracks right now - USA",
    imgUrl: "/top songs usa.png",
  },
  {
    title: "Top 50 Global",
    description:
      "Your daily update of the most played tracks right now - Global",
    imgUrl: "/top 50.png",
  },
  {
    title: "Top 50 USA",
    description: "Your daily update of the most played tracks right now - USA",
    imgUrl: "/top 50 usa.png",
  },
  {
    title: "Viral 50 -Global ",
    description:
      "Your daily update of the most viral tracks right now - Global",
    imgUrl: "viral 50 global.png",
  },
];

const Home = () => {
  return(

    <LoggedInContainer>
    <PlayListView titleText={"Recents"} cardsData={RecentsCardsData} />
    <PlayListView
      titleText={"Popular Radios"}
      cardsData={PopularRadiosCardsData}
      />
    <PlayListView titleText={"Featured Charts"} cardsData={ChartsCardsData} />
  </LoggedInContainer>
    )
};

const PlayListView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-4">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      {/* this below div gives all the cards horizontally */}
      <div className="w-full flex justify-between space-x-4">
        {
          // now this is the place where we customize the cards data and variablize it we are doing it throug a function
          //cardsData is an array
          cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="pt-2 pb-4">
        <img className="w-full rounded-md" src={imgUrl} alt="Espresso Alb" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Home;
