export default function Heading3Code({text, gitHub}){
    return(
        <h2 className="text-4xl sm:text-6xl mt-2 kumbh-sans-bold text-center rounded-3xl pb-4 pt-4 md:inline">
            <a href={`https://github.com/hajruuudin/${gitHub}`} target="new" className="hover:text-gray-300"><i class="devicon-github-original mr-2 ml-2"></i>
            {text}
            </a>
        </h2>                
    )
}