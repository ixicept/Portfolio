import React from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import profilePic from "../assets/profilepic.jpg"

const AboutMePage: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = "/PP CV ATS.pdf" // file taruh di folder public
        link.download = "Philip Purnama.pdf"
        link.click()
    }

    return (
        <section
            id="about-me"
            className="relative min-h-screen flex flex-col items-center justify-center bg-stone-900 text-white px-4 md:px-12 pt-24"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
                {/* Left side */}
                <div className="col-span-1 md:col-span-4 text-center md:text-left space-y-6 mx-auto md:mx-0 max-w-3xl">
                    <h2 className="text-sm sm:text-base md:text-lg font-medium text-lime-300">
                        Hi, my name is
                    </h2>
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold whitespace-nowrap">
                        Philip Purnama
                    </h3>
                    <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-200 leading-relaxed">
                        I'm a full stack developer with 1.5+ years of experience in web apps
                        and mentoring at Binus University. I work with React, NestJS, and
                        Flutter, and have hands-on exposure to databases, AI, and
                        cybersecurity. I like joining hackathons, building projects, and
                        collaborating to grow my technical and teamwork skills.
                    </p>


                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={handleDownload}
                            className="bg-lime-300 text-stone-900 px-5 py-2 rounded-lg font-medium hover:bg-lime-400 transition"
                        >
                            Download Resume
                        </button>
                    </div>
                </div>

                {/* Right side */}
                <div className="hidden md:flex items-center justify-center col-span-3">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-72 h-72 rounded-full object-cover border-4 border-lime-300 shadow-lg"
                    />
                </div>
            </div>


            {/* Social links - separate row under grid */}
            <div className="relative z-10 mt-8 flex space-x-6 text-2xl">
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:your@email.com"
                    className="hover:text-lime-300 transition"
                >
                    <FaEnvelope />
                </a>
            </div>
        </section>
    )
}

export default AboutMePage
