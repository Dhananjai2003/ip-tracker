import React from 'react'

const InfoCard = (props) => {
  return (
    <div className='p-2 w-fit'>
      <h4 className=' text-slate-500'>{props.title}</h4>
      <h3>{props.content}</h3>
    </div>
  )
}

export default InfoCard
