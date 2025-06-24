
import { worksDoneDuringInternship } from "../worksDoneInCompany.js";

import SkillsRenderer from "./SkillsRenderer.jsx";

export default function Experience()
{
    return (
        <>
            <section>
                <h1>Experience</h1>
            </section>  

            {/* about company and work  */}
            <section>
                <h1>Web Developer Intern</h1>
                <a href="https://startingcore.com/" target="_blank" >Starting Core</a>

                <div>
                    {
                        worksDoneDuringInternship.map( (iter) => <SkillsRenderer {...iter} />)
                    }
                </div>
            </section>
        </>
    );
}