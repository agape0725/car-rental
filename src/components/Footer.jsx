import React, { useState } from "react";
import { socmeds, hours, contacts } from "./PropsFooter";
import splatter from "../images/splatter.png";

export default function Footer() {
  const [socmedIcon, setSocmedIcon] = useState(null);

  return (
    <div className="splatter_overlay">
      <div
        className="splatter-img"
        style={{ backgroundImage: `url(${splatter})` }}
      />
      <div id="main__footer__container">
        <div className="footer_container">
          <div className="footer_col">
            <h1>AGP Rentals</h1>
            <ul>
              <li>
                Explore the world with ease and flexibility. Rent a car with us
                today, and embark on unforgettable journeys at your own pace!
              </li>
              <div className="footer_soc_med_container">
                {socmeds.map((socmed, i) => (
                  <div
                    key={i}
                    className="footer_soc_med"
                    onMouseEnter={() => setSocmedIcon(i)}
                    onMouseLeave={() => setSocmedIcon(!socmedIcon)}
                  >
                    <img
                      className={`social-media-icons ${
                        socmedIcon === i && `active`
                      }`}
                      src={socmed.mediaIcon}
                      alt={socmed.mediaName}
                    />
                  </div>
                ))}
              </div>
            </ul>
          </div>

          <div className="footer_col">
            <h3>WORKING HOURS</h3>
            <ul>
              {hours.map((hour, i) => (
                <div key={i} className="hours_col">
                  <li>{hour.day}</li>
                  <p>{hour.time}</p>
                </div>
              ))}
            </ul>
          </div>

          <div className="footer_col">
            <h3>CONTACT US</h3>
            <ul>
              {contacts.map((contact, i) => (
                <div key={i} className="contact_us_col">
                  <img src={contact.contactIcon} alt={contact.contactName} />
                  <li>{contact.contactDetail}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
