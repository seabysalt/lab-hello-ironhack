import React, { Component } from "react";
import "./App.css"; 

class App extends Component {

  render() {

    const title = "Say hello to ReactJS"
    const subtitle = "You will learn a frontend framework from scratch to become a Ninja Developer."
    const button = "Awesome!"
    
    const box1 = "React makes it painless to create interactive UIs."
    const box2 = "Build encapsulated components that manage their state."
    const box3 = "A set of immutable values are passed to the components."
    const box4 = "Statically-typed, designed to run on modern browsers."

    return (
      <div>
    <div className="background">
      <div className="flex">
        <img src="./images/ironhack-logo.svg" />
        <img src="./images/menu-top.svg"/>
      </div>
      <div className="main">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <button>{button}</button>
      </div>
    </div>
    <div className="container-wrapper">
      <div className="container">
        <img src="./images/icon1.png" />
        <h5>Declarative</h5>
        <p>{box1}</p>
      </div>
      <div className="container">
        <img src="./images/icon2.png" />
        <h5>Components</h5>
        <p>{box2}</p>
      </div>
      <div className="container">
        <img src="./images/icon3.png" />
        <h5>Single-Way</h5>
        <p>{box3}</p>
      </div>
      <div className="container">
        <img src="./images/icon4.png" />
        <h5>JSX</h5>
        <p>{box4}</p>
      </div>
    </div>
  </div>
    );

  }
}

export default App;