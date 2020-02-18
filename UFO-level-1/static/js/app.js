
// from data.js
  var tableData = data;  
  var tbody = d3.select("tbody");
  var button = d3.select("#filter-btn");
//on click
  button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputValue  = inputElement.property("value");

  //console.log(inputValue);
 console.log(tableData);
 console.log(inputValue);

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

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

  });
