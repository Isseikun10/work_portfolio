import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 p-6 md:p-20 text-sm md:text-lg mt-12 border-t border-red-600/30'>
            <div className='space-y-4 text-center md:text-left'>
                <h3 className='text-2xl text-gray-200 font-semibold'>Edwin Bonilla</h3>
                <div className='flex flex-row justify-center md:justify-start gap-6 text-gray-400 text-4xl'>
                    <a href="https://gitlab.com/EdwinCS1" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 transition-colors duration-300'>
                        <FaGithubSquare />
                    </a>
                    <a href="https://github.com/Isseikun10" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 transition-colors duration-300'>
                        <FaGithubSquare />
                    </a>
                    <a href="https://www.instagram.com/edwindolorez/" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 transition-colors duration-300'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/edwin-bonilla-dolores/" target="_blank" rel="noopener noreferrer" className='hover:text-red-500 transition-colors duration-300'>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <p className='text-gray-400 text-center md:text-right'>
                © 2025-{new Date().getFullYear()} Edwin Bonilla Dolores. All rights reserved.
            </p>
        </div>
    )
}

export default Footer