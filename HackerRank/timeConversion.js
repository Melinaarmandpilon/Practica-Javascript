function timeConversion(s) {
  // Write your code here
  let format = s.slice(8, 10);
  let number = Number(s.slice(0, 2));
  // console.log(number)
  if (format === "AM" && number === 12) return "00" + s.slice(2, 8);
  if (format === "AM") return s.slice(0, 8);

  if (format === "PM" && number === 12) return "12" + s.slice(2, 8);
  if (format === "PM") return number + 12 + s.slice(2, 8);
}

// s = "12:00:00AM";
// s = "12:00:00PM";
