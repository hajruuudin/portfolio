import { NavLink, useNavigate } from "react-router-dom"

export default function Navbar(){
    const windowScroll = () => {
        setTimeout(() => {
            window.scroll({
                top: 700,
                left: 0,
                behavior: "smooth"
            })
        }, 20)
        
    }

    return(
        <div id="navbarContainer" className="relative -bottom-20 sticky z-999 m-auto w-1/4 xl:w-1/2 h-12 sm:h-16 flex flex-row justify-center items-center transition-all duration-500 ease-in-out text-white text-l sm:text-xl kumbh-sans-bold rounded-lg ">
            <NavLink 
                to={"/portfolio/about"}
                onClick={() => windowScroll()}
                className={({isActive}) => 
                    isActive
                        ? "bg-green-200 text-antique-dark-one grow transition-all p-4 text-center rounded-l-xl rounded-r-xl ml-2 mr-2"
                        : "bg-antique-dark-two hover:grow transition-all p-4 text-center rounded-l-xl"
                }
            >
                <buttton>
                    <span>About</span>
                </buttton>
            </NavLink>
            <NavLink 
                to={"/portfolio/code"}
                onClick={() => windowScroll()}
                className={({isActive}) => 
                    isActive
                        ? "bg-green-200 text-antique-dark-one grow transition-all p-4 text-center rounded-l-xl rounded-r-xl ml-2 mr-2"
                        : "bg-antique-light hover:grow transition-all p-4 text-center"
                }
            >
                <buttton >
                    <span>Coding</span>
                </buttton>
            </NavLink>
            <NavLink 
                to={"/portfolio/design"}
                onClick={() => windowScroll()}
                className={({isActive}) => 
                    isActive
                        ? "bg-green-200 text-antique-dark-one grow transition-all p-4 text-center rounded-l-xl rounded-r-xl ml-2 mr-2"
                        : "bg-antique-dark-two hover:grow transition-all p-4 text-center"
                }
            >
                <buttton>
                    <span>Design</span>
                </buttton>
            </NavLink>
            <NavLink 
                to={"/portfolio/info"}
                onClick={() => windowScroll()}
                className={({isActive}) => 
                    isActive
                        ? "bg-green-200 text-antique-dark-one grow transition-all p-4 text-center rounded-l-xl rounded-r-xl ml-2 mr-2"
                        : "bg-antique-light hover:grow transition-all p-4 text-center rounded-r-xl"
                }
            >
                <buttton>
                    <span>Info</span>
                </buttton>
            </NavLink>
        </div>
    )
}