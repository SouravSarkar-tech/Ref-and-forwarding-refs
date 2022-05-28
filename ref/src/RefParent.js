import React, { Component } from 'react'
import RefChild from './RefChild';
import './App.css';

class RefParent extends Component {
  constructor(props) {
    super(props)
    this.textArea = React.createRef()
    this.colorArea = React.createRef()
    this.state = {
      uppercase: false
    }
  }
  headerHandler  = (e) =>{
      e.preventDefault();
    this.colorArea.current.style.color = "Green"
  }
  buttonHandler = () => {  
    const input = this.textArea.current.value
    const newInput = this.state.uppercase ? input.toLowerCase() : input.toUpperCase()
    this.textArea.current.value = newInput
    this.setState((prevState) => ({ uppercase: !prevState.uppercase }))
  }

  render() {
    return (
      <div className="App">
        <div className="box">
          <h1 ref={this.colorArea}>And It Changes! 😃</h1>
          <RefChild ref={this.textArea}/>
          <p>Click On The Button Below To See Changes In The Input Box</p>
        <button onClick={this.buttonHandler}>Toggle The Input</button>
        Click On The Button Below To Change The Color Of The Header: <button onClick={this.headerHandler}>Change The Color</button>
        </div>
      </div>
    );
  }
}
export default RefParent






