import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import representations from "./PropsCarRepresentation";
import stackTires from "../images/stack-tire.png";

export default function CarDetail() {
  const { name } = useParams();
  const history = useNavigate();
  const rep = representations.find((rep) => rep.carName == name);
  const { carName, carIntroduction, src, price, details } = rep;

  const [mainImage, setMainImage] = useState(false);

  const onClickThumbnailImages = (e, i) => {
    const link = e.target;
    const carDetailMainImage = document.querySelector(`.car-detail-main-image`);
    const thumbnailImages = document.querySelectorAll(`.thumbnail-images`);
    carDetailMainImage.src = link.dataset.src;
    carDetailMainImage.dataset.src = link.dataset.src;

    thumbnailImages.forEach((image, i) => {
      image.classList.remove("active");

      if (carDetailMainImage.dataset.src == link.dataset.src) {
        link.classList.add("active");
        setMainImage(true);
      }
    });
  };

  useEffect(() => {
    const carDetailMainImage = document.querySelector(`.car-detail-main-image`);
    const thumbnailImages = document.querySelectorAll(`.thumbnail-images`);

    thumbnailImages.forEach((image, i) => {
      image.classList.remove("active");

      if (carDetailMainImage.dataset.src == image.dataset.src) {
        image.classList.add("active");
      }
    });
  }, []);

  return (
    <div id="main__car__detail__container">
      <div className="car_detail_container">
        <div
          className="stack_tires_2"
          style={{ backgroundImage: `url(${stackTires})` }}
        />
        <div className="car_detail_left_col">
          <img
            className={`car-detail-main-image ${mainImage && `active`}`}
            src={src[0]}
            data-src={src[0]}
            alt="car-main"
          />
          <div className="car_detail_thumbnail_container">
            {src.map((images, i) => (
              <img
                onMouseEnter={() => setMainImage(false)}
                className={`thumbnail-images thumbnail-image-${i}`}
                key={i}
                data-src={images}
                src={images}
                onClick={(e) => onClickThumbnailImages(e, i)}
              />
            ))}
          </div>
          <motion.button
            onClick={() => history(-1)}
            whileHover={{
              boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 10px",
            }}
            transition={{ duration: 0.1 }}
          >
            GO BACK
          </motion.button>
        </div>
        <div className="car_detail_right_col">
          <div className="car_detail_right_divs car_detail_title_container">
            <h1>{carName}</h1>
            <div className="car_detail_ratings_container">
              <img src={details.icons.starIcon} alt="star-icon" />
              <p>{details.detail.reviews} (Reviews)</p>
            </div>
          </div>
          <div className="car_detail_right_divs car_detail_details_container">
            <h2>CAR DETAILS</h2>
            <ul>
              <li>
                Brand: <span>{details.detail.carBrand}</span>
              </li>
              <li>
                Fuel: <span>{details.detail.fuel}</span>
              </li>
              <li>
                Air-condition: <span>Yes</span>
              </li>
              <li>
                Transmission: <span>{details.detail.transmission}</span>
              </li>

              <li>
                Seating Capacity: <span>{details.detail.seat}</span>
              </li>
              <li>
                Rental Price: <span>{price}</span>
              </li>
            </ul>
          </div>
          <div className="car_detail_right_divs car_detail_description_container">
            <h2>CAR DESCRIPTION</h2>
            <p>{carIntroduction}</p>
          </div>
          <div className="car_detail_button_container">
            <Link to={"/"}>
              <motion.button
                whileHover={{
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 10px",
                }}
                transition={{ duration: 0.1 }}
              >
                BOOK CAR
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
