// Import necessary modules and components from React and other files
import MindsetData from "../data/MindsetData";
import MindsetPageTile from "../components/page-tiles/MindsetPageTile";

// Import styling for the component
import "./styles/MindsetPage.css";

// Define the MindsetPage component
export default function MindsetPage() {
  // Map over MindsetData to create MindsetPageTile components
  const vid_tiles = MindsetData.map((item) => {
    return (
      <>
        <MindsetPageTile
          tileTitle={item.tileTitle}
          link={item.link}
          isLast={item.id === MindsetData.length}
        />
      </>
    );
  });

  // Render the MindsetPage component
  return (
    <div className="history-page">
      <div className="history-page-tile-feed">
        {/* Display Quote of the Day */}
        <div className="history-page-tile">
          <h3 className="history-page-tile-date">Quote of the Day</h3>
          <p style={{ color: "#929292", textAlign: "left" }}>
            "My father used to say that it's never too late to do anything you
            wanted to do. And he said, 'You never know what you can accomplish
            until you try.'"
          </p>
          <p style={{ marginBottom: 0, textAlign: "right", fontWeight: 900 }}>
            - Michael Jordan
          </p>
          <p style={{ marginTop: 0, color: "#929292", textAlign: "right" }}>
            Basketball Player
          </p>
          <a
            className="btn"
            href="https://parade.com/973277/jessicasager/inspirational-quotes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More
          </a>
        </div>

        {/* Display MindsetPageTile components */}
        {vid_tiles}
      </div>
    </div>
  );
}
