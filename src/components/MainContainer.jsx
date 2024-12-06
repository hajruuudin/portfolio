import { Outlet } from "react-router-dom";

export default function MainContainer(){
    return(
        <div id="main" className="bg-antique-dark-container h-96 w-full z-50 relative text-white text-center">
            <p className="text-3xl text-center text-white">Work in Progress</p>
            <Outlet />
        </div>
    )
}