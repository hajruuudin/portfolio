export default function Header(){
    return(
        <div id="header" className="z-30 w-full mb-40 text-white flex flex-col lg:flex-row items-center justify-between standard-padding">
                <div id="textHeader" className="flex flex-col items-center lg:items-start relative">
                    <p className="text-center text-2xl xl:text-4xl">Meet</p>
                    <h1 className="text-center text-5xl sm:text-6xl xl:text-7xl kumbh-sans-bold pt-5">Hajrudin Imamovic</h1>
                    <p className="text-center text-xl lg:text-3xl pt-2">aspiring Software Developer & UI designer</p>
                </div>
                <img className="w-72" src="/assets/signature.png" alt="" />
        </div>
    )
}