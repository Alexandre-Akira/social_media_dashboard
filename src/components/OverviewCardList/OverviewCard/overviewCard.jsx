import "./overviewCard.css";
import { ReactComponent as facebook } from "../../../images/icon-facebook.svg";
import { ReactComponent as instagram } from "../../../images/icon-instagram.svg";
import { ReactComponent as twitter } from "../../../images/icon-twitter.svg";
import { ReactComponent as youtube } from "../../../images/icon-youtube.svg";
import { ReactComponent as DownArrow } from "../../../images/icon-down.svg";
import { ReactComponent as UpArrow } from "../../../images/icon-up.svg";

const mediaIconsList = [facebook, instagram, twitter, youtube];
function OverviewCard({ card }) {
  let MediaIconComponent;
  switch (card.mediaIcon) {
    case "facebook":
      MediaIconComponent = mediaIconsList[0];
      break;
    case "instagram":
      MediaIconComponent = mediaIconsList[1];
      break;
    case "twitter":
      MediaIconComponent = mediaIconsList[2];
      break;
    case "youtube":
      MediaIconComponent = mediaIconsList[3];
      break;
  }
  return (
    <div className="overview-card">
      <div className={"overview-card__top-background overview-card__top-background--" + card.mediaIcon}></div>
      <div className="overview-card__content">
        <div className="overview-card__title">
          <MediaIconComponent />
          <span>{card.username}</span>
        </div>
        <div className="overview-card__information">
          <span className="overview-card__value">
            {card.value >= 10000 ? card.value.toString().substr(0, 2) + "K" : card.value}
          </span>
          <span className="overview-card__description">{card.valueType.toUpperCase()}</span>
        </div>
        <div
          className={
            card.todayVariation >= 0 ? "overview-card__today " : "overview-card__today overview-card__today--failure"
          }
        >
          {card.todayVariation >= 0 ? <UpArrow /> : <DownArrow />}
          <span>{card.todayVariation} Today</span>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
