import React from 'react'
import { ThreeDots } from  'react-loader-spinner';


export function Loader() {

    const myStyle ={
        color:"#333",
        fontSize:"1.5em"
    }

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
        <span style={myStyle}>One Moment Please.....</span>

    </div>
  )
}
