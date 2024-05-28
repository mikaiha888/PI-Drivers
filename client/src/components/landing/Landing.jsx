import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.title}>
        <h1>
          DRIVERS <span>F1</span>
        </h1>
        <p>Los Reyes de la Pista</p>
      </div>

      <div className={style.div_buttons}>
        <Link to="/drivers">
          <button>Ver drivers</button>
        </Link>
        <Link to="/teams">
          <button>Ver teams</button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
