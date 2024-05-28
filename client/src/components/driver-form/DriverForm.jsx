import style from "./DriverForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createDriver, getAllTeams } from "../../redux/actions";
import validations from "./validations";
// import { useNavigate } from "react-router-dom";

import InputField from "../input-field/InputField";

const DriverForm = () => {
  // const navigate = useNavigate()
  const dispatch = useDispatch();
  const { driver } = useSelector(state => state)
  const [errors, setErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(true);
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
    { label: 'Nombre', name: 'firstName', type: 'text' },
    { label: 'Apellido', name: 'lastName', type: 'text' },
    { label: 'Fecha de nacimiento', name: 'dateOfBirth', type: 'date' },
    { label: 'Nacionalidad', name: 'nationality', type: 'text' },
    { label: 'Descripción', name: 'description', type: 'text' },
    { label: 'Imagen', name: 'image', type: 'text' },
  ];
  
    const handleFocus = (fieldName) => {
      setFocusedFields({ ...focusedFields, [fieldName]: true });
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    dispatch(createDriver(driverData));
    console.log(driver);
  };

  useEffect(() => {
    dispatch(getAllTeams());
    if (Object.values(focusedFields).some((isFocused) => isFocused)) {
      const driverValidated = validations(driverData);
      setErrors(driverValidated);
      const hasErrors = Object.keys(driverValidated).some(
        (key) => Object.prototype.hasOwnProperty.call(driverData, key) && driverValidated[key] !== ""
      );
      setFormIsValid(!hasErrors);
    }
  }, [driverData, focusedFields]);

  return (
    <div>
      <form className={style.driver_form} onSubmit={handleSubmit}>
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
        <button type="submit" disabled={!formIsValid}>
          Registrar
        </button>
      </form>
    </div>
  );
};
export default DriverForm;
