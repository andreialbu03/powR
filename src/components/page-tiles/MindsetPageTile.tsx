// Define custom type for MindsetTileProps
type MindsetTileProps = {
  tileTitle: string;
  link: string;
  isLast: boolean;
};

// Define the MindsetPageTile component
export default function MindsetPageTile(props: MindsetTileProps) {
  // Render the MindsetPageTile component
  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      {/* Display the title of the mindset tile */}
      <h3 className="history-page-tile-date">{props.tileTitle}</h3>

      {/* Display YouTube video player using the provided link */}
      <iframe
        className="yt-vid"
        src={props.link}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
