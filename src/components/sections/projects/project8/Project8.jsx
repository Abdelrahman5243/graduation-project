import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Project8 = ({ template }) => {
  const ownProjects = useSelector((state) => state.ownTemplate.projects);
  const projects = template ? template.projects : ownProjects;
  useEffect(() => {
    // AOS initialization and refresh removed
    return () => {};
  }, []);

  return (
    <section className="section8" id={projects.sectionId}>
      <div className="container mx-auto">
        <div>
          <h2 className="h2 leading-tight text-accent">{projects.title}</h2>
          <p className="max-w-sm mb-16">{projects.description}</p>
          <button className="btn btn-sm mb-4">{projects.buttonText}</button>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10">
          {projects.projects.map((project, index) => (
            <div key={index} className={`flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0 ${index % 2 === 0 ? "lg:flex-1" : "lg:flex-1 lg:order-2"}`}>
              {/* text */}

              {/* Image */}
              <div className="overflow-hidden group relative border-2 border-white/50 rounded-xl">
                <div>
                  {/* Overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* Image */}
                  <img className="group-hover:scale-125 transition-all duration-500" src={project.imgUrl} alt="" />
                  {/* Pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient">{project.subtitle}</span>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className="text-3xl text-white">{project.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project8;
