import React from 'react'

function Display({props}) {
    console.log("this is prop",props);
    const sort=props.map((item)=>item.address.city).sort()
    console.log("sort",sort);
    
    
  return (
    <div>
      <h1>display</h1>
      {
        sort&&sort.map((item)=>(
            <li>{item}</li>
        ))
      }
    </div>
  )
}

export default Display
