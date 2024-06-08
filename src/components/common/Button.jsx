export default function Button({ btnName, onClick, btnColor }) {
  return (
    <button className={btnColor ? btnColor : ""} onClick={onClick}>
      {btnName}
    </button>
  );
}
