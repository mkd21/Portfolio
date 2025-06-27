
import { educationDetail } from "./education-details.js";
import educationStyle from "../../styles/education.module.css";

export default function Education() {
    return (
        <>
            <section className="xl:pt-[4rem] xl:pb-[3rem]" style={{ background: "#e0e0ff" , background: "linear-gradient(90deg,rgba(224, 224, 255, 1) 0%, rgba(237, 237, 237, 1) 56%, rgba(247, 213, 213, 1) 100%, rgba(166, 171, 169, 1) 20%)" }} >
                <div className=" text-center xl:text-[2.8rem] xl:mb-[4rem] font-roboto font-[600]">
                    <h1 className={educationStyle.educationHeading}>Education</h1>
                </div>

                <div className="flex justify-around" >
                    {
                        educationDetail.map((iter) => {
                            return (
                                <>
                                    <div className="flex xl:w-[32rem]" >
                                        <div className="xl:mr-4" >
                                            <img src={iter.collegeLogo} alt={iter.alternameMessage} />
                                        </div>
                                        <div>
                                            <p>{iter.collegeName}</p>
                                            <p>{iter.degreeObtained}</p>
                                            <p>{iter.degreeDuration}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </>
    );
}