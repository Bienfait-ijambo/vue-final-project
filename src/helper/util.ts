

export function myDebounce<T>(fn: ()=>Promise<T>,delay:number){
    let timer:any

    return function(){
        clearTimeout(timer)
        timer=setTimeout(()=>fn(),delay)
    }
}