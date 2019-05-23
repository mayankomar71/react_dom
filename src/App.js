import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class App extends Component {
  constructor() {
    super();


    this.textInput = React.createRef();

  }
  onClickHandler = (str) => {
    console.log(str)
    this.textInput.current.focus();
    this.textInput.current.value = str;

  }

  render() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Car Brands'),
        React.createElement('h2', {}, 'Cars:'),
        React.createElement('ul', {},
          [
            React.createElement('li', { onClick: () => { this.onClickHandler('BMW') } }, 'BMW'),
            React.createElement('li', { onClick: () => { this.onClickHandler('Mercedes') } }, 'Mercedes'),
            React.createElement('li', { onClick: () => { this.onClickHandler('Fortuner') } }, 'Fortuner'),
            React.createElement('li', { onClick: () => { this.onClickHandler('Lamborgini') } }, 'Lamborgini')
          ]
        ),
        React.createElement('input', { ref: this.textInput })

      )

    )
  }
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
