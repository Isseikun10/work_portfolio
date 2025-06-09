import React, { useState } from 'react';
import course1 from "../assets/Course/course1.jpg";
import course2 from "../assets/Course/course2.png";
import course3 from "../assets/Course/course3.jpeg";
import course4 from "../assets/Course/course4.jpg";
import course5 from "../assets/Course/course5.jpg";
import course6 from "../assets/Course/course6.jpg";
import course7 from "../assets/Course/course7.jpg";
import course8 from "../assets/Course/course8.jpg";
import course9 from "../assets/Course/course9.jpg";
import course10 from "../assets/Course/course10.png";
import course11 from "../assets/Course/course11.png";
import Reveal from './Reveal';
import { SiUdemy } from 'react-icons/si';

const cursos = [
    {
        img: course10,
        title: "Título Profesional",
        description: "Titulo Profesional por la carrera de Ingeniería en Sistemas Computacionales.",      
        links: {
            site: course10, // Cambiado a la importación directa de la imagen
            udemy: "https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action",
        },
    },
    {
        img: course11,
        title: "Cedula Profesional",
        description: "Cedula Profesional por la carrera de Ingeniería en Sistemas Computacionales.",      
        links: {
            site: course11, // Cambiado a la importación directa de la imagen
            udemy: "https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action",
        },
    },
    {
        img: course1,
        title: "React: De cero a experto ( Hooks y MERN)",
        description: "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers.",
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
        description: "The course introduces the principles and structure of IP addressing and the fundamentals of Ethernet concepts, media, and operations to provide a foundation for the curriculum.",
        links: {
            site: course3, // Cambiado a la importación directa de la imagen
            udemy: "https://www.netacad.com/",
        },
    },
    {
        img: course4,
        title: "CSS & JavaScript - Certification Course for Beginners",
        description: "Learn how to Add Dynamic Client-Side Functions to your Web Pages using CSS & JavaScript.",
        links: {
            site: course4, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/css-javascript-certification-course-for-beginners/",
        },
    },
    {
        img: course5,
        title: "React Responsive Portfolio Website - Complete React Project",
        description: "Build React Portfolio Website, React Context API, Send E-mail from React App, React Hooks, React Packages, React theme.",
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
    {
        img: course7,
        title: "Git and GitHub Bootcamp for Beginners",
        description: "Learn the basis essentials of Git and GitHub & get a head start with the most popular Version Control System.",
        links: {
            site: course7, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/draft/4161352/",
        },
    },
    {
        img: course8,
        title: "TailwindCSS from A to Z: Master TailwindCSS Quickly",
        description: "Get started with Tailwind, a utility-first CSS framework, and master its directives, modules, and code reusability.",
        links: {
            site: course8, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/learn-tailwind-css-quickly/",
        },
    },
    {
        img: course9,
        title: "Amazon Elastic Compute Cloud (EC2) Beginners Certification",
        description: "Learn to Setup, Configure, and Administer EC2 Instances on AWS. Explore Virtualization, Scaling, Elastic IPs, + More.",
        links: {
            site: course9, // Cambiado a la importación directa de la imagen
            udemy: "https://www.udemy.com/course/amazon-elastic-compute-cloud-ec2-beginners/",
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
            <h2 className='text-3xl font-bold text-gray-200 mb-8'> Cursos y Certificados </h2>
            
            {/* Modal para mostrar la imagen */}
            { isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={ closeModal } >
                    <div className="relative max-w-4xl max-h-full">
                        <button className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300" onClick={ closeModal } >
                            &times;
                        </button>
                        <img src={ selectedImage } alt="Certificado" className="max-w-full max-h-[90vh] object-contain" onClick={ (e) => e.stopPropagation() } />
                    </div>
                </div>
            ) }

            { cursos.map(( course, index ) => (
                <Reveal key={ index} >
                    <div className={`flex flex-col md:flex-row ${ index % 2 !== 0 ? 'md:flex-row-reverse' : '' } mb-12`}>
                        <div className='w-full md:w-1/2 p-4'>
                            <img src={ course.img } alt={ course.title } className='w-full h-full object-cover rounded-lg shadow-lg'/>
                        </div>
                        
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-4'> { course.title } </h3>
                            <p className='text-gray-300 mb-4'> { course.description } </p>
                            <div className='flex space-x-4'>
                                <button onClick={ () => openModal(course.links.site) } className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300' >
                                    Ver Certificado
                                </button>

                                <a href={ course.links.udemy } target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center justify-center' >
                                    <SiUdemy size={ 20 }/>
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