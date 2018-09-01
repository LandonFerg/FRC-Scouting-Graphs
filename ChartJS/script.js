// Bar chart


var newData = [5,3,2,4,3,1];  // Placeholder data
var blank = [1,1,1,1,1,1,1,1,1,1];
var myChart;
var barColors = [];
myChart = new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
      fontStyle: "bold",
      labels: [5842, 79, 3276, 6709, 4501, 7304],
      datasets: [
        {
          label: "Cubes Scored",
          backgroundColor: [],

          data: newData // Set data to new data that is updated in parse.js
        }
      ]
    },
    options: {
      responsive: true,
      legend: { display: false },
      title: {
        display: false,
        text: 'Cubes on Scale'
      },
      scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          fontStyle: "bold",
          labelString: 'Cubes Scored'
        },
        ticks: {
          beginAtZero: true,
          callback: function(value) {if (value % 1 === 0) {return value;}}
                // max: 10,
                // min: 0,
                // stepSize:10
      }
    }],
      xAxes: [{
        scaleLabel: {
          display: true,
          fontStyle: "bold",
          labelString: 'Team Numbers'
        }
      }]
    }
    }
});



function addData(chart, label, data) {  // Update data


    chart = myChart;
    chart.data.label = label
    console.log("labels:", chart.data.labels)
    console.log("data:", chart.data);

    chart.data.labels = teamNumbers;
    chart.data.datasets[0].data = newData;  // add new data

    barColors = randomColor({ // Randomize Colors
      count: teamNumbers.length,
    });

    for (i = 0; i < teamNumbers.length; i++)  // Choose random color from list
    {
          chart.data.datasets[0].backgroundColor = barColors;/*.push(Colors.random());*/
    }
    console.log("Colors: ", chart.data.datasets[0].backgroundColor);

    chart.update();
}
