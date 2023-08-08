import React from "react";
import carKeys from "../images/car-keys.jpg";

export default function BookCarBanner() {
  return (
    <div
      id="main__book__car__banner__container"
      style={{ backgroundImage: `url(${carKeys})`}}
    >
      <div className="book_car_banner_container">
        <h1>Book your perfect ride today by getting in touch with us</h1>
        <p>(+63) 998-765-4321</p>
      </div>
    </div>
  );
}
