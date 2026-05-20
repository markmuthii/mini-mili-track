export function Button(props) {
  return (
    <button type="button" className={props.className} style={props.style}>
      {props.text}
    </button>
  );
}
