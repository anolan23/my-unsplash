function Input({ name, value, onChange }) {
  return (
    <label className="input-box" htmlFor={name}>
      <span className="material-icons">search</span>
      <input
        onChange={onChange}
        value={value}
        name={name}
        className="input-box__input"
        autoComplete="off"
      />
    </label>
  );
}
export default Input;
