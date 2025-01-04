import EducationInfo from "../ui/EducationInfo";
import Heading2 from "../ui/Heading2";
import ImageIcon from "../ui/ImageIcon";
import ImageLarge from "../ui/ImageLarge";

const techStackIcons = [
    "nodejs/nodejs-original.svg",
    "javascript/javascript-original.svg",
    "express/express-original.svg",
    "react/react-original.svg",
    "mongodb/mongodb-original-wordmark.svg",
    "java/java-original.svg",
    "mysql/mysql-original.svg",
    "tailwindcss/tailwindcss-original.svg",
    "bootstrap/bootstrap-original.svg",
    "kotlin/kotlin-original.svg"
];

const toolsAndSoftwareIcons = [
    "git/git-original.svg",
    "github/github-original.svg",
    "photoshop/photoshop-original.svg",
    "figma/figma-original.svg",
    "dbeaver/dbeaver-original.svg",
    "intellij/intellij-original.svg",
    "vscode/vscode-original.svg"
];

export default function AboutMe() {
    return (
        <>
            <div id="aboutMeContainer" className="pb-20 pt-20 standard-padding bg-antique-dark-container">
                <div id="aboutMe" className="w-full xl:w-3/4 standard-margin">
                    <Heading2 text={"About me"} />
                    <section id="basic-info" className="flex flex-col md:flex-row mt-20">
                        <div className="flex flex-col items-center md:items-end jusitfy-center w-full md:w-1/2">
                            <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">A little about me...</h3>
                            <p className="text-xl lg:text-3xl text-center md:text-end pb-4">
                                <br />
                                BSc Student Currently studying Information Technology is Sarajevo, Bosnia & Herzegovina. Ever since High School I’ve grown a passion for IT, specifically Software Development & UI Design, hence I’ve naturally chosen to do my best & pursue it as my career. Creative & Logical thinking is something people often separate, but I tend to combine both to provide the best solutions to problems!
                            </p>
                        </div>
                        <ImageLarge src={"/portfolio/assets/me.png"} />
                    </section>

                    <section id="uni-info" className="flex flex-col md:flex-row mt-20">
                        <div className="md:order-2 flex flex-col items-center lg:ml-0 md:ml-12 ml-0 md:items-start jusitfy-center w-full md:w-1/2">
                            <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">The boring Stuff: Education...</h3>
                            <p className="text-xl lg:text-3xl text-center md:text-start pb-4">
                                <br />
                                For what it is valued, I’ve always pushed my grades and academic performance to the maximum of its possibilities. I’ve never found it hard to adapt to any course/task/exam/project, and all of my professors can attest to that. During my education I’ve always had top of the class grades, and competed in various tech competitions, representing my school and my own knowledge as well as I can.                    </p>
                        </div>
                        <div className="md:order-1 w-full md:w-1/2 flex flex-row justify-center lg:mr-24 lg:justify-end items-center">
                            <div className="flex flex-col items-center text-end">
                                <EducationInfo
                                    name={"High School of Electrical Engineering"}
                                    location={"Sarajevo, BA"}
                                    time={"2018 - 2022"}
                                    title={"Electrician of Automation & Electronics"}
                                    grade={"5.0/5.0"}
                                />

                                <hr className="w-full border-2 rounded-full mt-3 mb-3" />

                                <EducationInfo
                                    name={"International Burch University"}
                                    location={"Sarajevo, BA"}
                                    time={"2022 - 2025 (present)"}
                                    title={"BSc. of Information Technology"}
                                    grade={"3.64/4.0"}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>


            <div id="workflowContainer" className="pb-20 pt-20 bg-antique-dark-three">
                <div id="workflow" className="standard-padding m-auto w-full xl:w-3/4">
                    <Heading2 text={"My Workflow"} />
                    <section id="howIWork" className="flex flex-col md:flex-row mt-10 md:mt-20">
                        <div className="flex flex-col items-center md:items-start jusitfy-center w-full md:w-1/2 md:mr-6 pb-10">
                            <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">How I Work</h3>
                            <p className="text-xl lg:text-3xl text-center md:text-start pb-4">
                                <br />
                                Since very early in my life I’ve been taught to be punctual and keep everything organised in my life, from the basics to the more complex topics. This has been ever so crucial in my academic life and it has translated well into my work-life. I love to keep everything organised and up-to-date in order to give me and my colleagues a good overview and clear state of my work!                        </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end jusitfy-center w-full md:w-1/2 md:ml-6 pb-10">
                            <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">What I can do</h3>
                            <p className="text-xl lg:text-3xl text-center md:text-end pb-4">
                                <br />
                                I’ve worked on numerous projects / tasks for my academic/personal needs. This has made me proficient in both  Software Development and Design, giving me a broad view of topics such as: RESTful design, Responsive Web and Mobile Development, Project Design, Object Oriented Programming, Common Design Patterns & Proper Coding conventions... </p>
                        </div>
                    </section>
                </div>
            </div>

            <div id="techStackContainer" className="pb-20 pt-20 bg-antique-dark-container">
                <div id="techstack" className="standard-padding m-auto w-full xl:w-2/3">
                    <Heading2 text={"Tech Stack & Skills"} />
                    <section id="techStackInfo" className="flex flex-col justify-center xl:items-center mt-10 md:mt-20">

                        <p className="text-xl xl:text-3xl text-center  pb-4">
                            Learning a large number of skills is not my priority, as I like master one thing at a time and only then move on to the next. Because of this, I like to keep my Tech Stack relatively small, but very useful.
                        </p>

                        <div className="flex flex-col mt-10 xl:ml-24">
                            <h4 className="text-4xl lg:text-5xl kumbh-sans-bold pb-3">Languages & Frameworks</h4>
                            <div className="-ml-10 md:-ml-24 w-screen flex flex-row justify-start sm:justify-center sm:flex-wrap overflow-x-auto sm:overflow-hidden">
                                {techStackIcons.map((icon) => (
                                    <ImageIcon src={icon} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col mt-10 xl:ml-24">
                            <h4 className="text-4xl lg:text-5xl kumbh-sans-bold pb-3">Tools & Software</h4>
                            <div className="-ml-12 md:-ml-24 w-screen flex flex-row justify-start sm:justify-center sm:flex-wrap overflow-x-auto sm:overflow-hidden ">
                                {toolsAndSoftwareIcons.map((icon) => (
                                    <ImageIcon src={icon} />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div id="projectsContainer" className="pb-32 pt-20 bg-antique-light">
                <div id="projects" className="standard-padding w-full xl:w-2/3 m-auto">
                    <Heading2 text={"Projects & Work"} />
                    <section id="projects" className="flex flex-col mt-10 md:mt-20 mb-10">
                        <div className="flex flex-col items-center justify-center w-full md:mr-6 pb-10">
                            <p className="text-xl lg:text-3xl text-center  pb-4">
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