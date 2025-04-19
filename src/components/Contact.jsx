import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import Reveal from "./Reveal"

const Contact = () => {
    return (
        <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
            <Reveal>
                <div className="grid md:grid-cols-2 place-items-center">
                    <div>
                        <div className="text-gray-300 my-3">
                            <h3 className="text-4xl font-semibold mb-5">Acerca de <span>Mi</span></h3>
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                Desarrollador de software con sólida
                                experiencia en la creación de
                                soluciones informáticas a medida. Mis
                                habilidades en programación
                                orientada a objetos e ingeniería de
                                software me permiten transformar las
                                necesidades del negocio en productos
                                software eficientes y escalables.
                                Dominio de múltiples lenguajes de
                                programación para ofrecer soluciones
                                adaptadas a cualquier desafío.
                            </p>
                        </div>

                        <div className="flex mt-10 items-center gap-7">
                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">15
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"><span>Projectos</span></p>
                            </div>

                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"><span>años de experiencia</span></p>
                            </div>

                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">25
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"><span>clientes felices</span></p>
                            </div>

                        </div>

                    </div>

                    <form action="https://getform.io/f/bejrpyla" method="POST" className=" max-w-6xl p-5 md:p-12" id="form">
                        <p className="text-gray-100 font-bold text-xl mb-2">
                            Vamos, contactame!
                        </p>
                        <input type="text" id="name" placeholder="Nombre ..." name="name" className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-gray-200"/>
                        <input type="email" id="email" placeholder="Correo ..." name="email" className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-gray-200"/>
                        <textarea name="textarea" id="textarea" cols="30" rows="4" placeholder="Mensaje ..."className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 text-gray-200"/>
                        <button type="submit" className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </Reveal>
        </div>
    )
}

export default Contact