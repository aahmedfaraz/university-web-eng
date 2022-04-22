const response = {
  data: {
    name: "Ronaldo",
    occupation: null,
    lies: 0,
  },
};

let nam = response?.data?.name || "no name";
console.log(nam);
let nam2 = response?.data?.name ?? "no name";
console.log(nam2);
console.log("===============================");
let occupation = response?.data?.occupation || "no occupation";
console.log(occupation);
let occupation2 = response?.data?.occupation ?? "no occupation";
console.log(occupation2);
console.log("===============================");
let lies = response?.data?.lies || "no lies";
console.log(lies);
let lies2 = response?.data?.lies ?? "no lies";
console.log(lies2);
