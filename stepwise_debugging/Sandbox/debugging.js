const PI = 3.14;

let area = 0;
function circleArea(radius) 
{
  const area = radius * radius * 3.14;
  return area;
}
area = circleArea(3);
console.log(area);

area = circleArea(4);
console.log(area);