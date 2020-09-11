import React, { useState, useEffect } from "react";
import apple from "../images/1 25.png";
import google from "../images/1 26.png";
import "../css/FooterBlock.css";

const FooterBlock = (props) => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <h1 className="footer-header">
            iContribute <h2>We rise by lifting others</h2>
          </h1>
          <div className="footer-appstore-container">
            <a className="footer-appstore">
              <img src={apple} />
            </a>
            <a className="footer-appstore">
              <img src={google} />
            </a>
          </div>
        </div>

        <div className="footer-list-container">
          {" "}
          <ul className="footer-list">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/volunteers">VOLUNTEERS</a>
            </li>
            <li>
              <a href="/nonprofit">NONPROFITS</a>
            </li>
            <li>
              <a href="/contact">CONTACT US</a>
            </li>
          </ul>
          <ul className="footer-list2">
            <li>
              <a href="/ourteam">OUT TEAM</a>
            </li>
            <li>
              <a>TERMS & CONDITIONS</a>
            </li>
            <li>
              <a>PRIVACY POLICY</a>
            </li>
            <li>
              <a>FOLLOW US</a>
            </li>
          </ul>
        </div>
      </div>
      <footer>© 2020 iContribute. All rights reserved.</footer>
    </div>
  );
};

export default FooterBlock;
