import React, { useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import profilePic from "../assets/profilepic.jpg"
import BackgroundVideo from "../components/BackgroundVideo"
import { motion } from "framer-motion"

const AboutMePage: React.FC = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = "../src/assets/PP CV ATS.pdf"
        link.download = "Philip Purnama.pdf"
        link.click()
    }

    return (
        <section
            id="about-me"
            className="relative min-h-screen flex flex-col items-center justify-center bg-stone-900 text-white px-4 md:px-12 pt-24"
        >
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVideoLoaded ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }} 
            >
                <BackgroundVideo onLoaded={() => setIsVideoLoaded(true)} />
                <div className="absolute inset-0 bg-black opacity-50" />
            </motion.div>

            {isVideoLoaded && (
                <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
                    <motion.div
                        className="col-span-1 md:col-span-4 text-center md:text-left space-y-6 mx-auto md:mx-0 max-w-3xl"
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-lime-300">
                            Hi, my name is
                        </h2>
                        <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold whitespace-nowrap">
                            Philip Purnama
                        </h3>
                        <p className="text-lg sm:text-lg md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                            I'm a full stack developer with 1.5+ years of experience in web apps
                            and mentoring at Binus University. I work with React, NestJS, and
                            Flutter, and have hands-on exposure to databases, AI, and
                            cybersecurity. I like joining hackathons, building projects, and
                            collaborating to grow my technical and teamwork skills.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button
                                onClick={handleDownload}
                                className="bg-lime-300 text-stone-900 px-5 py-2 rounded-lg text-xl hover:bg-lime-400 transition"
                            >
                                Download Resume
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hidden md:flex items-center justify-center col-span-3"
                        initial={{ x: 80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-72 h-72 rounded-full object-cover border-4 border-lime-300 shadow-lg"
                        />
                    </motion.div>
                </div>
            )}

            {isVideoLoaded && (
                <motion.div
                    className="relative z-10 mt-8 flex space-x-6 text-2xl"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a
                        href="https://www.linkedin.com/in/philip-purnama-2435522a9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lime-300 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/ixicept"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lime-300 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:philip.purnama1@gmail.com"
                        className="hover:text-lime-300 transition"
                    >
                        <FaEnvelope />
                    </a>
                </motion.div>
            )}
        </section>
    )
}

export default AboutMePage
