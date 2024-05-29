import style from "./DriverForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createDriver } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import validations from "./validations";

import InputField from "../input-field/InputField";
import MultiSelect from "../multi-select/MultiSelect";

const DriverForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { allTeams, driver } = useSelector((state) => state);
  const [errors, setErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const [focusedFields, setFocusedFields] = useState({});
  const [driverData, setDriverData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
    description: "",
    image: "",
    teams: [],
  });

  const inputFields = [
    { label: "Nombre", name: "firstName", type: "text" },
    { label: "Apellido", name: "lastName", type: "text" },
    { label: "Fecha de nacimiento", name: "dateOfBirth", type: "date" },
    { label: "Nacionalidad", name: "nationality", type: "text" },
    { label: "Descripción", name: "description", type: "text" },
    { label: "Imagen", name: "image", type: "text" },
  ];

  const handleFocus = (fieldName) => {
    setFocusedFields({ ...focusedFields, [fieldName]: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "teams") {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setDriverData({
        ...driverData,
        [name]: selectedOptions,
      });
    } else
      setDriverData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDriver({...driverData, image: '../../../public/default-image.jpg'}));
    console.log(driver);
    driver && navigate(driver.id)
  };

  useEffect(() => {
    if (Object.values(focusedFields).some((isFocused) => isFocused)) {
      const driverValidated = validations(driverData);
      setErrors(driverValidated);
      const hasErrors = Object.keys(driverValidated).some(
        (key) =>
          Object.prototype.hasOwnProperty.call(driverData, key) &&
          driverValidated[key] !== ""
      );
      setFormIsValid(!hasErrors);
    }
  }, [driverData, focusedFields, formIsValid]);

  return (
    <div className={style.driver_form}>
      <form className={style.form} onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={driverData[field.name]}
            handleChange={handleChange}
            handleFocus={handleFocus}
            errors={errors[field.name]}
            focused={focusedFields[field.name]}
          />
        ))}
        <MultiSelect
          options={allTeams}
          selectedOptions={driverData.teams}
          handleChange={handleChange}
          handleFocus={handleFocus}
          errors={errors["teams"]}
          focused={focusedFields["teams"]}
        />
        <button type="submit" disabled={!formIsValid}>
          Registrar
        </button>
      </form>
    </div>
  );
};
export default DriverForm;
