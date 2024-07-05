import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialTemplate } from "../features/templateData/templateSlice";

const TrialDesign = ({ componentMapping, FooterComponent, NavbarComponent, HeroComponent, template, className }) => {
  const dispatch = useDispatch();
  const url = useLocation();
  const templateNumber = parseInt(url.pathname.match(/\d+/)) 
  const searchParams = new URLSearchParams(url.search);
  const userId = useSelector((state) => state.auth.user && state.auth.user._id) || searchParams.get("userId");
  const templateId = searchParams.get("templateId") || null;
  console.log("templateId", templateId);
  console.log("userId", userId);
  const [templateData, setTemplateData] = useState(null);

  let state = useSelector((state) => {
    if (url.pathname.includes("own-page")) {
      return state.ownTemplate;
    } else {
      return state.template1;
    }
  });

  useEffect(() => {
    if (url.pathname.includes("preview") || url.pathname.includes("build")) {
      dispatch(fetchInitialTemplate(template));
      console.log(`state in TrialDesign after fetchInitialTemplate${template}`, state);
    }
  }, [dispatch]);


  //       // this will return to intial state if you do refresh


  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchData in trialDesign");
      try {
        const res = await axios.get(`https://websitebuilderbackend-production-716e.up.railway.app/page/${userId}/${templateId}`);
        setTemplateData(res.data);
        document.documentElement.style = "";
        for (let index = 0; index < res.data.colors?.templateColors.length; index++) {
          document.documentElement.style.setProperty(`--website-${templateNumber}-color-${index + 1}`, res.data.colors?.templateColors[index]);
        }
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };

    if (templateId) {
      if (!url.pathname.includes("edit")) {
        document.getElementById("main-nav").style.display = "none";
        document.getElementById("template-container").style.marginTop = "0px";
      }

      if (url.pathname.includes("zweb") && !url.pathname.includes("edit-zweb")) {
        fetchData();
      }
    } else {
      document.documentElement.style = "";
      for (let index = 0; index < state.colors?.templateColors.length; index++) {
        document.documentElement.style.setProperty(`--website-color-${index + 1}`, state.colors?.templateColors[index]);
      }
    }
  }, []);

  if (url.pathname.includes("zweb") && !url.pathname.includes("edit-zweb")) {
    state = templateData;
  }
  const reorderedComponents = state && Object.keys(state);
  console.log(state)
  return state && state.templateInfo.id === template ? (
    <div className={className}>
      {NavbarComponent && <NavbarComponent template={state} />}
      {HeroComponent && <HeroComponent template={state} />}
      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} template={state} />;
      })}
      {FooterComponent && <FooterComponent template={state} />}
    </div>
  ) : (
    <div className="fixed top-0 left-0 w-full h-full d-flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default TrialDesign;
