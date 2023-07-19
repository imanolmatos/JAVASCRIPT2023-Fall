
//Declare numbers to avoid errors.
day = date.getDay();

function sumOfNumbers(number1 = 0, number2 = 0, number3 = 0,number4 = 0,number5 = 0,number6 = 0,number7 = 0,number8 = 0) {
  let sum = number1 + number2 + number3 + number4 + number5 + number6 + number7 + number8;
  if (day == 0 || day == 6) {
    percent = sum * 0.1;
    sum = sum - percent;
    alert(`You save ${percent}`)
    return sum;
  } else {
    alert(`You save 0!`)
    return sum;
  }
}

function addNumbers() {
  const num1 = parseInt(document.querySelector("#addend1").value);
  const num2 = parseInt(document.querySelector("#addend2").value);
  const num3 = parseInt(document.querySelector("#addend3").value);
  const num4 = parseInt(document.querySelector("#addend4").value);
  const num5 = parseInt(document.querySelector("#addend5").value);
  const num6 = parseInt(document.querySelector("#addend6").value);
  const num7 = parseInt(document.querySelector("#addend7").value);
  const num8 = parseInt(document.querySelector("#addend8").value);
  const sum = sumOfNumbers(num1, num2, num3, num4, num5, num6, num7, num8);
  document.querySelector("#sum").value = sum;
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
