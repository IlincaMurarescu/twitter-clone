export default function Tweet(props) {
  return (
    <div className="border-b border-slate-400" key={props.tweet.id}>
      {props.tweet.tweet}
    </div>
  );
}
