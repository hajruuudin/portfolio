import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate();
    const redirect = () => {}

    return(
        <div id="navbarContainer" className="relative -bottom-20 sticky z-50 m-auto w-2/3 xl:w-1/4 flex flex-row justify-center transition-all duration-500 ease-in-out text-white kumbh-sans-bold">
            <buttton onClick={() => navigate('/')} className="bg-antique-dark-one hover:grow transition-all p-3 text-center rounded-l-xl">
                <span>About Me</span>
            </buttton>
            <buttton onClick={() => navigate('/code')} className="bg-antique-dark-two hover:grow transition-all p-3 text-center">
                <span>Design</span>
            </buttton>
            <buttton onClick={() => navigate('/design')} className="bg-antique-dark-one hover:grow transition-all p-3 text-center">
                <span>Coding</span>
            </buttton>
            <buttton onClick={() => navigate('/info')} className="bg-antique-dark-two hover:grow transition-all p-3 text-center rounded-r-xl">
                <span>Info</span>
            </buttton>
        </div>
    )
}