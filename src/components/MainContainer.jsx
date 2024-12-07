import { Outlet } from "react-router-dom";

export default function MainContainer(){
    return(
        <div id="main" className="bg-antique-dark-container w-full z-50 relative text-white text-center">
            <Outlet />
        </div>
    )
}