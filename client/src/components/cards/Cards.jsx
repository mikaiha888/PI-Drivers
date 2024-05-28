import style from "./Cards.module.css";
import Card from "../card/Card";

const Cards = ({ allDrivers, currentPage, itemsPerPage}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDrivers = allDrivers?.slice(startIndex, endIndex);

  return (
    <div className={style.cards}>
      {currentDrivers?.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div>
  );
};
export default Cards;
