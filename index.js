const rect = require("./rectangle.js");

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        "The area of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.area()
      );
      console.log(
        "The perimeter of the rectangle of dimensions l = " +
          l +
          " and b = " +
          b +
          " is " +
          rectangle.perimeter()
      );
    }
  });
  console.log("This statement after the call to rect()");
}

// function solveRect(l, w) {
//   console.log(`Solving for rectange with l ${l} and width ${w}`);

//   rect(l, w, (err, rectangle) => {
//     if (err) {
//       console.log("Error", err.message);
//     } else {
//       console.log(`The area of ${l} and ${b} is ${rectangle.area()}`);
//       console.log(`The area of ${l} and ${b} is ${rectangle.perimeter()}`);
//     }
//   });

//   // (l <= 0 || w <= 0) ? console.log(`sizes should be greater than zero where l= ${l} and w=${w}`) : console.log(`is good`)
// }

solveRect(2, 3);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, 0);
