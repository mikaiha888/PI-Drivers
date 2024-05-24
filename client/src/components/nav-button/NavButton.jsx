import { Link } from "react-router-dom";

const NavButton = ({ link, buttonName }) => {
  return (
    <Link to={link}>
      <button>{buttonName}</button>
    </Link>
  );
};
export default NavButton;
