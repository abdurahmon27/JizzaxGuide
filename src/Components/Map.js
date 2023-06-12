import React from 'react'
import  GoogleMaps  from './GoogleMaps';

const MapForSite = () => {
  return (
    <div className='w-full h-full flex items-center justify-center' id='map'>
        <GoogleMaps />
    </div>
  )
}

export default MapForSite