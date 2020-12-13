// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(ufosighting) {
    console.log(ufosighting);
});

data.forEach(function(ufosighting) {
    console.log(ufosighting); 
    var row = tbody.append("tr");

    Object.entries(ufosighting).forEach(function([key, value]) {
        console.log(key, value);
    });
});

data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");

    Object.entries(ufosighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
