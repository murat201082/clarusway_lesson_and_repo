const myStyle ={
  parag:{

    color:"blue",
  fontSize:"2rem",
  fontWeight:"bolder"
  },
  div:{
    backgroundColor:"gray",
    fontSize:"3.2rem"
  }
  

}

const Inline = () => {
  return (
    <>
      <div style = {{backgroundColor:"red", color:"#fff"}}>
        
        <div style={myStyle.div} >
       
          <p style ={myStyle.parag}>Lorem ipsum dolor sit.</p>
        </div>
      </div>






    </>
  )
}

export default Inline
