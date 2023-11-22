import HistoryPageTile from "../components/HistoryPageTile";
import HistoryPageData from "../data/HistoryPageData";

import "./styles/HistoryPage.css";

export default function HistoryPage() {
  const tiles = HistoryPageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        <HistoryPageTile
          date={item.date}
          exercises={item.exercises}
          isLast={item.id === HistoryPageData.length}
        />
      </div>
    );
  });

  return <div className="history-page">{tiles}</div>;
}
