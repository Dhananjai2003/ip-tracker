import React from 'react'
import InfoCard from './InfoCard'

const InfoBar = (props) => {
  return (
    <div className='flex flex-col md:items-center md:flex-row rounded-3xl bg-opacity-20 md:bg-opacity-100 bg-white p-2 z-20 translate-y-[150px]  md:translate-y-[220px] md:min-h-[130px] w-fit min-h-fit space-x-7 '>
      <InfoCard title='IP Address' content={props.data.ip}/>
      <InfoCard title='Location' content={props.data.loc}/>
      <InfoCard title='Timezone' content={props.data.timeZone}/>
      <InfoCard title='ISP' content={props.data.isp}/>
    </div>
  )
}

export default InfoBar
