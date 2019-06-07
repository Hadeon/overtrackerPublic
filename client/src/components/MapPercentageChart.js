import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { mapList, apiRoute } from '../constants/index';

class MapPercentageChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: {},
      chartData : {
        labels: [],
        datasets: [{
        label: "Win %",
        backgroundColor: 'rgb(51, 153, 255)',
        borderColor: 'rgb(51, 153, 255)',
        data: [],
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

  // Pull W/L by maps
  fetch(`${apiRoute}/api/matches/${this.props.teamId}`)
    .then(res => res.json())
    .then(data => data.map(match => {
      let matchArray = this.state.matches;
      matchArray[`${match.matchDetails.map}`].push(match.matchDetails.result)
      this.setState({ matches: matchArray })
    })).then(() => {
      let maps = this.state.matches;
      let updatedChartData = this.state.chartData;
      for(let map in maps) {
        if(maps[map].length > 0) {
          updatedChartData.labels.push(map);
          updatedChartData.datasets[0].data.push(this.calculateWinLoss(maps[map]));
          this.setState({ chartData: updatedChartData})
        }
      }
    });
  }

  calculateWinLoss(matchResults) {
    let count = matchResults.length;
    let wins = 0;
    let percentage;
    matchResults.forEach(result => {
      if(result === "Win") {
        wins++;
      }
    })
    percentage = (wins / count) * 100;
    return percentage.toFixed(0);
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