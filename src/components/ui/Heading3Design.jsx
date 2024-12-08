export default function Heading3Design({text, figma}){
    if(figma){
        return(
            <h2 className="text-2xl sm:text-5xl kumbh-sans-bold rounded-3xl pb-4 md:inline">
                <a href={`${figma}`} target="new" className="hover:text-gray-300"><i class="devicon-figma-plain ml-2 mr-2"></i>
                {text}
                </a>
            </h2>                
        )
    }
    
}