import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

export default function Home() {
    return (
        <div
            className="bg-[rgb(36,36,36)] text-white h-screen
        snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]"
        >
            <Head>
                <title>Portfolio</title>
            </Head>
            <Header />

            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <Experience />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <footer className="sticky bottom-5 w-fill cursor-pointer">
                <div className="flex justify-center items-center">
                    {/* <img
                        className="h-10 w-10 rounded-full  grayscale hover:grayscale-0"
                        src="/images/George_Blog_Profile_2.png"
                        alt=""
                    /> */}
                </div>
            </footer>
        </div>
    );
}
