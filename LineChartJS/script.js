// Bar chart


var newData = [4,3,2,6,5,7,3,4];  // Placeholder data
var myChart;
myChart = new Chart(document.getElementById("myChart"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6],
    datasets: [{
        data: [2,5,3,1,2,4],
        label: "5842",
        borderColor: "#3e95cd",
        fill: true,
        backgroundColor: 'rgba(110, 150, 240, 0.1)'
      }
    ]
  },
  options: {
    elements: {
    line: {
        tension: 0.1
    }
  },

    bezierCurve: false,
    title: {
      display: true,
      text: 'Scale performance (per match)',
    },
    scales:{
      yAxes: [{
            scaleLabel: {
              display: true,
              fontStyle: "bold",
              labelString: 'Cubes on Scale'
            }
    }],

    xAxes: [{
          scaleLabel: {
            display: true,
            fontStyle: "bold",
            labelString: 'Round #'
          }
  }]

    }
  }
});

function addData(chart, label, data) {  // Update data

    /*chart = myChart;
    chart.data.label = label  // Team numbers
    console.log("labels:", chart.data.labels)
    console.log("data:", chart.data);

    chart.data.labels = teamNumbers;
    chart.data.datasets[0].data = newData;  // add new data


    for (i = 0; i < teamNumbers.length; i++)  // Choose random color from list
    {
          chart.data.datasets[0].backgroundColor.push(Colors.random());
    }
    console.log("Colors: ", chart.data.datasets[0].backgroundColor);

    chart.update();*/
}
