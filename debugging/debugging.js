const pi = 3.14;
let area = 0;
function circleArea(radius) {
    area = radius * radius * pi;
    return area;
  }

  area = circleArea(3);
  console.log("Area1:", area);
  // radius = 4;
  area = circleArea(4);
  console.log("Area2:", area);
  console.log("Ammon Horton");