
import { worksDoneDuringInternship , workDoneDuringFreelancing } from "../worksDoneInCompany.js";

import SkillsRenderer from "./SkillsRenderer.jsx";

// importing module styles 

import experienceStyle from "../styles/experience.module.css";



export default function Experience() {
    return (
        <>
            <section className=" xs360:w-[80%] xs360:mt-[2rem] xs360:pb-[3rem] xs400:w-[80%] xs400:mt-[2rem] xs400:pb-[3rem] xl:w-[95%] m-auto xl:mt-[4rem] xl:pb-[3rem]" >

                <section className=" m-auto xs360:w-[70%] xs360:text-[2rem] xs400:text-[2rem] xl:text-[2.8rem] xl:w-[30%] 2xl:w-[24%] font-roboto font-[600]">
                    <div className=" flex justify-around">
                        <h1>Experience</h1>
                        <img src="../../assets/section-wise-images/experience.png" className=" xs360:w-[23%] " alt="experience image" />
                    </div>
                </section>

                {/* about company and work  */}

                <section className={experienceStyle.experienceSectionShadow} >
                    <h1 className=" xs400:text-[1.5rem] font-[600] xl:text-[1.8rem] " >Web Developer Intern</h1>
                    <p className="italic font-[500] xs400:my-2 xl:mb-3">16th april 2025 - 16th july 2025 (Remote) </p>
                    <a href="https://startingcore.com/" target="_blank" className=" xs400:text-[1.4rem] xl:text-[1.4rem] italic font-[600] text-blue-400 " >Starting Core</a>

                    <div className=" xs400:mt-4 xs400:text-[1.1rem] xs400:tracking-[1px] xl:text-[1.3rem] xl:mt-[1rem] ">

                        {
                            worksDoneDuringInternship.map((iter) => <SkillsRenderer {...iter} />)
                        }

                    </div>
                </section>

                <section className={experienceStyle.experienceSectionShadow} >
                    <h1 className=" xs400:text-[1.5rem] xl:text-[1.8rem] font-[600] ">Freelance Web Developer</h1>
                    <p className="italic font-[500] xs400:my-2 xl:mb-3">5th february 2025 - 7th february 2025 (Remote)</p>
                    <a href="https://aether-strategies.netlify.app/" target="_blank" className=" xs400:text-[1.4rem] xl:text-[1.4rem] italic font-[600] text-blue-400 ">Aether Strategies</a>

                    <div className=" xs400:mt-4 xs400:text-[1.1rem] xs400:tracking-[1px] xl:text-[1.3rem] xl:mt-[1rem]"  >
                        {
                            workDoneDuringFreelancing.map( (iter) => <SkillsRenderer {...iter} /> )
                        }
                    </div>
                </section>

            </section>
        </>
    );
}