// Bar chart

var newData = [5,3,2,4,3,1];  // Placeholder data
var myChart;
var csvinput;
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

function addData(chart, label, data) {
    chart = myChart;
    chart.data.labels = label
    chart.data.datasets.forEach((dataset) => {
        dataset.data = scaleVals;
    });
    //chart.update();
}

/*{
  csvinput = document.getElementById('csv-file');
  csvinput.oninput = function() {addData();}
}
function addData(chart, label, data) {
    chart.data.labels = label
    chart.data.datasets.forEach((dataset) => {
        dataset.data = scaleVals;
    });
    chart.update();
}
checkFileChange();*/
