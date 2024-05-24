const Card = ({ driver }) => {
  return (
    <div>
      <div>
        <img src={driver.image.url} alt={driver.id} />
      </div>
      <div>
        <h3>{`${driver.name.forename} ${driver.name.surname}`}</h3>
        <p>{driver.dob}</p>
        <p>{driver.nationality}</p>
        <p>{driver.description}</p>
      </div>
    </div>
  );
};
export default Card;
