import { redirect } from "next/navigation"
import { auth } from "./auth"

export const requireuser = async ()=>{
    const session = await auth()
    if(!session?.user){
        redirect('/login')
    }
    return session
   
    
}