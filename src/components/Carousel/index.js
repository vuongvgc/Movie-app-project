import React, { Component } from "react";
import "./style.css";

export default class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active btn__carousel"
            aria-current="true" aria-label="Slide 1"
          />
          <button
            className="btn__carousel"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            className="btn__carousel"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../img/carousel3.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carouse-item__overlay" />
            <div className="container carousel-item__caption text-white">
              <span className="title">ADVENTURE, FAMILY</span>
              <h1 className="display-4 slider__title">
                The Call Of The Wild
              </h1>
              <p>
                Buck is a big-hearted dog whose blissful domestic life gets turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Alaskan Yukon in the 1890s. As the newest rookie on a mail-delivery dog sled team, Buck experiences the adventure of a lifetime as he ultimately finds his true place in the world.
              </p>
              <div className="carousel-item__trailer mt-4">
                <span className="d-inline-block text-white rounded-circle text-center mr-2">
                  FHD
                </span>
                <button data-fancybox
                  href="https://www.youtube.com/watch?v=5P8R2zAhEwg?t=54" className="btn-orange border-0 text-white">
                  <i className="fa fa-play mr-1" />
                  PLAY TRAILER
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../img/carousel5.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carouse-item__overlay" />
            <div className="container carousel-item__caption text-white">
              <span className="title">ACTION, SCI-FI, FANTASY</span>
              <h1 className="display-4 slider__title">
                Avengers: Infinity War
              </h1>
              <p>
                The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.
              </p>
              <div className="carousel-item__trailer mt-4">
                <span className="d-inline-block text-white rounded-circle text-center mr-2">
                  PG
                </span>
                <button data-fancybox
                  href="https://youtu.be/6ZfuNTqbHE8?t=12" className="btn-orange border-0 text-white">
                  <i className="fa fa-play mr-1" />
                  PLAY TRAILER
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../img/carousel4.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carouse-item__overlay" />
            <div className="container carousel-item__caption text-white">
              <span className="title">ACTION, DRAMA</span>
              <h1 className="display-4 slider__title">
                Greyhound
              </h1>
              <p>
                U.S. Navy Cmdr. Ernest Krause is assigned to lead an Allied convoy across the Atlantic during World War II. His convoy, however, is pursued by German U-boats. Although this is Krause's first wartime mission, he finds himself embroiled in what would come to be known as the longest, largest and most complex naval battle in history: The Battle of the Atlantic.
              </p>
              <div className="carousel-item__trailer mt-4">
                <span className="d-inline-block text-white rounded-circle text-center mr-2">
                  TS
                </span>
                <button data-fancybox
                  href="https://youtu.be/eyzxu26-Wqk?t=20" className="btn-orange border-0 text-white">
                  <i className="fa fa-play mr-1" />
                  PLAY TRAILER
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
