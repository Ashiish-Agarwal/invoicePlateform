
'use client'
import Formbutton from '@/components/Formbutton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import {useForm} from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod';
import { action } from '@/lib/action';
import { OnBoardingSchema } from '@/lib/zodschema';
import { useActionState } from 'react'
import { requireuser } from '@/lib/hooks'

const page = () => {

    


    const [lastResult, actions] = useActionState(action, undefined);
    const [form, fields] = useForm({
      // Sync the result of last submission
      lastResult,
  
      // Reuse the validation logic on the client
      onValidate({ formData }) {
        return parseWithZod(formData, { schema: OnBoardingSchema });
      },
  
      // Validate the form on blur event triggered
      shouldValidate: 'onBlur',
      shouldRevalidate: 'onInput',
    });

  return (
    <div className=" h-[100vh] w-full flex  items-center justify-center  ">
        <Card>
            <CardHeader>
                <CardTitle className='uppercase  font-semibold '> you almost Finished </CardTitle>
            <p className=' text-zinc-500   text-pretty '>Enter infomation for create and done...  </p>
            </CardHeader>
            
            <CardContent>
<form id={form.id} onSubmit={form.onSubmit} action={actions} noValidate  className='w-full flex flex-col gap-2 ' > 

    <div className='flex gap-4  '>
        <div className='flex flex-col '>

<Label className='font-semibold'>firstname</Label>
    <Input placeholder='kevin'
     key={fields.firstname.key} name={fields.firstname.name} defaultValue={fields.firstname.initialValue}
     required/>
        <h1 className='text-red-500 text-sm '>{fields.firstname.errors}</h1>
        </div>
        <div className='flex flex-col'>
<Label className='font-semibold' >lastname</Label>

    <Input
     key={fields.lastname.key} name={fields.lastname.name} defaultValue={fields.lastname.initialValue}
    
    
    placeholder='donal' required/>
        <h1 className='text-red-500 text-sm '>{fields.lastname.errors}</h1>

</div>
    </div>

    <div>
    <Label className='font-semibold'>address</Label>

    <Input placeholder='uk-street-540-cn XXX'
     key={fields.adress.key} name={fields.adress.name} defaultValue={fields.adress.initialValue}
    
    required/>
        <h1 className='text-red-500 text-sm '>{fields.adress.errors}</h1>

    </div>
    <span className='pt-5 '>

    <Formbutton className='w-full' text='OnBoarding'/>
    </span>

</form>

            </CardContent>
        </Card>
  
</div>

  
  )
}

export default page