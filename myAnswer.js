// Here is my answer, run =aaronsAnswer(quantity, price) to run

// Object to store data from aaronsAnswer function below

var dataObject = {};


// aaronsAnswer: pulls data off of the sheet and
// multiplies quantity by price to get the total
// as well as runs the showObject function (not currently working)

// =aaronsAnswer(quantity, price) in sheets

function aaronsAnswer (quantity,price) {
  var rowTotal = quantity * price;
  dataObject.quantity = quantity;
  dataObject.price = price;
  dataObject.rowTotal = rowTotal;

  console.log(dataObject);


  //showObject(dataObject);

  return rowTotal;
}


// showObject: to show object visualy on sheet and
// to also create a object for JavaScript to be passed
// as a JSON for sending data externally.

// !! I could not get the .appendRow() to work because of
// permission issues with google docs for some reason. Still not sure.
// It didn't even ask me for permission with that function.

function showObject(dataObject) {
  var jsObject = SpreadsheetApp.getActive();
  jsObject.appendRow(['Here is the object broken down']);
}

aaronsAnswer(6,8);
