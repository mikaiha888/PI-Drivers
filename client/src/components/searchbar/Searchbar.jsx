import style from "./Searchbar.module.css";

import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ handlePage }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);

  const toggleSearchInput = () => {
    console.log(isActive);
    setIsActive(!isActive);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    handlePage();
  };

  const handleSearch = () => {
    if (query === "") setIsActive(false);
    else {
      navigate(`/drivers?name=${query}`)
      handlePage();
    }
  };

  const handleEnter = (e) => {
    if (e.keyCode == 13) {
      navigate(`/drivers?name=${query}`);
      handlePage()
    } 
  };

  return (
    <div className={style.searchbar}>
      <input
        type="search"
        onChange={handleChange}
        onKeyDown={handleEnter}
        placeholder="Search driver..."
        className={`${style.search_input} ${isActive ? style.active : ""}`}
      />
      <button onClick={isActive ? handleSearch : toggleSearchInput}>
        <Search />
      </button>
    </div>
  );
};
export default Searchbar;
