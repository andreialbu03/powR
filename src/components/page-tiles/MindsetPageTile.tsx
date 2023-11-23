type MindsetTileProps = {
  tileTitle: string;
  link: string;
  isLast: boolean;
};

export default function MindsetPageTile(props: MindsetTileProps) {
  return (
    <div className={`history-page-tile ${props.isLast ? "last-tile" : ""}`}>
      <h3 className="history-page-tile-date">{props.tileTitle}</h3>
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
