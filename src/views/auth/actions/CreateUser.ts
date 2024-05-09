import { APP } from "@/helper/APP";

export interface IRegisterInput{
    name:string;
    email:string
    password:string
}

export type RegisterResponseType={
    user:{
        id:number
        name:string;
        email:string
    },
    message:string
}


export function createUser(input:IRegisterInput){

    return new Promise<RegisterResponseType>(async(resolve, reject) =>{

        try {
            const res=await fetch(`${APP.laravelApiBaseURL}/register`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })
            const data = await res.json()
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}