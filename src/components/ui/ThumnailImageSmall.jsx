export default function ThumbnailImageSmall({src}){
    return(
        <img src={src} alt="" className="w-40 inline rounded-2xl m-3 object-cover" />
    )
}