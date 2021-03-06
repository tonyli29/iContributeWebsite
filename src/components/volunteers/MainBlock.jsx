import React, { useState } from "react";
import PhotoBlock from "../PhotoBlock";
import test from "../../images/anna-earl-cTtE2FlIRoU-unsplash 1.png";
import test2 from "../../images/cristi-tohatan-XIBIC21QeZQ-unsplash 1.png";
import apple from "../../images/1 25.png";
import google from "../../images/1 26.png";
import kidmom from "../../images/kidmom.png";
import test4 from "../../images/photoblock/momkid.png";
import "../../css/VMainBlock.css";

const MainBlock = (props) => {
  const [photo, setPhoto] = useState([
    {
      photo: test4,
      title: "Student Fundraiser",
      location: "Ottawa Community",
      date: "Sun Jun 16, 2021",
      distance: "15 km",
    },
    {
      photo: test2,
      title: "Community Cleaning",
      location: "Ottawa Community",
      date: "Every Saturday in 2021",
      distance: "10 km",
    },
    {
      photo: test,
      title: "Student Volunteer",
      location: "Ottawa Community",
      date: "Sat Jun 16, 2020",
      distance: "10.1 km",
    },
    {
      photo: kidmom,
      title: "Daycare Helper",
      location: "Ottawa Daycare Center",
      date: "Every Sunday in 2021",
      distance: "8 km",
    },
  ]);
  return (
    <div className="main-container-v">
      <div data-aos="fade-up" className="main-info">
        <h1>Find volunteer events effortlessly</h1>
        <p>
          It is easy to get started with us here. After creating an account with
          us, you will be able to browse from a variety of volunteer events.
        </p>
        <a
          href="https://apps.apple.com/ca/app/icontribute/id1524895764?ign-mpt=uo%3D4"
          target="_blank"
          className="appstore"
        >
          <img src={apple} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.icontribute"
          target="_blank"
          className="appstore"
        >
          <img src={google} />
        </a>
      </div>
      <div data-aos="fade-up" className="test">
        <div className="photoblock-scroll-wrapper">
          <div className="photoblock-scroll">
            {photo.map((block, blockId) => {
              return (
                <PhotoBlock
                  key={blockId}
                  photo={block.photo}
                  title={block.title}
                  location={block.location}
                  date={block.date}
                  distance={block.distance}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
