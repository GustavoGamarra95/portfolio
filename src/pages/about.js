import React, {useEffect} from 'react'
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import foto from "../../public/foto.webp";

const FramerImage = motion(Image);


import {motion, useInView, useMotionValue, useSpring} from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({value}) => {
    const ref = React.useRef(null);
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latestValue) => {
            if (ref.current && latestValue.toFixed(0) <= value) {
                ref.current.textContent = latestValue.toFixed(0)
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const About = () => {
    return (
        <>
            <Head>
                <title>Gustavo Gamarra | Sobre mi</title>
                <meta name="description" content="Sobre Mi"/>
            </Head>
            <TransitionEffect/>
            <main className="flex w-full flex-col items-center justify-center dark:text-light ">
                <Layout className="pt-16">
                    <AnimatedText text="Sobre Mi!"
                                  className="mb-16 lg:!text-4xl md:!text-4xl sm:!text-5xl xs:!text-2xl sm:mb-8"/>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div
                            className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 xmd:order-2 xmd:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biografia</h2>
                            <p className="pt-12">
                            Hola! Soy Gustavo Ariel Gamarra Rojas, especialista en UX/UI con enfoque en análisis de datos y comportamiento de usuarios. 
                            A mis 29 años, he desarrollado una sólida experiencia optimizando interfaces digitales mediante metodologías basadas en evidencia.
                            
                            </p>
                            <p className="my-4 font-medium">
                            Mi trayectoria profesional se distingue por implementar ecosistemas completos de seguimiento analítico (Google Analytics 4, Tag Manager, Microsoft Clarity) que me permiten transformar datos en insights accionables, logrando incrementos significativos en tasas de conversión y reducción de abandonos.
                            </p>
                            <p className="font-medium">
                            Actualmente estoy ampliando mis competencias técnicas como estudiante de Análisis y Desarrollo de Software en Uniamérica, donde aplico la metodología Problem Learning para resolver desafíos tecnológicos reales.
                            </p>
                        </div>
                        <div
                            className="col-span-3 relative h-max rounded-2xl border-2 border-solid
                             border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4
                              md:order-1 xmd:col-span-8 xmd:w-[80%] xmd:mx-auto sm:w-[90%] xs:w-full xs:p-5">
                            <div
                                className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-3xl bg-dark dark:bg-light "/>
                            <FramerImage
                                src={foto}
                                alt="Gustavo Ariel Gamarra Rojas"
                                className="w-full h-[500px] lg:h-[450px] sm:h-[400px] xs:h-[350px] object-cover rounded-2xl"
                                whileHover={{scale: 1.02}}
                                transition={{duration: 0.2}}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between
                        xl:col-span-8 xl:flex-row xl:items-center xmd:order-3 gap-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold xmd:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={2000}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                 xl:text-center xmd:text-lg sm:text-base xs:text-sm">CLientes Satisfechos</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold xmd:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center xmd:text-lg sm:text-base xs:text-sm">Proyectos Completados</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center ">
                                <span className="inline-block text-7xl font-bold xmd:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={3}/>+ 
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center xmd:text-lg sm:text-sm  xs:text-sm">Años de Experiencia</h2>
                            </div>

                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </Layout>
            </main>
        </>
    )
}
export default About
