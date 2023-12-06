// Define custom types for paragraphType and LearnPageTileProps
type paragraphType = {
  id: number;
  text: string;
};

type LearnPageTileProps = {
  tileTitle: string;
  link: string;
  paragraph: paragraphType[];
  isLast: boolean;
};

// Define the LearnPageTile component
export default function LearnPageTile(props: LearnPageTileProps) {
  // Map over the paragraph prop to create paragraph elements
  const paragraphs = props.paragraph.map((item) => {
    return (
      <p style={{ color: "#929292", textAlign: "left" }} key={item.id}>
        {item.text}
      </p>
    );
  });

  // Render the LearnPageTile component
  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      {/* Display the title of the LearnPageTile */}
      <h3 className="history-page-tile-date">{props.tileTitle}</h3>

      {/* Display paragraphs */}
      {paragraphs}

      {/* Display "Read More" link */}
      <a
        className="btn"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
    </div>
  );
}
