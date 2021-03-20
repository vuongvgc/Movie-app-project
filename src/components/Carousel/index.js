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
              <span className="title">ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4 slider__title">
                End of the World: Part I
              </h1>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirumest notare quam littera gothica,
                quam nunc putamu.
              </p>
              <div className="carousel-item__trailer mt-4">
                <span className="d-inline-block text-white rounded-circle text-center mr-2">
                  PG
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
              <span className="title">ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4 slider__title">
                End of the World: Part I
              </h1>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirumest notare quam littera gothica,
                quam nunc putamu.
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
              <span className="title">ACTION, ADVENTURE, FANTASY</span>
              <h1 className="display-4 slider__title">
                End of the World: Part I
              </h1>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirumest notare quam littera gothica,
                quam nunc putamu.
              </p>
              <div className="carousel-item__trailer mt-4">
                <span className="d-inline-block text-white rounded-circle text-center mr-2">
                  PG
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
