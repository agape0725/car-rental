import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import AboutUs from "../components/AboutUs";
import ChooseUs from "../components/ChooseUs";
import BookCarBanner from "../components/BookCarBanner";

function AboutPage() {
  const routes = {
    id: 1,
    aboutTitle: "ABOUT",
    carHeader: require("../images/car-header-about.jpg"),
    pathColor: "#fff",
  };

  return (
    <>
      <HeaderBanner
        id={1}
        title={routes.aboutTitle}
        carHeader={routes.carHeader}
        pathColor={routes.pathColor}
      />
      <AboutUs />
      <ChooseUs />
      <BookCarBanner />
    </>
  );
}

export default AboutPage;
