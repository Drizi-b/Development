import React from 'react';
import { Counter } from "./Components/Counter/Counter";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showCounter: false,
    };
  }
  render() {
    return (
      <div>
        <h1>Ciclo de vida no React</h1>
        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? "Esconder" : "Mostrar"}
        </button>
        {this.state.showCounter && <Counter />}
      </div>
    );
}
}