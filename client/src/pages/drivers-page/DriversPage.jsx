import style from "./DriversPage.module.css";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers, getDriversByName } from "../../redux/actions";

import Dialog from "../../components/dialog/Dialog";
import Cards from "../../components/cards/Cards";
import Filters from "../../components/filters/Filters";
import Pagination from "../../components/pagination/Pagination";
import DriverForm from "../../components/driver-form/DriverForm";

const DriversPage = () => {
  const dispatch = useDispatch();
  const { allDrivers, filteredDrivers } = useSelector((state) => state);
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const itemsPerPage = 9;
  const totalPages = !filteredDrivers.length
    ? Math.ceil(allDrivers?.length / itemsPerPage)
    : Math.ceil(filteredDrivers?.length / itemsPerPage);
  const query = searchParams.get("name");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageReset = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    if (query) {
      dispatch(getDriversByName(query));
    } else {
      dispatch(getAllDrivers());
    }
  }, [query]);

  return (
    <div className={style.driversPage}>
      <div className={style.driversPage_title}>
        <h2>Ellos</h2>
        <p>Comparte Tus Momentos de F1 con Nosotros</p>
      </div>
      <Filters
        handlePage={handlePageReset}
        isCreated={!allDrivers.some((driver) => isNaN(driver.id))}
      />
      <Pagination
        handlePage={handlePageChange}
        current={currentPage}
        total={totalPages}
      >
        <Cards
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          allDrivers={filteredDrivers.length ? filteredDrivers : allDrivers}
        />
      </Pagination>
      <button onClick={openDialog}>Añadir driver</button>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <DriverForm />
      </Dialog>
    </div>
  );
};
export default DriversPage;
