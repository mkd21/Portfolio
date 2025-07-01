
import { projectDetails } from "./projectsData.js";

import ProjectsCard from "./ProjectCards.jsx";

export default function Projects() {

    return (
        <>
            <section className=" xs360:pt-[1rem] xs400:pt-[3rem] lg:mt-[5rem] lg:pb-[3rem]" style={{ backgroundColor: "rgb(249 250 250)" }}>

                <div className=" m-auto xs360:w-[50%] xs360:text-[2rem] xs400:text-[2rem] text-center xl:w-[30%] xl:text-[2.8rem] 2xl:w-[24%] font-roboto font-[600]">
                    <div className="flex justify-around " >
                        <h1>Projects</h1>
                        <img src="../../assets/section-wise-images/project.png" className=" xs360:w-[23%] " alt="experience image" />
                    </div>
                </div>

                <div className=' xs360:mt-[3rem] xs360:w-[80%] xs400:mt-[3rem] xs400:w-[84%] xl:w-[95%] xl:mt-[3rem] m-auto flex justify-around flex-wrap '>
                    {
                        projectDetails.map((iter) => <ProjectsCard key={iter.id} {...iter} />)
                    }
                </div>
            </section>
        </>
    );
}