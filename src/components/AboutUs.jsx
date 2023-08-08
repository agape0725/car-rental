import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamworkImg from "../images/teamwork.jpg";
import destination from "../images/destination.png";
import stackTires from "../images/stack-tire.png";
import { fleets, employees } from "./PropsAboutUs";

function AboutUs() {
  const {
    ref: aboutCompanyContainerRef,
    inView: aboutCompanyContainerVisible,
  } = useInView({
    threshold: 0.5,
  });

  const aboutCompanyContainerAnimation = useAnimation();

  useEffect(() => {
    if (aboutCompanyContainerVisible) {
      aboutCompanyContainerAnimation.start("visible");
    }
  }, [aboutCompanyContainerVisible]);

  const aboutCompanyContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const aboutCompanyLeftColVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const aboutCompanyRightColVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const { ref: carFleetContainer, inView: carFleetContainerVisible } =
    useInView({
      threshold: 1,
    });

  const carFleetContainerAnimation = useAnimation();

  useEffect(() => {
    if (carFleetContainerVisible) {
      carFleetContainerAnimation.start("visible");
    }
  }, [carFleetContainerVisible]);

  const carFleefContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        when: "beforeChildren",
      },
    },
  };

  const carFleetChildrenVariant = {
    hidden: {
      opacity: 0,
      y: -75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 1,
        damping: 9,
      },
    },
  };

  const { ref: teamIntroductionRef, inView: teamIntroductionVisible } =
    useInView({
      threshold: 1,
    });

  const teamIntroductionAnimation = useAnimation();

  useEffect(() => {
    if (teamIntroductionVisible) {
      teamIntroductionAnimation.start("visible");
    }
  }, [teamIntroductionVisible]);

  const teamIntroductionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const teamIntroductionChildrenVariant = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  const { ref: employeeContainerRef, inView: employeeContainerVisible } =
    useInView({
      threshold: 0.45,
    });

  const employeeContainerAnimation = useAnimation();

  useEffect(() => {
    if (employeeContainerVisible) {
      employeeContainerAnimation.start("visible");
    }
  }, [employeeContainerVisible]);

  const employeeContainerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const employeeChildrenVariant = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="main__about__us__container">
      <div className="about_us_container">
        <motion.div
          className="about_company_container"
          variants={aboutCompanyContainerVariant}
          initial="hidden"
          animate={aboutCompanyContainerAnimation}
          ref={aboutCompanyContainerRef}
        >
          <div
            className="destination-img"
            style={{ backgroundImage: `url(${destination})` }}
          />

          <div className="about_company_left_col">
            <motion.div
              className="about_company_left_col_introduction"
              variants={aboutCompanyLeftColVariant}
            >
              <h1>About Company</h1>
              <h2>Excellence in Every Service, Every Time!</h2>
              <p>
                Welcome to AGP Car Rental, your trusted partner in providing
                top-notch car rental services. With a wide range of vehicles and
                flexible rental options, we strive to make your travel
                experience smooth and enjoyable. Whether you need a compact car
                for a quick city trip or a spacious SUV for a family adventure,
                we've got you covered. Explore our website to learn more about
                us and discover why we are the preferred choice for car rental!
              </p>
            </motion.div>
            <motion.div
              className="car_fleet_container"
              variants={carFleefContainerVariant}
              initial="hidden"
              animate={carFleetContainerAnimation}
              ref={carFleetContainer}
            >
              {fleets &&
                fleets.map((fleet, i) => (
                  <motion.div
                    className="car_fleet"
                    variants={carFleetChildrenVariant}
                  >
                    <img src={fleet.icon} alt={fleet.title} />
                    <div className="car_fleet_details">
                      <h1>{fleet.total}</h1>
                      <h2>{fleet.title}</h2>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
          <motion.div
            className="about_company_right_col"
            variants={aboutCompanyRightColVariant}
          >
            <div
              className="teamwork-img"
              style={{ backgroundImage: `url(${teamworkImg})` }}
            />
          </motion.div>
        </motion.div>

        <div className="team_container">
          <div
            className="stack_tires"
            style={{ backgroundImage: `url(${stackTires})` }}
          />
          <motion.div
            className="team_introduction"
            variants={teamIntroductionVariant}
            initial="hidden"
            animate={teamIntroductionAnimation}
            ref={teamIntroductionRef}
          >
            <motion.h1 variants={teamIntroductionChildrenVariant}>
              Meet our team
            </motion.h1>
            <motion.p variants={teamIntroductionChildrenVariant}>
              Allow us to introduce you to our exceptional team! With a diverse
              group of talented individuals, we are united in our passion to
              deliver top-notch service and exceed your expectations. Together,
              we strive to make your experience with us truly memorable and
              enjoyable.
            </motion.p>
          </motion.div>
          <motion.div
            className="employee_container"
            variants={employeeContainerVariant}
            initial="hidden"
            animate={employeeContainerAnimation}
            ref={employeeContainerRef}
          >
            {employees.map((employee, i) => (
              <motion.div
                key={i}
                className="team-employee"
                variants={employeeChildrenVariant}
                style={{ backgroundImage: `url(${employee.employeeImg})` }}
              >
                <div className="employee_details">
                  <h2>{employee.name}</h2>
                  <h3>{employee.position}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
