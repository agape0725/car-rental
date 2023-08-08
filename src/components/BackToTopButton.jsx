import React, { useState, useEffect } from "react";
import arrowUp from "../images/arrow-up.png";

export default function BackToTopButton() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 650) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
        return;
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`arrow_up_window_container ${backToTop && `active`}`}
      onClick={scrollUp}
    >
      <img className="arrow-up-window" src={arrowUp} alt="arrow-up" />
    </div>
  );
}
