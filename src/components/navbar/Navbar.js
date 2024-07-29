import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from 'react-icons/fi';
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navlinksdata } from '../../constants';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            {/* Logo */}
            <div className='w-20 h-10'>
                <img src={logo} alt="logo" />
            </div>

             {/* Desktop Menu */}
             <div className="hidden md1:inline-flex flex-row items-center gap-6 lg:gap-10">
                <ul className='flex items-center gap-6 lg:gap-10'>
                    {navlinksdata.map(({ _id, title, link }) => (
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
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md1:hidden">
                <span onClick={() => setShowMenu(!showMenu)}
                    className="text-xl md1:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
                    {showMenu ? <MdClose /> : <FiMenu />}
                </span>
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
                    <ul className="flex flex-col items-center gap-6">
                        {navlinksdata.map(({ _id, title, link }) => (
                            <li
                                key={_id}
                                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            >
                                <Link
                                    onClick={() => setShowMenu(false)}
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col items-center gap-4 mt-8">
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            Find me on
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <FaFacebookF />
                            </span>
                            <span className="bannerIcon">
                                <FaTwitter />
                            </span>
                            <span className="bannerIcon">
                                <FaLinkedinIn />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
