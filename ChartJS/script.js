// Bar chart

var newData = [5,3,2,4,3,1];  // Placeholder data
var blank = [1,1,1,1,1,1,1,1,1,1];
var myChart;
myChart = new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
      labels: [5842, 79, 3276, 6709, 4501, 7304],
      datasets: [
        {
          label: "Cubes Scored",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#bad170"],

          data: newData // Set data to new data that is updated in parse.js
        }
      ]
    },
    options: {

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
    chart.data.datasets[0].label = label  // Team numbers
    console.log("data:", chart.data.datasets[0]);
    chart.data.datasets[0].data = newData;
    /*chart.data.datasets.forEach((dataset) => {
        dataset.data.push(blank);


    });*/
    chart.update();
}
