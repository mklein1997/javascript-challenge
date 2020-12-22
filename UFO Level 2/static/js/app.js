// from data.js
var tableData = data;

// Select tbody element where table exists
var tbody = d3.select("tbody");
console.log(data);

// Log each iteration of array
data.forEach(function(ufosighting) {
    console.log(ufosighting);
});

// Add each row to HTML table
data.forEach(function(ufosighting) {
    console.log(ufosighting); 
    var row = tbody.append("tr");

    Object.entries(ufosighting).forEach(function([key, value]) {
        console.log(key, value);
    });
});

// Input data into created HTML rows
data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");

    Object.entries(ufosighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
// Create variables for filter function
var inputField = d3.select("#form");
var button = d3.select("#filter-btn");

var table = d3.select("table table-striped");

// Create event handlers
button.on("click", runEnter);
inputField.on("submit", runEnter);

// Update table function allowing for filtering within page
function updateTable(dataset) {
    tbody.html('');
    dataset.forEach((toBeDefined) => {
      var row = tbody.append("tr");
      Object.entries(toBeDefined).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
  }

// Create event function and log results
function runEnter() {
    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = data.filter(data => data.datetime === inputValue);
    
    console.log(filteredData);
    return filteredData;
    
    
};


// Create filter function to filter based on dropdown criteria.
  updateTable(data);
  button.on("click", function() {
    var filterElement = d3.select("#selData");
    var filterValue = filterElement.property("value");

    var inputElement = d3.select("#citystate");
    var inputValue = inputElement.property("value");

    var filteredData = {}

    if (filterValue === 'datetime') {
      filteredData = data.filter(data => data.datetime === inputValue);
    }

    if (filterValue === 'city') {
      filteredData = data.filter(data => data.city === inputValue);
    }

    if (filterValue === 'state') {
      filteredData = data.filter(data => data.state === inputValue);
    }

    if (filterValue === 'country') {
      filteredData = data.filter(data => data.state === inputValue);
    }

    if (filterValue === 'shape') {
      filteredData = data.filter(data => data.shape === inputValue);
    }

    else if (filterValue === 'selData') {
      console.log("Select a filter option.")
    }

    updateTable(filteredData);
    console.log(filteredData);
  });