import React, { Component } from 'react';

const pStyle = {fontSize : "2rem", backgroundColor : "black" , color : "blue" }

class Footer extends Component {
  render() {
    return (
      <div>
          <p style={pStyle}>Copyright {new Date().getFullYear()} </p>
      </div>
    )
  }
}

export default Footer;