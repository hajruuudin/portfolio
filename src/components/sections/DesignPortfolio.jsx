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
            <div id="designInfo" className="standard-padding pb-20 pt-20 bg-antique-dark-container">
                <Heading2 text={"Design"} />
                <section id="basic-info" className="flex flex-col xl:flex-row mt-20">
                    <p className="xl:order-2 text-xl lg:text-3xl text-center xl:text-end w-full xl:w-1/2 pb-4">
                        The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                    </p>
                    <div className="xl:order-1 w-full xl:w-1/2 h-fit m-auto flex flex-row flex-wrap items-center justify-center">
                        {skills.map((skill) => {
                            return <SkillIcon skill={skill.name} level={skill.level}/>
                        })}
                    </div>
                    
                </section>
            </div>

            <div id="yelpcamp" className="standard-padding pt-20 bg-antique-light">
            <Heading2 text={"Projects & Work"} />
                <section id="basic-info" className="flex flex-col xl:flex-row mt-20">
                    <div className="xl:hidden -ml-12 sm:ml-0 w-screen sm:w-full xl:w-1/2 h-full m-auto flex flex-row xl:flex-wrap items-center justify-start sm:justify-center  overflow-x-auto xl:overflow-hidden">
                        <img src="/assets/skyhop/skyhop01.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/skyhop/skyhop02.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/skyhop/skyhop03.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                        <img src="/assets/skyhop/skyhop04.png" alt="" className="w-64 xl:h-1/4 border-2 rounded-2xl m-3 object-cover"/>
                    </div>
                    <div className="hidden xl:inline sm:w-full xl:w-1/2 h-full m-auto flex flex-row xl:flex-wrap items-center justify-center ">
                        <img src="/assets/skyhop/skyhop.png" alt="" className="w-10/12 xl:h-1/4 border-2 rounded-2xl m-4 object-cover"/>
                    </div>
                    <div className="w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-start">
                        <Heading3Design text={"Sky Hop"} figma={"https://www.figma.com/design/RouaoEXgr8720ee8y4y1FP/AssignmentPart3?node-id=1-2&t=sD8yra7c0sp6yAO0-1"}/>
                        <div className="flex flex-col sm:flex-row">
                            <SkillIcon skill={"Modern Minimal Design"} level={2}/>
                            <SkillIcon skill={"Wireframes"} level={2}/>
                            <SkillIcon skill={"Focus on Hierarchy"} level={2}/>
                        </div>
                        <p className="text-xl lg:text-3xl text-center xl:text-start  pb-4">
                            The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                        </p>
                        <div className="hidden xl:inline m-auto flex flex-row items-center justify-start sm:justify-center">
                            <img src="/assets/skyhop/skyhop01.png" alt="" className="w-40 inline border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/assets/skyhop/skyhop02.png" alt="" className="w-40 inline border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/assets/skyhop/skyhop03.png" alt="" className="w-40 inline border-2 rounded-2xl m-3 object-cover"/>
                            <img src="/assets/skyhop/skyhop04.png" alt="" className="w-40 inline  border-2 rounded-2xl m-3 object-cover"/>
                        </div>
                    </div>
                </section>

                <section id="basic-info" className="flex flex-col xl:flex-row mt-20 pb-32">
                    <div className="xl:inline sm:w-full xl:w-1/2 h-full m-auto flex flex-row xl:flex-wrap items-center justify-center ">
                        <img src="/assets/mediasphere/mediasphere.png" alt="" className=" w-96 xl:w-10/12 xl:h-1/4 border-2 rounded-2xl m-4 object-cover"/>
                    </div>
                    <div className="w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-start">
                        <Heading3Design text={"MediaSphere - WIP"} figma={"https://www.figma.com/design/RouaoEXgr8720ee8y4y1FP/AssignmentPart3?node-id=1-2&t=sD8yra7c0sp6yAO0-1"}/>
                        <div className="flex flex-col sm:flex-row">
                            <SkillIcon skill={"Modern Minimal Design"} level={2}/>
                            <SkillIcon skill={"Complex Prototyping"} level={2}/>
                            <SkillIcon skill={"Focus on Hierarchy"} level={2}/>
                        </div>
                        <p className="text-xl lg:text-3xl text-center xl:text-start  pb-4">
                            The best ways to learn coding and get into the flow of application developent is by making something yourself. This is the reason why I often opt to create small projects and components early on when learning a new concept as I feel it immediately gives me a good understanding of the entire framework/concept. I'm also someone who enjoys creating things that can immediatly be viewed and judged, hence why my preffered development area is <strong>Frontend Development & UI Design</strong>. While this is my personal favourite area, my work and experience in development has given me a broad understanding of a bunch IT topics, some of which are labeled here. 
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}