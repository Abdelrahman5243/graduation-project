import "../assets/css/globals5.css";
import Navbar5 from "../components/sections/navbars/navbar5/Navbar5";
import Hero5 from "../components/sections/heros/hero5/Hero5";
import Feature5 from "../components/sections/features/feature5/Feature5";
import Services5 from "../components/sections/services/services5/Services5";
import Feature21 from "../components/sections/features/feature21/Feature21";
import Teams5 from "../components/sections/teams/teams5/Teams5";
import Cta5 from "../components/sections/ctas/cta5/Cta5";
import Footer5 from "../components/sections/footers/footer5/Footer5";
import TrialDesign from "./TrialDesign";
const TrialDesign5 = () => {
  const componentMapping = {
    features: Feature5,
    services: Services5,
    blogs: Feature21,
    team: Teams5,
    cta: Cta5,
  };

  return (
    <TrialDesign
      className="design5"
      componentMapping={componentMapping}
      HeroComponent={Hero5}
      NavbarComponent={Navbar5}
      FooterComponent={Footer5}
      template={5}
    />
  );
};

export default TrialDesign5;
