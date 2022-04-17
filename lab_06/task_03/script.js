function canDriveOrNot(age) {
  console.log(`This Person with age ${age} can${age < 18 ? "'nt" : ""} Drive.`);
}

canDriveOrNot(10);
canDriveOrNot(18);
canDriveOrNot(30);
