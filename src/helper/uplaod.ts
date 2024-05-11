import { getUserData } from "./getUserData"


export function uploadImageHeader(file:any,postId:number){
    const userData=getUserData()
    const headers=new Headers()

    headers.append('Authorization','Bearer '+userData?.token)

    const formData=new FormData()
    formData.append('image',file)
    formData.append('postId',postId.toString())


    const requestOptions={
        method:'POST',
        headers:headers,
        body:formData,
       
    }
    return requestOptions
}

/**
* return the selected file
*/
export function getSelectedImage(e:any,element:string){
const selectedImage=e.target.files[0];
// image tag
const output=document.getElementById(element) as HTMLImageElement

output.src=URL.createObjectURL(selectedImage)
output.onload=function(){
  URL.revokeObjectURL(output.src)
}
return selectedImage
}