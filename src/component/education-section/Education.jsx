// xs360:text-[2rem] xs400:text-[2rem] text-center xl:text-[2.8rem] xl:mb-[4rem] font-roboto font-[600]
import { educationDetail } from "./education-details.js";

export default function Education() {
    return (
        <>
            <section className=" xs360:pt-[3rem] xs360:pb-[3rem] xs400:pt-[3rem] xs400:pb-[3rem]  xl:pt-[4rem] xl:pb-[3rem]" style={{ background: "#e0e0ff" , background: "linear-gradient(90deg,rgba(224, 224, 255, 1) 0%, rgba(237, 237, 237, 1) 56%, rgba(247, 213, 213, 1) 100%, rgba(166, 171, 169, 1) 20%)" }} >
                <div className="m-auto xs360:w-[50%] xs360:text-[2rem] xs400:text-[2rem] text-center xl:w-[30%] xl:text-[2.8rem] xl:mb-[4rem] 2xl:w-[24%] font-roboto font-[600]">
                    <div className="flex justify-around " >
                        <h1>Education</h1>
                        <img src="../../assets/section-wise-images/project.png" className=" xs360:w-[23%] " alt="experience image" />
                    </div>
                </div>

                <div className=" xs360:mt-[3rem] xs360:block xs360:w-[90%] xs400:block xs400:mt-[3rem] xs400:w-[90%] m-auto xl:flex xl:justify-around " >
                    {
                        educationDetail.map((iter) => {
                            return (
                                <>
                                    <div className=" xs360:mb-[2rem] xs400:mb-[2rem] flex xl:w-[32rem]" >
                                        <div className=" xs360:mr-4 xs400:mr-4 xl:mr-4" >
                                            <img src={iter.collegeLogo} alt={iter.alternameMessage} />
                                        </div>
                                        <div>
                                            <p className=" xs360:text-[1.5rem] xs360:font-[600] xs400:text-[1.5rem] xs400:font-[600] " >{iter.collegeName}</p>
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