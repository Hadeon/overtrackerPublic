import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { mapList, apiRoute } from '../constants/index';

class MapPercentageChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: {},
      chartData : {
        labels: ["Horizon", "Anubis", "Volskaya", "Nepal", "Oasis", "Eichenwald", "King's Row"],
        datasets: [{
        label: "Win %",
        backgroundColor: 'rgb(51, 153, 255)',
        borderColor: 'rgb(51, 153, 255)',
        data: [10, 30, 5, 100, 20, 30, 45],
        }]
      }
    }
  }

  componentWillMount(){
    // Load the map labels from the constants to keep them all in one place for easy updating when game content is changed
    var setMaps = () => {
      mapList.forEach(mapName => {
        this.setState(prevState => ({ matches: { ...prevState.matches, [mapName]: [ ]}}))
      });
    }
    setMaps();

    // Pull W/L by maps then calculate the W/L percentage
    fetch(`${apiRoute}/api/matches/${this.props.teamId}`)
      .then(res => res.json())
      .then(data => data.map(match => {
        let matchArray = this.state.matches;
        matchArray[`${match.matchDetails.map}`].push(match.matchDetails.result)
        this.setState({ matches: matchArray })
      }));
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    const chartOptions = {
      maintainAspectRatio: false,
      xAxes: [
        {
          ticks: {
            callback: function(label, index, labels) {
              return label.toFixed(2) + "%";
            }
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            callback: function(label, index, labels) {
              return label;
            },
            fontSize: 18,
            fontColor: 'black'
          },
          display: true,
        }
      ],
    }

    return(
      <Bar 
      data={this.state.chartData}
      options={chartOptions}
      height={350}
      width={700}
      />
    )
  }
}

export default MapPercentageChart