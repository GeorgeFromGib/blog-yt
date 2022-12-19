import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { SectionDiv } from "./utils/SectionDiv";

type Props = {};

function Skills({}: Props) {
    return (
        <SectionDiv title='Skills'>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for current proficiency
            </h3>
            <div className="grid grid-cols-4 gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </SectionDiv>
    );
}

export default Skills;
