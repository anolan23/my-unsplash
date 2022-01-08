function InputGroup({
  name,
  value,
  type,
  labelText,
  placeHolder,
  onChange,
  onBlur,
}) {
  return (
    <div className="input-group">
      <label className="input-group__label" htmlFor={name}>
        {labelText}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        className="input-group__input"
        autoComplete="off"
        autoCorrect="off"
        id={name}
        onBlur={onBlur}
        type={type}
        placeholder={placeHolder}
      />
    </div>
  );
}
export default InputGroup;
