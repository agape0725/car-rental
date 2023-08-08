import React from "react";
import HeaderBody from "../components/HeaderBody";
import Introduction from "../components/Introduction";
import Upsell from "../components/Upsell";
import BookCarForm from "../components/BookCarForm";
import VehicleModels from "../components/VehicleModels";
import ServicesOffer from "../components/ServicesOffer";
import BookCarBanner from "../components/BookCarBanner";
import ChooseUs from "../components/ChooseUs";
import Accordion from "../components/Accordion";
import DownloadApp from "../components/DownloadApp";
import stackTire from "../images/stack-tire2.png";

function HomePage() {
  return (
    <>
      <div id="main__header__section">
        <HeaderBody />
      </div>
      <Introduction />
      <Upsell />
      <div className="stack_tire_overlay">
        <div className="stack-tire-2" style={{backgroundImage: `url(${stackTire})`}} />
        <VehicleModels />
        <BookCarForm />
      </div>
      <ServicesOffer />
      <BookCarBanner />
      <ChooseUs />
      <Accordion />
      <DownloadApp />
    </>
  );
}

export default HomePage;
