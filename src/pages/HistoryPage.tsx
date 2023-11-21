import HistoryPageTile from "../components/HistoryPageTile";
import HistoryPageData from "../data/HistoryPageData";

import "./styles/HistoryPage.css";

export default function HistoryPage() {
  const tiles = HistoryPageData.map((item) => {
    return (
      <HistoryPageTile
        key={item.id}
        date={item.date}
        exercises={item.exercises}
      />
    );
  });

  return <div className="history-page">{tiles}</div>;
}
