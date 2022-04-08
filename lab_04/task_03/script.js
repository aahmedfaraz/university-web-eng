let ring = true;
while (ring) {
  let input = prompt(
    "Alarm is ringing, Press ‘S’ to snooze and ‘D’ to dismiss",
    "S"
  );
  switch (input.toUpperCase().trim()) {
    case "S":
      // do nothing just repeat again
      break;
    case "D":
      ring = false;
      alert("Good Morning");
      break;
    default:
      ring = false;
      alert("Wrong Input");
      break;
  }
}
