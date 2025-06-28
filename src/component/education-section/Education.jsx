
import { educationDetail } from "./education-details.js";
import educationStyle from "../../styles/education.module.css";

export default function Education() {
    return (
        <>
            <section className=" xs400:pt-[3rem] xs400:pb-[3rem]  xl:pt-[4rem] xl:pb-[3rem]" style={{ background: "#e0e0ff" , background: "linear-gradient(90deg,rgba(224, 224, 255, 1) 0%, rgba(237, 237, 237, 1) 56%, rgba(247, 213, 213, 1) 100%, rgba(166, 171, 169, 1) 20%)" }} >
                <div className=" xs400:text-[2rem] text-center xl:text-[2.8rem] xl:mb-[4rem] font-roboto font-[600]">
                    <h1 className={educationStyle.educationHeading}>Education</h1>
                </div>

                <div className=" xs400:block xs400:mt-[3rem] xs400:w-[90%] m-auto xl:flex xs:justify-around" >
                    {
                        educationDetail.map((iter) => {
                            return (
                                <>
                                    <div className=" xs400:mb-[2rem] flex xl:w-[32rem]" >
                                        <div className=" xs400:mr-4 xl:mr-4" >
                                            <img src={iter.collegeLogo} alt={iter.alternameMessage} />
                                        </div>
                                        <div>
                                            <p className="xs400:text-[1.5rem] xs400:font-[600] " >{iter.collegeName}</p>
                                            <p className=" italic " >{iter.degreeObtained}</p>
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