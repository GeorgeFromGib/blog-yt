import { ExperienceCard } from "./ExperienceCard";
import ScrollPanel from "./utils/ScrollPanel";
import { SectionDiv } from "./utils/SectionDiv";

type Props = {};

const Experience = ({}: Props) => {
    return (
        <SectionDiv title="Experience">
            <ScrollPanel>
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </ScrollPanel>
        </SectionDiv>
    );
};

export default Experience;