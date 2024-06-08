export default function TextInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      name="textInput"
      onChange={(e) => onChange(e)}
    />
  );
}
