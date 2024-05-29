import style from "./TeamsPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeams } from "../../redux/actions";

const TeamsPage = () => {
  const dispatch = useDispatch();
  const { allTeams } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  return (
    <div className={style.teamsPage}>
      <div className={style.teamsPage_title}>
        <h2>Teams</h2>
        <p>Los mejores equipos que podes encontrar</p>
      </div>
      <div className={style.teams}>
      {allTeams.map((team, index) => (
        <div key={index}>
          <h4>{team.name ? team.name : team}</h4>
        </div>
      ))}
      </div>
    </div>
  );
};
export default TeamsPage;
