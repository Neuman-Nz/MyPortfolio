import React from 'react'
import Title from "../layouts/Title";
import { project1, project2, project3, project4 } from "../../assets/index";
import ProjectCard from './ProjectCard';
import { projectData } from '../data/Data';

const Projects = () => {

    console.log("ProjectCard", project1 )
  return (
    <section 
      id='projects'
      className='w-full py-20 border-b-[1px] border-b-bleck'
    >
    <div className='flex justify-center items-center text-center'>
    <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14'>
        {
            projectData.map((data) => {
                return  <>
                    <ProjectCard data={data}/>
                </>
            })

        }
    </div>
    </section>
  )
}

export default Projects