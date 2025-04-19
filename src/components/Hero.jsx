import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub, AiOutlineGitlab, AiOutlineInstagram, AiOutlineLink, AiOutlineLinkedin } from "react-icons/ai";
import { DiCss3, DiHtml5, DiJavascript1, DiLaravel, DiMysql, DiNodejsSmall, DiPhp, DiPython, DiReact } from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
  
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                    <TypeAnimation
                        sequence={[
                            "Ing. En Sistemas Computacionales",
                            1000,
                            "Especializado en Desarrollo Full Stack",
                            1000,
                            "Gestión de Infraestructura",
                            1000,
                            "Desarrollador de Chatbots",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                    />

                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4">
                        HOLA, SOY <br/>
                        <span className="text-purple-500">EDWIN BONILLA</span>
                    </motion.p>

                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1 }} className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6">
                        Soy un apasionado desarrollador fullstack con más de 4 años de experiencia.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.5 }} className="flex flex-row items-center gap-6 my-4 md:mb-0">
                        
                        <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }} className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"                      >
                            Descargar CV
                        </motion.button>

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Isseikun10" target="_blank">
                                <AiOutlineGithub/>
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://gitlab.com/EdwinCS1" target="_blank">
                                <AiOutlineGitlab/>
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/edwin-bonilla-dolores-082081196/" target="_blank">
                                <AiOutlineLinkedin/>
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/edwindolorez/" target="_blank">
                                <AiOutlineInstagram/>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>


                <motion.img  src={profilepic} className="w-[300px] md:w-[450px]" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 2 }} className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24">
                <p className="text-gray-200 mr-6">My Stack Tech</p>
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiMysql className="text-blue-400 mx-2" />
                <DiJavascript1 className="text-yellow-500 mx-2" />
                <DiReact className="text-cyan-500 mx-2" />
                <DiNodejsSmall className="text-green-600 mx-2" />
                <DiPython className="text-blue-400 mx-2" />
                <DiLaravel className="text-red-600 mx-2" />     
                <DiPhp className="text-purple-600 mx-2" />
            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    )
}

export default Hero