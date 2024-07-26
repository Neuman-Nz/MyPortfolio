import React from 'react'

const Banner = () => {
    return (
        <section
         id='home'  
         className='w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black'>
         <div className='w-1/2'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY SPACE</h4>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Neuman Walala</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a <span>UI Designer.</span>
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>I'm a passionate software developer specializing in creating dynamic,
                     user-centric web applications using JavaScript (React) and Python (Flask).
                      With a knack for transforming complex problems into seamless, efficient solutions,
                       I blend the versatility of Python with the interactive prowess of React to deliver 
                       high-performance applications. Explore my work to see how I bring code to life, 
                       crafting intuitive experiences that bridge the gap between innovative design and robust functionality.</p>
            </div>
         </div>
         <div className='w-1/2'></div>
        </section>
    )
}

export default Banner