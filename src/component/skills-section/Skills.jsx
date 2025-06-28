
import SkillsRenderer from "./SkillsRenderer.jsx";
import { SkillsData } from "./skillsData.jsx";
import SkillsStyle from "../../styles/skills.module.css";
export default function Skills() {
    return (
        <>
            <section className=" xs400:pt-[3rem] xs400:pb-[3rem] lg:mt-[5rem] xl:mt-[4rem] xl:pb-[3rem] ">
                <div className=" xs400:text-[2rem] text-center xl:text-[2.8rem] font-roboto font-[600]">
                    <h1 className={SkillsStyle.SkillsHeading} >Skills</h1>
                </div>

                <div className="grid grid-cols-5 xs400:mt-[3rem] xs400:w-[84%] overflow-visible xl:w-[70%] xl:h-[40vh] xl:mt-[3rem] m-auto flex-wrap items-center " >
                    {
                        SkillsData.map((iter, idx) => <SkillsRenderer key={idx} {...iter} index={idx} />)
                    }
                </div>
            </section>
        </>
    );
}