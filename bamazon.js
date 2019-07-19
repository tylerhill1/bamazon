var mysql = require("mysql");
var columnify = require("columnify");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "Localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

function contin()  {
    inquirer
  .prompt([
    {
      type: "confirm",
      message: "Continue shopping?",
      name: "contin"
    }
  ])
  .then(function(inquirerResponse) {
  if (inquirerResponse.contin) {
    afterConnection();
  }
  else {
      connection.end();
  }
});
}



connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  //   connection.end();
    afterConnection();
  });
  
  var sequel = "SELECT * FROM products";
//   var updateSQL = "INSERT INTO songs (title, artist, genre) VALUES ('" + inquirerResponse.title + "', '" + inquirerResponse.artist + "', '" + inquirerResponse.genre + "')";
//   console.log(updateSQL);
  function afterConnection() {
      connection.query(sequel, function(err, res) {
          if (err) throw err;
          var columns = columnify(res)
        console.log(columns);

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    {
      type: "input",
      message: "Please type the ID of the product you would like to purchase",
      name: "id"
    },
    {
      type: "input",
      message: "How many units would you like to buy?",
      name: "quantity"
    }
  ])
  .then(function(inquirerResponse) {
    var index = 0;
    for (var i=0; i<res.length; i++) {
        if (inquirerResponse.id == (res[i].item_id)) {
            index = i;
        }
    }
    // console.log(inquirerResponse.id);
    // console.log(res[index].item_id);
    // console.log(index);
    if (parseInt(inquirerResponse.id) > res.length) {
        console.log("That item does not exist");
        contin();
    }

    else {
    if (inquirerResponse.quantity > res[index].stock_quantity) {
        console.log("INSUFFICIENT QUANTITY");
        contin();
    }
    else {
        var cost = inquirerResponse.quantity * res[index].price;
        console.log("That costed you $" + cost + "\n");

        //sql stuff
        afterConn();
    
    function afterConn() {
        var newQuantity = res[index].stock_quantity - inquirerResponse.quantity;
    var updateSQL = "UPDATE products SET stock_quantity = " + newQuantity + " WHERE " + "item_id = " + res[index].item_id;
    // console.log(updateSQL);
        connection.query(updateSQL, function(err, res) {
            if (err) throw err;
            // console.log(res);
            contin();
        });
      }
    }
}

  });
    });
    };