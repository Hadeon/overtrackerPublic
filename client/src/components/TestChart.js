import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class TestChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData : {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
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
            ]
    }

    return(
      <Line 
      data={this.state.chartData}
      options={chartOptions}
      height={500}
      width={700}
      />
    )
  }
}

export default TestChart