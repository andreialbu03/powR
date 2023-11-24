import WorkoutPageTile from "../components/page-tiles/WorkoutPageTile";
import WorkoutPageData from "../data/WorkoutPageData";

export default function WorkoutPage() {
  const tiles = WorkoutPageData.map((item) => {
    return (
      <div className="history-page-tile-feed" key={item.id}>
        <WorkoutPageTile
          tileTitle={item.tileTitle}
          exercises={item.exercises}
          isLast={item.id === WorkoutPageData.length}
        />
      </div>
    );
  });

  return <div className="history-page">{tiles}</div>;
}
