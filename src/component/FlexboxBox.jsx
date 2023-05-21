export function FlexboxBox(props) {
  return (
    <div
      className={`bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl ${props.className}`}
    >
      {props.content}
    </div>
  );
}
