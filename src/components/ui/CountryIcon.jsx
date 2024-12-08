export default function CountryIcon({country}){
    if(country === 'de'){
        return(
            <div className="w-94 h-94 bg-antique-dark-two flex flex-col items-center justify-center p-10 rounded-3xl m-3">
                <img src="/assets/icons/de.png" alt="" className="w-32 h-32"/>
                <p className="text-2xl pt-4"><strong>German</strong> - A2 / B1</p>
            </div>
        )
    } else if (country === 'ba'){
        return(
            <div className="w-94 h-94 bg-antique-dark-two flex flex-col items-center justify-center p-10 rounded-3xl m-3">
                <img src="/assets/icons/ba.png" alt="" className="w-32 h-32"/>
                <p className="text-2xl pt-4"><strong>Bosnian</strong> - Maternal</p>
            </div>
        )
    } else if (country === 'gb'){
            return(
            <div className="w-94 h-94 bg-antique-dark-two flex flex-col items-center justify-center p-10 rounded-3xl m-3">
                <img src="/assets/icons/gb.png" alt="" className="w-32 h-32"/>
                <p className="text-2xl pt-4"><strong>English</strong> - Fluent / C2</p>
            </div>
        )
    } else {
        return(
            <></>
        )
    }
}