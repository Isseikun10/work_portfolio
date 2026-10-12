import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15,
            },
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-[#1f0b0b]/70 backdrop-blur-md z-50 border-b border-red-600/20">
            <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">
                <a href="#" className="hover:text-red-500 transition-colors duration-300 font-semibold">
                    Edwin Bonilla Dolores
                </a>

                <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
                    <li className="hover:text-red-500 transition-colors duration-300">
                        <Link to="skills" smooth={true} offset={50} duration={500}> Acerca de </Link>
                    </li>
                    <li className="hover:text-red-500 transition-colors duration-300">
                        <Link to="portfolio" smooth={true} offset={50} duration={500}> Portafolio </Link>
                    </li>
                    <li className="hover:text-red-500 transition-colors duration-300">
                        <Link to="courses" smooth={true} offset={50} duration={500}> Cursos y Certificados </Link>
                    </li>
                    <li className="hover:text-red-500 transition-colors duration-300">
                        <Link to="contact" smooth={true} offset={50} duration={500}> Contacto </Link>
                    </li>
                </ul>

                <div onClick={toggleNav} className="md:hidden z-50 text-gray-200 hover:text-red-500 transition-colors cursor-pointer">
                    { nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div initial={false} animate={nav ? "open" : "closed"} variants={menuVariants} className="fixed left-0 top-0 w-full min-h-screen bg-[#1f0b0b] z-40 border-r border-red-600/30">
                    <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
                        <li className="hover:text-red-500 transition-colors duration-300">
                            <Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}> Acerca de </Link>
                        </li>
                        <li className="hover:text-red-500 transition-colors duration-300">
                            <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}> Portafolio </Link>
                        </li>
                        <li className="hover:text-red-500 transition-colors duration-300">
                            <Link to="courses" onClick={closeNav} smooth={true} offset={50} duration={500}> Cursos y Certificados </Link>
                        </li>
                        <li className="hover:text-red-500 transition-colors duration-300">
                            <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}> Contacto </Link>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}


export default Navbar;