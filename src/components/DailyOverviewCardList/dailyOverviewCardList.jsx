import "./dailyOverviewCardList.css";
import DailyOverviewCard from "./DailyOverviewCard/dailyOverviewCard";

function DailyOverviewCardList({ dailyCards }) {
  let dailyOverviewCardsList = [];
  dailyCards.forEach((card, index) => {
    dailyOverviewCardsList.push(<DailyOverviewCard dailyCard={card} key={index} />);
  });
  return (
    <div className="daily-overview-card-list">
      <h1 className="daily-overview-card-list__title">Overview - Today</h1>
      <div className="daily-overview-card-list__cards">{dailyOverviewCardsList}</div>
    </div>
  );
}

export default DailyOverviewCardList;
