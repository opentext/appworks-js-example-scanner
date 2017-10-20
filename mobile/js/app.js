function scanDocument(action) {
  var scanner = new Appworks.AWScanner();
  scanner.scanDocument(
    action, // Set the return type: 0 = filepath, 1 = base64, 2 = doc provider (will return a filepath as well)
    function(successMessage) {
      // Called when the scan completes and returns successfully
      // Success message will be a string
      out(successMessage);
    }, function(errorMessage) {
      // Called when the scan fails or a cancelled
      // error message will be string
      out(errorMessage);
    }
  );
}

function out(message) {
  console.log(message);
  if(typeof(message) == "object") {
    getObject("result").innerHTML = JSON.stringify(message);
  } else {
    getObject("result").innerHTML = message;
  }
}

function getObject(name) {
  return document.getElementById(name);
}
