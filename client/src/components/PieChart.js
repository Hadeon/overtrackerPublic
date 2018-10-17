import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData : {
        labels: ["D.VA", "Pharah", "Moira", "Reinhardt", "Hanzo", "Ana", "Brigitte"],
        datasets: [{
        label: "Hero Win %",
        backgroundColor: 'rgb(255, 128, 51)',
        data: [56, 57, 58, 55, 58, 55, 60],
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
      <Pie 
      data={this.state.chartData}
      options={chartOptions}
      height={300}
      width={300}
      />
    )
  }
}

export default PieChart