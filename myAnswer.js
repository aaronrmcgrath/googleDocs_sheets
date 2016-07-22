// Here is my answer

// Object to store in data from function below
var dataObject = {};


// Function to show object on sheet
function showObject(dataObject) {
  var object = SpreadsheetApp.getActive();
  object.appendRow(['Here is the object broken down', +
                    dataObject.quantity, dataObject.price, +
                    dataObject.rowTotal]);
}

// This is the function that pulls data off of the sheet and
// calculates the total as well as runs the showObject function
// =aaronsAnswer(quantity, price) in sheets
function aaronsAnswer (quantity,price) {
  var rowTotal = quantity * price;
  dataObject.quantity = quantity;
  dataObject.price = price;
  dataObject.rowTotal = rowTotal;

  showObject(dataObject);

  return rowTotal;
}
