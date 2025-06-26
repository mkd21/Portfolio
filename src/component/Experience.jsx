
import { worksDoneDuringInternship , workDoneDuringFreelancing } from "../worksDoneInCompany.js";

import SkillsRenderer from "./SkillsRenderer.jsx";

// importing module styles 

import experienceStyle from "../styles/experience.module.css";


export default function Experience() {
    return (
        <>
            <section className=" xl:w-[95%] m-auto xl:mt-[3rem] ">

                <section className=" text-center xl:text-[2.8rem] font-roboto font-[600]">
                    <h1 className={experienceStyle.experienceHeading} >Experience</h1>
                </section>

                {/* about company and work  */}

                <section className={experienceStyle.experienceSectionShadow} >
                    <h1 className=" xl:text-[1.8rem] xl:font-[600] " >Web Developer Intern</h1>
                    <p className="italic font-[500] xl:mb-3">16th april 2025 - 16th july 2025 (Remote) </p>
                    <a href="https://startingcore.com/" target="_blank" className=" xl:text-[1.4rem] italic font-[600] text-blue-400 " >Starting Core</a>

                    <div className=" xl:text-[1.3rem] xl:mt-[1rem] ">

                        {
                            worksDoneDuringInternship.map((iter) => <SkillsRenderer {...iter} />)
                        }

                    </div>
                </section>

                <section className={experienceStyle.experienceSectionShadow} >
                    <h1 className=" xl:text-[1.8rem] xl:font-[600] ">Freelance Web Developer</h1>
                    <p className="italic font-[500] xl:mb-3">5th february 2025 - 7th february 2025 (Remote)</p>
                    <a href="https://aether-strategies.netlify.app/" target="_blank" className=" xl:text-[1.4rem] italic font-[600] text-blue-400 ">Aether Strategies</a>

                    <div className=" xl:text-[1.3rem] xl:mt-[1rem]"  >
                        {
                            workDoneDuringFreelancing.map( (iter) => <SkillsRenderer {...iter} /> )
                        }
                    </div>
                </section>

            </section>
        </>
    );
}