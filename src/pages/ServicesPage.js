import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Accordion from "../components/Accordion";
import ServicesOffer from "../components/ServicesOffer";
import DownloadApp from "../components/DownloadApp";

function ServicesPage() {
  const routes = {
    id: 1,
    carsTitle: "SERVICES",
    carHeader: require("../images/teamwork2.jpg"),
    pathColor: "#fff",
  };
  return (
    <>
      <HeaderBanner
        id={1}
        title={routes.carsTitle}
        carHeader={routes.carHeader}
        pathColor={routes.pathColor}
      />
      <ServicesOffer />
      <Accordion />
      <DownloadApp />
    </>
  );
}

export default ServicesPage;
