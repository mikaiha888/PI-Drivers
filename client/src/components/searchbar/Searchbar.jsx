import { useState } from "react";
import { useDispatch } from "react-redux";
import { Search } from "lucide-react";
import { getDriversByName } from "../../redux/actions";

const Searchbar = ({ handlePage }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    handlePage();
  };

  const handleSearch = () => {
    dispatch(getDriversByName(query));
    handlePage();
  };

  const handleEnter = (e) => {
    e.keyCode == 13 && dispatch(getDriversByName(query));
  };

  return (
    <div>
      <input type="search" onChange={handleChange} onKeyDown={handleEnter} />
      <button onClick={handleSearch}>
        <Search />
      </button>
    </div>
  );
};
export default Searchbar;
