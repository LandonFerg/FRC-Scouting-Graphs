// Bar chart
/*function waitForElement(){
    if(typeof scaleVals !== "undefined"){
        //variable exists, do what you want
    }
    else{
        setTimeout(waitForElement, 250);
    }
}*/
new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
      labels: [5842, 79, 3276, 6709, 4501, 7304],
      datasets: [
        {
          label: "Cubes Scored",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#bad170"],
          data: [/*5,3,2,4,3,1*/ scaleVals]
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
