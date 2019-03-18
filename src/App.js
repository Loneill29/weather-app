import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const Api_Key = "28eb5b7aca2f69ea512c6e9a88625125";

class App extends Component {

  getWeather = async (e) => {

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    e.preventDefault();

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}');

    const response = await api_call.json();

    console.log(response);

  }

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
