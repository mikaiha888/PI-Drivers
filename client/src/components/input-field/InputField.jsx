const InputField = ({
  label,
  name,
  type,
  value,
  handleChange,
  handleFocus,
  errors,
  focused,
}) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={() => handleFocus(name)}
      />
      {focused && errors && <p>{errors}</p>}
    </div>
  );
};
export default InputField;
