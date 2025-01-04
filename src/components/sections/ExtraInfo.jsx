import CountryIcon from "../ui/CountryIcon";
import EducationInfo from "../ui/EducationInfo";
import Heading2 from "../ui/Heading2";
import ImageLarge from "../ui/ImageLarge";

export default function ExtraInfo(){

    const certificates = [
        "/portfolio/assets/cert/webdev.jpg",
        "/portfolio/assets/cert/inovasrebro.png",
        "/portfolio/assets/cert/inovazlato.png",
    ]

    return(
        <>
            <div id="extraInfoContainer" className="standard-bg bg-antique-dark-container w-screen standard-padding flex flex-col items-center">
                <div id="extraInfo" className="w-full xl:w-3/4 pb-20 pt-20 standard-margin">
                    <Heading2 text={"Other Related Info"} />
                    <p className="text-xl lg:text-3xl text-center pb-4 pt-4">
                        <br />Below is a number of achievments, academic and personal which I have made during my education. They range from my grades and performances during High-school and Univeristy, along with courses & activities I have completed in my free time. 
                    </p>
                </div>

                <section id="main" className="w-full xl:w-2/3 flex flex-col mb-20">
                    <div className="flex flex-col xl:flex-row items-center pb-10">
                        <div className="w-full xl:w-1/2 flex flex-row justify-center items-center mb-4">
                            <img src="/portfolio/assets/setsLogo.png" alt="" className="w-94"/>
                        </div>
                        <div className="w-full xl:w-1/2 flex flex-col items-center">
                            <EducationInfo
                                name={"High School of Electrical Engineering"}
                                location={"Sarajevo, BA"}
                                time={"2018 - 2022"}
                                title={"Electrician of Automation & Electronics"}
                                grade={"5.0/5.0"}
                                info={"Extraordinary Performance during my time as a Student. Top Grades in my generation of students. Worked on projects aside school hours related to electricity & automation programming"}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col xl:flex-row items-center pb-10">
                        <div className="w-full xl:w-1/2 flex flex-row justify-center items-center mb-4">
                            <img src="/portfolio/assets/ibulogo.png" alt="" className="w-96"/>
                        </div>
                        <div className="w-full xl:w-1/2 flex flex-col items-center">
                            <EducationInfo
                                name={"International Burch University"}
                                location={"Sarajevo, BA"}
                                time={"2022 - 2025 (present)"}
                                title={"BSc. of Information Technology"}
                                grade={"3.64/4.0"}
                                info={"Great Performance during my time as a Student. Above average grades as a student mixing both part time jobs and univeristy activities. Perfect grades in the most important courses: Object Oriented Programming, Computer Organisation, Data Structures & Algorithms, Operating Systems..."}
                            />
                        </div>
                    </div>

                    <h3 className="text-3xl xl:text-4xl kumbh-sans-bold mb-4">Languages</h3>
                    <div className="flex flex-row flex-wrap justify-center items-center">
                        <CountryIcon country={"ba"}/>
                        <CountryIcon country={"gb"}/>
                        <CountryIcon country={"de"}/>
                    </div>

                    <h3 className="text-3xl xl:text-4xl kumbh-sans-bold mb-4 mt-4">Certificates & Activity</h3>
                    <div className="flex flex-col xl:flex-row xl:flex-wrap items-center justify-center pb-24">
                        {certificates.map((cert) => (
                                <ImageLarge src={cert} category="two" />
                            ))}
                    </div>
                </section>
            </div>
        </>
    )
}