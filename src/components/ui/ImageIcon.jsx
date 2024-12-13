export default function ImageIcon({src}){
    return(
        <img className="logo m-1 w-28 sm:w-36 md:w-36 xl:w-40 transition-all bg-antique-dark-three hover:bg-antique-dark-one rounded-xl p-2" src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${src}`} />
    )
}