// import React from 'react'
// import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";

// const ProjectCard = ({data}) => {

//     console.log("data", data)

//   return (
//     <div className='w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
//         <div> 
//             <div className='w-full h-[80% object-cover group-hover:scale-110 duration-300 cursor-pointer]'><img src={data?.src} alt="src"/></div> <br/>
//             <div className='flex items-center justify-between'>
//             <div>
//                 <h1 className='taxt-base uppercase text-designColor font-normal'>{data?.title}</h1>
//             </div>  
//             <div>
//             <div className="flex gap-2">
//               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//                 <BsGithub />
//               </span>
//               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//                 <FaGlobe />
//               </span>
//             </div>
//             </div>  
//             </div> <br/>
//             <div className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'><p>{data?.des}</p></div>
//         </div>
//     </div>
//   )
// }

// export default ProjectCard


import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({data}) => {

    console.log("data", data)

  return (
    <div className='w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
        <div> 
            <div className='w-full h-[80% object-cover group-hover:scale-110 duration-300 cursor-pointer]'><img src={data?.src} alt="src"/></div> <br/>
            <div className='flex items-center justify-between'>
            <div>
                <h1 className='text-base uppercase text-designColor font-normal'>{data?.title}</h1>
            </div>  
            <div>
            <div className="flex gap-2">
              <a href={data?.github} target="_blank" rel="noopener noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </a>
              <a href={data?.live} target="_blank" rel="noopener noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
            </div>  
            </div> <br/>
            <div className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'><p>{data?.des}</p></div>
        </div>
    </div>
  )
}

export default ProjectCard
