import style from "./Filters.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDrivers,
  filterDrivers,
  getAllTeams,
  sortDrivers,
} from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Filters = ({ handlePage, isCreated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allTeams } = useSelector((state) => state);
  const [filterByTeams, setFilterByTeams] = useState("all");
  const [filterByDb, setFilterByDb] = useState("all");
  const [sortOrder, setSortOrder] = useState({
    sortBy: "name",
    sort: "ascending",
  });

  const handleSort = (e) => {
    const { name, value } = e.target;
    const updatedSortOrder = {
      ...sortOrder,
      [name]: value,
    };
    setSortOrder(updatedSortOrder);
    dispatch(sortDrivers(updatedSortOrder));
    handlePage();
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (name === "byTeams") {
      setFilterByTeams(value);
      setFilterByDb("all");
    }
    if (name === "byDb") {
      setFilterByDb(value);
      setFilterByTeams({
        sortBy: "name",
        sort: "ascending",
      });
    }
    dispatch(filterDrivers([name, value]));
    handlePage();
    navigate("");
  };

  const handleClear = () => {
    setFilterByTeams("all");
    setFilterByDb("all");
    setSortOrder({
      sortBy: "name",
      sort: "ascending",
    });
    dispatch(clearDrivers());
    navigate("");
  };

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  return (
    <div className={style.filters}>
      <div className={style.filter}>
        <span>Equipos: </span>
        <select name="byTeams" value={filterByTeams} onChange={handleFilter}>
          <option value="all">All teams</option>
          {allTeams.map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option>
          ))}
        </select>
        <span>Filtrar por: </span>
        <select name="byDb" value={filterByDb} onChange={handleFilter}>
          <option value="all">All drivers</option>
          <option value="db" disabled={isCreated}>
            Creados recientemente
          </option>
          <option value="api">Cargados previamente</option>
        </select>
      </div>
      <div className={style.sort}>
        <span>Ordenar por: </span>
        <select name="sortBy" value={sortOrder.sortBy} onChange={handleSort}>
          <option value="name">Nombre del driver</option>
          <option value="dob">Fecha de nacimiento</option>
        </select>
        <select name="sort" value={sortOrder.sort} onChange={handleSort}>
          <option value="ascending">Ascendente</option>
          <option value="descending">Descendente</option>
        </select>
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
export default Filters;
