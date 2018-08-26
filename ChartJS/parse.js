var input;
var inputVal;
//TODO Parse data on filechange, Actually use parsed data,
  function findInput()
  {
      input = document.getElementById('csv-file');
      inputVal = document.getElementById('csv-file').files[0];
      input.oninput = function() {handleFileSelect()}
  }
  function parseData()
  {
    // Parse CSV string
//  var data = Papa.parse(input);

//  // Convert back to CSV
//  var csv = Papa.unparse(input);


  // Parse local CSV file ```INCLUDE FILE HERE```
  Papa.parse(inputVal, {
  	complete: function(results) {
  		console.log("Finished:", results.data);
  	}
  });

  /// Stream big file in worker thread
  /*Papa.parse(bigFile, {
  	worker: true,
  	step: function(results) {
  		console.log("Row:", results.data);
  	}
  });*/
}

findInput();

  function handleFileSelect()
  {
  if (!inputVal) {
    alert("Couldn't Find Input!");
  }
  if(inputVal){
    alert("Data Found!");
    inputVal = input.files[0];
    parseData();
  }
}

handleFileSelect();
