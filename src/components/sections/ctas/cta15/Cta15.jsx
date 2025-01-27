import React from "react";
import { Education, Experience } from "../cta15/Data15_1"; // Assuming these are the updated file names
import { useTranslation } from "react-i18next";

const Cta15 = ({ template }) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const cta = template.cta;

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen cta15" id={cta.sectionId}>
      <h1 className="sm:text-[44px] text-[26px] text-center m-0 cta15_1">{cta.title}</h1>
      <p className="font-bold text-sm flex items-center justify-center gap-x-4 cta15_2">{cta.subtitle}</p>
      <div className="w-full lg:flex gap-x-20 justify-center">
        <section className="lg:w-1/2 max-w-[500px]">
          <h1
            className={`border-0 w-full border-black border-solid border-b-2 pb-[30px]  text-center text-4xl cta15_5 ${
              language === "ar" ? "ml-[30px]" : "mr-[30px]"
            }`}
          >
            Education
          </h1>
          <Education template={template} />
        </section>
        <section className="lg:w-1/2 max-w-[500px] mt-8 lg:mt-0">
          <h1
            className={`border-0 w-full border-black border-solid border-b-2 pb-[30px]  text-center text-4xl cta15_4 ${
              language === "ar" ? "ml-[30px]" : "mr-[30px]"
            }`}
          >
            Experience
          </h1>
          <Experience template={template} />
        </section>
      </div>
    </main>
  );
};

export default Cta15;
