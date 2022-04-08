let op = prompt("Enter Operation (+,-,/,*,++,--,%) : ");
let num1, num2;
switch (op) {
  case "+":
    num1 = parseFloat(prompt("Enter Num 1 : "));
    num2 = parseFloat(prompt("Enter Num 2 : "));
    alert(`Result : ${num1 + num2}`);
    break;
  case "-":
    num1 = parseFloat(prompt("Enter Num 1 : "));
    num2 = parseFloat(prompt("Enter Num 2 : "));
    alert(`Result : ${num1 - num2}`);
    break;
  case "/":
    num1 = parseFloat(prompt("Enter Num 1 : "));
    num2 = parseFloat(prompt("Enter Num 2 : "));
    alert(`Result : ${num1 / num2}`);
    break;
  case "*":
    num1 = parseFloat(prompt("Enter Num 1 : "));
    num2 = parseFloat(prompt("Enter Num 2 : "));
    alert(`Result : ${num1 * num2}`);
    break;
  case "++":
    num1 = parseFloat(prompt("Enter Num : "));
    alert(`Result : ${num1++}`);
    break;
  case "--":
    num1 = parseFloat(prompt("Enter Num: "));
    alert(`Result : ${num1--}`);
    break;
  case "%":
    num1 = parseFloat(prompt("Enter Num : "));
    num2 = parseFloat(prompt("Enter % : "));
    alert(`Result : ${(num1 * num2) / 100}`);
    break;
  default:
    alert("Wrong Input");
    break;
}
