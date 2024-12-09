import CountryIcon from "../ui/CountryIcon";
import Heading2 from "../ui/Heading2";

export default function ExtraInfo(){
    return(
        <>
            <div id="extraInfoContainer" className="standard-bg bg-antique-dark-container w-screen standard-padding flex flex-col items-center">
                <div id="extraInfo" className="w-full xl:w-3/4 pb-20 pt-20 standard-margin">
                    <Heading2 text={"Other Related Info"} />
                    <p className="text-2xl lg:text-3xl text-center pb-4 pt-4">
                        <br />Below is a number of achievments, academic and personal which I have made during my education. They range from my grades and performances during High-school and Univeristy, along with courses & activities I have completed in my free time. 
                    </p>
                </div>

                <section id="main" className="w-full xl:w-2/3 flex flex-col mb-20">
                    <div className="flex flex-col xl:flex-row items-center pb-10">
                        <div className="w-full xl:w-1/2 flex flex-row justify-center items-center mb-4">
                            <img src="/assets/setsLogo.png" alt="" className="w-94"/>
                        </div>
                        <div className="w-full xl:w-1/2 flex flex-col items-center">
                            <h3 className="text-3xl xl:text-4xl kumbh-sans-bold mb-4">High School of Electrical Engineering</h3>
                            <p className="text-2xl"><strong>Sarajevo, BA</strong></p>
                            <p className="text-2xl"><strong>2018 - 2022</strong></p>
                            <p className="text-2xl"><strong>Average Grade:</strong> 5.0/5.0</p>
                            <p className="text-2xl"><strong>Title:</strong> Electrician of Automation and Electronics</p>
                            <p className="text-2xl mt-4">Extraordinary Performance during my time as a Student. Top Grades in my generation of students. Worked on projects aside school hours related to electricity & automation programming</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col xl:flex-row items-center pb-10">
                        <div className="w-full xl:w-1/2 flex flex-row justify-center items-center mb-4">
                            <img src="/assets/ibulogo.png" alt="" className="w-94"/>
                        </div>
                        <div className="w-full xl:w-1/2 flex flex-col items-center">
                            <h3 className="text-3xl xl:text-4xl kumbh-sans-bold mb-4">International BURCH University</h3>
                            <p className="text-2xl"><strong>Sarajevo, BA</strong></p>
                            <p className="text-2xl"><strong>2022 - present</strong></p>
                            <p className="text-2xl"><strong>Average GPA:</strong> ~ 9.0/10.0</p>
                            <p className="text-2xl"><strong>Title:</strong> BSc. of Information Technology</p>
                            <p className="text-2xl mt-4">Great Performance during my time as a Student. Above average grades as a student mixing both part time jobs and univeristy activities. Perfect grades in the most important courses: Object Oriented Programming, Computer Organisation, Data Structures & Algorithms, Operating Systems...</p>
                        </div>
                    </div>

                    <h3 className="text-3xl xl:text-4xl kumbh-sans-bold mb-4">Languages</h3>
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <CountryIcon country={"ba"}/>
                        <CountryIcon country={"gb"}/>
                        <CountryIcon country={"de"}/>
                    </div>

                    <h3 className="text-3xl xl:text-4xl kumbh-sans-bold mb-4 mt-4">Certificates & Activity</h3>
                    <div className="flex flex-col xl:flex-row items-center pb-10">
                        <div className="w-full flex flex-row justify-center items-center mb-4">
                            <img src="/assets/webdev.jpg" alt="" className="w-96 xl:w-2/3 rounded-2xl"/>
                        </div>
                    </div>
                </section>
                {/* <img className="w-screen" src="/assets/endmain.png" alt="" /> */}
            </div>
        </>
    )
}