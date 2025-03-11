'use client'

import { cn } from '@/lib/utils'
import { Home, MailIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashBoardLink = () => {
    const link = [
        {
        id:0,
        name:'dashboard',
        href:'/dashboard',
        icon: Home

    },
        {
        id:1,
        name:'invoice',
        href:'/dashboard/invoice',
        icon:MailIcon

    },

]
const pathname = usePathname()
  return (
    <div className=' h-full ml-5    '>
    {
        link.map((elem,items)=>(
            <Link  className={cn(pathname===elem.href  ? ' bg-zinc-500/10     ': ' text-black ','flex  gap-4 p-2  text-zinc-700 uppercase  hover:text-zinc-900 rounded-md font-bold  ' )} key={elem.id} href={elem.href}> {<elem.icon/>} {elem.name} </Link>
        ))
    }

    </div>
  )
}

export default DashBoardLink