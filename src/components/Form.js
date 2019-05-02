import React, { Component } from 'react';

class Form extends Component {
  render () {
    return (
      <div class="title-form">
        <form onSubmit={this.props.loadWeather}>
          <h4 className="tagline">Show me the weather in:</h4>
          <input type="text" className="city-name" name="city" placeholder="City"/>
          <input type="text" className="country-name" name="country" placeholder="Country"/>
          <button className="get-weather"><i className="fas fa-search fa-lg"></i></button>
        </form>
      </div>
      )
    }
}
export default Form;
