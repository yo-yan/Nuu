import React, { Component } from 'react';

class Header extends Component {

  state = { font: '' };

  onInputChangeHandler = (event) => {
    this.setState({ font: event.target.value });
  }

  render() {
    return (
      <div style={{ textAlign: 'left' }}>

        <div>
          <input onChange={this.onInputChangeHandler} placeholder='text' />
        </div>
        <h1>{this.state.font}</h1>
      </div>
    );
  }
}

export default Header;