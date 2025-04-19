import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Connectivity Solutions',
        period: '2021 - Actual',
        description: 'Con más de 10 años de experiencia y una amplia cartera de proyectos exitosos, somos su mejor opción para mantener la seguridad, continuidad e incluso visibilidad de sus conexiones a internet. Nuestro servicio de monitoreo de enlaces de red, levantamiento y seguridad está diseñado para satisfacer las necesidades de cualquier organización que dependa de redes de internet. Como expertos en el campo, ofrecemos soluciones de clase mundial, personalizadas y adaptadas a las necesidades individuales de cada cliente.',
      },
      {
        company: 'Procblisher S.A.S de C.V',
        period: '2019 - 2020',
        description: 'Es una empresa de consultoría y capacitación en Project Management, Agilidad empresarial y Excelencia operativa para empresas y áreas de T.I. que desarrollan software.',
      },
      {
        company: 'Creative Solutions',
        period: '2018 - 2019',
        description: '',
      },
]

const Experience = () => {
    return (
        <div className='p-8 max-w-[600px] mx-auto'>
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experiencia</h1>
            <motion.div className='space-y-8' initial="hidden" animate="visible">
                { experiences.map((experience, index) => (
                    <Reveal>
                        <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3}} transition={{ duration: 1}} className=' border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'>
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-gray-400 mt-4'>{experience.description}</p>
                        </motion.div>
                    </Reveal>
                ) ) }
            </motion.div>
        </div>
    )
}

export default Experience