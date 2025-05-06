import React, { useState } from 'react';
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.jpeg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";
import Reveal from './Reveal';
import { SiUdemy } from 'react-icons/si';

const cursos = [
    {
        img: course1,
        title: "React: De cero a experto ( Hooks y MERN)",
        description: "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers...",
        links: {
            site: course1, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/react-cero-experto/",
        },
    },
    {
        img: course2,
        title: "Elements of AI",
        description: "Introduction to AI, Machine Learning, Neural Networks, and more.",
        links: {
            site: course2, // Cambiado a la importación directa de la imagen
            udemy: "https://course.elementsofai.com/es/",
        },
    },
    {
        img: course3,
        title: "CCNA R&S: Introduction to Networks",
        description: "The course introduces the principles and structure of IP addressing and the fundamentals of Ethernet concepts, media, and operations to provide a foundation for the curriculum",
        links: {
            site: course3, // Cambiado a la importación directa de la imagen
            udemy: "https://www.netacad.com/",
        },
    },
    {
        img: course4,
        title: "CSS & JavaScript - Certification Course for Beginners",
        description: "Learn how to Add Dynamic Client-Side Functions to your Web Pages using CSS & JavaScript",
        links: {
            site: course4, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/css-javascript-certification-course-for-beginners/",
        },
    },
    {
        img: course5,
        title: "React Responsive Portfolio Website - Complete React Project",
        description: "Build React Portfolio Website, React Context API, Send E-mail from React App, React Hooks, React Packages, React theme",
        links: {
            site: course5, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/",
        },
    },
    {
        img: course6,
        title: "Maestría en JavaScript: Desde Principiante Hasta Experto",
        description: "Aprende el Lenguaje de Programación Web más usado paso a paso",
        links: {
            site: course6, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/react-responsive-portfolio-website-complete-react-project/",
        },
    },
]

const Courses = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="courses">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Cursos y Certificados</h2>
            
            {/* Modal para mostrar la imagen */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-full">
                        <button 
                            className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Certificado" 
                            className="max-w-full max-h-[90vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

            { cursos.map((course, index) => (
                <Reveal key={index}>
                    <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className='w-full md:w-1/2 p-4'>
                            <img src={course.img} alt={course.title} className='w-full h-full object-cover rounded-lg shadow-lg'/>
                        </div>
                        
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-4'> { course.title } </h3>
                            <p className='text-gray-300 mb-4'> { course.description } </p>
                            <div className='flex space-x-4'>
                                <button 
                                    onClick={() => openModal(course.links.site)} 
                                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                >
                                    Ver Certificado
                                </button>

                                <a href={course.links.udemy} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center justify-center'>
                                    <SiUdemy size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ) ) }
        </div>
    )
}

export default Courses