// objectif is to pass https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg
// at https://media.rawg.io/media/crop/600/400/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg
export const getCroppedImageUrl = (url:string)=>{
const target = "media/"
const index = url.indexOf(target) + target.length
return url.slice(0,index)+"crop/600/400/" + url.slice(index)
}