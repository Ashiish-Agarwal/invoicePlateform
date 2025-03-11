import NextAuth from "next-auth"

import { providers } from "./auth.provider"
import prismaClientSingleton from "@/db"
import { PrismaAdapter } from "@auth/prisma-adapter"

 
export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter:PrismaAdapter(prismaClientSingleton),
  
    providers,
   
    pages:{
        verifyRequest:'/verify'
    }
    
  
})

