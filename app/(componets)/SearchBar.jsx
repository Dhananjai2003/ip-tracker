"use client";

import React from 'react'
import submitArrow from '@/public/icon-arrow.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState }  from 'react';

const SearchBar = () => {

  const rout = useRouter();
  
  const handleChange = (e) => {

    const value = e.target.value;
    const name = e.target.name;

    setFromData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    rout.push(`/new/${formData.ip}`)
  }

  const startingData = {
    ip:''
};

const [formData, setFromData] = useState(startingData) 

  return (
      <form action="GET" className='flex min-w-96 w-4/12' onSubmit={handleSubmit}>
            <input name='ip' required={true} onChange={handleChange} value={formData.ip} type="text" placeholder='Search for any IP address or domain' className=' h-14 p-2 pl-5 w-full box-border rounded-l-[15px]'/>
            <button type="submit" className='bg-black hover:bg-slate-700 p-2 rounded-r-[15px] h-14 w-14 box-border flex justify-center place-items-center'><Image src={submitArrow} alt='submit'></Image></button>
      </form>
  )
}

export default SearchBar
