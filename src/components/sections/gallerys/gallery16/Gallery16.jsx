import React from "react";
import "./gallery16.css";
import { useSelector } from "react-redux";

const Gallery16 = () => {
  const { Gallary } = useSelector((state) => state.template16);

  return (
    <section className="gallery16 section16" id="gallery">
      <h2 className="section__title16" data-title="Gallery">
        Our Photo Gallery
      </h2>
      <div className="gallery__grid16 container16 grid16">
        {Gallary.Gallary.map(({ title, image }, index) => {
          return (
            <div className="gallery__item16" key={index}>
              <img src={image} alt="" className="gallery_img16" />
              <a href="/" className="gallery__icon16">
                {/* Replace react-icons with Unicode character */}
                &#43;
              </a>
              <h3 className="gallery__title16">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery16;