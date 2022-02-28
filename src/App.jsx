import "./App.css";
import Header from "./components/Header/header";
import OverviewCardList from "./components/OverviewCardList/overviewCardList";

function App() {
  let cards = [
    { mediaIcon: "facebook", username: "@nathanf", value: 1987, valueType: "followers", todayVariation: 12 },
    { mediaIcon: "twitter", username: "@nathanf", value: 1044, valueType: "followers", todayVariation: 99 },
    { mediaIcon: "instagram", username: "@realnathanf", value: 11000, valueType: "followers", todayVariation: 1099 },
    { mediaIcon: "youtube", username: "Nathan F", value: 8239, valueType: "subscribers", todayVariation: -144 },
  ];
  let total = 23004;
  return (
    <div className="app">
      <div className="app__top-background">
        <div className="app__template">
          <Header title="Social Media Dashboard" subtitle={"Total Followers: " + total} />
        </div>
      </div>
      <div className="app__background">
        <OverviewCardList cards={cards} />
      </div>
    </div>
  );
}

export default App;
