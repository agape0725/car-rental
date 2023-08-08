import React, { useState, useEffect, useRef } from "react";
import closeIcon from "../images/close-icon.png";
import information from "../images/information.png";
import carFormOptions from "./PropsBookCarForm";
import checkIcon from "../images/checked.png";

export default function ReservationInquiry(props) {
  const lettersOnly = /^[a-zA-Z ]*$/;
  const blankSpace = /^\s+$/;
  const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mainReservationInquiryRef = useRef(null);
  const detailContainerRef = useRef(null);

  const [pickupTime, setPickupTime] = useState("");
  const [pickupMeridian, setPickupMeridian] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [returnMeridian, setReturnMeridian] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [activePickupTime, setActivePickupTime] = useState(false);
  const [activeDropoffTime, setActiveDropoffTime] = useState(false);

  function ClickOutsideAlert(ref) {
    useEffect(() => {
      let handleClickBody = (e) => {
        const link = e.target;

        if (ref && !ref.current.contains(link)) {
          props.setShowReservation(false);
        }
      };

      document.addEventListener("mousedown", handleClickBody);

      return () => {
        document.removeEventListener("mousedown", handleClickBody);
      };
    }, [ref]);
  }

  ClickOutsideAlert(mainReservationInquiryRef);

  function incorrectValidation(e, message) {
    e.preventDefault();
    const link = e.target;
    const parentElement = link.parentElement;
    const checkedIcon = parentElement.children[1];
    const incorrectValue = parentElement.children[2];

    link.classList.add("incorrect");
    incorrectValue.classList.add("incorrect");
    incorrectValue.classList.remove("correct");
    incorrectValue.textContent = message;
    checkedIcon.classList.remove("active");
  }

  function correctValidation(e) {
    e.preventDefault();
    const link = e.target;
    const parentElement = link.parentElement;
    const checkedIcon = parentElement.children[1];
    const incorrectValue = parentElement.children[2];

    link.classList.remove("incorrect");
    link.classList.add("correct");
    incorrectValue.classList.remove("incorrect");
    incorrectValue.classList.add("correct");
    checkedIcon.classList.add("active");
  }

  function timeMeridianValidation(e) {
    e.preventDefault();
    const link = e.target;
    const name = link.getAttribute("name");
    const timeMeridianInput = document.querySelector(`.${name}-input`);

    timeMeridianInput.classList.remove("incorrect");
    timeMeridianInput.classList.add("correct");
  }

  function hideDropDownList() {
    const timeListContainers = document.querySelectorAll(
      `.time_lists_container`
    );
    const timeMeridianInputs =
      document.querySelectorAll(`.time-meridian-input`);

    timeListContainers.forEach((tlc) => {
      tlc.classList.remove("active");
    });

    timeMeridianInputs.forEach((tmi) => {
      tmi.classList.remove("active");
    });
  }

  function HideDropDown(ref) {
    useEffect(() => {
      let handleClickBody = (e) => {
        const link = e.target;

        if (ref && !ref.current.contains(link)) {
          hideDropDownList();
        }
      };

      document.addEventListener("mousedown", handleClickBody);

      return () => {
        document.removeEventListener("mousedown", handleClickBody);
      };
    }, [ref]);
  }

  HideDropDown(detailContainerRef);

  useEffect(() => {
    const timeMeridianInputs =
      document.querySelectorAll(`.time-meridian-input`);
    const timeListContainers = document.querySelectorAll(
      `.time_lists_container`
    );

    let handleClickTimeMeridian = (e) => {
      e.preventDefault();
      const { name } = e.target;

      const timeListContainer = document.querySelector(`.${name}_lists`);
      const timeMeridianInput = document.querySelector(`.${name}-input`);

      timeListContainers.forEach((tlc) => {
        tlc.classList.remove("active");
        timeListContainer.classList.add("active");
      });

      timeMeridianInputs.forEach((tmi) => {
        tmi.classList.remove("active");
        timeMeridianInput.classList.add("active");
      });
    };

    timeMeridianInputs.forEach((timeMeridianInput) => {
      timeMeridianInput.addEventListener("mousedown", handleClickTimeMeridian);

      return () => {
        timeMeridianInput.removeEventListener(
          "mousedown",
          handleClickTimeMeridian
        );
      };
    });
  });

  useEffect(() => {
    const detailInputs = document.querySelectorAll(`.personal-detail-input`);

    let handleClick = (e) => {
      hideDropDownList();
    };

    detailInputs.forEach((di, i) => {
      di.addEventListener("mousedown", handleClick);

      return () => {
        di.removeEventListener("mousedown", handleClick);
      };
    });
  }, []);

  const onClickPickupTimeList = (e) => {
    e.preventDefault();
    const link = e.target;
    const listName = link.textContent;
    setPickupTime(listName);
    hideDropDownList();
    setActivePickupTime(false);

    if (!pickupTime) {
      timeMeridianValidation(e);
    }
  };

  const onClickPickupMeridianList = (e) => {
    e.preventDefault();
    const link = e.target;
    const listName = link.textContent;
    setPickupMeridian(listName);
    hideDropDownList();
    setActivePickupTime(false);

    if (!pickupMeridian) {
      timeMeridianValidation(e);
    }
  };

  const onClickReturnTimeList = (e) => {
    e.preventDefault();
    const link = e.target;
    const listName = link.textContent;
    setReturnTime(listName);
    hideDropDownList();
    setActiveDropoffTime(false);

    if (!returnTime) {
      timeMeridianValidation(e);
    }
  };

  const onClickReturnMeridianList = (e) => {
    e.preventDefault();
    const link = e.target;
    const listName = link.textContent;
    setReturnMeridian(listName);
    hideDropDownList();
    setActiveDropoffTime(false);

    if (!returnMeridian) {
      timeMeridianValidation(e);
    }
  };

  const handleChangeFirstName = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setFirstName(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "First name is required");
      return false;
    } else if (!value.match(lettersOnly)) {
      incorrectValidation(e, "First name consists of letters only");
      return false;
    }

    correctValidation(e);
    return true;
  };

  const handleChangeLastName = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setLastName(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "Last name is required");
      return false;
    } else if (!value.match(lettersOnly)) {
      incorrectValidation(e, "Last name consists of letters only");
      return false;
    }

    correctValidation(e);
    return true;
  };

  const handleChangePhoneNumber = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPhoneNumber(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "Phone number is required");
      return false;
    } else if (value.length != 11) {
      incorrectValidation(e, "Phone number consist of 11 digits");
      return false;
    }

    correctValidation(e);
    return true;
  };

  const handleChangeAge = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setAge(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "Age is required");
      return false;
    } else if (Number(value) < 21) {
      incorrectValidation(
        e,
        "Persons under the age of 21 are not permitted to drive"
      );
      return false;
    }

    correctValidation(e);
    return true;
  };

  const handleChangeEmail = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setEmail(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "Email address is required");
      return false;
    } else if (!value.match(emailFormat)) {
      incorrectValidation(e, "Incorrect email format");
      return false;
    }

    correctValidation(e);
    return true;
  };

  const handleChangeAddress = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setAddress(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "Address is required");
      return false;
    }

    correctValidation(e);
    return true;
  };

  const handleChangeCity = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setCity(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "City is required");
      return false;
    } else if (!value.match(lettersOnly)) {
      incorrectValidation(e, "City consists of letters only");
      return false;
    }

    correctValidation(e);
    return true;
  };

  const handleChangeZipCode = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setZipCode(value);

    if (!value || value.match(blankSpace)) {
      incorrectValidation(e, "Zip code is required");
      return false;
    }

    correctValidation(e);
    return true;
  };

  const onClickReserveButton = (e) => {
    e.preventDefault();
    const timeMeridianInputs =
      document.querySelectorAll(`.time-meridian-input`);
    const personalDetailInputs = document.querySelectorAll(
      `.personal-detail-input`
    );
    const errorMessages = document.querySelectorAll(`.error-message`);

    timeMeridianInputs.forEach((timeMeridianInput) => {
      if (!timeMeridianInput.value) {
        timeMeridianInput.classList.add("incorrect");
        return false;
      }
    });

    personalDetailInputs.forEach((personalDetailInput) => {
      if (!personalDetailInput.value) {
        personalDetailInput.classList.add("incorrect");
      }

      if (personalDetailInput.classList.contains("incorrect")) {
        errorMessages.forEach((errorMessage) => {
          errorMessage.classList.add("incorrect");
        });
      }
    });

    errorMessages.forEach((errorMessage) => {
      if (errorMessage.classList.contains("incorrect")) {
        errorMessage.classList.add("incorrect");
      }
    });

    if (!pickupTime || !pickupMeridian) {
      setActivePickupTime(true);
    }

    if (!returnTime || !returnMeridian) {
      setActiveDropoffTime(true);
    }

    if (
      pickupTime &&
      pickupMeridian &&
      returnTime &&
      returnMeridian &&
      firstName &&
      lastName &&
      phoneNumber &&
      age &&
      email &&
      address &&
      city &&
      zipCode
    ) {
      props.setReserveComplete(true);
      props.setShowReservation(false);
      return true;
    }
  };

  return (
    <div ref={mainReservationInquiryRef}>
      <div className="reservation_inquiry_introduction">
        <h1>COMPLETE RESERVATION</h1>
        <img
          src={closeIcon}
          alt="close-icon"
          onClick={() => props.setShowReservation(false)}
        />
      </div>
      <div className="reservation_information">
        <div className="reservation_information_leftcol">
          <img src={information} alt="info-icon" />
          <h1>Upon completing this reservartion field, you will receive:</h1>
        </div>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      <div className="reservation_details_container">
        <div className="detail_col">
          <h1 className="details-title">CAR TYPE</h1>
          <div className="detail_container detail_container_car_model">
            <p id="chosen-car-type">{props.carType}</p>
            <img
              className={`reservation-car-type-image`}
              src={require(`../images/car-models/${
                props.showReservation === true
                  ? `${props.carType.split(" ")[1].toLowerCase()}`
                  : `vios`
              }.png`)}
              alt={props.carType}
            />
          </div>
        </div>

        <div className="detail_col">
          <h1 className="details-title">LOCATION AND DATE</h1>
          <div className="detail_container detail_container_location">
            <div className="reservation_location_date_container">
              <h1>Pick-up Location</h1>
              <p>{props.pickupLoc}</p>
            </div>
            <div className="reservation_location_date_container">
              <h1>Return Location</h1>
              <p>{props.returnLoc}</p>
            </div>
            <div className="reservation_location_date_container">
              <h1>Pick-up Date</h1>
              <p>{props.pickupDate}</p>
            </div>
            <div className="reservation_location_date_container">
              <h1>Return Date</h1>
              <p>{props.returnDate}</p>
            </div>
          </div>
        </div>

        <div
          className="main__pickup__return__time__container"
          ref={detailContainerRef}
        >
          <div className={`reservation_location_date_container`}>
            {carFormOptions.map((carFormOption, i) => (
              <div key={i}>
                <h1>
                  Pick-up Time <span>*</span>
                </h1>
                <div className="time_meridian_container">
                  <div className="time_container pick_up_time_container">
                    <input
                      className={`time-meridian-input pick-up-time-input`}
                      type="text"
                      value={pickupTime}
                      name="pick-up-time"
                      placeholder="Time"
                      readOnly
                    />
                    <ul className={`pick-up-time_lists time_lists_container`}>
                      {carFormOption.time.map((t, i) => (
                        <p
                          key={i}
                          name="pick-up-time"
                          onClick={(e) => onClickPickupTimeList(e)}
                        >
                          {t}
                        </p>
                      ))}
                    </ul>
                  </div>
                  <div className="time_container pick_up_meridian_container">
                    <input
                      className={`time-meridian-input pick-up-meridian-input`}
                      type="text"
                      value={pickupMeridian}
                      name="pick-up-meridian"
                      placeholder="AM / PM"
                      readOnly
                    />
                    <ul
                      className={`pick-up-meridian_lists time_lists_container`}
                    >
                      {carFormOption.meridian.map((m, i) => (
                        <p
                          key={i}
                          name="pick-up-meridian"
                          onClick={(e) => onClickPickupMeridianList(e)}
                        >
                          {m}
                        </p>
                      ))}
                    </ul>
                  </div>
                  <h3
                    className={`error-message pick-up-error-message ${
                      activePickupTime ? `incorrect` : `correct`
                    }`}
                  >
                    Pick-up time required
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="reservation_location_date_container">
            {carFormOptions.map((carFormOption, i) => (
              <div key={i}>
                <h1>
                  Return Time <span>*</span>
                </h1>

                <div className="time_meridian_container">
                  <div className="time_container">
                    <input
                      className={`time-meridian-input return-time-input`}
                      type="text"
                      value={returnTime}
                      name="return-time"
                      placeholder="Time"
                      readOnly
                    />
                    <ul className={`return-time_lists time_lists_container`}>
                      {carFormOption.time.map((t, i) => (
                        <p
                          key={i}
                          name="return-time"
                          onClick={(e) => onClickReturnTimeList(e)}
                        >
                          {t}
                        </p>
                      ))}
                    </ul>
                  </div>
                  <div className="time_container">
                    <input
                      className={`time-meridian-input return-meridian-input`}
                      type="text"
                      value={returnMeridian}
                      name="return-meridian"
                      placeholder="AM / PM"
                      readOnly
                    />
                    <ul
                      className={`return-meridian_lists time_lists_container`}
                    >
                      {carFormOption.meridian.map((m, i) => (
                        <p
                          key={i}
                          name="return-meridian"
                          onClick={(e) => onClickReturnMeridianList(e)}
                        >
                          {m}
                        </p>
                      ))}
                    </ul>
                  </div>
                  <h3
                    className={`error-message return-error-message ${
                      activeDropoffTime ? `incorrect` : `correct`
                    }
                      }`}
                  >
                    Return time required
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="detail_col">
          <h1 className="details-title">PERSONAL INFORMATION</h1>
          <div className="detail_container detail_container_personal_detail">
            <div className="reservation_personal_detail_container">
              <h1>
                First name <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input input-firstname"
                  name="firstname"
                  value={firstName}
                  type="text"
                  placeholder="John"
                  onChange={(e) => handleChangeFirstName(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className={`error-message`}>First name is required</p>
              </div>
            </div>

            <div className="reservation_personal_detail_container">
              <h1>
                Last name <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input input-lastname"
                  name="lastname"
                  value={lastName}
                  type="text"
                  placeholder="Doe"
                  onChange={(e) => handleChangeLastName(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className={`error-message`}>Last name is required</p>
              </div>
            </div>

            <div className="reservation_personal_detail_container">
              <h1>
                Phone number <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input input-phonenumber"
                  name="phonenumber"
                  value={phoneNumber}
                  type="number"
                  inputMode="numeric"
                  placeholder="09987654321"
                  onChange={(e) => handleChangePhoneNumber(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className={`error-message`}>Phone number is required</p>
              </div>
            </div>

            <div className="reservation_personal_detail_container">
              <h1>
                Age <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input input-age"
                  name="age"
                  value={age}
                  type="number"
                  inputMode="numeric"
                  placeholder="Should be 21 or above"
                  onChange={(e) => handleChangeAge(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className="error-message">Age is required</p>
              </div>
            </div>

            <div className="reservation_personal_detail_container">
              <h1>
                Email <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input input-email"
                  name="email"
                  value={email}
                  type="text"
                  placeholder="johndoe123@yahoo.com"
                  onChange={(e) => handleChangeEmail(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className="error-message">Email address is required</p>
              </div>
            </div>

            <div className="reservation_personal_detail_container">
              <h1>
                Address <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input input-address"
                  name="address"
                  value={address}
                  type="text"
                  placeholder="123 Main Street"
                  onChange={(e) => handleChangeAddress(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className="error-message">Address is required</p>
              </div>
            </div>

            <div className="reservation_personal_detail_container">
              <h1>
                City <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input city-input"
                  name="city"
                  value={city}
                  type="text"
                  placeholder="Anytown"
                  onChange={(e) => handleChangeCity(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className="error-message">City is required</p>
              </div>
            </div>

            <div className="reservation_personal_detail_container">
              <h1>
                Zip code <span>*</span>
              </h1>

              <div className="personal_detail_input_container">
                <input
                  className="personal-detail-input zip-input"
                  name="zip"
                  value={zipCode}
                  type="number"
                  inputMode="numeric"
                  placeholder="17101"
                  onChange={(e) => handleChangeZipCode(e)}
                />
                <img src={checkIcon} alt="check-icon" />
                <p className="error-message">Zip code is required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reserve_button_container">
        <button onClick={(e) => onClickReserveButton(e)}>RESERVE</button>
      </div>
    </div>
  );
}
