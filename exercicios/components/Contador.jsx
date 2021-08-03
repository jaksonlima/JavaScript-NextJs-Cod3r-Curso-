import { Component } from "react";

export default class Contador extends Component {

  constructor(props) {
    super(props)

    this.dec = this.dec.bind(this)
  }

  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + (this.state.passo ?? 1)
    })
  }

  dec() {
    this.setState({
      numero: this.state.numero - (this.state.passo ?? 1)
    })
  }

  handleOn = (ev) => {
    this.setState({passo: +ev.target.value})
  }

  render() {
    return (
      <div>
         <h1>Contador Class</h1>
         <h2>{this.state.numero}</h2>
         <input 
           type="text" 
           name="has" 
           id="has" 
           min={1}
           max={100} 
           value={this.state.passo} 
           onChange={this.handleOn}/>
         <button onClick={this.dec}>-</button>
         <button onClick={this.inc}>+</button>
      </div>
    )
  }
}