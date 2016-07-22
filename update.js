// To figure out functionality of generic data grab...

// gereric array to save from JSON file
// might look like this:
// var myArray = res.json.data;

var myArray = [['Quantity','Price','Total?'], [1, 3]];

// object to store new data

var myObject = {};

// function to go through array and calculate totals

function calcTotal (array) {

  for(var i = 0; i < array.length; i++) {
    var arI = array[i];
    console.log('arI, i:', arI, i);
    var quantity;
    var price;
    var total;
    console.log('Length, arI: ', arI.length, arI);

    for(var j = 0; j < arI.length; j++) {
      var arJ = arI[j];
      console.log('arJ, j: ', arJ, j);

      if((typeof arJ) === 'string') {
        break;
      } else if ((typeof arJ) === 'number') {
        var g = j + 1;
        console.log(arJ);
        console.log('g', g);
        console.log('arI[g]', arI[g]);
        total = arJ * (arI[g]);
        console.log('Here is the total: ', total);
        arI.push(total);
        break;
        //console.log('arI with Total: ', arI);
      }else{
        console.log('Unresolved error!');
      }

      //console.log(typeof arJ);
    }

    quantity;
    price;
    total;
  }
}

calcTotal(myArray);
console.log(myArray);

//console.log(myObject);
