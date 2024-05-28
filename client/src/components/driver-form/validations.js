const isValidImageUrl = (url) => {
  return (
    url.toLowerCase().endsWith(".jpg") ||
    url.toLowerCase().endsWith(".png") ||
    url.toLowerCase().endsWith(".gif") ||
    url.toLowerCase().endsWith(".jpeg")
  );
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const validation = (driverData) => {
  let errors = {};

  if (!driverData.lastName.trim()) {
    errors.firstName = "*El campo nombre es obligatorio";
  } else if (!/^[a-zA-Z\s]+$/.test(driverData.firstName)) {
    errors.firstName = "*Debe contener solo letras";
  } else if (
    driverData.firstName.length < 2 ||
    driverData.firstName.length > 32
  ) {
    errors.firstName = "*Debe contener entre 2 a 32 caracteres";
  }

  if (!driverData.lastName.trim()) {
    errors.lastName = "*El campo apellido es obligatorio";
  } else if (!/^[a-zA-Z\s]+$/.test(driverData.lastName)) {
    errors.lastName = "*Debe contener solo letras";
  } else if (
    driverData.lastName.length < 2 ||
    driverData.lastName.length > 32
  ) {
    errors.lastName = "*Debe contener entre 2 a 32 caracteres";
  }

  if (!driverData.dateOfBirth.trim()) {
    errors.dateOfBirth = "*El campo fecha de nacimiento es obligatorio";
  } else if (
    isNaN(new Date(driverData.dateOfBirth).getTime()) ||
    new Date(driverData.dateOfBirth).getFullYear() > currentYear ||
    new Date(driverData.dateOfBirth).getFullYear() < 1900
  ) {
    errors.dateOfBirth = "*Fecha inválida";
  }

  if (!driverData.nationality.trim()) {
    errors.nationality = "*El campo nacionalidad es obligatorio";
  } else if (!/^[a-zA-Z\s]+$/.test(driverData.nationality)) {
    errors.nationality = "*Debe contener solo letras";
  }

  if (!driverData.description.trim()) {
    errors.description = "*El campo descripción es obligatorio";
  }

  if (!driverData.image.trim()) {
    errors.image = "*El campo imagen es obligatorio";
  } else if (!isValidImageUrl(driverData.image)) {
    errors.image =
      "*La URL de la imagen no es válida o no tiene la extensión .jpg, .jpeg, .png, .gif";
  }

  if (!driverData.teams || driverData.teams.length === 0) {
    errors.temperament = "*Selecciona al menos un temperamento";
  }

  return errors;
};

export default validation;
