// get filecontent as String
let filecontent = "";
fetch("path/to/file")
  .then(response => response.text())
  .then(text => filecontent = text);
