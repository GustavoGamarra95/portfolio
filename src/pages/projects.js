import React from 'react'
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../public/images/svgs/placeholder.svg"
import {GithubIcon} from "@/components/Icons";
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light
             shadow-2xl p-10 relative rounded-br-2xl dark:bg-dark dark:border-light
             lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-4xl xs:p-4">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
                xs:rounded-[1.5rem] dark:bg-light lg:-right-3 lg:w-[101%] lg:h-[102%] xs:-right-2 xs:w-[101%] sm:h-[101.5%]"/>

            <Link href={link} target="_blank"
                  className="w-1/2 cursor-pointer overflow-hidden rounded-lg
                    lg:w-full lg:h-1/2"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                             whileHover={{scale: 1.05}}
                             transition={{duration: 0.2}}
                             priority
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:text-light">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10 dark:text-light"><GithubIcon/></Link>
                    <Link href={link} target="_blank"
                          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                          sm:px-4 sm:text-base">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article
            className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-6 relative xs:p-4">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
                md:-right-2 md:w-[101%] md:h-[102%]  xs:-right-2 xs:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>

            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                             whileHover={{scale: 1.05}}
                             transition={{duration: 0.2}}

                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:text-light">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank"
                          className="text-lg font-semibold underline dark:text-light/75 md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 dark:text-light md:w-6"><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title>Gustavo Gamarra | Proyectos</title>
                <meta name="description" content="Proyectos Page"/>
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="py-16">
                    <AnimatedText text="Si lo puedes imaginar, lo puedes crear."
            
                                  className="mb-16 !text-8xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-6"/>
                    <div className="mt-10 grid grid-cols-12 gap-24 gap-y-32
                     xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Lorem ipsum dolor sit amet"
                                img={placeholder}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Lorem ipsum dolor sit amet"
                                img={placeholder}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Lorem ipsum dolor sit amet"
                                img={placeholder}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                title="Lorem ipsum dolor sit amet"
                                img={placeholder}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Lorem ipsum dolor sit amet"
                                img={placeholder}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Lorem ipsum dolor sit amet"
                                img={placeholder}
                                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."
                                link="/"
                                type="Featured Project"
                                github="/"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}
export default Projects
