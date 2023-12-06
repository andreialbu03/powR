// Import necessary components from files
import HistoryPageTile from "../components/HistoryPageTile";
import HistoryPageData from "../data/HistoryPageData";

// Import styling for the page
import "./styles/HistoryPage.css";

// Define the HistoryPage component
export default function HistoryPage() {
  // Map over HistoryPageData to create HistoryPageTile components
  const tiles = HistoryPageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        {/* Display HistoryPageTile component with data from HistoryPageData */}
        <HistoryPageTile
          date={item.date}
          duration={item.duration}
          exercises={item.exercises}
          isLast={item.id === HistoryPageData.length}
        />
      </div>
    );
  });

  // Render the HistoryPage component
  return <div className="history-page">{tiles}</div>;
}
