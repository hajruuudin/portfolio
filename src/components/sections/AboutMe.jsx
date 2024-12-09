import Heading2 from "../ui/Heading2";

export default function AboutMe(){
    return(
        <>
            <div id="aboutMeContainer" className="pb-20 pt-20 standard-padding bg-antique-dark-container">
                <div id="aboutMe" className="w-full xl:w-3/4 standard-margin">
                <Heading2 text={"About me"} />
                    <section id="basic-info" className="flex flex-col md:flex-row mt-20">
                        <div className="flex flex-col items-center md:items-end jusitfy-center w-full md:w-1/2">
                            <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">A little about me...</h3>
                            <p className="text-2xl lg:text-3xl text-center md:text-end pb-4">
                                <br />
                            BSc Student Currently studying Information Technology is Sarajevo, Bosnia & Herzegovina. Ever since High School I’ve grown a passion for IT, specifically Software Development & UI Design, hence I’ve naturally chosen to do my best & pursue it as my career. Creative & Logical thinking is something people often separate, but I tend to combine both to provide the best solutions to problems!
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-row justify-center lg:ml-24 lg:justify-start items-center">
                            <img className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl" src="/portfolio/assets/me.png" alt="" />
                        </div>
                    </section>

                    <section id="uni-info" className="flex flex-col md:flex-row mt-20">
                        <div className="md:order-2 flex flex-col items-center lg:ml-0 md:ml-12 ml-0 md:items-start jusitfy-center w-full md:w-1/2">
                            <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">The boring Stuff: Education...</h3>
                            <p className="text-2xl lg:text-3xl text-center md:text-start pb-4">
                                <br />
                                For what it is valued, I’ve always pushed my grades and academic performance to the maximum of its possibilities. I’ve never found it hard to adapt to any course/task/exam/project, and all of my professors can attest to that. During my education I’ve always had top of the class grades, and competed in various tech competitions, representing my school and my own knowledge as well as I can.                    </p>
                        </div>
                        <div className="md:order-1 w-full md:w-1/2 flex flex-row justify-center lg:mr-24 lg:justify-end items-center">
                            <div className="flex flex-col items-center md:items-end text-end">
                                <h4 className="text-2xl lg:text-4xl kumbh-sans-bold mb-2 mt-2 text-end">High School of Electrical Engineering</h4>
                                <p className="text-2xl mt-2">Sarajevo, BA</p>
                                <p className="text-2xl mt-2">2018 - 2022</p>
                                <p className="text-2xl mt-2">Electrician of Automation & Electronics</p>
                                <p className="text-2xl mt-2">Average Grade: <strong>5.0/5.0</strong></p>

                                <hr className="w-full border-2 rounded-full mt-3 mb-3"/>

                                <h4 className="text-2xl lg:text-4xl kumbh-sans-bold mb-2 mt-2 text-end">International Burch University</h4>
                                <p className="text-2xl mt-2">Sarajevo, BA</p>
                                <p className="text-2xl mt-2">2022 - present</p>
                                <p className="text-2xl mt-2">BSc. of Information Technology</p>
                                <p className="text-2xl mt-2">Average Grade: <strong>3.64/4.0</strong></p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            
            <div id="workflowContainer" className="pb-20 pt-20 bg-antique-dark-three">
                <div id="workflow" className="standard-padding m-auto w-full xl:w-3/4">
                    <Heading2 text={"My Workflow"}/>
                    <section id="howIWork" className="flex flex-col md:flex-row mt-10 md:mt-20">
                            <div className="flex flex-col items-center md:items-start jusitfy-center w-full md:w-1/2 md:mr-6 pb-10">
                                <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">How I Work</h3>
                                <p className="text-2xl lg:text-3xl text-center md:text-start pb-4">
                                    <br />
                                    Since very early in my life I’ve been taught to be punctual and keep everything organised in my life, from the basics to the more complex topics. This has been ever so crucial in my academic life and it has translated well into my work-life. I love to keep everything organised and up-to-date in order to give me and my colleagues a good overview and clear state of my work!                        </p>
                            </div>
                            <div className="flex flex-col items-center md:items-end jusitfy-center w-full md:w-1/2 md:ml-6 pb-10">
                                <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">What I can do</h3>
                                <p className="text-2xl lg:text-3xl text-center md:text-end pb-4">
                                    <br />
                                    I’ve worked on numerous projects / tasks for my academic/personal needs. This has made me proficient in both  Software Development and Design, giving me a broad view of topics such as: RESTful design, Responsive Web and Mobile Development, Project Design, Object Oriented Programming, Common Design Patterns & Proper Coding conventions... </p>
                            </div>
                    </section>
                </div>
            </div>

            <div id="techStackContainer" className="pb-20 pt-20 bg-antique-dark-container">
                <div id="techstack" className="standard-padding m-auto w-full xl:w-2/3">
                <Heading2 text={"Tech Stack & Skills"}/>       
                        <section id="techStackInfo" className="flex flex-col justify-center xl:items-center xl:ml-24 mt-10 md:mt-20">
                        
                            <p className="text-2xl lg:text-3xl text-center md:m-auto pb-4">
                                Learning a large number of skills is not my priority, as I like master one thing at a time and only then move on to the next. Because of this, I like to keep my Tech Stack relatively small, but very useful. 
                            </p>

                            <div className="flex flex-col mt-10">
                                <h4 className="text-4xl lg:text-5xl kumbh-sans-bold pb-3">Languages & Frameworks</h4>
                                <div className="-ml-16 md:-ml-24 w-screen flex flex-row justify-start sm:justify-center sm:flex-wrap overflow-x-auto sm:overflow-hidden">
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" />
                                </div>
                            </div>

                            <div className="flex flex-col mt-10">
                                <h4 className="text-4xl lg:text-5xl kumbh-sans-bold pb-3">Tools & Software</h4>
                                <div className="-ml-16 md:-ml-24 w-screen flex flex-row justify-start sm:justify-center sm:flex-wrap overflow-x-auto sm:overflow-hidden ">
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
                                    <img className="logo m-1 w-28 sm:w-1/4 md:w-1/6 xl:w-1/12 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                                </div>
                            </div>
                        </section>
                </div>
            </div>

            <div id="projectsContainer" className="pb-32 pt-20 bg-antique-light">
                <div id="projects" className="standard-padding w-full xl:w-2/3 m-auto">
                    <Heading2 text={"Projects & Work"}/>
                        <section id="projects" className="flex flex-col mt-10 md:mt-20 mb-10">
                            <div className="flex flex-col items-center justify-center w-full md:mr-6 pb-10">
                                <p className="text-2xl lg:text-3xl text-center  pb-4">
                                    Over the course of my education I’ve taken countless courses and worked on several different projects. I’m someone who loves to learn by doing, so projects are not something I’m short of. Time has been a problem for me due to personal reasons, so It might not look like a lot, but I am giving it my best.
                                    <br />
                                    <br />
                                    You can find both my development & design work here on this Webpage.
                                </p>
                            </div>
                            <div className="w-full flex flex-row justify-center items-center">
                                <i className="devicon-github-original mr-4 ml-4 text-9xl"></i>
                                <i className="devicon-figma-plain mr-4 ml-4 text-9xl"></i>
                            </div>
                        </section>
                </div>
            </div>
        </>
    )
}