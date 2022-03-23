const myStyle = {
  parag: {
    color: "blue",
    fontSize: "2rem",
    fontWeight: "bolder",
    backgroundColor : "yellow"
  },
  div: {
    backgroundColor: "gray",
    fontSize: "3.2rem",
  },
};

const {parag} = myStyle
const {div} = myStyle

const Inline = () => {
  return (
    <>
      <div style={{ backgroundColor: "red", color: "#fff" }}>
        <h1>Hello from inline Css</h1>
      

        <div style={div}>
          <p>
            Lorem ipsum dolor sit <span style={myStyle.parag}>amet consectetur a</span> dipisicing elit. Nobis,
            fugiat!
          </p>
          <p style={parag}>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
};

export default Inline;
