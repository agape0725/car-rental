import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import fortuner from "../images/car-models/fortuner.png";
import CarTopview from "../images/car-topview.png";
import buildings from "../images/building.png";

export default function HeaderBody() {
  let mainHeaderBody = useRef(null);
  const [buildingIsVisible, setBuildingIsVisible] = useState(false);

  const headerBodyVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        delay: 0.9,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
      },
    },
  };

  const bodyChildrenVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 10px",
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      id="main__header__body"
      initial="hidden"
      animate="visible"
      ref={mainHeaderBody}
    >
      <div
        className={`car-top-view`}
        style={{ backgroundImage: `url(${CarTopview})` }}
      />
      <motion.img
        className={`building-img ${buildingIsVisible && `show`}`}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        src={buildings}
        alt="building"
      />
      <motion.div
        className="header_body"
        variants={headerBodyVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`header_body_left_col`}
          variants={bodyChildrenVariants}
        >
          <h4>Your Journey, Our Wheels!</h4>
          <h1>
            Best <span>services</span> with the best work
          </h1>
          <p>
            Rent the best car at the best price. Unlimited miles, flexible
            pick-up location, excellent car features and much more.
          </p>
          <div className="header_body_button_container">
            <Scroll
              to="main__book__car__form__container"
              spy={true}
              smooth={true}
              offset={-300}
              duration={700}
            >
              <motion.button variants={buttonHoverVariants} whileHover="hover">
                Book Ride
              </motion.button>
            </Scroll>

            <Link to={"/cars"}>
              <motion.button
                style={{ backgroundColor: "#374259" }}
                variants={buttonHoverVariants}
                whileHover="hover"
              >
                View Cars
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.img
          className={`fortuner-img`}
          src={`${fortuner}`}
          variants={bodyChildrenVariants}
          alt="chevrolet"
        />
      </motion.div>
    </motion.div>
  );
}
