import CodeIcon from "../ui/CodeIcon";
import Heading2 from "../ui/Heading2";
import Heading3Code from "../ui/Heading3Code";
import SkillIcon from "../ui/SkillIcon";

export default function CodePortfolio(){
    const skills = [
        { name: "REST-Full API Development", level: 3 },
        { name: "Responsive Design", level: 3 },
        { name: "Frontend Development", level: 3 },
        { name: "Object Oriented Programming", level: 2 },
        { name: "Web Application Programming", level: 3 },
        { name: "Responsive Website/Webapp Development", level: 2 },
        { name: "MERN stack", level: 2 },
        { name: "Backend Development", level: 2 },
        { name: "Design Patterns", level: 1 },
        { name: "Android Development", level: 1 },
        { name: "Database Manipulation & CRUD", level: 1 },
        { name: "QA Testing", level: 1 }
    ].sort((a, b) => b.level - a.level);

    return(
        <>
            <div id="codingInfoContainer" className="pb-20 pt-20 bg-antique-dark-container">
                <div id="codingInfo" className="standard-padding w-full 2xl:w-3/4 m-auto">
                    <Heading2 text={"Coding"} />
                    <section id="basic-info" className="flex flex-col justify-center items-center 2xl:flex-row mt-20">
                        <p className="text-2xl lg:text-4xl text-center 2xl:text-start w-full 2xl:w-1/2 pb-4">
                            The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                        </p>
                        <div className="w-full 2xl:w-1/2 h-fit m-auto flex flex-row flex-wrap items-center justify-center">
                            {skills.map((skill) => {
                                return <SkillIcon skill={skill.name} level={skill.level}/>
                            })}
                        </div>
                    </section>
                </div>
            </div>
            
            <div className="standard-bg pt-20 pb-20 bg-antique-light">
                <div id="codingProjects" className="standard-padding w-full 2xl:w-5/6 m-auto">
                <Heading2 text={"Projects & Work"} />
                    <section id="basic-info" className="flex flex-col 2xl:flex-row items-center mt-20">
                        <div className="2xl:hidden -ml-12 sm:ml-0 w-screen sm:w-full 2xl:w-1/2 h-full m-auto flex flex-row 2xl:flex-wrap items-center justify-start sm:justify-center  overflow-x-auto 2xl:overflow-hidden">
                            <img src="/portfolio/assets/yelpcamp/yelpcamp01.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/yelpcamp/yelpcamp02.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/yelpcamp/yelpcamp03.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/yelpcamp/yelpcamp04.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        </div>
                        <div className="hidden 2xl:flex 2xl:w-1/2 h-full flex flex-col items-end mr-10">
                            <img src="/portfolio/assets/yelpcamp/yelpcamp01.png" alt="" className="2xl:w-image 2xl:h-image rounded-2xl"/>
                        </div>
                        <div className="w-full 2xl:w-1/2 h-full flex flex-col justify-center items-center 2xl:items-start">
                            <Heading3Code text={"YelpCamp"} gitHub={"yelp-camp-project"}/>
                            <div className="flex flex-col sm:flex-row">
                                <SkillIcon skill={"REST-full WebApp"} level={2}/>
                                <SkillIcon skill={"Authentication & Authorization"} level={2}/>
                                <SkillIcon skill={"Templating"} level={2}/>
                            </div>
                            <div className="flex flex-row flex-wrap justify-center">
                                <CodeIcon code={'NodeJS'}/>
                                <CodeIcon code={'Express'}/>
                                <CodeIcon code={'MongoDb'}/>
                                <CodeIcon code={'EJS'}/>
                                <CodeIcon code={'Bootstrap'}/>
                            </div>
                            <div className="hidden 2xl:inline flex flex-row items-center justify-start">
                                <img src="/portfolio/assets/yelpcamp/yelpcamp01.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/portfolio/assets/yelpcamp/yelpcamp02.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/portfolio/assets/yelpcamp/yelpcamp03.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/portfolio/assets/yelpcamp/yelpcamp04.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                            </div>
                            <p className="text-2xl 2xl:text-4xl text-center 2xl:text-start  pb-4">
                                As part of a UDEMY Web Development course, this project is one relatively large-scale applications that focuses on utilizing all the most crucial concepts of a working Web Application: <strong>REST-ful APi development, Responsive Design and User Interaction, Quick Database Quierying and performance, Authentication and Authorization and other cool concepts like Image Upload, GeoCoding, Security & Validaiton...</strong> The application uses EJS templating, an old method for developing frontent, along with Node - Express - MongoDB for the backend. In comparison to the Course Project, I added some aditional functionality to make the application unique and more complex.
                            </p>
                        </div>
                    </section>

                    <section id="basic-info" className="flex flex-col 2xl:flex-row items-center mt-20">
                        <div className="2xl:hidden -ml-12 sm:ml-0 w-screen sm:w-full 2xl:w-1/2 h-full m-auto flex flex-row 2xl:flex-wrap items-center justify-start sm:justify-center  overflow-x-auto 2xl:overflow-hidden">
                            <img src="/portfolio/assets/taskmanager/taskmanager01.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/taskmanager/taskmanager02.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/taskmanager/taskmanager03.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/taskmanager/taskmanager04.png" alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        </div>
                        <div className="2xl:order-2 hidden 2xl:flex 2xl:w-1/2 h-full flex flex-col items-start ml-10">
                            <img src="/portfolio/assets/taskmanager/taskmanager01.png" alt="" className="2xl:w-image 2xl:h-image rounded-2xl"/>
                        </div>
                        <div className="2xl:order-1 w-full 2xl:w-1/2 h-full flex flex-col justify-center items-center 2xl:items-end">
                            <Heading3Code text={"Task Manager"} gitHub={"three-small-apps"}/>
                            <div className="flex flex-col sm:flex-row">
                                <SkillIcon skill={"Single Page App"} level={2}/>
                                <SkillIcon skill={"Minimal Design"} level={2}/>
                                <SkillIcon skill={"MERN Stack"} level={2}/>
                            </div>
                            <div className="flex flex-row flex-wrap justify-center">
                                <CodeIcon code={'NodeJS'}/>
                                <CodeIcon code={'Express'}/>
                                <CodeIcon code={'MongoDb'}/>
                                <CodeIcon code={'React'}/>
                                <CodeIcon code={'Tailwind'}/>
                            </div>
                            <div className="hidden 2xl:inline flex flex-row items-center justify-start">
                                <img src="/portfolio/assets/taskmanager/taskmanager01.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/portfolio/assets/taskmanager/taskmanager02.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/portfolio/assets/taskmanager/taskmanager03.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                                <img src="/portfolio/assets/taskmanager/taskmanager04.png" alt="" className="w-40 inline rounded-2xl m-3 object-cover"/>
                            </div>
                            <p className="text-2xl 2xl:text-4xl text-center 2xl:text-end  pb-4">
                                This is my first official attempt at using React as a frontend framework, hence the syntax and the code itself is not the greatest. As part of a three - small - application project, one of them is this task manager. As the project above, it uses the MERN stack, except this time the frontend is built with React + React Router package. It covers functions such as: <strong>full CRUD for adding tasks and lists, single page application navigation, responsive UI design...</strong> The styling for this application is Tailwind CSS, along with some custom classes added for preference.
                            </p>
                        </div>
                    </section>

                    <section id="basic-info" className="flex flex-col 2xl:flex-row mt-20">
                        <div className="-ml-12 sm:ml-0 w-screen sm:w-full 2xl:w-1/2 h-full m-auto flex flex-row 2xl:flex-wrap items-center justify-center 2xl:justify-end 2xl:mr-4  overflow-x-auto 2xl:overflow-hidden">
                            <img src="/portfolio/assets/entertainer/entertainer01.png" alt="" className="w-48 2xl:h-1/4 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/entertainer/entertainer02.png" alt="" className="w-48 2xl:h-1/4 rounded-2xl m-3 object-cover"/>
                            <img src="/portfolio/assets/entertainer/entertainer03.png" alt="" className="w-48 2xl:h-1/4 rounded-2xl m-3 object-cover"/>
                        </div>
                        <div className="w-full 2xl:w-1/2 flex flex-col justiy-center items-center 2xl:items-start">
                            <Heading3Code text={"Entertain.er"} gitHub={"MobileProject2024---ENTERTAIN.ER"}/>
                            <div className="flex flex-col sm:flex-row">
                                <SkillIcon skill={"Android App"} level={2}/>
                                <SkillIcon skill={"Room Database"} level={2}/>
                                <SkillIcon skill={"MVVM Design"} level={2}/>
                            </div>
                            <div className="flex flex-row flex-wrap justify-center">
                                <CodeIcon code={'Kotlin'}/>
                                <CodeIcon code={'Compose'}/>
                                <CodeIcon code={'Room DB'}/>
                                <CodeIcon code={'SQLite'}/>
                            </div>
                            <p className="text-2xl 2xl:text-4xl text-center 2xl:text-start  pb-4">
                                This is a very simple, but well-build Andoid application aimed towards users looking to track their watched movies and their watchlist. It is my first functional mobile application that is ran locally on a users Android device. Developing this introdouced me to the MVVM architecture, along with base android development concepts like:<strong> Material UI Design, Room Database, Kotlin and Compose together... </strong>The application itself has some mishaps, but with some setup functions as expected. This is also my firsts documentation using KDocs!
                            </p>
                        </div>
                    </section>

                    <section id="basic-info" className="flex flex-col 2xl:flex-row items-center pb-32 mt-20">
                        <div className="2xl:order-2 2xl:w-1/2 h-full flex flex-col items-start ml-10">
                            <img src="/portfolio/assets/mystylist/mystylist.png" alt="" className="w-image rounded-2xl"/>
                        </div>
                        <div className="2xl:order-1 w-full 2xl:w-1/2 flex flex-col justify-center items-center 2xl:items-end">
                            <Heading3Code text={"MyStylist - WIP"} gitHub={"WebProgrammingProject2024"}/>
                            <div className="flex flex-col sm:flex-row">
                                <SkillIcon skill={"REST-full API"} level={2}/>
                                <SkillIcon skill={"Single Page App - No React"} level={2}/>
                                <SkillIcon skill={"OpenAPI Docs"} level={2}/>
                            </div>
                            <div className="flex flex-row flex-wrap justify-center">
                                <CodeIcon code={'Bootstrap & JQuery'}/>
                                <CodeIcon code={'PHP'}/>
                                <CodeIcon code={'Flight PHP'}/>
                                <CodeIcon code={'MySQL'}/>
                            </div>
                            <p className="text-2xl 2xl:text-4xl text-center 2xl:text-end  pb-4">
                                My first, and one of my personal favourites, Web Applications. Currently, it is non-functional as it was built with PHP and jQuery as a backend/frontend combination, which is something I decided to skip over for more modern approaches. The application allows users to track and add clothes they currently posses, track outfits they always wear and get a statistical overwiev of what their most worn clothes are, what style they preffer the most... This application will be updated sometime to a mobile application, but in its current state, it is not functional. It was, however, a good learning point as it taught me the basic principles of WebApplication implementation.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}