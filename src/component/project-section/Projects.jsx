
import { projectDetails } from "./projectsData.js";

import ProjectsCard from "./ProjectCards.jsx";

import projectHeader from "../../styles/project.module.css";

export default function Projects() {

    return (
        <>
            <section className=" xs400:pt-[3rem] lg:mt-[5rem] lg:pb-[3rem]" style={{backgroundColor : "rgb(249 250 250)"}}>
                <div className=" xs400:text-[2rem] text-center xl:text-[2.8rem] font-roboto font-[600]">
                    <h1 className={projectHeader.projectHeading}>Projects</h1>
                </div>

                <div className=' xs400:mt-[3rem] xs400:w-[84%] xl:w-[95%] xl:mt-[3rem] m-auto flex justify-around flex-wrap '>
                    {
                        projectDetails.map((iter) => <ProjectsCard key={iter.id} {...iter} />)
                    }
                </div>
            </section>
        </>
    );
}