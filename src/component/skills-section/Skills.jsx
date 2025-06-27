
import SkillsRenderer from "./SkillsRenderer.jsx";
import { SkillsData } from "./skillsData.jsx";
import SkillsStyle from "../../styles/skills.module.css";
export default function Skills()
{
    return (
        <>
            <section className="xl:mt-[4rem] ">
                <div className=" text-center xl:text-[2.8rem] font-roboto font-[600]">
                    <h1 className={SkillsStyle.SkillsHeading}>Skills</h1>
                </div>

                <div className="grid grid-cols-5 xl:w-[70%] xl:h-[40vh] xl:mt-[5rem] m-auto flex-wrap items-center " >
                    {
                        SkillsData.map( (iter , idx) => <SkillsRenderer key={idx} {...iter} /> )
                    }
                </div>
            </section>
        </>
    );
}