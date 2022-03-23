//*******************************************************************************************/
//* In JSX, Styling can be performed in various ways.
//* 1-) Inline-Styling can be used.
//* 2-) Styling can be defined as a local or global variable.
//* 3-) Styling can be defined as external stylesheet.

//! NOTES:
//* For styling, property-value(object) structure is used.
//* camelCase is used for property name,
//* className is used for class definitions
//* 3rd parties libraries like Material UI, Styled Component, Sass, Bootstrap etc.
//* can also be used for styling

const pStyle = {
    fontFamily : "Tahoma",
    color : "purple"
}

function Header (props){
    return(
        <div style={{backgroundColor : "yellow", color : "red", textAlign : "center"}}>
        <h1>CLARUSWAY  </h1>
        <h2>{props.ad}</h2>
        <h3 style={pStyle}>reinvent yourself {props.soyad} </h3>
        </div>
        ) 
}
export default Header;