import style from "./DriverDetailPage.module.css";
import { useParams } from "react-router-dom";
import { getDriverById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const DriverDetailPage = () => {
  const dispatch = useDispatch();
  const { driver } = useSelector((state) => state);
  const { id } = useParams();

  console.log(driver);

  useEffect(() => {
    dispatch(getDriverById(id));
  }, []);

  return (
    <div className={style.driver_detail_page}>
      <div className={style.driver_detail}>
        <div className={style.img_container}>
          <img
            src={driver.image}
            alt={`${driver.firstName} ${driver.lastName}`}
          />
        </div>
        <h2>{`${driver.firstName} ${driver.lastName}`}</h2>
        <span className={style.nationality}>{driver.nationality}</span>
        <p>Fecha de nacimiento:</p>
        <br />
        <span className={style.dob}>{driver.dateOfBirth}</span>
      </div>
      <div className={style.driver_detail_info}>
        <h3>Descripción:</h3>
        <div className={style.description}>
          <p>{driver.description}</p>
        </div>
        <div className={style.teams}>
          <h3>Teams:</h3>
          {driver.teams?.map((team, index) => (
            <div key={index}>
              <span>{team.name ? team.name : team}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DriverDetailPage;
