import React from 'react';
import { Link } from "react-scroll";
import {logo} from "../../assets/index";
import { navlinksdata } from '../../constants'; 

const Navbar = () => {
    return(
        <div className="w-full h-20 mx-auto flex justify-between items-center font-titleFont">
            <div className='w-20 h-10 '>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    {
                        navlinksdata.map(({ _id, title, link })=>(
                            <li
                             className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                             key={_id}> 
                             <Link 
                              activeClass='active'
                              to={link}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              >
                             {title}
                             </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Navbar