export default function Footer(){
    return(
        <footer className="relative standard-padding w-full h-82 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col w-full xl:w-1/2 items-center xl:items-start">
                <h2 className="kumbh-sans-bold text-3xl sm:text-5xl text-white mb-5">Contact & Ref</h2>
                <a className="text-white text-4xl flex flex-col sm:flex-row items-center" href="https://github.com/hajruuudin" target="new">
                  <i class="devicon-github-original"></i>
                    <span className="kumbh-sans text-2xl md:text-4xl ml-4">
                        github.com/hajruuudin
                    </span>
                </a>
                <a className="text-white text-4xl flex flex-col sm:flex-row items-center" href="https://github.com/hajruuudin" target="new">
                  <img src="/assets/emaillogo.png" alt="" className="w-12 inline" />
                    <span className="kumbh-sans text-2xl md:text-4xl ml-2">
                        hajruuudin@gmail.com
                    </span>
                </a>
                <p className="text-white mt-3">Icons by: <a href="https://devicon.dev/" target="new">https://devicon.dev/</a></p>
                <p className="text-white">Portfolio Design and Implementation by: Me!</p>
            </div>
            <img className="w-72" src="/assets/signature.png" alt="" />
           
        </footer>
    )
}