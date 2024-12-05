export default function BackgroundContainer(){
    return(
        <>
        <div id="backgroundImage" className="h-full flex flex-col justify-end items-center z-0 relative">
            <img id="image1" src="/assets/foreground03.png" alt="" className="z-10 absolute bottom-32"/>
            <img id="image2" src="/assets/foreground02.png" alt="" className="self-end z-20 absolute bottom-20 "/>
            <img id="image3" src="/assets/foreground01.png" alt="" className="z-30 w-full absolute -bottom-12 "/>
        </div>
        <div className="bg-antique-dark-container h-96 w-full z-50 relative">
            <p className="text-3xl text-center text-white">Work in Progress</p>
        </div>
        </>
    )
}