import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather = ({city, list}) => {
    const temps = list.map(i => i.main.temp); 
    const pressures = list.map(i => i.main.humidity) 
    const humidities = list.map(i => i.main.pressure) 
    return (
      <tr key={city.name}>
        <td>{city.name}</td>
        <Chart data={temps} color="red" units="K" />
        <Chart data={pressures} color="green" units="hpa" />
        <Chart data={humidities} color="blue" units="%" />
      </tr>
    )
  }

  render() { 
    return (
      <table className="table table-hover">
        <thead >
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidty</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
 
const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherList);