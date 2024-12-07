import MainContainer from "./MainContainer";

export default function BackgroundContainer(){
    return(
        <>
        <div id="backgroundImage" className="h-full flex flex-col justify-end items-center z-0 relative">
            <img id="imagebg" src="/assets/maybebg.png" alt="" className="z-0 opacity-30 w-full fixed bottom-32 h-screen min-w-fit"/>
            <img id="image1" src="/assets/foreground03.png" alt="" className="z-10 w-full absolute bottom-32"/>
            <img id="image2" src="/assets/foreground02.png" alt="" className="self-end w-full z-20 absolute bottom-20 "/>
            <img id="image3" src="/assets/foreground01.png" alt="" className="z-30 w-full absolute -bottom-20 "/>
            <img id="image4" src="/assets/maintop.png" alt=""className="z-40 absolute -bottom-1 w-full" />
            <div id="header" className="z-30 w-full mb-28 text-white flex flex-col lg:flex-row items-center justify-between standard-padding">
                <div id="textHeader" className="flex flex-col items-center lg:items-start relative">
                    <p className="text-center text-2xl xl:text-4xl">Meet</p>
                    <h1 className="text-center text-5xl sm:text-6xl xl:text-7xl kumbh-sans-bold pt-5">Hajrudin Imamovic</h1>
                    <p className="text-center text-xl lg:text-3xl pt-2">aspiring Software Developer & UI designer</p>
                </div>
                <img className="w-72" src="/assets/signature.png" alt="" />
            </div>
        </div>
        </>
    )
}