import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import services from "./PropsChooseUs";

export default function Services() {
  const { ref: choosUsIntroductionRef, inView: choosUsIntroductionVisible } =
    useInView({
      threshold: 0.3,
    });
  const choosUsIntroductionAnimation = useAnimation();

  useEffect(() => {
    if (choosUsIntroductionVisible) {
      choosUsIntroductionAnimation.start("visible");
    }
  }, [choosUsIntroductionVisible]);

  const choosUsIntroductionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const choosUsIntroductionChildrenVariant = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const choosUsServicesChildrenVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 5,
      },
    },
  };

  return (
    <motion.div
      className="choose_us_padding"
      style={{ background: `rgba(226, 226, 226, .3)` }}
      ref={choosUsIntroductionRef}
      variants={choosUsIntroductionVariant}
      initial="hidden"
      animate={choosUsIntroductionAnimation}
    >
      <motion.div className="choose_us_introduction">
        <motion.h1 variants={choosUsIntroductionChildrenVariant}>
          why choose us?
        </motion.h1>
        <motion.h2 variants={choosUsIntroductionChildrenVariant}>
          Fast & easy way to rent a car.
        </motion.h2>
      </motion.div>
      <div id="main__choose__us__container">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`choose_us_container choose_us_container_${i}`}
            variants={choosUsServicesChildrenVariant}
          >
            <div className="choose_us_left_col">
              <div
                className="choose_us_icon_background"
                style={{ backgroundImage: `url(${service.blob})` }}
              >
                <img src={service.icon} alt="choose-us-icons" />
              </div>
            </div>
            <div className="choose_us_right_col">
              <h1> {service.title} </h1>
              <p> {service.slogan} </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
