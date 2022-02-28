import "./overviewCardList.css";
import OverviewCard from "./OverviewCard/overviewCard";

function OverviewCardList({ cards }) {
  let overviewCardsList = [];
  cards.forEach((card, index) => {
    overviewCardsList.push(<OverviewCard card={card} key={index} />);
  });

  return <div className="overview-card-list">{overviewCardsList}</div>;
}

export default OverviewCardList;
