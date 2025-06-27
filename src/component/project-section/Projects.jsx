
import { projectDetails } from "./projectsData.js";

import ProjectsCard from "./ProjectCards.jsx";

import projectHeader from "../../styles/project.module.css";

export default function Projects() {

    return (
        <>
            <section className=" lg:mt-[5rem] lg:pb-[3rem]" style={{backgroundColor : "rgb(249 250 250)"}}>
                <div className=" text-center xl:text-[2.8rem] font-roboto font-[600]">
                    <h1 className={projectHeader.projectHeading}>Projects</h1>
                </div>

                <div className='xl:w-[95%] xl:mt-[3rem] m-auto flex justify-around '>
                    {
                        projectDetails.map((iter) => <ProjectsCard key={iter.id} {...iter} />)
                    }
                </div>
            </section>
        </>
    );
}