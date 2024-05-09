import { APP } from "@/helper/APP";

export interface ILoginInput{
    email:string
    password:string
}


export type LoginResponseType={
    user:{
        name:string;
        email:string
    },
    token:string
    message:string
    isLogged:boolean
}

export function loginUser(input:ILoginInput){

    return new Promise<LoginResponseType>(async(resolve, reject) =>{

        try {
            const res=await fetch(`${APP.laravelApiBaseURL}/login`,{
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