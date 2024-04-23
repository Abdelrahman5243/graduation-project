// import "../assets/css/globals3.css";
// import Navbar3 from "../components/sections/navbars/navbar3/Navbar3";
// import Hero3 from "../components/sections/heros/hero3/Hero3";
// import Project3 from "../components/sections/projects/project3/Project3";
// import Feature3 from "../components/sections/features/feature3/Feature3";
// import Pricing3 from "../components/sections/pricings/pricing3/Pricing3";
// import Testimonials3 from "../components/sections/testimonials/testimonials3/Testimonials3";
// import Cta3 from "../components/sections/ctas/cta3/Cta3";
// import Footer3 from "../components/sections/footers/footer3/Footer3";
// import { useSelector } from "react-redux";
// const TrialDesign3 = () => {
//   const state = useSelector((state) => state.template3);
//   const reorderedComponents = Object.keys(state);
//   const componentMapping = {
//     features: Feature3,
//     testimonials: Testimonials3,
//     projects: Project3,
//     pricing: Pricing3,
//     cta: Cta3,
//   };
//   return (
//     <div className="TrialDesign3">
//       <Hero3 />
//       {reorderedComponents.map((_component) => {
//         const Component = componentMapping[_component];
//         return Component && <Component key={_component} />;
//       })}
//       <Footer3 />
//     </div>
//   );
// };

// export default TrialDesign3;
import React from "react";
import "../assets/css/globals3.css";
import Navbar3 from "../components/sections/navbars/navbar3/Navbar3";
import Hero3 from "../components/sections/heros/hero3/Hero3";
import Project3 from "../components/sections/projects/project3/Project3";
import Feature3 from "../components/sections/features/feature3/Feature3";
import Pricing3 from "../components/sections/pricings/pricing3/Pricing3";
import Testimonials3 from "../components/sections/testimonials/testimonials3/Testimonials3";
import Cta3 from "../components/sections/ctas/cta3/Cta3";
import Footer3 from "../components/sections/footers/footer3/Footer3";
import { useSelector } from "react-redux";

const TrialDesign3 = () => {
  const state = useSelector((state) => state.template3);
  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    // feature: Feature3,
    // testimonials: Testimonials3,
    // project: Project3,
    // pricing: Pricing3,
    // cta: Cta3,
  };

  return (
    <div className="TrialDesign3">
      <Navbar3 />
      <Hero3 />
      <Project3 />
      <Feature3 />
      <Pricing3 />
      <Testimonials3 />
      <Cta3 />
      {reorderedComponents.map((component) => {
        const Component = componentMapping[component];
        return Component ? <Component key={component} /> : null;
      })}
      <Footer3 />
    </div>
  );
};

export default TrialDesign3;
