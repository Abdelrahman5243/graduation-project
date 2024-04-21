import nav1 from "../../assets/images/Navbar/nav1.jpg";
// import nav3 from "../../assets/images/Navbar/nav3.jpg";
import nav4 from "../../assets/images/Navbar/nav4.png";
import nav5 from "../../assets/images/Navbar/nav5.png";
import nav6 from "../../assets/images/Navbar/nav6.jpg";
import nav7 from "../../assets/images/Navbar/nav7.jpg";
import nav8 from "../../assets/images/Navbar/nav8.png";
import nav10 from "../../assets/images/Navbar/nav10.jpg";
import nav14 from "../../assets/images/Navbar/nav14.jpg";
import nav16 from "../../assets/images/Navbar/nav16.png";
import nav18 from "../../assets/images/Navbar/nav18.png";



import hero1 from "../../assets/images/Hero/hero1.webp";
import hero2 from "../../assets/images/Hero/hero2.webp";
import hero3 from "../../assets/images/Hero/hero3.webp";
import hero4 from "../../assets/images/Hero/hero4.webp";
import hero5 from "../../assets/images/Hero/hero5.webp";
import hero7 from "../../assets/images/Hero/hero7.webp";
import hero6 from "../../assets/images/Hero/hero6.webp";
import hero8 from "../../assets/images/Hero/hero8.webp";
import hero10 from "../../assets/images/Hero/hero10.webp";
import hero11 from "../../assets/images/Hero/hero11.jpg";
import hero14 from "../../assets/images/Hero/hero14.webp";
import hero16 from "../../assets/images/Hero/hero16.webp";
import hero18 from "../../assets/images/Hero/hero18.jpg";

const createData = (type, data) => {
  return data.map(item => ({
    id: item.id,
    name: `${type}${item.id}`,
    image: item.imgUrl,
    type
  }));
};



export const navData = createData('Navbar', [
  { id: 1, imgUrl: nav1 },
  { id: 2, imgUrl: "nav2" },
  { id: 4, imgUrl: nav4 },
  { id: 5, imgUrl: nav5 },
  { id: 6, imgUrl: nav6 },
  { id: 7, imgUrl: nav7 },
  { id: 8, imgUrl: nav8 },
  { id: 10, imgUrl: nav10 },
  { id: 11, imgUrl: "nav11" },
  { id: 13, imgUrl: "nav13" },
  { id: 14, imgUrl: nav14 },
  { id: 15, imgUrl: "nav15" },
  { id: 16, imgUrl: nav16 },
  { id: 18, imgUrl: nav18 }
]);

export const heroData = createData('Hero', [
  { id: 1, imgUrl: hero1 },
  { id: 2, imgUrl: hero2 },
  { id: 3, imgUrl: hero3 },
  { id: 4, imgUrl: hero4 },
  { id: 5, imgUrl: hero5 },
  { id: 6, imgUrl: hero6 },
  { id: 7, imgUrl: hero7 },
  { id: 8, imgUrl: hero8 },
  { id: 9, imgUrl: "hero9" },
  { id: 10, imgUrl: hero10 },
  { id: 11, imgUrl: hero11 },
  { id: 13, imgUrl: "hero13" },
  { id: 14, imgUrl: hero14 },
  { id: 15, imgUrl: "hero15" },
  { id: 16, imgUrl: hero16 },
  { id: 18, imgUrl: hero18 }
]);

export const featureData = createData('Feature', [
  // { id: 1, imgUrl: "feature1.png" },
  { id: 3, imgUrl: "feature3.png" },
  { id: 4, imgUrl: "feature4.png" },
  // { id: 5, imgUrl: "feature5.png" },
  // { id: 21, imgUrl: "feature21.png" },
  { id: 6, imgUrl: "feature6.png" },
  { id: 7, imgUrl: "feature7.png" },
  // { id: 9, imgUrl: "feature9.png" },
  { id: 10, imgUrl: "feature10.png" },
  { id: 15, imgUrl: "feature15.png" },
  { id: 16, imgUrl: "feature16.png" },
  { id: 18, imgUrl: "feature18.png" },
  //{ id: 14, imgUrl: "feature14.png" }
]);

export const projectData = createData('Project', [
  { id: 1, imgUrl: "project1.png" },
  { id: 2, imgUrl: "project2.png" },
  { id: 3, imgUrl: "project3.png" },
  { id: 4, imgUrl: "project4.png" },
  { id: 8, imgUrl: "project8.png" },
  { id: 11, imgUrl: "project11.png" },
  { id: 13, imgUrl: "project13.png" },
  { id: 14, imgUrl: "project14.png" },
  { id: 15, imgUrl: "project15.png" },
  { id: 21, imgUrl: "project21.png" },
  { id: 18, imgUrl: "project18.png" },
]);

export const serviceData = createData('Service', [
  { id: 1, imgUrl: "service1.png" },
  { id: 2, imgUrl: "service2.png" },
  { id: 5, imgUrl: "service5.png" },
  { id: 9, imgUrl: "service9.png" },
  { id: 10, imgUrl: "service10.png" },
  { id: 11, imgUrl: "service11.png" },
  { id: 112, imgUrl: "service112.png" },
  { id: 14, imgUrl: "service14.png" },
  { id: 15, imgUrl: "service15.png" },
  { id: 18, imgUrl: "service18.png" },
]);

export const contactData = createData('Contact', [
  { id: 2, imgUrl: "contact2.png" },
  { id: 4, imgUrl: "contact4.png" },
  { id: 9, imgUrl: "contact9.png" },
  { id: 11, imgUrl: "contact11.png" },
  { id: 15, imgUrl: "contact15.png" },
]);

export const ctaData = createData('Cta', [
  { id: 1, imgUrl: "cta1.png" },
  { id: 3, imgUrl: "cta3.png" },
  { id: 4, imgUrl: "cta4.png" },
  { id: 5, imgUrl: "cta5.png" },
  { id: 6, imgUrl: "cta6.png" },
  { id: 7, imgUrl: "cta7.png" },
  { id: 10, imgUrl: "cta10.png" },
  { id: 11, imgUrl: "cta11.png" },
  { id: 15, imgUrl: "cta15.png" },
  { id: 18, imgUrl: "cta18.png" },
  { id: 21, imgUrl: "cta21.png" },
]);

export const aboutData = createData('About', [
  { id: 8, imgUrl: "about8.png" },
  { id: 9, imgUrl: "about9.png" },
  { id: 13, imgUrl: "about13.png" },
  { id: 16, imgUrl: "about16.png" },
]);

export const footerData = createData('Footer', [
  { id: 1, imgUrl: "footer1.png" },
  { id: 2, imgUrl: "footer2.png" },
  { id: 3, imgUrl: "footer3.png" },
  { id: 4, imgUrl: "footer4.png" },
  { id: 5, imgUrl: "footer5.png" },
  { id: 6, imgUrl: "footer6.png" },
  { id: 7, imgUrl: "footer7.png" },
  { id: 9, imgUrl: "footer9.png" },
  { id: 10, imgUrl: "footer10.png" },
  { id: 11, imgUrl: "footer11.png" },
  { id: 13, imgUrl: "footer13.png" },
  { id: 14, imgUrl: "footer14.png" },
  { id: 15, imgUrl: "footer15.png" },
  { id: 152, imgUrl: "footer152.png" },
  { id: 16, imgUrl: "footer16.png" },
  { id: 18, imgUrl: "footer18.png" },
]);

export const logoData = createData('Logo', [
  { id: 1, imgUrl: "logo1.png" },
  { id: 7, imgUrl: "logo7.png" },
  { id: 14, imgUrl: "logo14.png" }
]);

export const pricingData = createData('Pricing', [
  { id: 1, imgUrl: "pricing1.png" },
  { id: 3, imgUrl: "pricing3.png" },
  // { id: 6, imgUrl: "pricing6.png" },
  { id: 9, imgUrl: "pricing9.png" },
  { id: 11, imgUrl: "pricing11.png" },
  { id: 15, imgUrl: "pricing15.png" }
]);



export const teamData = createData('Team', [
  { id: 1, imgUrl: "team1.png" },
  { id: 5, imgUrl: "team5.png" },
  { id: 9, imgUrl: "team9.png" },
  { id: 10, imgUrl: "team10.png" },
  { id: 16, imgUrl: "team16.png" },
]);

export const statisticData = createData('Statistic', [
  { id: 1, imgUrl: "statistic1.png" },
  { id: 7, imgUrl: "statistic7.png" },
  { id: 16, imgUrl: "statistic16.png" }

]);

export const itemData = createData('Item', [
  { id: 1, imgUrl: "item1.png" },
  { id: 14, imgUrl: "item14.png" }
]);

export const filterItemData = createData('FilterItem', [
  { id: 6, imgUrl: "filterItem6.png" },
]);

export const orderPopupData = createData('OrderPopup', [
  { id: 10, imgUrl: "orderPopup10.png" },
  { id: 14, imgUrl: "orderPopup14.png" }
]);


export const testimonialData = createData('Testimonial', [
  { id: 1, imgUrl: "testimonial1.png" },
  { id: 2, imgUrl: "testimonial2.png" },
  { id: 3, imgUrl: "testimonial3.png" },
  { id: 6, imgUrl: "testimonial6.png" },
  { id: 7, imgUrl: "testimonial7.png" },
  { id: 9, imgUrl: "testimonial9.png" },
  { id: 10, imgUrl: "testimonial10.png" },
  { id: 11, imgUrl: "testimonial11.png" },
  { id: 13, imgUrl: "testimonial13.png" },
  { id: 15, imgUrl: "testimonial15.png" },
  { id: 16, imgUrl: "testimonial16.png" },
  { id: 18, imgUrl: "testimonial18.png" },
]);

export const cartItemData = createData('CartItem', [
  { id: 6, imgUrl: "cartItem6.png" }
]);

export const galleryData = createData('Gallery', [
  { id: 16, imgUrl: "gallery16.png" }
]);

export const offerData = createData('Offer', [
  { id: 16, imgUrl: "offer16.png" }
]);

export const reservationData = createData('Reservation', [
  { id: 16, imgUrl: "reservation16.png" }
]);

export const menuData = createData('Menu', [
  { id: 16, imgUrl: "menu16.png" }
]);

export const chooseData = createData('Choose', [
  { id: 16, imgUrl: "choose16.png" }
]);

