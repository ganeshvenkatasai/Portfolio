import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm tracking-[4px] text-designColor">2004-2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech CSE (8.69/10)"
            subTitle="S.R.K.R. Engineering College, Bhimavaram"
            result="Oct. 2020 – Apr. 2023"
          />
          <ResumeCard
            title="Diploma ECE (95.66/100)"
            subTitle="S.M.V.M. Polytechnic College, Tanuku"
            result="Jun. 2017 – Mar. 2020"
          />
          <ResumeCard
            title="High School (10/10)"
            subTitle="S.V.S E.M. High School, Tanuku"
            result="Jun. 2005 – Mar. 2017"
          />


        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm tracking-[4px] text-designColor uppercase">
            2020-present  
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Tata Consultancy Services"
            subTitle="System Engineer, Kolkata"
            result="Jun. 2013 – Present"
          />
          
          <ResumeCard
            title="Zopsmart"
            subTitle="SDE Internship, Bangalore"
            result="Jan. 2023 – Jun. 2023"
          />
          <ResumeCard
            title="Cisco"
            subTitle="Virtual Internship, Remote"
            result="Nov. 2019 - Apr. 2020"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
