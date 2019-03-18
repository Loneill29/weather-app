import React, { Component } from 'react';
import Weather from './components/Weather';
import Form from './components/Form';
import Titles from './components/Titles';
import './App.css';

const Api_Key = "d906ff4d6108b87a3b1a95a73de528e9";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${Api_Key}`);
    const response = await api_call.json();

    console.log(response);

    if(city && country) {
      this.setState({
        temperature: response.list[0].main.temp,
        city: response.name,
        country: response.list[0].sys.country,
        humidity: response.list[0].main.humidity,
        description: response.list[0].weather[0].description,
        error: ""
      });
    } else {
      this.setState ({
        error: "Please input search values"
      });
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
