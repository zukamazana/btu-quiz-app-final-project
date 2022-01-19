export default function ProgressBar({ current, total }) {
  console.log(current, total);
  return (
    <div className="progressBar">
      <div
        className="progress"
        style={{ width: `${(current / total) * 100}%` }}
      />
      <p>{`progress: ${current}/${total}`}</p>
    </div>
  );
}
