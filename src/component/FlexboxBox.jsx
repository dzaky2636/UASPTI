export function FlexboxBox(props) {
  return (
    <div className={`bg-[#30a2a9] rounded-2xl ${props.className}`}>
      {props.content}
    </div>
  );
}
