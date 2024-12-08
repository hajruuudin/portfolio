import { Outlet } from "react-router-dom";

export default function MainContainer(){
    return(
        <div id="main" className="w-full z-50 relative text-white text-center standard-margin">
            <Outlet />
        </div>
    )
}