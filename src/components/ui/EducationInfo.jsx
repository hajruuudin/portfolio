export default function EducationInfo({name, location, time, title, grade, info}){
    return(
        <>
            <h4 className="text-2xl lg:text-4xl kumbh-sans-bold mb-2 mt-2 text-center">{name}</h4>
            <p className="text-2xl text-center mt-2">{location}</p>
            <p className="text-2xl text-center mt-2">{time}</p>
            <p className="text-2xl text-center mt-2">{title}</p>
            <p className="text-2xl text-center mt-2">Average Grade: <strong>{grade}</strong></p>
            {info ? 
                <p className="text-xl text-center mt-4">{info}</p>
            : <></>}
        </>
    )
}