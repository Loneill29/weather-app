import React, { Component } from 'react';

class Weather extends Component {
  render () {
    return(

      <div className="card">
        {this.props.country && this.props.city && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.image && <i className={this.props.image}></i>}
        {this.props.date && <p> {this.props.date}</p>}
        {this.props.temperature && <p><strong>Temperature:</strong> {this.props.temperature}°</p>}
        {this.props.humidity && <p><strong>Humidity:</strong> {this.props.humidity}%</p>}
        {this.props.description && <p><strong>Conditions:</strong> {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}


export default Weather;
