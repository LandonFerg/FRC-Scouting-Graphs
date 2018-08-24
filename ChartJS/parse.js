var input;

  function parseData()
  {
    // Parse CSV string
  var data = Papa.parse(csv);

  // Convert back to CSV
  var csv = Papa.unparse(data);

  // Parse local CSV file
  Papa.parse(/*"./ScoutingData.csv"*/ input, {
  	complete: function(results) {
  		console.log("Finished:", results.data);
  	}
  });

  // Stream big file in worker thread
  Papa.parse(bigFile, {
  	worker: true,
  	step: function(results) {
  		console.log("Row:", results.data);
  	}
  });
}

  function handleFileSelect()
  {
  input = document.getElementById('csv-file');
  if (!input) {
    alert("Couldn't Find Input!");
  }
  if(input){
    aler("Data Found!")
  }
}


parseData();
handleFileSelect();
