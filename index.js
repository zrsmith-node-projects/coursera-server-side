const rect = require("./rectangle.js");

function solveRect(l, w) {
  console.log(`Solving for rectange with l ${l} and width ${w}`);

  if (l <= 0 || w <= 0) {
    console.log(
      `Length and/or width should be greater than zero where l= ${l} and w=${w}`
    );
  } else {
    console.log(`the area is ${rect.area(l, w)}`);
    console.log(`the peremeter is ${rect.perimeter(l, w)}`);
  }

  // (l <= 0 || w <= 0) ? console.log(`sizes should be greater than zero where l= ${l} and w=${w}`) : console.log(`is good`)
}

solveRect(2, 3);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, 0);
