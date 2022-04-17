function message(browser) {
  switch (browser.toLowerCase().trim()) {
    case "google":
      alert(`I am using ${browser.toLowerCase().trim()} browser`);
      break;
    case "firefox":
      alert(`I am using ${browser.toLowerCase().trim()} browser`);
      break;
    case "safari":
      alert(`I am using ${browser.toLowerCase().trim()} browser`);
      break;
    case "opera":
      alert(`I am using ${browser.toLowerCase().trim()} browser`);
      break;
    default:
      alert(`Wrong Input`);
      break;
  }
}

message(prompt("Enter Browser Name : "));
