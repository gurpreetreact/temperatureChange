import React, {Component, Fragment} from 'react';

class Temperature extends Component{

  constructor() {
    super();
    this.celsiusChange = this.celsiusChange.bind(this);
    this.fahrenheitChange = this.fahrenheitChange.bind(this);
    this.state = {
      celsius: null,
      fahrenheit: null,
    };
  }

  celsiusChange(e) {
    this.setState({
      celsius: e.target.value,
      fahrenheit: e.target.value === "" ? "" : (e.target.value * 9) / 5 + 32,
    });
  }
  fahrenheitChange(e) {
    this.setState({
      celsius: e.target.value === "" ? "" : ((e.target.value - 32) * 5) / 9,
      fahrenheit: e.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        
        <input
          name="Celsius"
          type="number"
          placeholder="Temperature in celsius"
          value={this.state.celsius}
          onChange={this.celsiusChange}
        />
        <input
          name="Fahrenheit"
          type="number"
          placeholder="Temperature in Fahrenheit"
          value={this.state.fahrenheit}
          onChange={this.fahrenheitChange}
        />
      </Fragment>
    );
  }
}

export default Temperature;