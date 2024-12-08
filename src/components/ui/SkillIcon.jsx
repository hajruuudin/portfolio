export default function SkillIcon({skill, level = 1}){
    return(
        <div className={`icon inline pl-5 pr-5 pt-3 pb-3 m-2 rounded-3xl kumbh-sans-bold
            ${level === 3 ? "bg-gradient-to-r from-[#01424F] to-green-200/50 text-3xl" 
                : level === 2 ? "bg-antique-dark-two text-2xl" 
                    : level === 1 ? "bg-antique-light text-xl opacity-75" : ""}
        `}>
            {skill}
        </div>
    )
}