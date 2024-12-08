import CodeIcon from "../ui/CodeIcon";
import Heading2 from "../ui/Heading2";
import Heading3Code from "../ui/Heading3Code";
import SkillIcon from "../ui/SkillIcon";

export default function CodePortfolio(){
    const skills = [
        { name: "REST-Full API Development", level: 3 },
        { name: "UI design", level: 3 },
        { name: "Responsive Design", level: 3 },
        { name: "Frontend Development", level: 3 },
        { name: "Object Oriented Programming", level: 2 },
        { name: "Web Application Programming", level: 2 },
        { name: "Responsive Website/Webapp Development", level: 2 },
        { name: "MERN stack", level: 2 },
        { name: "UI Prototyping", level: 2 },
        { name: "Backend Development", level: 2 },
        { name: "Design Patterns", level: 1 },
        { name: "Android Development", level: 1 },
        { name: "Database Manipulation & CRUD", level: 1 },
        { name: "QA Testing", level: 1 }
    ].sort((a, b) => b.level - a.level);

    return(
        <>
            <div id="codingInfo" className="standard-padding pb-20 pt-20 bg-antique-dark-container">
                <Heading2 text={"Coding"} />
                <section id="basic-info" className="flex flex-col xl:flex-row mt-20">
                    <p className="text-xl lg:text-3xl text-center xl:text-start w-full xl:w-1/2 pb-4">
                        The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                    </p>
                    <div className="w-full xl:w-1/2 h-fit m-auto flex flex-row flex-wrap items-center justify-center">
                        {skills.map((skill) => {
                            return <SkillIcon skill={skill.name} level={skill.level}/>
                        })}
                    </div>
                </section>
            </div>

            <div id="projects" className="standard-padding pt-20 bg-antique-light">
            <Heading2 text={"Projects & Work"} />
                <section id="yelpCamp" className="flex flex-col xl:flex-row mt-20">
                    <div className="-ml-12 sm:ml-0 w-screen sm:w-full xl:w-1/2 h-full m-auto flex flex-row xl:flex-wrap items-center justify-start sm:justify-center  overflow-x-auto xl:overflow-hidden">
                        <img src="/assets/yelpcamp/yelpcamp01.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/yelpcamp/yelpcamp02.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/yelpcamp/yelpcamp03.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/yelpcamp/yelpcamp04.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                    </div>
                    <div className="w-full xl:w-1/2 flex flex-col justiy-center items-center xl:items-start">
                        <Heading3Code text={"YelpCamp"} gitHub={"yelp-camp-project"}/>
                        <div className="flex flex-col sm:flex-row">
                            <SkillIcon skill={"REST-full WebApp"} level={2}/>
                            <SkillIcon skill={"Authentication & Authorization"} level={2}/>
                            <SkillIcon skill={"MERN Stack"} level={2}/>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center">
                            <CodeIcon code={'NodeJS'}/>
                            <CodeIcon code={'Express'}/>
                            <CodeIcon code={'MongoDb'}/>
                            <CodeIcon code={'EJS'}/>
                        </div>
                        <p className="text-xl lg:text-3xl text-center xl:text-start  pb-4">
                            The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                        </p>
                    </div>
                </section>

                <section id="taskManager" className="flex flex-col xl:flex-row mt-20">
                    <div className="xl:order-2 -ml-12 sm:ml-0 w-screen sm:w-full xl:w-1/2 h-full m-auto flex flex-row xl:flex-wrap items-center justify-start sm:justify-center  overflow-x-auto xl:overflow-hidden">
                        <img src="/assets/taskmanager/taskmanager01.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/taskmanager/taskmanager02.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/taskmanager/taskmanager03.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/taskmanager/taskmanager04.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                    </div>
                    <div className="xl:order-1 w-full xl:w-1/2 flex flex-col justiy-center items-center xl:items-end">
                        <Heading3Code text={"Task Manager"} gitHub={"three-small-apps"}/>
                        <div className="flex flex-col sm:flex-row">
                            <SkillIcon skill={"Responsive Design"} level={2}/>
                            <SkillIcon skill={"Basic Crud"} level={2}/>
                            <SkillIcon skill={"Single Page Application"} level={2}/>
                        </div>
                        <div className="flex flex-row flex-wrap justify-center">
                            <CodeIcon code={'React'}/>
                            <CodeIcon code={'Express'}/>
                            <CodeIcon code={'MongoDb'}/>
                            <CodeIcon code={'React Router'}/>
                        </div>
                        <p className="text-xl lg:text-3xl text-center xl:text-end  pb-4">
                            The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                        </p>
                    </div>
                </section>

                <section id="basic-info" className="flex flex-col xl:flex-row mt-20">
                    <div className="-ml-12 sm:ml-0 w-screen sm:w-full xl:w-1/2 h-full m-auto flex flex-row xl:flex-wrap items-center justify-start sm:justify-center  overflow-x-auto xl:overflow-hidden">
                        <img src="/assets/entertainer/entertainer01.png" alt="" className="w-48 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/entertainer/entertainer02.png" alt="" className="w-48 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/entertainer/entertainer03.png" alt="" className="w-48 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                    </div>
                    <div className="w-full xl:w-1/2 flex flex-col justiy-center items-center xl:items-start">
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
                        <p className="text-xl lg:text-3xl text-center xl:text-start  pb-4">
                            The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                        </p>
                    </div>
                </section>

                <section id="basic-info" className="flex flex-col xl:flex-row pb-32 mt-20">
                    <div className="xl:order-2 sm:w-full xl:w-1/2 h-full m-auto flex flex-row xl:flex-wrap items-center justify-center ">
                        <img src="/assets/mystylist/mystylist.png" alt="" className="w-96 xl:w-full xl:h-1/4 border-2 rounded-2xl m-4 object-cover"/>
                    </div>
                    <div className="xl:order-1 w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-end">
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
                        <p className="text-xl lg:text-3xl text-center xl:text-end  pb-4">
                            The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}