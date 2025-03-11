'use server'
import { requireuser } from './hooks'
import { parseWithZod } from '@conform-to/zod';
import {OnBoardingSchema} from '@/lib/zodschema'
import { redirect } from 'next/navigation';
import prisma from '@/db';

export const action = async  ( prevState:unknown ,formdata:FormData) => {
    const session = await requireuser()
    const submission = parseWithZod(formdata,{
        schema:OnBoardingSchema,
    })
    if(submission.status!== 'success'  ){
        return submission.reply()
    }

    const user = await prisma.user.update({
        where:{
            id:session.user?.id,
        },
        data:{
            firstname:submission.value.firstname,
            lastname:submission.value.lastname,
            adress:submission.value.adress,

        }
    })
    redirect('/dashboard')


    
 
  
}