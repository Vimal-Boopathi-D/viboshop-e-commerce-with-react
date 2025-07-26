import React from "react";
import img01 from "../assets/images/app/01.jpg";
import img02 from "../assets/images/app/02.jpg";
import { Link } from "react-router-dom";
const btnText = "Sign up for free";
const title = "Shop Anytime, Anywhere";
const desc =
  "Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="#">
                <img src={img01} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={img02} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
