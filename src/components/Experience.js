import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from '@/components/LiIcon';

// Componente de ítem individual
const DetailItem = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary dark:text-primaryDark capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

// Componente principal de experiencia
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mt-16 xs:text-4xl xs:mt-8">
                Experiencia
            </h2>

            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    ref={ref}
                    className="absolute left-9 top-0 w-[4px] h-full mt-7 bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[29px] xs:mt-1 xs:left-[0px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <DetailItem
                        position="User Experience Analyst"
                        company="Datapar S.A."
                        companyLink="https://datapar.com.py"
                        time="Abril 2024 - Presente"
                        address="Ciudad del Este, Paraguay"
                        work="Revolucioné la experiencia de usuario en todo el portafolio de productos de Datapar mediante un enfoque estratégico basado en datos. 
                        A través del análisis avanzado del comportamiento del cliente, optimicé interfaces existentes al identificar y eliminar puntos de fricción clave, lo que resultó en mejoras significativas en la retención y satisfacción del usuario.

Implementé un ecosistema de analítica digital integrado con Google Analytics 4, Tag Manager y Microsoft Clarity, permitiendo la monitorización en tiempo real de la interacción usuario-producto y facilitando una toma de decisiones más ágil y precisa.

Transformé datos complejos de comportamiento en visualizaciones interactivas con Matplotlib, Pandas y Power BI, generando insights accionables que empoderan a los equipos de producto en la definición de estrategias centradas en el usuario.

Las pruebas A/B que diseñé e implementé impulsaron las tasas de conversión en un 22% y redujeron el abandono en un 15%, estableciendo nuevos estándares de optimización y excelencia en productos digitales."
                    />
                    <DetailItem
                        position="UX Designer / Diseñador Gráfico"
                        company="Visãovip Informática"
                        companyLink="https://visaovip.com"
                        time="Octubre 2022 - Mayo 2024"
                        address="Ciudad del Este, Paraguay"
                        work="Lideré la transformación digital de aplicaciones web y móviles aplicando metodologías 
                            avanzadas de investigación UX que desentrañaron necesidades críticas del usuario. 
                            Desarrollé prototipos de alta fidelidad con Figma y Adobe XD que aceleraron radicalmente los 
                            ciclos de desarrollo. La implementación de Microsoft Clarity y SessionCam permitió descifrar 
                            patrones de comportamiento invisibles, mientras mi sistema de diseño revolucionario redujo 
                            drásticamente los tiempos de implementación en un 35%, optimizando los recursos de desarrollo."
                    />
                    <DetailItem
                        position="Desarrollador Front-End / Diseñador Gráfico"
                        company="Latin America Vape Lab"
                        companyLink="https://www.latinamericavapelab.co/en_US"
                        time="Abril 2022 - Octubre 2022"
                        address="Ciudad del Este, Paraguay"
                        work="Reingenié completamente la experiencia de e-commerce elevando la tasa de conversión un 12% 
                            mediante un rediseño estratégico del proceso de checkout. Implementé un sofisticado 
                            ecosistema analítico con Google Analytics, Tag Manager y Microsoft Clarity para monitorización 
                            en tiempo real del comportamiento de usuarios. Las herramientas de feedback integradas captaron 
                            insights críticos que transformaron la interacción con el sitio, potenciando la satisfacción 
                            del usuario y maximizando el retorno de inversión digital."
                    />
                    <DetailItem
                        position="Diseñador Gráfico"
                        company="Apollo Import S.A."
                        companyLink="https://apolloimport.com"
                        time="Agosto 2021 - Junio 2022"
                        address="Ciudad del Este, Paraguay"
                        work="Transformé la comunicación digital de la empresa mediante un completo rediseño visual 
                            utilizando Adobe Creative Suite. Creé un sistema integral de diseño con guías de estilo y 
                            componentes visuales que elevaron significativamente la coherencia de marca. Mi intervención 
                            en la optimización UX/UI del sitio web generó un notable incremento en la retención de usuarios 
                            y mejoró todos los indicadores de engagement digital."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
