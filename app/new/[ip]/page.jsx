import React from 'react'
import { redirect } from 'next/navigation'
import TopHead  from "../../(componets)/TopHead"
import InfoBar from '../../(componets)/InfoBar'
import Map from "../../(componets)/Map"

async function getData(ip){
  try{
    const res = await fetch(`http://ip-api.com/json/${ip}?fields=58329`,{cache:"no-store",method:"GET",})
    if (!res.ok){
      console.log("failed to get tickets")
    }
  
    return res.json();
  
}
catch(error){
    console.log(error)
}
}

const page = async ({params}) => {

  var startData = {
    ip:"---",
    loc:"---",
    timeZone:"---",
    isp:"---",
    lat:45.6085,
    lon: -73.5493
  }


    const { ip } = params
    if (ip=="new"){
      startData = {
        ip:"---",
        loc:"---",
        timeZone:"---",
        isp:"---",
        lat:45.6085,
        lon:-73.5493
      }
    }


    else{
      const ipdata = await getData(ip)
      if (ipdata.status=='success'){
        startData = {
          ip:ipdata.query,
          loc:ipdata.regionName+','+ipdata.city,
          timeZone:ipdata.timezone,
          isp:ipdata.isp,
          lat:ipdata.lat,
          lon:ipdata.lon
        }
      }
    }

    
  return (
    <div>
      <div className=" flex flex-col items-center">
      <TopHead></TopHead>
      <InfoBar data={startData}></InfoBar>
      <Map lat={startData.lat} lon={startData.lon} />
       </div>  
    </div>
  )
}

export default page
