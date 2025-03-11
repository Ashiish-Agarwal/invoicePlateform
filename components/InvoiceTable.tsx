import React from 'react'
import { Table,TableHeader,TableHead, TableRow, TableBody, TableCell } from './ui/table'
import EditInvoices from './EditInvoices'

const InvoiceTable = () => {
    
  return (
    <Table className='w-full h-full  '>
        <TableHeader   >

            <TableRow >
                <TableHead>InvoiceId</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
            
                
               
               
            
            </TableRow>
            
            
        </TableHeader>
        <TableBody >

            <TableRow >


<TableCell> #1jj</TableCell>
<TableCell> kevin </TableCell>
<TableCell> 55usd</TableCell>
<TableCell> paid</TableCell>
<TableCell> 15/09/24</TableCell>
<TableCell className='text-right'>
    {/* <EditInvoices/> */}
    ll
     </TableCell>




            </TableRow>
        </TableBody>
        
    </Table>
  )
}

export default InvoiceTable










