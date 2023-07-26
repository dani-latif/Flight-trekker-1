import React from "react";
import Slider from "react-slick";
import axios from "axios";
import "./companies.css";
import { useState, useEffect } from "react";

const Companies = () => {
  const [webJobs, setwebJobs] = useState([].slice(0, 20));

  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs?limit=1000")
      .then((res) => {
        console.log("Web data has been retrived");
        setwebJobs(res.data.jobs);
        console.log(webJobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const displayJobss = (
    <div>
      <Slider {...settings}>
        {webJobs.map((jobs) => {
          return (
            <div>
              <a href={jobs.url}>
                <img
                  className="img-comapanies-logo"
                  src={jobs.company_logo}
                  alt=""
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );

  return (
    <section>
      <div>
        <h4 className="company-title">
          <span className="green-text ">Companies</span> Hiring in Pakistan
        </h4>

        {displayJobss}
      </div>
    </section>
  );
};

export default Companies;
