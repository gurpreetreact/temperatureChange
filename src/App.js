import React, { Fragment, useState } from "react";

const Temperature = ({name, temperature, handleChange}) => {
  return (
    <Fragment>
      <div>
        {" "}
        {/* className={{ textAlign: "center", width: "100%" }} */}
        <input
          type="number"
          name={name}
          placeholder={name}
          value={temperature}
          onChange={handleChange}
        />{" "}
        <br />
      </div>
    </Fragment>
  );
}

function App() {
  const [fahrenheit, setFahrenheit] = useState(null);
  const [celsius, setCelsius] = useState(null);

  const fahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    if (e.target.value === "") {
      return setCelsius(e.target.value);
    }
    setCelsius(((e.target.value - 32) * 5) / 9);
  };

  const celsiusChange = (e) => {
    setCelsius(e.target.value);
    if (e.target.value === "") {
      return setFahrenheit(e.target.value);
    }
    setFahrenheit((e.target.value * 9) / 5 + 32);
  };

  return (
    <div className="App">
      <Temperature
        name="Temperature in Fahrenheit"
        temperature={fahrenheit}
        handleChange={(e) => fahrenheitChange(e)}
      />
      <Temperature
        name="Temperature in Celsius"
        temperature={celsius}
        handleChange={(e) => celsiusChange(e)}
      />
      <p></p>
    </div>
  );
}

export default App;
