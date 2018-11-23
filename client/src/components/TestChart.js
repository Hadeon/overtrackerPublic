import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class TestChart extends Component {
  constructor(props){
    super(props);
    this.state = {
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

export default TestChart