import InvoiceTable from '@/components/InvoiceTable'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto p-2'><Card className='w-full mx-auto h-full ' >
      <CardHeader >
        <div className='flex  items-center justify-between'>

        <div>

        <CardTitle className='font-semibold text-2xl '> invoices</CardTitle>
        <CardDescription >Manage your invoices right here.. </CardDescription>
        </div>
        <div>
          <Link className={buttonVariants({
            
          })} href='/dashboard/invoice/create'> <Plus/> Create invoices </Link>
        </div>
          </div>
      </CardHeader>
      <CardContent className='content-center mt-10 '>

 <InvoiceTable/>
      </CardContent>
      </Card></div>
  )
}

export default page