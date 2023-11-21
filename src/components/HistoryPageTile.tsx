type ExerciseType = {
  id: number;
  name: string;
  prSet: string;
};

type HistoryPageTileProps = {
  date: string;
  exercises: ExerciseType[];
};

export default function HistoryPageTile(props: HistoryPageTileProps) {
  return (
    <div className="history-page-tile">
      <h3>{props.date}</h3>
    </div>
  );
}
