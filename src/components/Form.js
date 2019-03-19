import React, { Component } from 'react';

class Form extends Component {
  render () {
    return (
      <form onSubmit={this.props.loadWeather}>
        <input type="text" className="city-name" name="city" placeholder="City"/>
        <input type="text" className="country-name" name="country" placeholder="Country"/>
        <button className="get-weather"><i class="fas fa-search fa-lg"></i></button>
        </form>
      )
    }
}
export default Form;
