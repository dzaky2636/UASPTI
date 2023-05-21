export function FlexboxBox(props) {
  return (
    <div
      className={`bg-gradient-to-br from-[#4EA8DE] to-[#5E60CE] rounded-2xl ${props.className}`}
    >
      {props.content}
    </div>
  );
}
