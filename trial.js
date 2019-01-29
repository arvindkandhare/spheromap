console.log("Hello world")
var sphero = require("sphero"),
    bb8 = sphero("D3-64-BC-09-4A-EC"); // change BLE address accordingly

bb8.connect(function() {
  // roll BB-8 in a random direction, changing direction every second
  console.log("Connected")
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    bb8.roll(150, direction);
  }, 1000);
});