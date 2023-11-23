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

export default function LearnPageTile(props: LearnPageTileProps) {
  const paragraphs = props.paragraph.map((item) => {
    return (
      <p style={{ color: "#929292", textAlign: "left" }} key={item.id}>
        {item.text}
      </p>
    );
  });

  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      <h3 className="history-page-tile-date">{props.tileTitle}</h3>
      {paragraphs}
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
