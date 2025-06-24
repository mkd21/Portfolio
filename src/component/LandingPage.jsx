import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function LandingPage() {
    return (
        <>
            <header className=" flex justify-around items-center xl:pt-[3rem] ">

                <section>

                    <section className="" >

                        <h1 className="
                            xl:text-[4rem] xl:font-[700] " >
                            Mayank Deep
                        </h1>

                        <h2 className="text-blue-600 font-[600] xl:text-[1.6rem]">Full Stack Developer</h2>
                    </section>

                    {/* location and contact number  */}
                    <section className=" font-[600] xl:text-[1.6rem] xl:mt-[0.7rem] xl:mb-[2rem] ">
                        <h2 style={{"display" : "inline"}} className="xl:me-[2rem]" > <FaLocationDot style={{ color: "black", "display": "inline" }} /> India</h2>

                        <h2 style={{"display" : "inline"}} > <FaPhoneAlt style={{ color: "black", "display": "inline" }} /> 9939116276</h2>

                    </section>

                    {/* links  */}
                    <section className="flex justify-between " >
                        {/* email  */}
                        <button className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold  hover:from-gray-200 hover:to-slate-300  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100
                            xl:w-[8rem]  ">
                            <a className="w-[100%]" href="https://mail.google.com/mail/?view=cm&to=mayankdeep217@gmail.com" target="_blank" rel="noopener noreferrer"> <MdAttachEmail style={{ color: "black", "display": "inline" }} /> Email</a>
                        </button>

                        {/* linked in  */}
                        <button className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:from-gray-200 hover:to-slate-300  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100
                            xl:w-[8rem] ">
                            <a className="w-[100%]" href="https://www.linkedin.com/in/mayank-deep-706b61291/" target="_blank"> <FaLinkedin style={{ color: "black", "display": "inline" }} /> Linkedin </a>
                            
                        </button>

                        {/* github  */}
                        <button className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:from-gray-200 hover:to-slate-300  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100
                            xl:w-[8rem] ">
                            <a className="w-[100%]" href="https://github.com/mkd21" target="_blank"> <FaSquareGithub style={{ color: "black", "display": "inline" }} /> Github</a>
                        </button>
                    </section>

                </section>

                <div className="xl:w-[30%] xl:h-[48vh] rounded-full bg-gray-900 bg-[url('../../assets/dev-image/my-image.jpg')] bg-cover bg-center"></div>

            </header>
        </>
    );
}