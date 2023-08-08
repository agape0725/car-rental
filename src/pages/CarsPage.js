import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import CarFleet from "../components/CarRepresentation";
import Upsell from "../components/Upsell";

function CarsPage() {
  const routes = {
    id: 1,
    carsTitle: "CARS",
    carHeader: require("../images/car-header-cars.jpg"),
    pathColor: "#f8f8f8",
  };
  return (
    <>
      <HeaderBanner
        id={1}
        title={routes.carsTitle}
        carHeader={routes.carHeader}
        pathColor={routes.pathColor}
      />
      <CarFleet />
      <Upsell />
    </>
  );
}

export default CarsPage;
