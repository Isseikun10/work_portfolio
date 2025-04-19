import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
            <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>Edwin Bonilla</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                    <a href="https://github.com/Isseikun10" target="_blank"><FaGithubSquare /></a>
                    <a href="https://www.instagram.com/edwindolorez/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/edwin-bonilla-dolores-082081196/" target="_blank"><FaLinkedin /></a>
                </div>
            </div>
            <p className='text-gray-400'>@2025 Edwin Bonilla</p>
        </div>
    )
}

export default Footer