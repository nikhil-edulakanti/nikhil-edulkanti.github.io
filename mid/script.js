const storyStages = {
  start: {
    text: "You find yourself standing in front of a mysterious cave entrance.",
    choices: ["Enter the cave", "Walk away"],
    consequences: ["insideCave", "end"],
    images: ["cave-entrance.jpg", ""],
  },
  insideCave: {
    text: "The cave is dark and damp. You hear strange noises echoing.",
    choices: ["Continue deeper into the cave", "Turn back"],
    consequences: ["treasureRoom", "end"],
    images: ["dark-cave.jpg", ""],
  },
  treasureRoom: {
    text: "You discover a room filled with treasures!",
    choices: ["Take the treasures", "Leave the treasures"],
    consequences: ["guardianEncounter", "end"],
    images: ["treasure-room.jpg", ""],
  },
  guardianEncounter: {
    text: "As you grab the treasures, a guardian appears!",
    choices: ["Fight the guardian", "Sneak past the guardian"],
    consequences: ["winFight", "escape"],
    images: ["guardian.jpg", ""],
  },
  winFight: {
    text: "You successfully defeat the guardian and claim the treasures!",
    choices: ["Explore further", "Leave the cave"],
    consequences: ["hiddenChamber", "end"],
    images: ["victory-fight.jpg", ""],
  },
  escape: {
    text: "You manage to sneak past the guardian, leaving the treasures behind.",
    choices: ["Search for an exit", "Return for the treasures"],
    consequences: ["findExit", "end"],
    images: ["sneak-past-guardian.jpg", ""],
  },

  findExit: {
    text: "After some searching, you find a hidden exit leading to safety.",
    choices: ["Continue exploring", "Exit the cave"],
    consequences: ["hiddenChamber", "end"],
    images: ["hidden-exit.jpg", ""],
  },
  hiddenChamber: {
    text: "You stumble upon a hidden chamber with ancient artifacts.",
    choices: ["Examine the artifacts", "Leave the chamber"],
    consequences: ["inspectArtifacts", "end"],
    images: ["hidden-chamber.jpg", ""],
  },
  inspectArtifacts: {
    text: "As you inspect the artifacts, you trigger a mystical event!",
    choices: ["Embrace the magic", "Flee from the chamber"],
    consequences: ["magicRevelation", "end"],
    images: ["mystical-artifacts.jpg", ""],
  },
  magicRevelation: {
    text: "You embrace the magic and become a legendary adventurer!",
    choices: [],
    consequences: [],
    images: ["magic-revelation.jpg", ""],
  },
  end: {
    text: "The end. Thanks for playing!",
    choices: [],
    consequences: [],
    images: ["game-over.jpg", ""],
  },
};

let currentStage = "start";

function startGame() {
  currentStage = "start";
  updatePage();
}

function updatePage() {
  const stage = storyStages[currentStage];

  document.getElementById("story").innerText = stage.text;

  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";

  for (let i = 0; i < stage.choices.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.innerText = stage.choices[i];
    choiceButton.addEventListener("click", () => makeChoice(i));
    choicesContainer.appendChild(choiceButton);
  }

  const imageContainer = document.getElementById("image-container");
  const storyImage = document.getElementById("story-image");
  storyImage.src = `pictures/${stage.images[0]}`;

  // Clear previous event listeners
  const oldButtons = document.querySelectorAll("#choices button");
  oldButtons.forEach((button) => {
    button.removeEventListener("click", () => makeChoice(i));
  });

  if (currentStage === "end" || currentStage === "win") {
    endGame();
  }
}

function makeChoice(choiceIndex) {
  const stage = storyStages[currentStage];
  const nextStage = stage.consequences[choiceIndex];
  currentStage = nextStage;
  updatePage();
}

function endGame() {
  // Additional logic for ending the game
}

startGame();
