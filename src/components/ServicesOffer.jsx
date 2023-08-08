// import React from "react";
// import services from "./PropsServicesOffer";

// export default function ServicesOffer() {
//   return (
//     <div id="main__services__offer__container">
//       <div className="services_offer_container">
//         <div className="services_offer_introduction">
//           <h1>what we do</h1>
//           <h2>WE ALSO PROVIDE SERVICES</h2>
//         </div>
//         <div className="services_lists_container">
//           {services.map((service, i) => (
//             <div className={`sevices_lists`}>
//               <div
//                 className="services-icon"
//                 style={{ backgroundImage: `url(${service.icon})` }}
//               />
//               <div className="services_left_col">
//                 <h1>{service.title}</h1>
//                 <p>{service.description}</p>
//               </div>
//               <div className={`services_right_col`}>
//                 <img
//                   className={`services-image`}
//                   src={service.photo}
//                   alt="serices-image"
//                 />
//                 <div
//                   className="services-image-2"
//                   style={{ backgroundImage: `url(${service.miniPhoto})` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

//////////////////

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Media from "react-media";
import closeIcon from "../images/close.png";
import services from "./PropsServicesOffer";

export default function ServicesOffer() {
  const [description, setDescription] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const onClickServicesListMq = (e, i) => {
    setDescription(i);
    setShowDescription(true);
  };

  const { ref: servicesIntroductionRef, inView: servicesIntroductionVisible } =
    useInView({
      threshold: 0.5,
    });
  const servicesIntroductionAnimation = useAnimation();

  useEffect(() => {
    if (servicesIntroductionVisible) {
      servicesIntroductionAnimation.start("visible");
    }
  }, [servicesIntroductionVisible]);

  const servicesIntroductionVariant = {
    hidden: {
      // opacity: 0,
    },
    visible: {
      // opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const servicesIntroductionChildrenVariant = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const options = {
    root: null,
    threshold: 0.7,
    rootMargin: "0px",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, options);

    const serviceLists = document.querySelectorAll(`.sevices_lists`);
    serviceLists.forEach((servicesList) => {
      observer.observe(servicesList);
    });

    return () => {
      serviceLists.forEach((servicesList) => {
        observer.unobserve(servicesList);
      });
    };
  }, []);

  return (
    <div id="main__services__offer__container">
      <div className="services_offer_container">
        <motion.div
          className="services_offer_introduction"
          ref={servicesIntroductionRef}
          variants={servicesIntroductionVariant}
          initial="hidden"
          animate={servicesIntroductionAnimation}
        >
          <motion.h1 variants={servicesIntroductionChildrenVariant}>
            what we do
          </motion.h1>
          <motion.h2 variants={servicesIntroductionChildrenVariant}>
            WE ALSO PROVIDE SERVICES
          </motion.h2>
        </motion.div>
        <Media query="(min-width: 768px)">
          {(matches) => {
            return matches ? (
              <div className="services_lists_container">
                {services.map((service, i) => (
                  <div className={`sevices_lists`} key={i}>
                    <div
                      className="services-icon"
                      style={{ backgroundImage: `url(${service.icon})` }}
                    />
                    <div className="services_left_col">
                      <h1>{service.title}</h1>
                      <p>{service.description}</p>
                    </div>
                    <div className={`services_right_col`}>
                      <img
                        className={`services-image`}
                        src={service.photo}
                        alt="services-image"
                      />
                      <div
                        className="services-image-2"
                        style={{ backgroundImage: `url(${service.miniPhoto})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="services_lists_container_mq">
                {services.map((service, i) => (
                  <div className="services_lists" key={i}>
                    <div
                      className={`sevices_lists_mq`}
                      onClick={(e) => onClickServicesListMq(e, i)}
                    >
                      <h1>{service.title}</h1>
                      <img
                        className="services-image-mq"
                        src={service.photo}
                        alt="services-image"
                      />
                    </div>
                    <div id={`main__services__open__container_mq`}>
                      {description === i && (
                        <div
                          className={`services_open_container_mq ${
                            showDescription && `active`
                          }`}
                        >
                          <div
                            className="services_image_container_mq"
                            style={{
                              backgroundImage: `url(${service.miniPhoto})`,
                            }}
                          >
                            <div className="services_image_top_row_mq">
                              <h1>{service.title}</h1>
                              <img
                                src={closeIcon}
                                alt="close-icon"
                                onClick={() => setDescription(!description)}
                              />
                            </div>
                            <p>{service.description}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          }}
        </Media>
      </div>
    </div>
  );
}
