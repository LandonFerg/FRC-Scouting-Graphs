var input;
var inputVal;
var titles;
var scaleVals = [];

//TODO Parse data on filechange, Actually use parsed data,

  function findInput()
  {
      input = document.getElementById('csv-file');  // Input object
      inputVal = document.getElementById('csv-file').files[0];  // Input file
      input.oninput = function() {handleFileSelect();} // Calls handleFile function when input is changed
  }
  function parseData()
  {

  // Parse local CSV file ```INCLUDE FILE HERE```
  Papa.parse(inputVal, {
  	complete: function(results) {
  		console.log("Finished:", results.data); // Print data
      titles = results.data[0];
      console.log("Titles:", results.data[0])
      var i;
      for (i = 0; i < results.data.length-2; i++) // -2 here to not include title and undefined last value
      {
        scaleVals.push(results.data[i+1][2]); // +1 here to disclude title
      }
      console.log("ScaleVals:", scaleVals);
      newData = scaleVals;
      addData();
  	}
  });

}

findInput();  // What is our input? (probably should change to readInput but idk if that makes sense (im tired))

  function handleFileSelect()
  {
    if (!inputVal) {
    alert("Couldn't Find Input!");
  }
    if(inputVal){
      alert("Data Found!");
      inputVal = input.files[0];  // Updates input value to current input
      parseData();  // Parses data if there is data
  }
}

handleFileSelect();
