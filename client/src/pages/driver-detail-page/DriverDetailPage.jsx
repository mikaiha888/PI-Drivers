import style from './DriverDetailPage.module.css'
import { useParams } from "react-router-dom";
import { getDriverById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const DriverDetailPage = () => {
  const dispatch = useDispatch()
  const { driver } = useSelector(state => state)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getDriverById(id))
    console.log(driver.teams);
  }, [])

  return (
    <div className={style.driver_detail_page}>
      <div>
        <img src={driver.image} alt={`${driver.firstName} ${driver.lastName}`} />
        <h2>{`${driver.firstName} ${driver.lastName}`}</h2>
        <span>{driver.nationality}</span>
        <h3>Fecha de nacimiento: <span>{driver.dateOfBirth}</span></h3>
        <p>{driver.description}</p>
      </div>
      <div>
      {driver.teams?.map(team =>(
        <div key={team}>
          <img src="" alt="team image" />
          <h3>{team}</h3>
        </div>
      ))}  
      </div>
    </div>
  )
}
export default DriverDetailPage