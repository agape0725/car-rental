import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function HeaderBanner(props) {
  const { ref: headerBannerRef, inView: headerBannerVisible } = useInView({
    threshold: 0.1,
  });

  const headerBannerAnimation = useAnimation();

  useEffect(() => {
    if (headerBannerVisible) {
      headerBannerAnimation.start("visible");
    }
  }, [headerBannerVisible]);

  const headerBannerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="header_banner"
      style={{ backgroundImage: `url(${props.carHeader})` }}
      variants={headerBannerVariants}
      initial="hidden"
      animate={headerBannerAnimation}
      ref={headerBannerRef}
    >
      <h1>{props.title}</h1>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        
      >
        <path
          fill={props.pathColor}
          fillOpacity="1"
          
          d="M0,64L80,80C160,96,320,128,480,138.7C640,149,800,139,960,128C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </motion.div>
  );
}
