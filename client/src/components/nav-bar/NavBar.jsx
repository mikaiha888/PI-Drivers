import style from "./NavBar.module.css";
import { useLocation, Link } from "react-router-dom";

import Searchbar from "../searchbar/Searchbar";

const NavBar = () => {
  const { pathname } = useLocation();

  const navButtons = [
    { link: "/home", buttonName: "Home" },
    { link: "/drivers", buttonName: "Drivers" },
    { link: "/teams", buttonName: "Teams" },
  ];

  return (
    pathname !== "/home" && (
      <nav className={style.navbar}>
        <div className={style.button_container}>
          {navButtons.map((navButton, index) => (
            <Link key={index} to={navButton.link}>
              <button>{navButton.buttonName}</button>
            </Link>
          ))}
          <Searchbar />
        </div>
      </nav>
    )
  );
};
export default NavBar;
