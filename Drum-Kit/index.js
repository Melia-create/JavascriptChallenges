const keyData = [
  { key: "a", kbd: "A", type: "clap", src: "/sounds/clap.wav" },
  { key: "s", kbd: "S", type: "hihat", src: "sounds/hihat.wav" },
  { key: "d", kbd: "D", type: "kick", src: "sounds/kick.wav" },
  { key: "f", kbd: "F", type: "openhat", src: "sounds/openhat.wav" },
  { key: "g", kbd: "G", type: "boom", src: "sounds/boom.wav" },
  { key: "h", kbd: "H", type: "ride", src: "sounds/ride.wav" },
  { key: "j", kbd: "J", type: "snare", src: "sounds/snare.wav" },
  { key: "k", kbd: "K", type: "tom", src: "sounds/tom.wav" },
  { key: "l", kbd: "L", type: "tink", src: "sounds/tink.wav" },
];

//###KEYS###

// Map the data to an array of HTML elements
const keyBoard = keyData.map((item) => {
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

  // Create a new <audio> element for the sound type
  const sound = document.createElement("span");

  // Set the text content of the <span> element to the type property of the current item
  sound.textContent = item.type;

  // Append the <span> element to the <div> element
  div.appendChild(sound);

  // Return the <div> element
  return div;
});

// Append the HTML elements to the document body
keyBoard.forEach((element) => {
  document.body.appendChild(element);
});

//###AUDIO###
const audioSounds = keyData.map((noise) => {
  const audio = document.createElement("audio");
  audio.setAttribute("data-key", noise.key);
  audio.setAttribute("src", noise.src);

  return audio;
});

audioSounds.forEach((element) => {
  document.body.appendChild(element);
});

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);

  console.log(e.key);
});
