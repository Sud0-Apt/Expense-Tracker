import React from "react";
import { Link } from "react-router-dom";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Dashboard",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      link: "/dashboard"
    },
    // {
    //   image: ChooseMeals,
    //   title: "",
    //   text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    // },
    // {
    //   image: DeliveryMeals,
    //   title: "Fast Deliveries",
    //   text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    // },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <Link to={data.link} key = {data.title} className="work-section-info-link">
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
