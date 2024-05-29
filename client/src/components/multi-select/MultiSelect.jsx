import style from "./MultiSelect.module.css";

const MultiSelect = ({
  options,
  selectedOptions,
  handleChange,
  handleFocus,
  errors,
  focused,
}) => {
  return (
    <div className={style.multi_select}>
      <label>Equipos</label>
      <br />
      <select
        multiple
        name="teams"
        value={selectedOptions}
        onChange={handleChange}
        onFocus={() => handleFocus("teams")}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={style.selected_options}>
        {selectedOptions.length > 0 ? (
          selectedOptions.map((option, index) => (
            <span key={index} className={style.option}>
              {option}
            </span>
          ))
        ) : (
          <span>No options selected</span>
        )}
      </div>
      {focused && errors && <p>{errors}</p>}
    </div>
  );
};
export default MultiSelect;
