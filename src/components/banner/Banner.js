import React from 'react'
import Leftbanner from './Leftbanner';
import Rightbanner from './Rightbanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <Leftbanner />
      <Rightbanner />
    </section>
  );
}

export default Banner