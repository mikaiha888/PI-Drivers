import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Card from "../card/Card";
import { getAllDrivers } from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const { allDrivers } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, []);

  return (
    <div>
      {allDrivers.map((driver) => (
        <Card key={driver.id} driver={driver} />
      ))}
    </div>
  );
};
export default Cards;
