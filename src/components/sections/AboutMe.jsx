import Heading2 from "../ui/Heading2";

export default function AboutMe(){
    return(
        <>
            <div id="aboutMe" className="standard-padding pb-20 pt-20 bg-antique-dark-container standard-margin">
            <Heading2 text={"About me"} />
                <section id="basic-info" className="flex flex-col md:flex-row mt-20">
                    <div className="flex flex-col items-center md:items-end jusitfy-center w-full md:w-1/2">
                        <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">A little about me...</h3>
                        <p className="text-xl lg:text-3xl text-center md:text-end pb-4">
                            <br />
                        BSc Student Currently studying Information Technology is Sarajevo, Bosnia & Herzegovina. Ever since High School I’ve grown a passion for IT, specifically Software Development & UI Design, hence I’ve naturally chosen to do my best & pursue it as my career. Creative & Logical thinking is something people often separate, but I tend to combine both to provide the best solutions to problems!
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-row justify-center items-center">
                    <img className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl" src="/assets/me.png" alt="" />
                    </div>
                </section>

                <section id="uni-info" className="flex flex-col md:flex-row mt-20">
                    <div className="md:order-2 flex flex-col items-center md:items-start jusitfy-center w-full md:w-1/2">
                        <h3 className="text-3xl lg:text-5xl kumbh-sans-bold">The boring Stuff: Education...</h3>
                        <p className="text-xl lg:text-3xl text-center md:text-start pb-4">
                            <br />
                            For what it is valued, I’ve always pushed my grades and academic performance to the maximum of its possibilities. I’ve never found it hard to adapt to any course/task/exam/project, and all of my professors can attest to that. During my education I’ve always had top of the class grades, and competed in various tech competitions, representing my school and my own knowledge as well as I can.                    </p>
                    </div>
                    <div className="md:order-1 w-full md:w-1/2 flex flex-row justify-center items-center">
                    <img className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl" src="/assets/me.png" alt="" />
                    </div>
                </section>
            </div>

            
            <div id="workflow" className="standard-padding pb-20 pt-20 bg-antique-dark-three">
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

            <div id="techstack" className="standard-padding pb-20 pt-20 bg-antique-dark-container">
            <Heading2 text={"Tech Stack & Skills"}/>                   
             <section id="techStackInfo" className="flex flex-col mt-10 md:mt-20">
                        <p className="text-2xl lg:text-3xl text-center md:w-1/2 md:m-auto pb-4">
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

            <div id="projects" className="standard-padding pb-32 pt-20 bg-antique-light">
            <Heading2 text={"Projects & Work"}/>
                    <section id="projects" className="flex flex-col xl:flex-row mt-10 md:mt-20">
                        <div className="flex flex-col items-center xl:items-start justify-center w-full xl:w-1/2 md:mr-6 pb-10">
                            <p className="text-2xl lg:text-3xl text-center xl:text-end pb-4">
                                Over the course of my education I’ve taken countless courses and worked on several different projects. I’m someone who loves to learn by doing, so projects are not something I’m short of. Time has been a problem for me due to personal reasons, so It might not look like a lot, but I am giving it my best.
                                <br />
                                <br />
                                You can find both my development & design work here on this Webpage.
                            </p>
                        </div>
                        <div className="w-full xl:w-1/2 flex flex-row justify-center items-center">
                            <button className="w-full h-40 sm:h-60 bg-blue-500 xl:h-1/2 rounded-l-3xl xl:bg-antique-dark-two hover:bg-blue-500 transition text-2xl tranisiton-all">Ｃｏｄｉｎｇ</button>
                            <button className="w-full h-40 sm:h-60 bg-purple-700 xl:h-1/2 rounded-r-3xl xl:bg-antique-dark-one hover:bg-purple-700 text-2xl transition-all">𝒟𝑒𝓈𝒾𝑔𝓃</button>
                        </div>
                    </section>
                    
                    
            </div>
        </>
    )
}