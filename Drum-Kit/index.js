const data = [
  { key: "65", kbd: "A", type: "clap" },
  { key: "83", kbd: "S", type: "hihat" },
  { key: "68", kbd: "D", type: "kick" },
  { key: "70", kbd: "F", type: "openhat" },
  { key: "71", kbd: "G", type: "boom" },
  { key: "72", kbd: "H", type: "ride" },
  { key: "74", kbd: "J", type: "snare" },
  { key: "75", kbd: "K", type: "tom" },
  { key: "76", kbd: "L", type: "tink" },
];

// Map the data to an array of HTML elements
const htmlElements = data.map((item) => {
  // Create a new <div> element for each item in the array
  const div = document.createElement("div");

  // Set the class attribute of the <div> element to "key"
  div.setAttribute("class", "key");

  // Set a custom data attribute on the <div> element to store the key property of the current item
  div.setAttribute("data-key", item.key);

  // Create a new <kbd> element for the keyboard key
  const kbd = document.createElement("kbd");

  // Set the text content of the <kbd> element to the kbd property of the current item
  kbd.textContent = item.kbd;

  // Append the <kbd> element to the <div> element
  div.appendChild(kbd);

  // Create a new <span> element for the sound type
  const sound = document.createElement("span");

  // Set the text content of the <span> element to the type property of the current item
  sound.textContent = item.type;

  // Append the <span> element to the <div> element
  div.appendChild(sound);

  // Return the <div> element
  return div;
});

// Append the HTML elements to the document body
htmlElements.forEach((element) => {
  document.body.appendChild(element);
});
