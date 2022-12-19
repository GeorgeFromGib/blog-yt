import { motion } from "framer-motion";
import React from "react";
import ScrollPanel from "./utils/ScrollPanel";
import { SectionDiv } from "./utils/SectionDiv";

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <SectionDiv title='Projects'>
            <ScrollPanel>
                {projects.map((project, i) => (
                    <div key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                    items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{y:-300, opacity:0}}
                            transition={{duration:1.2}}
                            whileInView={{opacity: 1, y:0}}
                            viewport={{once:true}}
                            src="https://kinsta.com/wp-content/uploads/2018/04/wix-to-wordpress-01-1024x512.png"
                            alt=""
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length} :
                                </span>{" "}
                                Usp clone
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                "AuthorizeNET" is a fake .NET application that
                                helps authorize users for various systems and
                                services. It is designed to provide a secure and
                                convenient way for users to access protected
                                resources and perform certain actions within an
                                organization.
                            </p>
                        </div>
                    </div>
                ))}
            </ScrollPanel>
            <div
                className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
            -skew-y-12"
            />
        </SectionDiv>
    );
}

export default Projects;
