import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const EditInvoices = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={'outline'} className='size-8 text-center ' > ...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
           <DropdownMenuItem>link</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default EditInvoices