
import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div> 
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 items-center">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="flex justify-center">
        <div className="mt-6 lgl:mt-14 w-[60%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="MIND AFRICA - (2024 - Present)"
            result="NAIROBI"
            des="MIND Africa's mission is to empower the next generation of global leaders and professionals through mentorship and the provision of essential medical supplies."
          />
          <ResumeCard
            title="Software Technician"
            subTitle="CopyCat Group Ltd - (2022 - 2023)"
            result="NAIROBI"
            des="I successfully delivered high-quality, efficient, and visually
                 appealingsolutions that contributed to the success of the asset management application 
                and enhanced its overall usability."
          />
          <ResumeCard
            title="ICT Intern"
            subTitle="The Judiciary (Makadara Law Courts) - (2021)"
            result="NAIROBI"
            des="Key responsibilities involved Setting up, maintaining, and repairing ICT equipment. Assist staff with tech issues, and support in-house technology roll-outs. Conduct ICT audits, install applications, and provide end-user training."
          />
        </div>
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
