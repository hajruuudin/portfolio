import MainContainer from "../MainContainer";
import Header from "./Header";

export default function BackgroundContainer(){
    return(
        <>
        <div id="backgroundImage" className="h-full flex flex-col justify-end items-center z-0 relative">
            <img id="imagebg" src="/assets/maybebg.png" alt="" className="z-0 w-full fixed bottom-32 h-screen min-w-fit"/>
            <img id="image1" src="/assets/foreground03.png" alt="" className="z-10 w-full absolute bottom-32"/>
            <img id="image2" src="/assets/foreground02.png" alt="" className="self-end w-full z-20 absolute bottom-20 "/>
            <img id="image3" src="/assets/foreground01.png" alt="" className="z-30 w-full absolute -bottom-20 "/>
            <img id="image4" src="/assets/maintop.png" alt=""className="z-40 absolute -bottom-1 w-full" />
            <Header />
        </div>
        </>
    )
}