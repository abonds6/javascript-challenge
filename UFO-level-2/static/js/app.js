
// from data.js
var tableData = data;  
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
//on click
button.on("click", function() {

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
var inputValue  = inputElement.property("value");
var inputElement2 = d3.select("#city");
var inputValue2  = inputElement2.property("value").toLowerCase();
var inputElement3 = d3.select("#shape");
var inputValue3  = inputElement3.property("value").toLowerCase();

//console.log(inputValue);
console.log(tableData);
console.log(inputValue);
console.log(inputValue2);
console.log(inputValue3);

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
var filteredData2 = tableData.filter(tableData => tableData.city === inputValue2);
var filteredData3 = tableData.filter(tableData => tableData.shape === inputValue3);

console.log(filteredData);

filteredData.forEach(function(element) {
var tr = tbody.append("tr");
tr.append("td").attr("class","ufosight").text(element.datetime);
tr.append("td").attr("class","ufosight").text(element.city);
tr.append("td").attr("class","ufosight").text(element.state);
tr.append("td").attr("class","ufosight").text(element.country);
tr.append("td").attr("class","ufosight").text(element.shape);
tr.append("td").attr("class","ufosight").text(element.durationMinutes);
tr.append("td").attr("class","ufosight").text(element.comments);
}, this);

filteredData2.forEach(function(element) {
  var tr = tbody.append("tr");
  tr.append("td").attr("class","ufosight").text(element.datetime);
  tr.append("td").attr("class","ufosight").text(element.city);
  tr.append("td").attr("class","ufosight").text(element.state);
  tr.append("td").attr("class","ufosight").text(element.country);
  tr.append("td").attr("class","ufosight").text(element.shape);
  tr.append("td").attr("class","ufosight").text(element.durationMinutes);
  tr.append("td").attr("class","ufosight").text(element.comments);
  }, this);

  filteredData3.forEach(function(element) {
    var tr = tbody.append("tr");
    tr.append("td").attr("class","ufosight").text(element.datetime);
    tr.append("td").attr("class","ufosight").text(element.city);
    tr.append("td").attr("class","ufosight").text(element.state);
    tr.append("td").attr("class","ufosight").text(element.country);
    tr.append("td").attr("class","ufosight").text(element.shape);
    tr.append("td").attr("class","ufosight").text(element.durationMinutes);
    tr.append("td").attr("class","ufosight").text(element.comments);
    }, this);  

});


