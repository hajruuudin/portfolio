export default function Footer(){
    return(
        <footer className="relative standard-padding w-full h-82 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col w-full xl:w-1/2 items-center xl:items-start">
                <h2 className="kumbh-sans-bold text-3xl sm:text-6xl text-white mb-5">Contact & Socials</h2>

                <a className="text-white text-4xl flex flex-col sm:flex-row items-center mb-4" href="https://github.com/hajruuudin" target="new">
                  <i class="devicon-github-original"></i>
                    <span className="kumbh-sans text-2xl md:text-4xl ml-2">
                        hajruuudin
                    </span>
                </a>

                <a className="text-white text-4xl flex flex-col sm:flex-row items-center mb-4" href="https://linkedin.com/in/hajrudin-imamović-897411277" target="new">
                  <i class="devicon-linkedin-plain"></i>
                    <span className="kumbh-sans text-2xl md:text-4xl ml-2">
                        Hajrudin Imamovic
                    </span>
                </a>

                <a className="text-white text-4xl flex flex-col sm:flex-row items-center mb-4" href="https://gmail.com" target="new">
                  <img src="/portfolio/assets/emaillogo.png" alt="" className="w-9 inline" />
                    <span className="kumbh-sans text-2xl md:text-4xl ml-2">
                        hajruuudin@gmail.com
                    </span>
                </a>
                <p className="text-white mt-3">Icons by: <a href="https://devicon.dev/" target="new">https://devicon.dev/</a></p>
                <p className="text-white text-center">Portfolio Design and Implementation by: Me!</p>
            </div>
            <img className="w-72" src="/portfolio/assets/signature.png" alt="" />
        </footer>
    )
}