const radius = document.getElementById("radius");
const volume = document.getElementById("volume");

radius.addEventListener("input", (e) => {
  e.preventDefault();
  if (radius.value) {
    volume.value = ((4 / 3) * 3.14 * radius.value ** 3).toFixed(2);
  } else {
    volume.value = null;
  }
});
