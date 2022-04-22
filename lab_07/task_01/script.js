const volume = (l) => (w) => (h) => {
  return length * width * height;
};

const length = parseInt(prompt("Enter length of rectangle : "));
const width = parseInt(prompt("Enter width of rectangle : "));
const height = parseInt(prompt("Enter height of rectangle : "));

const vol = volume(length)(width)(height);

alert(`Volume of the rectangle is ${vol}`);
