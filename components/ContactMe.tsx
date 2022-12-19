import React from 'react'
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form';
import SectionTitle from './utils/SectionTitle';

type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
}

type Props = {}

const Contactme = (props: Props) => {
    const { register, handleSubmit, formState:{errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => 
    {
        window.location.href=`mailto:george.gaskin@msn.com?subject=${formData.subject}&body=${formData.message}`;
    };
    
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <SectionTitle title="Contact"/>
        
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I have got what you need. {""}
                <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                    <p className='text-2xl'>+1234567890</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                    <p className='text-2xl'>george.gaskin@msn.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse'/>
                    <p className='text-2xl'>14e Gardiners view</p>
                </div>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' >
                    <div  className='flex space-x-2'>
                        <input {...register('name', {required:true})} placeholder='Name' className='contactInput' type="text" aria-invalid={errors.name?"true":"false"}/>
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input  {...register('subject')}  className='contactInput' placeholder='Subject' type="text" />
                    <textarea {...register('message')} className='contactInput'  placeholder='Message'/>
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-sm text-black font-bold'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Contactme
