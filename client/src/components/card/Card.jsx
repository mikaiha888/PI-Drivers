import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ driver }) => {
  return (
    <Link className={style.card} to={`/drivers/${driver.id}`}>
      <div className={style.card_img}>
        <img src={driver.image} alt={driver.id} />
      </div>
      <div className={style.card_info}>
        <h3>{`${driver.firstName} ${driver.lastName}`}</h3>
        <p>{driver.teams?.join(', ')}</p>
      </div>
    </Link>
  );
};
export default Card;
