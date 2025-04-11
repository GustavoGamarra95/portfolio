import React, {useRef} from 'react';
import {motion, useScroll} from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration: 0.5, type: "spring"}}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-16 xs:text-4xl xs:mt-8">
                Educación
            </h2>

            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{scaleY: scrollYProgress}}
                    ref={ref}
                    className="absolute left-9 top-0 w-[4px] h-full mt-7 bg-dark origin-top dark:bg-light md:w-[3px] xs:w-[2px] md:left-[29px] xs:mt-0 xs:left-[0px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

                    <Details
                        type="Grado en Ingeniería de Software y Análisis y Desarrollo de Sistemas"
                        time="2023 - Actualidad"
                        place="Uniamérica Descomplica"
                        info="Formación basada en metodologías activas, resolviendo problemas reales con foco en experiencia del usuario, producto digital y tecnología."
                    />

                    <Details
                        type="Digital Product Design"
                        time="2024"
                        place="Tera"
                        info="Certificación en diseño de productos digitales: UX Research, UI Design, Design Thinking, Behavioral Design, Figma y prototipado."
                    />

                    <Details
                        type="UX Design Certificate"
                        time="2024"
                        place="Google (Coursera)"
                        info="Diseño centrado en el usuario, arquitectura de la información, wireframes, prototipos interactivos en Figma y pruebas de usabilidad."
                    />

                    <Details
                        type="Google Data Analytics Professional Certificate"
                        time="2025"
                        place="Google (Coursera)"
                        info="Procesamiento de datos, análisis en Excel, SQL, R, BigQuery, Tableau y RStudio. Enfoque en proyectos reales y toma de decisiones basadas en datos."
                    />

                    <Details
                        type="Data Science | Trilha Digital | Coders 24"
                        time="2024"
                        place="Ada Tech"
                        info="Curso intensivo de Data Science con foco en Python, Pandas, NumPy, Machine Learning, MATLAB y fundamentos de estadísticas aplicadas."
                    />

                    <Details
                        type="Data Analysis with Python"
                        time="2024"
                        place="IBM"
                        info="Manipulación y visualización de datos con Python, usando bibliotecas como NumPy, Pandas y Matplotlib."
                    />

                    <Details
                        type="Curso Desenvolvimento Web Moderno com JavaScript"
                        time="2024"
                        place="Udemy"
                        info="HTML, CSS, JS, React, Node.js, Vue.js, Webpack, Bootstrap, Angular y metodologías modernas de desarrollo web."
                    />


                    <Details
                        type="NLW Journey - Python & DevOps"
                        time="2024"
                        place="Rocketseat"
                        info="Desarrollo de aplicación de gestión de viajes con Flask, SQL, pre-commit, Pylint, repositorios y tests automatizados con Pytest. Fundamentos de DevOps."
                    />

                </ul>
            </div>
        </div>
    );
};

export default Education;
