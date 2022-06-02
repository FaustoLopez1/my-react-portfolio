import React from "react";
import "../../styles/Portfolio.css";

const portfolioItems = [
  {
    title: "The Fit Blog",
    link: "https://warm-forest-60978.herokuapp.com",
    className: "img1",
    github: "https://github.com/FaustoLopez1/fit-blog",
  },
  {
    title: "Streaming Services",
    link: "https://magiscoding2113.github.io/streaming-service-tracker/",
    className: "img2",
    github: "https://github.com/magiscoding2113/streaming-service-tracker",
  },
  {
    title: "Weather Forecast",
    link: "https://faustolopez1.github.io/weather_forecast/",
    className: "img3",
    github: "https://github.com/FaustoLopez1/weather_forecast",
  },
  {
    title: "Scheduler",
    link: "https://faustolopez1.github.io/Scheduler/",
    className: "img4",
    github: "https://github.com/FaustoLopez1/Scheduler",
  },
  {
    title: "Ecommerce back end",
    link: "",
    className: "img5",
    github: "https://github.com/FaustoLopez1/ecommerce-back-end",
  },
];

const goToSite = (link) => {
  window.open(link);
};

export default function Portfolio() {
  return (
    <div className="body">
      <h1>Portfolio</h1>
      <div className="item-wrapper">
        {portfolioItems.map((item, index) => {
          return (
            <div key={index} className={`portfolio-item ${item.className}`}>
              <div onClick={() => goToSite(item.link)}>{item.title}</div>
              <div
                onClick={() => goToSite(item.github)}
                className="github-icon"
              >
                <img
                  src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-9/283851984_720368602341714_2442342044526803514_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ShDFTT0E2bkAX-vtnHK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-lax3-2.xx&oh=03_AVLeevmRmUfrAHFobaGXOuI8CYJq-guQzZTo6inRMFGVbg&oe=62BDE76E"
                  alt="Github"
                  className="icon"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
