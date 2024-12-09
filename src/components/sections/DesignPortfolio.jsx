import CodeIcon from "../ui/CodeIcon";
import Heading2 from "../ui/Heading2"
import Heading3Design from "../ui/Heading3Design";

import SkillIcon from "../ui/SkillIcon";

export default function DesignPortfolio(){
    const skills = [
        { name: "UI Design", level: 3 },
        { name: "Prototyping", level: 3 },
        { name: "Wireframing", level: 3 },
        { name: "Minimal Design", level: 3 },
        { name: "Logo Creation", level: 2 },
        { name: "Inteface Design", level: 2 },
        { name: "UX Principles", level: 2 },
        { name: "Color Theory", level: 2 },
        { name: "Hierarchy", level: 2 },
        { name: "Typography", level: 2 }
    ].sort((a, b) => b.level - a.level);

    return(
        <>
            <div id="designInfoContainer" className="pb-20 pt-20 bg-antique-dark-container">
                <div id="designInfo" className="standard-padding w-full 2xl:w-3/4 m-auto">
                    <Heading2 text={"Design"} />
                    <section id="basic-info" className="flex flex-col xl:flex-row mt-20">
                        <p className="xl:order-2 text-2xl lg:text-4xl text-center xl:text-end w-full xl:w-1/2 pb-4">
                            As with coding, I value full-on work and project creation more than theoretical learning & small tasks. Design and art is something that has stuck with me ever since high school, and is something I value primarily as a hobby, but also as a career path. My experience in design has led me to have <strong>UI/UX design</strong> as my main choice of creativity, however, I do enjoy various other graphical design tasks, some of which are labeled here. Minimalistic and clean design is my preffered type of design, and it is a recurring theme in all of my projects.
                        </p>
                        <div className="xl:order-1 w-full xl:w-1/2 h-fit m-auto flex flex-row flex-wrap items-center justify-center">
                            {skills.map((skill) => {
                                return <SkillIcon skill={skill.name} level={skill.level}/>
                            })}
                        </div>
                    </section>
                </div>
            </div>

            <div className="standard-bg pt-20 pb-20 bg-antique-light">
                <div id="designProjects" className="standard-padding w-full 2xl:w-5/6 m-auto">
                    <Heading2 text={"Projects & Work"} />
                    <section id="basic-info" className="flex flex-col 2xl:flex-row items-center mt-20">
                        <div className="2xl:hidden -ml-12 sm:ml-0 w-screen sm:w-full 2xl:w-1/2 h-full m-auto flex flex-row 2xl:flex-wrap items-center justify-start sm:justify-center  overflow-x-auto 2xl:overflow-hidden">
                            <img src="/assets/skyhop/skyhop01.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/assets/skyhop/skyhop02.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/assets/skyhop/skyhop03.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/assets/skyhop/skyhop04.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        </div>
                        <div className="hidden 2xl:flex 2xl:w-1/2 h-full flex flex-col items-end mr-10">
                            <img src="/assets/skyhop/skyhop.png" alt="" className="2xl:w-image rounded-2xl"/>
                        </div>
                        <div className="w-full 2xl:w-1/2 h-full flex flex-col justify-center items-center 2xl:items-start">
                            <Heading3Design text={"Sky Hop"} figma={"https://www.figma.com/design/RouaoEXgr8720ee8y4y1FP/AssignmentPart3?node-id=1-2&t=sD8yra7c0sp6yAO0-1"}/>
                            <div className="flex flex-col sm:flex-row">
                                <SkillIcon skill={"Modern Minimal Design"} level={2}/>
                                <SkillIcon skill={"Wireframes"} level={2}/>
                                <SkillIcon skill={"Focus on Hierarchy"} level={2}/>
                            </div>
                            <div className="hidden 2xl:inline flex flex-row items-center justify-start">
                                <img src="/assets/skyhop/skyhop01.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/assets/skyhop/skyhop02.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/assets/skyhop/skyhop03.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/assets/skyhop/skyhop04.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                            </div>
                            <p className="text-2xl 2xl:text-4xl text-center 2xl:text-start  pb-4">
                                SkyHop is an application designed as a two-person project for a Univeristy Course. It aims to solve the problems people have when it comes to making plans for travel, as it provides both accomodation and travel method booking in one go, all bundled up with a simple User Interface. The main goal of this application concept is to create a UI that is as simple as possible, while maintaining a modern look, making it easy to use and effective at its main goal. The concepts which are the focus in this project are:<strong> Minimal UI design, Typography, Custom Logo desing, Prototyping and Wireframing</strong>, among other...
                            </p>
                        </div>
                    </section>


                    <section id="basic-info" className="flex flex-col 2xl:flex-row items-center mt-20 pb-20">
                        <div className="hidden 2xl:flex 2xl:w-1/2 h-full flex flex-col items-end mr-10">
                            <img src="/assets/mediasphere/mediasphere.png" alt="" className="w-image rounded-2xl m-4"/>
                        </div>
                        <div className="w-full 2xl:w-1/2 h-full flex flex-col justify-center items-center 2xl:items-start">
                            <Heading3Design text={"MediaSphere - WIP"} figma={"#"}/>
                            <div className="flex flex-col sm:flex-row">
                                <SkillIcon skill={"Modern Minimal Design"} level={2}/>
                                <SkillIcon skill={"Complex Prototyping"} level={2}/>
                                <SkillIcon skill={"Focus on Hierarchy"} level={2}/>
                            </div>
                            <p className="text-2xl 2xl:text-4xl text-center 2xl:text-start  pb-4">
                                This is a work in progress design for a large-scale appliacion aimed at users who have problems tracking and finding entertainment. MediaSphere is a bundled up tracker for Movies, Series, Books & Games, which allows users to browse and find entertainment of these categories, track their progress, add to a wishlist, view where they can consume that entertainment and similar. The application is planned to be designed thoroughly, which includes: <strong>low and high fidelity Wireframes, Layouts, Prototypes, Screen design for both Web and Mobile screens...</strong>
                            </p>
                        </div>
                    </section>

                    <p className="text-2xl 2xl:text-4xl text-center pb-20">Apart from this portfolio, the rest of my design work consists of various components, logos, artworks which you can view at this link:</p>
                </div>
            </div>
        </>
    )
}