import React, { useState, useEffect, useRef } from "react";
import { carOptions, sedans, suvs } from "./PropsVehicleModels";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function VehicleModels() {
  // SEDAN STATE
  const [carImage, setCarImage] = useState("lancer");
  const [carBrand, setCarBrand] = useState("Mitsubishi");
  const [carModel, setCarModel] = useState("Lancer");
  const [carYear, setCarYear] = useState("2017");
  const [carAc, setCarAc] = useState("Yes");
  const [carTransmission, setCarTransmission] = useState("Manual");
  const [carFuel, setCarFuel] = useState("Diesel");
  const [carColor, setCarColor] = useState("Red");

  // SUV STATE
  const [suvImage, setSuvImage] = useState("fortuner");
  const [suvBrand, setSuvBrand] = useState("Toyota");
  const [suvModel, setSuvModel] = useState("Fortuner");
  const [suvYear, setSuvYear] = useState("2015");
  const [suvAc, setSuvAc] = useState("Yes");
  const [suvTransmission, setSuvTransmission] = useState("Manual");
  const [suvFuel, setSuvFuel] = useState("Diesel");
  const [suvColor, setSuvColor] = useState("Platinum White");

  const [changeModel, setChangeModel] = useState(0);
  const [showModelList, setShowModelLists] = useState(false);
  const [activeCarModelList, setActiveCarModellist] = useState(0);
  const [activeSuvModelList, setActiveSuvModelList] = useState(0);

  const { ref: modelsIntroductionRef, inView: modelsIntroductionVisible } =
    useInView({
      threshold: 0.2,
    });
  const modelIntroductionAnimation = useAnimation();

  useEffect(() => {
    if (modelsIntroductionVisible) {
      modelIntroductionAnimation.start("visible");
    }
  }, [modelsIntroductionVisible]);

  const modelIntroductionVariant = {
    hidden: {
      // opacity: 0,
    },
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const modelIntroductionChildrenVariant = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const { ref: modelsColContainerRef, inView: modelsColContainerVisible } =
    useInView({
      threshold: 0.4,
    });
  const modelsColContainerAnimation = useAnimation();

  useEffect(() => {
    if (modelsColContainerVisible) {
      modelsColContainerAnimation.start("visible");
    }
  }, [modelsColContainerVisible]);

  const modelsColContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const modelsColContainerChildrenVariant = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  function sedanValue(e) {
    const middleCol = document.querySelector(`.models_middle_col`);
    const carDescriptionDetails =
      document.querySelectorAll(`.car_description p`);

    const model = e.getAttribute("model");
    const brand = e.getAttribute("brand");
    const color = e.getAttribute("color");
    const year = e.getAttribute("year");
    const ac = e.getAttribute("ac");
    const transmission = e.getAttribute("transmission");
    const fuel = e.getAttribute("fuel");

    setCarImage(model);
    setCarBrand(brand);
    setCarModel(model);
    setCarColor(color);
    setCarYear(year);
    setCarAc(ac);
    setCarTransmission(transmission);
    setCarFuel(fuel);

    middleCol.classList.add("active");
    e.style.color = `#F0EEED`;
    e.classList.add("active");

    carDescriptionDetails.forEach((cdd) => {
      cdd.classList.add("active");
    });
  }

  function suvValue(e) {
    const middleCol = document.querySelector(`.models_middle_col`);
    const carDescriptionDetails =
      document.querySelectorAll(`.car_description p`);

    const model = e.getAttribute("model");
    const brand = e.getAttribute("brand");
    const color = e.getAttribute("color");
    const year = e.getAttribute("year");
    const ac = e.getAttribute("ac");
    const transmission = e.getAttribute("transmission");
    const fuel = e.getAttribute("fuel");

    setSuvImage(model);
    setSuvBrand(brand);
    setSuvModel(model);
    setSuvColor(color);
    setSuvYear(year);
    setSuvAc(ac);
    setSuvTransmission(transmission);
    setSuvFuel(fuel);

    middleCol.classList.add("active");
    e.style.color = `#F0EEED`;
    e.classList.add("active");

    carDescriptionDetails.forEach((cdd) => {
      cdd.classList.add("active");
    });
  }

  // ON CLICK SEDAN LISTS
  const onClickCarModelList = (e, i) => {
    e.preventDefault();
    const link = e.target;
    const sedansModelLists = document.querySelectorAll(`.sedan-model-lists`);

    sedansModelLists.forEach((model, i) => {
      model.classList.remove("active");
      model.style.color = `#374259`;
      sedanValue(link);
      setActiveCarModellist(true);
    });
  };

  // ON CLICK SUV LISTS
  const onClickSuvModelList = (e, i) => {
    e.preventDefault();
    const link = e.target;
    const suvModelLists = document.querySelectorAll(`.suv-model-lists`);

    suvModelLists.forEach((model, i) => {
      model.classList.remove("active");
      model.style.color = `#374259`;
      suvValue(link);
      setActiveSuvModelList(true);
    });
  };

  const onClickCarOptionType = (e, i) => {
    e.preventDefault();
    const middleCol = document.querySelector(`.models_middle_col`);

    middleCol.classList.add("active");
    setChangeModel(i);
  };

  // ONHOVER SEATER SELECTION
  useEffect(() => {
    const seaterSelectionContainer = document.querySelectorAll(
      `.seater_selection_container h1`
    );
    const middleCol = document.querySelector(`.models_middle_col`);

    let onHover = (e) => {
      e.preventDefault();
      setShowModelLists(false);
      middleCol.classList.remove("active");
    };

    seaterSelectionContainer.forEach((ssc) => {
      ssc.addEventListener("mouseenter", onHover);

      return () => {
        ssc.removeEventListener("mouseenter", onHover);
      };
    });
  });

  // ONHOVER SEDAN LISTS
  useEffect(() => {
    const sedanModelLists = document.querySelectorAll(`.sedan-model-lists`);
    const middleCol = document.querySelector(`.models_middle_col`);

    let onHoverLists = (e) => {
      e.preventDefault();
      middleCol.classList.remove("active");
    };

    sedanModelLists.forEach((model) => {
      model.addEventListener("mouseenter", onHoverLists);

      return () => {
        model.removeEventListener("mouseenter", onHoverLists);
      };
    });
  }, []);

  // ONHOVER SUV LISTS
  useEffect(() => {
    const suvModelLists = document.querySelectorAll(`.suv-model-lists`);
    const middleCol = document.querySelector(`.models_middle_col`);

    let onHoverLists = (e) => {
      e.preventDefault();
      middleCol.classList.remove("active");
    };

    suvModelLists.forEach((model) => {
      model.addEventListener("mouseenter", onHoverLists);

      return () => {
        model.removeEventListener("mouseenter", onHoverLists);
      };
    });
  }, []);

  return (
    <div id="main__models__container">
      <div className="models_container">
        <motion.div
          ref={modelsIntroductionRef}
          variants={modelIntroductionVariant}
          initial="hidden"
          animate={modelIntroductionAnimation}
        >
          <div className="models_introduction">
            <motion.h1 variants={modelIntroductionChildrenVariant}>
              Vehicle Models
            </motion.h1>
            <motion.h2 variants={modelIntroductionChildrenVariant}>
              Choose from a variety of our vehicle in which your every moment
              will be memorable.
            </motion.h2>
          </div>
          <motion.div
            className="seater_selection_container"
            variants={modelIntroductionChildrenVariant}
          >
            {carOptions.map((option, i) => (
              <h1
                key={i}
                className={`${changeModel === i && `active`}`}
                onClick={(e) => onClickCarOptionType(e, i)}
              >
                {option.type}
              </h1>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="models_col_container"
          ref={modelsColContainerRef}
          variants={modelsColContainerVariant}
          initial="hidden"
          animate={modelsColContainerAnimation}
        >
          <div className={`models_left_col ${showModelList && `active`}`}>
            <div className={`sedan_container ${changeModel && `active`}`}>
              {sedans.map((sedan, i) => (
                <motion.div
                  key={i}
                  className="sedan_lists"
                  variants={modelsColContainerChildrenVariant}
                >
                  <h1
                    className={`sedan-model-lists ${
                      activeCarModelList === i && `active`
                    }`}
                    onClick={(e) => onClickCarModelList(e, i)}
                    brand={sedan.brand}
                    model={sedan.model.toLowerCase()}
                    color={sedan.color}
                    year={sedan.year}
                    ac={sedan.ac}
                    transmission={sedan.transmission}
                    fuel={sedan.fuel}
                  >
                    {sedan.brand} {sedan.model}
                  </h1>
                </motion.div>
              ))}
            </div>
            <div className={`suv_container ${changeModel && `active`}`}>
              {suvs.map((suv, i) => (
                <motion.div
                  className="suv_lists"
                  key={i}
                  variants={modelsColContainerChildrenVariant}
                >
                  <h1
                    className={`suv-model-lists ${
                      activeSuvModelList === i && `active`
                    }`}
                    onClick={(e) => onClickSuvModelList(e, i)}
                    brand={suv.brand}
                    model={suv.model.toLowerCase()}
                    color={suv.color}
                    year={suv.year}
                    ac={suv.ac}
                    transmission={suv.transmission}
                    fuel={suv.fuel}
                  >
                    {suv.brand} {suv.model}
                  </h1>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={`models_middle_col`}>
            {changeModel ? (
              <img
                className="car-model-img"
                src={require(`../images/car-models/${suvImage}.png`)}
                alt={carImage}
              />
            ) : (
              <img
                className="car-model-img"
                src={require(`../images/car-models/${carImage}.png`)}
                alt={carImage}
              />
            )}
          </div>
          <div className="models_right_col">
            <div className="car_description_container">
              {changeModel ? (
                <>
                  <div className="car_description">
                    <h1>Brand:</h1>
                    <p>{suvBrand}</p>
                  </div>
                  <div className="car_description">
                    <h1>Model:</h1>
                    <p>
                      {suvModel.charAt(0).toUpperCase() + suvModel.slice(1)}
                    </p>
                  </div>
                  <div className="car_description">
                    <h1>Color:</h1>
                    <p>{suvColor}</p>
                  </div>
                  <div className="car_description">
                    <h1>Year Model:</h1>
                    <p>{suvYear}</p>
                  </div>
                  <div className="car_description">
                    <h1>AC:</h1>
                    <p>{suvAc}</p>
                  </div>
                  <div className="car_description">
                    <h1>Fuel:</h1>
                    <p>{suvFuel}</p>
                  </div>
                  <div className="car_description">
                    <h1>Transmission:</h1>
                    <p>{suvTransmission}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="car_description">
                    <h1>Brand:</h1>
                    <p>{carBrand}</p>
                  </div>
                  <div className="car_description">
                    <h1>Model:</h1>
                    <p>
                      {carModel.charAt(0).toUpperCase() + carModel.slice(1)}
                    </p>
                  </div>
                  <div className="car_description">
                    <h1>Color:</h1>
                    <p>{carColor}</p>
                  </div>
                  <div className="car_description">
                    <h1>Year Model:</h1>
                    <p>{carYear}</p>
                  </div>
                  <div className="car_description">
                    <h1>AC:</h1>
                    <p>{carAc}</p>
                  </div>
                  <div className="car_description">
                    <h1>Fuel:</h1>
                    <p>{carFuel}</p>
                  </div>
                  <div className="car_description">
                    <h1>Transmission:</h1>
                    <p>{carTransmission}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
