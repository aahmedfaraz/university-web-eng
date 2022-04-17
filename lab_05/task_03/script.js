const table = document.getElementById("table");
const power = document.getElementById("power");
const sequence = document.getElementById("sequence");
const oddEven = document.getElementById("odd-even");

table.addEventListener("click", (e) => {
  const input = parseInt(prompt("Enter a Number"));
  if (input) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
      output += `${input} x ${i} = ${input * i}\n`;
    }
    alert(output);
  } else {
    alert("Wrong Input");
  }
});

power.addEventListener("click", (e) => {
  const input = parseInt(prompt("Enter Number"));
  if (input) {
    const power = parseInt(prompt("Enter Power"));
    if (power) {
      alert(`Power ${power} of Number ${input} is : ${input ** power}`);
    } else {
      alert("Wrong Input");
    }
  } else {
    alert("Wrong Input");
  }
});

sequence.addEventListener("click", (e) => {
  const input = parseInt(prompt("Enter Limit"));
  if (input) {
    let output = "";
    for (let i = 0; i <= input; i++) {
      output += `${i} ${i !== input ? "," : ""}`;
    }
    alert(output);
  } else {
    alert("Wrong Input");
  }
});

oddEven.addEventListener("click", (e) => {
  const input = prompt("");
  switch (input.toUpperCase().trim()) {
    case "E":
      let output1 = "";
      for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
          output1 += `${i} ,`;
        }
      }
      alert(output1);
      break;
    case "O":
      let output2 = "";
      for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 0) {
          output2 += `${i} ,`;
        }
      }
      alert(output2);
      break;
    default:
      alert("Wrong Input");
      break;
  }
});
