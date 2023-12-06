// Import necessary components from files
import LearnPageData from "../data/LearnPageData";
import LearnPageTile from "../components/page-tiles/LearnPageTile";

// Define the LearnPage component
export default function LearnPage() {
  // Map over LearnPageData to create LearnPageTile components
  const tiles = LearnPageData.map((item) => {
    return (
      <>
        <LearnPageTile
          tileTitle={item.title}
          link={item.link}
          paragraph={item.paragraph}
          isLast={item.id === LearnPageData.length}
        />
      </>
    );
  });

  // Render the LearnPage component
  return (
    <div className="history-page">
      {/* Display LearnPageTile components */}
      <div className="history-page-tile-feed">{tiles}</div>
    </div>
  );
}
