export default function ThumbnailImageLarge({src}){
    return(
        <img src={src} alt="" className="w-64 2xl:h-1/4 border-2 rounded-2xl m-3 object-cover" />
    )
}