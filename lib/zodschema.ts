import {z} from 'zod'
export const OnBoardingSchema=z.object({
    firstname:z.string().min(2,'firstname atleast 3 words '),
    lastname:z.string().min(2,'lasttname atleast 3 words'),
    adress:z.string().min(5,' enter valid address ')
})