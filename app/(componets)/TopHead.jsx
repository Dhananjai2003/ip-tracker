import React from 'react'
import Image from 'next/image'
import desktopHeadImg from "@/public/(img)/pattern-bg-desktop.png"
import mobileHeadImg from '@/public/(img)/pattern-bg-mobile.png'
import SearchBar from '@/app/(componets)/SearchBar'
import InfoBar from './InfoBar'


const TopHead = () => {
  return (
    <div className="flex flex-col items-center min-w-full w-screen max-h-[300px] min-h-[300px] bg-no-repeat bg-cover bg-[url('/(img)/pattern-bg-mobile.png')] md:bg-[url('/(img)/pattern-bg-desktop.png')] fixed z-10">
        <h2 className=' md:mt-[50px]'> IP Address Tracker</h2>
        <SearchBar/>
    </div>
  ) 
}

export default TopHead
