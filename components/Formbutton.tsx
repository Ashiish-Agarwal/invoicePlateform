'use client'
import {useFormStatus} from 'react-dom'
import { buttonVariants } from './ui/button'
import {Loader2} from 'lucide-react'
import { cn } from '@/lib/utils'

interface formbuttonProps{
  text:string,
  className?:string
}

const Formbutton = ({text,className}:formbuttonProps) => {
    const {pending} = useFormStatus()
  return (
    <>
        {
            pending? <> 
            
            
            
            <button className={cn( buttonVariants(),className)}><Loader2 className='animate-spin'/></button></> : <><button className={cn( buttonVariants(),className)} type='submit'>{text}</button></>
        }

    </>
  )
}

export default Formbutton