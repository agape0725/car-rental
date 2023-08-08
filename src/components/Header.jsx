import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function Header() {
  const navListRef = useRef(null);
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);

  // HOVER HEADER LISTS
  useEffect(() => {
    const headerLists = document.querySelectorAll(`.header-list`);

    let onMouseEnter = (e) => {
      e.preventDefault();
      const link = e.target;
      headerLists.forEach((headerList) => {
        if (link !== headerList) {
          headerList.style.opacity = 0.5;
        } else {
          headerList.style.opacity = 1;
        }
      });
    };

    headerLists.forEach((headerList) => {
      headerList.addEventListener("mouseenter", onMouseEnter);
      return () => {
        headerList.removeEventListener("mouseenter", onMouseEnter);
      };
    });
  });

  // UNHOVER HEADER LISTS
  useEffect(() => {
    let onMouseOut = (e) => {
      e.preventDefault();
      const headerLists = document.querySelectorAll(`.header-list`);

      headerLists.forEach((headerList) => {
        if (navListRef.current && !navListRef.current.contains(e.target)) {
          headerList.style.opacity = 1;
        }
      });
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
    };
  });

  const { ref: mainHeaderContainerRef, inView: mainHeaderContainerVisible } =
    useInView({
      threshold: 0.3,
    });

  const mainHeaderContainerAnimation = useAnimation();

  useEffect(() => {
    if (mainHeaderContainerVisible) {
      mainHeaderContainerAnimation.start("visible");
    }
  }, [mainHeaderContainerVisible]);

  const containerVariants = {
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

  const containerChildrenVariant = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="main_header_overlay"
      ref={mainHeaderContainerRef}
      variants={containerVariants}
      initial="hidden"
      animate={mainHeaderContainerAnimation}
    >
      <div
        style={{ left: `${showHeaderMenu ? `0` : `130%`}` }}
        className={`header_overlay`}
      />
      <motion.div id={`header__main__container`}>
        <Link to={"/car-rental"} className="logo_container_parent">
          <motion.div
            className={`logo_container`}
            variants={containerChildrenVariant}
          >
            <img
              className={`logo`}
              src={require("../images/vector.png")}
              alt="logo"
            />
            <h1>
              <span>AGP</span> Rentals
            </h1>
          </motion.div>
        </Link>
        <motion.div className="header_ul_container">
          <motion.img
            style={{ left: `${showHeaderMenu ? `92.3%` : `130%`}` }}
            src={`${require(`../images/close-icon.png`)}`}
            alt="close-icon"
            className={`header-close-icon`}
            onClick={() => setShowHeaderMenu(!showHeaderMenu)}
          />
          <motion.ul
            style={{ left: `${showHeaderMenu ? `50%` : `130%`}` }}
            className="nav_list"
          >
            <motion.li
              ref={navListRef}
              variants={containerChildrenVariant}
              className={`header-list`}
              onClick={() => setShowHeaderMenu(false)}
            >
              <Link to={"/car-rental"}>Home</Link>
            </motion.li>
            <motion.li
              ref={navListRef}
              variants={containerChildrenVariant}
              className={`header-list`}
              onClick={() => setShowHeaderMenu(false)}
            >
              <Link to="/about">About</Link>
            </motion.li>
            <motion.li
              ref={navListRef}
              variants={containerChildrenVariant}
              className={`header-list`}
              onClick={() => setShowHeaderMenu(false)}
            >
              <Link to="/cars">Cars</Link>
            </motion.li>
            <motion.li
              ref={navListRef}
              variants={containerChildrenVariant}
              className={`header-list`}
              onClick={() => setShowHeaderMenu(false)}
            >
              <Link to="/services">Services</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className={`header_contact_us_container`}
          variants={containerChildrenVariant}
          whileHover={{
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 10px",
          }}
          transition={{ duration: 0.1 }}
        >
          <button>
            <span>Contact Us</span>
          </button>
        </motion.div>
        <div className="hamburger" onClick={() => setShowHeaderMenu(true)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </motion.div>
    </motion.div>
  );
}
