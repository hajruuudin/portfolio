export default function ImageLarge({src}){
    return(
        <div className="w-full md:w-1/2 flex flex-row justify-center lg:ml-24 lg:justify-start items-center">
            <img className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl" src={src} alt="" />
        </div>
    )
}