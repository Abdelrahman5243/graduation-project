import React from "react";
import "../testimonials11/testimonials11.css";

const Testimonials11 = ({ template }) => {
  const testimonials = template.testimonials.testimonials;

  return (
    <section className="testimonials11 container section11" id="testimonials">
      <h2 className="section__title11">{template.testimonials.title}</h2>
      <div className="testimonials__container grid11">
        {testimonials.map((testimonial, index) => (
          <div className="testimonials__item11" key={index}>
            <div className="thumb11">
              <img src={testimonial.imgUrl} alt="" />
            </div>
            <div className="content11">
              <h3 className="testimonials__title11">{testimonial.name}</h3>
              <span className="subtitle11">{testimonial.subtitle}</span>
              <p className="comment11">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials11;
