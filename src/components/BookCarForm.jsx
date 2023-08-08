import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import carIcon from "../images/car-icon.png";
import pin from "../images/pin.png";
import calendar from "../images/calendar.png";
import arrowDown from "../images/arrow-down.png";
import ReservationInquiry from "./ReservationInquiry";
import carFormOptions from "./PropsBookCarForm";

export default function BookCarForm() {
  const formInputRef = useRef(null);
  const calendarRef = useRef(null);
  const [carType, setCarType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [showReservation, setShowReservation] = useState(false);
  const [reserveComplete, setReserveComplete] = useState(false);
  const [showPickupCalendar, setShowPickupCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);

  const { ref: bookCarFormRef, inView: bookCarFormVisible } = useInView({
    threshold: 0.7,
  });

  const bookCarFormAnimation = useAnimation();

  useEffect(() => {
    if (bookCarFormVisible) {
      bookCarFormAnimation.start("visible");
    }
  }, [bookCarFormVisible]);

  const bookCarFormVariant = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  function hideDropDownList() {
    const carOptionLists = document.querySelectorAll(`.car_option_lists`);
    const carFormInputs = document.querySelectorAll(`.car-form-input`);

    carOptionLists.forEach((col) => {
      col.classList.remove("active");
    });

    carFormInputs.forEach((cfi) => {
      cfi.classList.remove("active");
    });
  }

  function correctValidation(e) {
    const link = e.target;
    const name = link.getAttribute("name");
    const carFormInput = document.querySelector(`.car-form-input-${name}`);
    const incorrectValue = document.querySelector(`.incorrect-value-${name}`);

    carFormInput.classList.remove("incorrect");
    carFormInput.classList.add("correct");

    incorrectValue.classList.remove("incorrect");

    if (!incorrectValue.classList.contains("incorrect")) {
      incorrectValue.classList.add("correct");
      return true;
    }
  }

  function ClickOutsideAlert(ref) {
    useEffect(() => {
      let handleClickBody = (e) => {
        const link = e.target;
        const carOptionLists = document.querySelectorAll(`.car_option_lists`);
        const carFormInputs = document.querySelectorAll(`.car-form-input`);

        if (ref && !ref.current.contains(link)) {
          carOptionLists.forEach((col) => {
            if (col.classList.contains("active")) {
              col.classList.remove("active");
            }
          });
          carFormInputs.forEach((cfi) => {
            cfi.classList.remove("active");
          });

          console.log(link);

          setShowPickupCalendar(false);
          setShowReturnCalendar(false);
        }
      };

      document.addEventListener("mousedown", handleClickBody);

      return () => {
        document.removeEventListener("mousedown", handleClickBody);
      };
    }, [ref]);
  }

  ClickOutsideAlert(formInputRef);

  useEffect(() => {
    const carFormInputCols = document.querySelectorAll(`.car_form_input_col`);
    const carOptionLists = document.querySelectorAll(`.car_option_lists`);
    const carFormInputs = document.querySelectorAll(`.car-form-input`);

    let onClickInputCol = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const { name } = e.target;
      const carOptionList = document.querySelector(`.car_option_lists-${name}`);
      const carFormInput = document.querySelector(`.car-form-input-${name}`);

      carOptionLists.forEach((col) => {
        col.classList.remove("active");
        carOptionList.classList.add("active");
      });
      carFormInputs.forEach((cfi) => {
        cfi.classList.remove("active");
        carFormInput.classList.add("active");
      });
    };

    carFormInputCols.forEach((carFormInputCol) => {
      carFormInputCol.addEventListener("mousedown", onClickInputCol);
      return () => {
        carFormInputCol.removeEventListener("mousedown", onClickInputCol);
      };
    });
  });

  const onClickCarTypeList = (e) => {
    const link = e.target;
    const listName = link.textContent;
    setCarType(listName);
    hideDropDownList();

    if (!carType) {
      correctValidation(e);
    }
  };

  const onClickPickUpLocationList = (e) => {
    const link = e.target;
    const listName = link.textContent;
    setPickupLocation(listName);
    hideDropDownList();

    if (!pickupLocation) {
      correctValidation(e);
    }
  };

  const onClickDropOffLocationList = (e) => {
    const link = e.target;
    const listName = link.textContent;
    setReturnLocation(listName);
    hideDropDownList();

    if (!returnLocation) {
      correctValidation(e);
    }
  };

  const onClickPickupDateInput = (e) => {
    setShowPickupCalendar(true);
    setShowReturnCalendar(false);
  };

  const onClickReturnDateInput = (e) => {
    setShowReturnCalendar(true);
    setShowPickupCalendar(false);
  };

  const onChangePickupCalendar = (date) => {
    setShowPickupCalendar(false);
    setPickupDate(date.toDateString());

    const pickupDateInput = document.querySelector(
      `.car-form-input-pick-up-date`
    );
    const incorrectValue = document.querySelector(
      `.incorrect-value-pick-up-date`
    );

    if (!pickupDate || pickupDate) {
      pickupDateInput.classList.remove("incorrect");
      incorrectValue.classList.remove("incorrect");
      pickupDateInput.classList.add("correct");
      incorrectValue.classList.add("correct");
    }
  };

  const onChangeReturnCalendar = (date) => {
    const returnDateInput = document.querySelector(
      `.car-form-input-return-date`
    );
    const incorrectValue = document.querySelector(
      `.incorrect-value-return-date`
    );

    setReturnDate(date.toDateString());

    if (!returnDate || returnDate) {
      returnDateInput.classList.remove("incorrect");
      incorrectValue.classList.remove("incorrect");
      returnDateInput.classList.add("correct");
      incorrectValue.classList.add("correct");
      setShowReturnCalendar(false);
    }
  };

  const onClickSearchButton = (e) => {
    const carFormInputs = document.querySelectorAll(`.car-form-input`);
    const incorrectValue = document.querySelectorAll(`.incorrect-value`);

    carFormInputs.forEach((cfi) => {
      if (!cfi.value) {
        cfi.classList.add("incorrect");
        return false;
      }
    });

    incorrectValue.forEach((iv) => {
      if (!iv.classList.contains("correct")) {
        iv.classList.add("incorrect");
        return false;
      }
    });

    if (
      carType &&
      pickupLocation &&
      returnLocation &&
      pickupDate &&
      returnDate
    ) {
      setShowReservation(true);
      return true;
    }
  };

  useEffect(() => {
    const body = document.querySelector(`body`);

    if (showReservation) {
      body.classList.add("active");
    } else {
      body.classList.remove("active");
    }
  }, [showReservation]);

  return (
    <motion.div
      id="main__book__car__form__container"
      variants={bookCarFormVariant}
      initial="hidden"
      animate={bookCarFormAnimation}
      ref={bookCarFormRef}
      // style={{ background: `rgba(226, 226, 226, .3)` }}
    >
      <div className="book_car_form_parent">
        <div className="book_car_form_introduction">
          <h1>BOOK A CAR</h1>
          <p className={`${reserveComplete && `active`}`}>
            Check your email to confirm your order.
          </p>
        </div>
        <div className="book_car_form_container" ref={formInputRef}>
          <div className="car_form">
            <div className="car_form_title">
              <img src={carIcon} alt="car-icon" />
              <h1>Choose Your Car Type</h1>
            </div>
            <div className={`car_form_input_container`}>
              {carFormOptions.map((carFormOption, i) => (
                <div key={i}>
                  <div className="car_form_input_col">
                    <input
                      className="car-form-input car-form-input-car-type"
                      value={carType}
                      name="car-type"
                      type="text"
                      placeholder="Car type"
                      readOnly
                    />
                    <img
                      src={arrowDown}
                      alt="arrow-down-icon"
                      name="car-type"
                    />
                    <p className={`incorrect-value incorrect-value-car-type`}>
                      Car type required
                    </p>
                  </div>
                  <ul className={`car_option_lists-car-type car_option_lists`}>
                    {carFormOption.carTypes.map((carType, i) => (
                      <li
                        key={i}
                        name="car-type"
                        onClick={(e) => onClickCarTypeList(e, i)}
                      >
                        {carType}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="car_form">
            <div className="car_form_title">
              <img src={pin} alt="pin" />
              <h1>Pick Up</h1>
            </div>
            <div className={`car_form_input_container`}>
              {carFormOptions.map((carFormOption, i) => (
                <div key={i}>
                  <div className={`car_form_input_col`}>
                    <input
                      className="car-form-input car-form-input-pick-up-location"
                      value={pickupLocation}
                      name="pick-up-location"
                      type="text"
                      placeholder="Pick-up Location"
                      readOnly
                    />
                    <img
                      src={arrowDown}
                      alt="arrow-down-icon"
                      name="pick-up-location"
                    />
                    <p
                      className={`incorrect-value incorrect-value-pick-up-location`}
                    >
                      Pick-up location required
                    </p>
                  </div>
                  <ul
                    className={`car_option_lists-pick-up-location car_option_lists`}
                  >
                    {carFormOption.locations.map((location, i) => (
                      <li
                        key={i}
                        name="pick-up-location"
                        onClick={(e) => onClickPickUpLocationList(e, i)}
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="car_form">
            <div className="car_form_title">
              <img src={pin} alt="pin" />
              <h1>Return</h1>
            </div>
            <div className={`car_form_input_container`}>
              {carFormOptions.map((carFormOption, i) => (
                <div key={i}>
                  <div className={`car_form_input_col`}>
                    <input
                      className="car-form-input car-form-input-return-location"
                      value={returnLocation}
                      name="return-location"
                      type="text"
                      placeholder="Return Location"
                      readOnly
                    />
                    <img
                      src={arrowDown}
                      alt="arrow-down-icon"
                      name="return-location"
                    />
                    <p
                      className={`incorrect-value incorrect-value-return-location`}
                    >
                      Return location required
                    </p>
                  </div>
                  <ul
                    className={`car_option_lists-return-location car_option_lists`}
                  >
                    {carFormOption.locations.map((location, i) => (
                      <li
                        key={i}
                        name="return-location"
                        onClick={(e) => onClickDropOffLocationList(e, i)}
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="car_form">
            <div className="car_form_title">
              <img src={calendar} alt="calendar" />
              <h1>Pick Up</h1>
            </div>
            <div
              className={`car_form_input_container car_form_calendar_container`}
            >
              <input
                ref={calendarRef}
                type="text"
                className={`car-form-input car-form-input-pick-up-date`}
                value={pickupDate}
                name="pick-up-date"
                placeholder="Pickup Date"
                onClick={(e) => onClickPickupDateInput(e)}
                readOnly
              />
              <Calendar
                className={`react-calendar react-calendar-pick-up-date ${
                  showPickupCalendar && `active`
                }`}
                value={pickupDate}
                minDate={new Date()}
                onChange={onChangePickupCalendar}
              />
              <p className={`incorrect-value incorrect-value-pick-up-date`}>
                Pick-up date required
              </p>
            </div>
          </div>

          <div className="car_form">
            <div className="car_form_title">
              <img src={calendar} alt="calendar" />
              <h1>Return</h1>
            </div>
            <div
              className={`car_form_input_container car_form_calendar_container`}
            >
              <input
                ref={calendarRef}
                type="text"
                className={`car-form-input car-form-input-return-date`}
                value={returnDate}
                name="return-date"
                placeholder="Return Date"
                onClick={(e) => onClickReturnDateInput(e)}
                readOnly
              />
              <Calendar
                className={`react-calendar react-calendar-return-date ${
                  showReturnCalendar && `active`
                }`}
                value={returnDate}
                minDate={new Date()}
                onChange={onChangeReturnCalendar}
              />
              <p className={`incorrect-value incorrect-value-return-date`}>
                Return date required
              </p>
            </div>
          </div>
          <div className="form_search">
            <button onClick={(e) => onClickSearchButton(e)}>Search</button>
          </div>
        </div>
      </div>
      <div
        className={`reservation_overlay ${
          showReservation ? `active` : `inactive`
        }`}
      />
      <div
        className={`main__reservation__inquiry__container ${
          showReservation && `active`
        }`}
      >
        <ReservationInquiry
          showReservation={showReservation}
          setShowReservation={setShowReservation}
          carType={carType}
          pickupLoc={pickupLocation}
          returnLoc={returnLocation}
          pickupDate={pickupDate}
          returnDate={returnDate}
          setReserveComplete={setReserveComplete}
        />
      </div>
    </motion.div>
  );
}
