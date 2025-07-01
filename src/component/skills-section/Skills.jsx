
import SkillsRenderer from "./SkillsRenderer.jsx";
import { SkillsData } from "./skillsData.jsx";

export default function Skills() {
    return (
        <>
            <section className=" w-[80%] m-auto xs360:pt-[3rem] xs360:pb-[3rem] xs400:pt-[3rem] xs400:pb-[3rem] lg:mt-[5rem] xl:mt-[4rem] xl:pb-[3rem] ">
                <div className=" m-auto xs360:w-[50%] xs360:text-[2rem] xs400:text-[2rem] text-center xl:w-[30%] xl:text-[2.8rem] 2xl:w-[24%] font-roboto font-[600]">
                    <div className="flex justify-around">
                        <h1>Skills</h1>
                        <img src="../../assets/section-wise-images/skills.png" className=" xs360:w-[23%]" alt="skills image" />
                    </div>
                </div>

                <div className="grid grid-cols-5 xs360:mt-[3rem] xs360:w-[83%] xs400:mt-[3rem] xs400:w-[84%] overflow-visible xl:w-[70%] xl:h-[40vh] xl:mt-[3rem] m-auto flex-wrap items-center " >
                    {
                        SkillsData.map((iter, idx) => <SkillsRenderer key={idx} {...iter} index={idx} />)
                    }
                </div>
            </section>
        </>
    );
}