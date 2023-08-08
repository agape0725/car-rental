import React, { useState, useEffect, useRef } from "react";
import faqs from "./PropsAccordion";
import arrowIcon from "../images/arrow-down.png";
import benzImg from "../images/benz.png";

export default function Accordion() {
  const [showAnswer, setShowAnswer] = useState(0);

  function toggleHideAnswer(e) {
    const link = e.target;
    const faqsQuestionContainer = link.parentElement;
    const faqsDetailContainer = faqsQuestionContainer.parentElement;

    faqsDetailContainer.children[1].classList.toggle("active");
    faqsQuestionContainer.children[0].classList.toggle("active");
    faqsQuestionContainer.children[1].classList.toggle("active");
  }

  const onClickFaqQuestion = (e, id) => {
    setShowAnswer(id);
    toggleHideAnswer(e);
  };

  const onClickFaqArrow = (e, id) => {
    setShowAnswer(id);
    toggleHideAnswer(e);
  };

  return (
    <div className="track_overlay_container_2">
      <div
        className="benz"
        style={{ backgroundImage: `url(${benzImg})` }}
      />
      <div
        id="main__accordion__container"
        style={{ background: `rgba(226, 226, 226, .3)` }}
      >
        <div className="accordion_introduction_container">
          <h1>Frequently Asked Questions</h1>
          <h2>
            Welcome to our Frequently Asked Questions (FAQ) section! We
            understand that you may have questions about our services, policies,
            or any other aspect of our car rental. That's why we've compiled
            this comprehensive list of common inquiries to provide you with
            quick and helpful answers.
          </h2>
        </div>
        <div className="accordion_container">
          <div className="main_faqs_detail_container">
            {faqs.map((faq, i) => (
              <div key={i} className="faqs_detail_container">
                <div className="faq_question_container">
                  <h1
                    className={`faq-question ${showAnswer === i && `active`}`}
                    onClick={(e) => onClickFaqQuestion(e, i)}
                  >
                    {faq.question}
                  </h1>
                  <img
                    className={`faqs-arrow ${showAnswer === i && `active`}`}
                    src={arrowIcon}
                    onClick={(e) => onClickFaqArrow(e, i)}
                    alt="arrow-icon"
                  />
                </div>
                <p className={`faq-answer ${showAnswer === i && `active`}`}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
