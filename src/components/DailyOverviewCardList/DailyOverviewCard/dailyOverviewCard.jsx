import "./dailyOverviewCard.css";
import { ReactComponent as facebook } from "../../../images/icon-facebook.svg";
import { ReactComponent as instagram } from "../../../images/icon-instagram.svg";
import { ReactComponent as twitter } from "../../../images/icon-twitter.svg";
import { ReactComponent as youtube } from "../../../images/icon-youtube.svg";
import { ReactComponent as DownArrow } from "../../../images/icon-down.svg";
import { ReactComponent as UpArrow } from "../../../images/icon-up.svg";

const mediaIconsList = [facebook, instagram, twitter, youtube];
function DailyOverviewCard({ dailyCard }) {
  let MediaIconComponent;
  switch (dailyCard.mediaIcon) {
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
    <div className="daily-overview-card">
      <h1 className="daily-overview-card__title">{dailyCard.title}</h1>
      <MediaIconComponent className="daily-overview-card__mediaIcon" />
      <span className="daily-overview-card__value">
        {dailyCard.value >= 10000 ? dailyCard.value.toString().substr(0, 2) + "K" : dailyCard.value}
      </span>

      <div
        className={
          dailyCard.variation >= 0
            ? "daily-overview-card__variation "
            : "daily-overview-card__variation daily-overview-card__variation--failure"
        }
      >
        {dailyCard.variation >= 0 ? <UpArrow /> : <DownArrow />}
        <span>{dailyCard.variation}%</span>
      </div>
    </div>
  );
}

export default DailyOverviewCard;
