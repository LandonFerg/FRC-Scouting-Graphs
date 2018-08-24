// Bar chart
new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
      labels: [/*5842, 79, 3276, 6709, 4501, 7304*/"Teams"],
      datasets: [
        {
          label: "5842",
          backgroundColor: ["#3e95cd"],
          data: [5],
        },
        {
          label: "79",
          backgroundColor: ["#8e5ea2"],
          data: [3],
        },
        {
          label: "3276",
          backgroundColor: ["#3cba9f"],
          data: [2],
        },
        {
          label: "6709",
          backgroundColor: ["#e8c3b9"],
          data: [4],
        },
        {
          label: "4501",
          backgroundColor: ["#c45850"],
          data: [3],
        },
        {
          label: "7304",
          backgroundColor: ["#bad170"],
          data: [1],
        }
      ]
    },
    options: {

      legend: { display: true },
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
          display: false,
          fontStyle: "bold",
          labelString: 'Team Numbers'
        }
      }]
    }
    }
});

// let options: {
//   scales: {
//     yAxes: [{
//       ticks: {
//             max: 10,
//             min: 0,
//             stepSize: 1
//     }
//     }]
//   }
//   legend: { display: false },
//   title: {
//     display: true,
//     text: 'Cubes on Scale'
//   }
//
// });
