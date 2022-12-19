import { motion } from "framer-motion";
import React from "react";
import { SectionDiv } from "./utils/SectionDiv";

type Props = {};

export const About = (props: Props) => {
    return (
        <SectionDiv title="About">
            <motion.img
                initial={{
                    x: -300,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                src="images/Gib_East_side.jpg"
                alt=""
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vitae sapien pellentesque habitant morbi tristique.
                    At risus viverra adipiscing at in tellus integer. Leo in
                    vitae turpis massa sed elementum. At volutpat diam ut
                    venenatis tellus in metus vulputate eu. Sit amet luctus
                    venenatis lectus magna fringilla urna porttitor. Posuere
                    urna nec tincidunt praesent semper feugiat nibh. Amet
                    consectetur adipiscing elit pellentesque habitant morbi
                    tristique senectus. Eu sem integer vitae justo eget magna
                    fermentum iaculis. Massa tempor nec feugiat nisl pretium
                    fusce. Purus non enim praesent elementum facilisis. Dui ut
                    ornare lectus sit amet est. Quis enim lobortis scelerisque
                    fermentum dui faucibus in. Magna etiam tempor orci eu
                    lobortis. Porttitor massa id neque aliquam vestibulum morbi
                    blandit. Tellus id interdum velit laoreet id donec ultrices
                    tincidunt. Nunc mi ipsum faucibus vitae aliquet nec.
                </p>
            </div>
        </SectionDiv>
    );
};
