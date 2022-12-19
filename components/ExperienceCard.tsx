import { motion } from "framer-motion";

type Props = {};

export const ExperienceCard = ({}: Props) => {
    return (
        <article
            className="flex flex-col rounded-lg items-center space-y-7 
        flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
        bg-[#292929] p-10"
        >
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duation: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="./images/logo icon.png"
                alt=""
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Developer</h4>
                <p className="font-bold text-2xl mt-1">The Rock coders</p>
                <div className="flex space-x-2 my-2">
                    <img
                        className="h-10 w-10"
                        src="./images/C-sharp.png"
                        alt=""
                    />
                    <img
                        className="h-10 w-10"
                        src="./images/C-sharp.png"
                        alt=""
                    />
                    {/* tech */}
                    {/* tech */}
                    {/* tech */}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    Started work... -Ended work
                </p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>
                        Astronaut: Developed software for space missions, such
                        as mission control systems, navigation systems, and life
                        support systems.
                    </li>
                    <li>
                        Professional Gamer: Honed skills in problem-solving,
                        strategy, and teamwork as a professional gamer.
                    </li>
                    <li>
                        Detective: Used skills in data analysis and critical
                        thinking to solve complex cases as a detective.
                    </li>
                    <li>
                        Roller Coaster Designer: Used technical skills to create
                        and test simulations of roller coasters.
                    </li>
                    <li>
                        Chef: Learned about attention to detail, time
                        management, and creativity in the kitchen as a chef.
                    </li>
                   
                </ul>
            </div>
        </article>
    );
};
