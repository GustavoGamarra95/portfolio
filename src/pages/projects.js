import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import Quati from "/home/isseyou/Documents/portfolio/public/Quati.png";
import Salesboard from "/home/isseyou/Documents/portfolio/public/Salesboard.png";
import inorbit from "../../public/inorbit.png";
import BIGCART from "../../public/BIGCART.png";

import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

// COMPONENTE DESTACADO
const FeaturedProject = ({ type, title, summary, img, link, githubLinks, moreInfoLink }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light
             shadow-2xl p-10 relative rounded-br-2xl dark:bg-dark dark:border-light
             lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-4xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
                xs:rounded-[1.5rem] dark:bg-light lg:-right-3 lg:w-[101%] lg:h-[102%] xs:-right-2 xs:w-[101%] sm:h-[101.5%]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
                    lg:w-full lg:h-1/2"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg xs:text-base">
          {type}
        </span>
        {/* Eliminar el Link alrededor del título */}
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center gap-4 flex-wrap">
          {githubLinks.map((repo, index) => (
            <Link
              key={index}
              href={repo.url}
              target="_blank"
              className="flex items-center gap-2 text-dark dark:text-light text-sm font-semibold underline"
            >
              <GithubIcon className="w-5 h-5" />
              {repo.label}
            </Link>
          ))}
          {moreInfoLink && (
            <Link
              href={moreInfoLink}
              target="_blank"
              className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Conocer más
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

// COMPONENTE NORMAL
const Project = ({ title, type, img, link, githubLinks, moreInfoLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-6 relative xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
                md:-right-2 md:w-[101%] md:h-[102%]  xs:-right-2 xs:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        {/* Eliminar el Link alrededor del título */}
        <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
          {title}
        </h2>
        <div className="w-full mt-2 flex items-center justify-between flex-wrap gap-4">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light/75 md:text-base"
          >
            {/* El contenido del enlace está vacío */}
          </Link>
          <div className="flex gap-2">
            {githubLinks.map((repo, index) => (
              <Link key={index} href={repo.url} target="_blank">
                <GithubIcon className="w-6 dark:text-light" />
              </Link>
            ))}
          </div>
          {moreInfoLink && (
            <Link
              href={moreInfoLink}
              target="_blank"
              className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Proyecto
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Gustavo Gamarra | Proyectos</title>
        <meta name="description" content="Proyectos Page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-12 flex flex-col items-center justify-center">
        <Layout className="py-12">
          <AnimatedText
            text="Si lo puedes imaginar, lo puedes crear."
            className="mb-12 !text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-6"
          />
          <div
            className="mt-10 grid grid-cols-12 gap-24 gap-y-32
                     xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Quati-Iguacu"
                img={Quati}
                summary="Proyecto realizado dentro de la materia Projeto Integrador..."
                link="/"
                type="Estudio de Caso"
                githubLinks={[
                  {
                    label: "Repositorio",
                    url: "https://github.com/GustavoGamarra95/Quati-Iguacu",
                  },
                ]}
                moreInfoLink="/QuatiGuacu.pdf"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Inorbit - Gestor personal de Tareas y Metas"
                img={inorbit}
                link="/"
                type="Gestor de Metas Personales"
                githubLinks={[]} // Eliminar los links de GitHub
                moreInfoLink="https://www.figma.com/proto/qSn4deexSZ5AfvjxpX897m/NLW-Pocket-JS?node-id=2001-337&viewport=658%2C294%2C0.23&t=sdFAiaf1oCMnAkbj-1&scaling=contain&content-scaling=fixed&page-id=2001%3A2&starting-point-node-id=2001%3A337" // Mantener el botón "Conocer más"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Sales Board - Gestor de Ventas"
                img={Salesboard}
                link="/"
                type="Tablero de Ventas"
                githubLinks={[]} 
                moreInfoLink="https://www.figma.com/proto/hh6bwW9Z8CGue4Nuou8rj9/Sales-Dashboard?node-id=1-878&p=f&viewport=543%2C388%2C0.61&t=iJjwRpo6W5Q5FQv1-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A823" // Mantener el botón "Conocer más"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Big Cart"
                img={BIGCART}
                summary="Proyecto realizado para las necesidades de un cliente..."
                link= ""
                type="Estudio de Caso"
                githubLinks={[
                  {
                    label: "Repositorio",
                    url: "",
                  },
                ]}
                moreInfoLink="/BIGCART.pdf"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
