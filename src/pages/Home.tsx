import React from 'react';
import Navbar from './navbar';

function Home() {
    return (
        <div className="bg-zinc-900 text-white min-h-screen px-6 py-4">
            <Navbar />

            <ul className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start text-left mt-5 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                <a href="#contact"><li className="text-gray-400 text-base hover:underline hover:cursor-pointer">Contact</li></a>
                <a href="#experience"><li className="text-gray-400 text-base hover:underline hover:cursor-pointer">Experience</li></a>
                <a href="#skills"><li className="text-gray-400 text-base hover:underline hover:cursor-pointer">Skills</li></a>
                <a href="#education"><li className="text-gray-400 text-base hover:underline hover:cursor-pointer">Education</li></a>
                <a href="#friends"><li className="text-gray-400 text-base hover:underline hover:cursor-pointer">Friends</li></a>
            </ul>

            <div id="contact" className="max-w-7xl mx-auto mt-10">
                <h1 className="text-2xl text-white">Contact</h1>
                <div>
                    <p className="text-gray-400 mt-4">EMAIL</p>
                    <p className="text-white mt-1">shashanksreepathi3 at gmail dot com</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">LINKEDIN</p>
                    <p className="text-gray-600 mt-1">
                        <a href="https://linkedin.com/in/shashank-sreepathi/" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/shashank-sreepathi/
                        </a>
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">GITHUB</p>
                    <p className="text-gray-600 mt-1">
                        <a href="https://github.com/ShashankSreep" target="_blank" rel="noopener noreferrer">
                            github.com/ShashankSreep
                        </a>
                    </p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">CV</p>
                    <p className="text-gray-600 mt-1">
                        <a href="/resume.pdf"
                            download={true}
                            className='text-gray-600 hover:underline hover:cursor-pointer'>
                            Resume.pdf
                        </a>
                    </p>
                </div>
            </div>

            <div id="experience" className="max-w-7xl mx-auto mt-10">
                <h1 className="text-2xl text-white">Experience</h1>
                <p className="text-gray-400 mt-4">Incoming Software Engineering Intern @ Amazon</p>
                <p className="text-gray-600 mt-1">AWS S3</p>
                <div className="mt-4">
                    <p className="text-gray-400">Undergraduate Researcher</p>
                    <p className="text-gray-600 mt-1">University of Washington</p>
                </div>
            </div>

            <div id="projects" className="max-w-7xl mx-auto mt-10">
                <h1 className="text-2xl text-white">Projects</h1>
                <p className="text-gray-400 mt-4">1Pass | (React, Typescript, Tailwind, Firebase)</p>
                <p className="text-gray-600 mt-1">A password manager that uses AES encryption to store passwords securely</p>
                <div className="mt-4">
                    <p className="text-gray-400">Statsify | (Flask, Spotipy, Python, Spotify)</p>
                    <p className="text-gray-600 mt-1">Analyze and visualize spotify listening metrics</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">Verbatim | (React, Typescript, Firebase, Tailwind, OpenAI)</p>
                    <p className="text-gray-600 mt-1">English language learning/practicing application, leveraging OpenAI API</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">Xk Operating System | (C, Linux)</p>
                    <p className="text-gray-600 mt-1">Operating system with core functionalities, such as sys-calls, file system management, and memory management</p>
                </div>
            </div>

            <div id="skills" className="max-w-7xl mx-auto mt-10">
                <h1 className="text-2xl text-white">Skills</h1>
                <p className="text-gray-400 mt-4">Programming Languages</p>
                <p className="text-gray-600 mt-1">Java, Python, SQL, Typescript, Javascript, HTML, CSS, C, C++</p>
                <div className="mt-4">
                    <p className="text-gray-400">Frameworks</p>
                    <p className="text-gray-600 mt-1">React, Node.js, Express.js, Flask</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-400">Tools</p>
                    <p className="text-gray-600 mt-1">Git, VS Code, Firebase, AWS</p>
                </div>
            </div>

            <div id="education" className="max-w-7xl mx-auto mt-10 mb-10">
                <h1 className="text-2xl text-white">Education</h1>
                <p className="text-gray-400 mt-4">University of Washington, Seattle</p>
                <p className="text-gray-600 mt-1">BS in Computer Science</p>
                <div className="mt-4">
                    <p className="text-gray-400">COURSES</p>
                    <p className="text-gray-600 mt-1">Data Structures, Algorithms, Artificial Intelligence, Operating Systems</p>
                    <p className="text-gray-600 mt-1">Computer Networks, Database Management Systems, Software Engineering</p>
                    <p className="text-gray-600 mt-1">Systems Programming, Hardware Software Interface</p>
                </div>
            </div>

            <div id="friends" className="max-w-7xl mx-auto mt-10 mb-10">
                <h1 className="text-2xl text-white">Friends</h1>
                <p className="text-gray-400 mt-4 hover:underline hover:cursor-pointer"><a href='https://www.linkedin.com/in/alexniu100/' target='_blank' rel='noopener noreferrer'>Alex Niu</a></p>
                <p className="text-gray-400 mt-1 hover:underline hover:cursor-pointer"><a href='https://derekzzhu.github.io/' target='_blank' rel="noopener noreferrer">Derek Zhu</a></p>
                <p className="text-gray-400 mt-1 hover:underline hover:cursor-pointer"><a href='https://saejune04.github.io/' target="_blank" rel="noopener noreferrer">Joshua Jung</a></p>
            </div>
        </div>
    );
}

export default Home;
