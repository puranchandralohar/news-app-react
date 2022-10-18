import React from 'react'
import { ThreeDots } from  'react-loader-spinner';


export function Loader() {
  return (
    <div>
        <ThreeDots 
            height="100" 
            width="100" 
            radius="12"
            color="#1e1e1e" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />

    </div>
  )
}
