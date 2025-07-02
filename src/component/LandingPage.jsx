import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import Tilt from 'react-parallax-tilt';

import TypingEffect from "./TypingEffect.jsx";

export default function LandingPage() {
    return (
        <div className=" xs360:pt-[3rem] xs400:pt-[3rem] xl:pt-0 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100
            xl:h-[30rem] ">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-60">
                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Floating Circles */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full opacity-15 blur-2xl"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25 blur-lg"></div>
                <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-20 blur-xl"></div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/3 left-5 w-4 h-4 bg-blue-300 opacity-20 rotate-45"></div>
                <div className="absolute top-1/2 right-10 w-6 h-6 bg-indigo-300 opacity-15 rotate-12"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-300 opacity-25 rounded-full"></div>
                <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-cyan-300 opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">

                <header className=" flex xs360:w-[90%] xs360:m-auto xs400:w-[80%] xs400:m-auto xl:w-[100%] xl:flex xl:justify-around xl:items-center xl:pt-[3rem]">
                    <section className=" xs360:mb-12 xs400:mb-12 xl:mb-0 xs400:w-[67%] xl:w-[33%] ">
                        <section className=" xs360:mb-4 xs400:mb-4 ">
                            <h1 className=" xs360:text-[2rem] xs400:text-[2.2rem] xs400:mb-2 xl:text-[4rem] xl:font-[700] text-gray-800" style={{ fontWeight: "600", textShadow: "rgb(21 76 160) 14px 12px 45px" }}>
                                Mayank Deep
                            </h1>
                            {/* <h2 className="text-blue-600 font-[600] xs360:text-[1rem] xs400:text-[1.3rem] xl:text-[1.6rem]" style={{textShadow: "0 0 30px #e950d2"}} >Full Stack Developer</h2> */}

                            {/* <TypingEffect /> */}
                        </section>

                        {/* location and contact number */}
                        <section className="font-[600] xs360:text-[1rem] xs400:text-[1.2rem] xl:text-[1.6rem] xl:mt-[0.7rem] xl:mb-[2rem]">
                            <h2 style={{ "display": "inline" }} className=" xs360:mr-4 xs400:mr-4 xl:mr-8 xl:me-[2rem]">
                                <FaLocationDot style={{ color: "black", "display": "inline" }} /> India
                            </h2>
                            <h2 style={{ "display": "inline" }}>
                                <FaPhoneAlt style={{ color: "black", "display": "inline" }} /> 9939116276
                            </h2>
                        </section>

                        {/* links */}
                        <section className="flex flex-wrap xs360:h-[11vh] xs360:w-[100%] xs360:text-[0.8rem] xs360:mt-8 xs375:h-[16vh] items-center justify-evenly xs400:w-[160%] xs400:text-[1.1rem] xs400:mt-4 xl:w-[100%] xs412:mt-8 ">
                            {/* email */}
                            <button className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:from-gray-200 hover:to-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 xl:w-[8rem] backdrop-blur-sm">
                                <a className="w-[100%]" href="https://mail.google.com/mail/?view=cm&to=mayankdeep217@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <MdAttachEmail style={{ color: "black", "display": "inline" }} /> Email
                                </a>
                            </button>

                            {/* linkedin */}
                            <button className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:from-gray-200 hover:to-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 xl:w-[8rem] backdrop-blur-sm">
                                <a className="w-[100%]" href="https://www.linkedin.com/in/mayank-deep-706b61291/" target="_blank">
                                    <FaLinkedin style={{ color: "black", "display": "inline" }} /> Linkedin
                                </a>
                            </button>

                            {/* github */}
                            <button className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:from-gray-200 hover:to-slate-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 xl:w-[8rem] backdrop-blur-sm">
                                <a className="w-[100%]" href="https://github.com/mkd21" target="_blank">
                                    <FaSquareGithub style={{ color: "black", "display": "inline" }} /> Github
                                </a>
                            </button>
                        </section>
                    </section>

                    <div className=" xs360:w-[40%] xs390:w-[37%] xs393:w-[34%] xs400:w-[28%] xs400:absolute xs400:top-0 xs400:left-[67%] xl:relative xl:left-0 xl:w-[30%] xl:min-h-[48vh]">
                        <Tilt
                            tiltMaxAngleX={25}
                            tiltMaxAngleY={25}
                            glareEnable={false}
                            scale={1.05}
                            transitionSpeed={1500}
                            gyroscope={true}
                            className="hover:bg-transparent focus:bg-transparent active:bg-transparent outline-none"
                        >
                            <div className=" xs360:h-[18vh] xs375:h-[17vh] xs400:h-[13vh] xs412:h-[16vh] xl:w-[100%] xl:block xl:h-[48vh] 2xl:w-[81%] 2xl:h-[53vh] rounded-full bg-gray-900 bg-[url('../../assets/dev-image/my-image.jpg')] bg-cover bg-center border-4 border-white shadow-2xl relative">
                                {/* Decorative ring around profile */}
                                <div className="absolute -inset-4 rounded-full border-2 border-blue-200 opacity-30"></div>
                                <div className="absolute -inset-6 rounded-full border border-indigo-100 opacity-20"></div>
                            </div>
                        </Tilt>
                    </div>
                </header>
            </div>

        </div>
    );
}