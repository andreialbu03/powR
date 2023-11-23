import LearnPageData from "../data/LearnPageData";
import LearnPageTile from "../components/page-tiles/LearnPageTile";

export default function LearnPage() {
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

  return (
    <div className="history-page">
      <div className="history-page-tile-feed">{tiles}</div>
    </div>
  );
}
