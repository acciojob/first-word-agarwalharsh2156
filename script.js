function firstWord(s) {
  s = s.trim(); // Remove leading/trailing whitespace
  let index = s.indexOf(' ');
  if (index === -1) return s;  // No space found
  return s.slice(0, index);    // Return substring up to first space
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
