import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import representations from "./PropsCarRepresentation";
import tireTrack from "../images/tire-track.png";

export default function CarRepresentation() {
  const { ref: carRepresentationRef, inView: carRepresentationVisible } =
    useInView({
      threshold: 0.1,
    });

  const carRepresentationAnimation = useAnimation();

  useEffect(() => {
    if (carRepresentationVisible) {
      carRepresentationAnimation.start("visible");
    }
  }, [carRepresentationVisible]);

  const carRepresentationVariant = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div className="track_overlay_representation">
      <div
        className="track_overlay_2"
        style={{ backgroundImage: `url(${tireTrack})` }}
      />
      <div id="main__car__representation__container">
        <motion.div
          className="car_representation_container"
          variants={carRepresentationVariant}
          initial="hidden"
          animate={carRepresentationAnimation}
          ref={carRepresentationRef}
        >
          {representations.map((car, i) => (
            <div key={i}>
              <div className="each_car_representation">
                <div className="car_representation_top_row">
                  <h1 data-name={car.carName} className={`car-rep-name-${i}`}>
                    {car.carName}
                  </h1>
                  <img src={car.src[0]} alt={car.carName} />
                  <h2>
                    <span>{car.price}</span> / day
                  </h2>
                </div>
                <div className="car_representation_details_container">
                  <div className="car_representation_details">
                    <img src={car.details.icons.carIcon} alt="seat-icon" />
                    <p>{car.details.detail.carBrand}</p>
                  </div>

                  <div className="car_representation_details">
                    <img
                      src={car.details.icons.transmissionIcon}
                      alt="seat-icon"
                    />
                    <p>{car.details.detail.transmission}</p>
                  </div>

                  <div className="car_representation_details">
                    <img src={car.details.icons.seatIcon} alt="seat-icon" />
                    <p>{car.details.detail.seat}</p>
                  </div>

                  <div className="car_representation_details">
                    <img src={car.details.icons.airconIcon} alt="seat-icon" />
                    <p>Yes</p>
                  </div>

                  <div className="car_representation_details">
                    <img src={car.details.icons.fuelIcon} alt="seat-icon" />
                    <p>{car.details.detail.fuel}</p>
                  </div>
                </div>
                <div className="car_representation_button_container">
                  <Link to={"/"}>
                    <motion.button
                      whileHover={{
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                        backgroundColor: "#fec260",
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      BOOK NOW
                    </motion.button>
                  </Link>
                  <Link to={`/cars/${car.carName}`}>
                    <motion.button
                      className="more-details-button"
                      style={{ backgroundColor: "rgba( 55, 66, 89, .9 )" }}
                      whileHover={{
                        boxShadow:
                          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      DETAILS
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
