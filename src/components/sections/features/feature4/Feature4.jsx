import React, { useState } from "react";
import "./feature4.css";

const Feature4 = ({ template }) => {
  const features = template.features;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionState = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={features.imgUrl} alt="loading" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">{features.title}</span>

          <span className="primaryText">{features.subtitle}</span>

          <span className="secondaryText">
            {features.description}
            <br />
            {features.text}
          </span>

          <div className="accordion">
            {features.features.map((item, i) => (
              <div className={`accordionItem ${expandedIndex === i ? "expanded" : "collapsed"}`} key={i}>
                <div className="accordionItemHeading">
                  <button className="flexCenter accordionButton" onClick={() => handleAccordionState(i)}>
                    <div className="flexCenter icon">✔</div>
                    <span className="primaryText">{item.title}</span>
                    <div className="flexCenter icon">{expandedIndex === i ? "🔺" : "🔻"}</div>
                  </button>
                </div>
                {expandedIndex === i && (
                  <div className="accordionItemPanel">
                    <p className="secondaryText">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature4;
