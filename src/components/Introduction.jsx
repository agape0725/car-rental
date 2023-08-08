import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import track from "../images/tire-track.png";
import carIntroduction2 from "../images/car-introduction2.png";
import introductions from "./PropsIntroduction";

export default function Introduction() {
  const introductionTextAnimation = useAnimation();
  const introductionContainerAnimation = useAnimation();

  const { ref: introductionTextRef, inView: introductionTextIsVisible } =
    useInView({
      threshold: 0.3,
    });

  useEffect(() => {
    if (introductionTextIsVisible) {
      introductionTextAnimation.start("visible");
    }
  }, [introductionTextIsVisible]);

  const {
    ref: introductionContainerRef,
    inView: introductionContainerIsVisible,
  } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (introductionContainerIsVisible) {
      introductionContainerAnimation.start("visible");
    }
  }, [introductionContainerIsVisible]);

  const introductionTextContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const introductionTextChildrenVariant = {
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

  const introductionContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const introductionLeftColChildrenVariant = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  const introductionRightColChildrenVariant = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="track_overlay_container">
      <div
        className="track_overlay"
        style={{ backgroundImage: `url(${track})` }}
      />
      <div id="main__introduction__container">
        <motion.div
          ref={introductionTextRef}
          variants={introductionTextContainerVariant}
          initial="hidden"
          animate={introductionTextAnimation}
        >
          <motion.div className={`introduction_text`}>
            <motion.h1 variants={introductionTextChildrenVariant}>
              Time for an adventure
            </motion.h1>
            <motion.p variants={introductionTextChildrenVariant}>
              The best car with small prices
            </motion.p>
          </motion.div>
          <motion.div
            className="car_introduction_container"
            variants={introductionTextChildrenVariant}
          >
            <img src={carIntroduction2} alt="car-introduction" />
          </motion.div>
        </motion.div>
        <div className="introduction_container" ref={introductionContainerRef}>
          <motion.div
            className="introduction_left_col"
            variants={introductionContainerVariant}
            initial="hidden"
            animate={introductionContainerAnimation}
          >
            <motion.h1 variants={introductionLeftColChildrenVariant}>
              Plan your trip now
            </motion.h1>
            <motion.h2 variants={introductionLeftColChildrenVariant}>
              Where Every Mile is an Adventure
            </motion.h2>
            <motion.p variants={introductionLeftColChildrenVariant}>
              Unlock your adventure with our premier car rental services,
              providing reliable and well-maintained vehicles that ensure a
              comfortable and seamless travel experience. Whether you're
              exploring the city or embarking on a cross-country road trip, our
              diverse fleet and competitive rates will cater to your specific
              needs and preferences. Reserve your ideal car today and enjoy the
              convenience, flexibility, and peace of mind that comes with
              renting from us.
            </motion.p>
            <Scroll
              to={"main__models__container"}
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              <motion.button variants={introductionLeftColChildrenVariant}>
                Vehicle Models
              </motion.button>
            </Scroll>
          </motion.div>
          <motion.div
            className="introduction_right_col"
            variants={introductionContainerVariant}
            initial="hidden"
            animate={introductionContainerAnimation}
          >
            {introductions.map((introduction, i) => (
              <motion.div
                variants={introductionRightColChildrenVariant}
                className="introduction_promotion"
                key={i}
              >
                <div className="promotion_icon">
                  <img src={introduction.icon} alt="" />
                </div>
                <div className="promotion_text">
                  <h1>{introduction.title}</h1>
                  <p>{introduction.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
