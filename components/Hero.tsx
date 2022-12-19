import React from 'react';
import Image from 'next/image'
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import {BackgroundCircles} from "./BackgroundCircles";
import georgeProfile from '../public/images/George_Blog_Profile_2.png'
import Link from "next/link";

type Props = {};

export const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            'Hi, my name is George Gaskin',
            'Guy who loves coffee.tsx',
            "<butLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className="h-screen flex flex-col space-y-8 items-center
        justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <Image className="relative rounded-full h-32 w-32 mx-auto object-cover"
                   src={georgeProfile} alt=""/>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
                    Freelance Developer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#f7ab0a"/>
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                    <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

