import "./App.css";
import Header from "./components/Header/header";
import OverviewCardList from "./components/OverviewCardList/overviewCardList";
import DailyOverviewCardList from "./components/DailyOverviewCardList/dailyOverviewCardList";

function App() {
  let cards = [
    { mediaIcon: "facebook", username: "@nathanf", value: 1987, valueType: "followers", todayVariation: 12 },
    { mediaIcon: "twitter", username: "@nathanf", value: 1044, valueType: "followers", todayVariation: 99 },
    { mediaIcon: "instagram", username: "@realnathanf", value: 11000, valueType: "followers", todayVariation: 1099 },
    { mediaIcon: "youtube", username: "Nathan F", value: 8239, valueType: "subscribers", todayVariation: -144 },
  ];

  let dailyCards = [
    { mediaIcon: "facebook", title: "Page Views", value: 87, variation: 3 },
    { mediaIcon: "facebook", title: "Likes", value: 52, variation: -2 },
    { mediaIcon: "instagram", title: "Likes", value: 5462, variation: 2257 },
    { mediaIcon: "instagram", title: "Profile Views", value: 52000, variation: 1375 },
    { mediaIcon: "twitter", title: "Retweets", value: 117, variation: 303 },
    { mediaIcon: "twitter", title: "Likes", value: 507, variation: 553 },
    { mediaIcon: "youtube", title: "Likes", value: 107, variation: -19 },
    { mediaIcon: "youtube", title: "Total Views", value: 1407, variation: -144 },
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
        <DailyOverviewCardList dailyCards={dailyCards} />
      </div>
    </div>
  );
}

export default App;
