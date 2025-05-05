import React, { useState } from 'react';
import course1 from "../assets/course1.jpg";
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