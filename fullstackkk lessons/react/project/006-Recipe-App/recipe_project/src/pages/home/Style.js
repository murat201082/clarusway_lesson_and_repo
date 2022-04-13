import React from 'react'

const Style = () => {
  return (
    <div style={{backgroundColor: 'aqua',height:"100%", width:"100%"}}>

    
    <h1>Food App</h1>
    <div style ={{border:"solid 2px white", display: "inline", padding:"7px", borderRadius:"7px"}}>
    <input type="text" style ={{ padding:"5px", margin:"8px", borderRadius: "7px"}} />
    <button type="button" style ={{ padding:"5px", margin:"8px", borderRadius: "7px"}}>Search</button>
    <button type="button" style={{padding:"5px", margin:"8px", borderRadius: "7px"}}>Breakfast</button>
    
    </div>
    </div>
  )
}

export default Style