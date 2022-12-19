import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

type Props = {
    title: string;
    children: React.ReactNode;
};

export const SectionDiv = ({ children, ...props }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center
md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center"
        >
            <SectionTitle title={props.title}></SectionTitle>
            {children}
        </motion.div>
    );
};
