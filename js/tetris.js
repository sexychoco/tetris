//DOM
const playground = document.querySelector(".playground>ul");

// Settings
const GAME_ROWS = 20;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
  tree: [
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [],
    [],
    [],
  ],
};

const movingItem = {
  type: "",
  direction: 0,
  top: 0,
  left: 0,
};

init();

//functions
function init() {
  for (let i = 0; i < GAME_ROWS; i++) {
    prependNewLine();
  }
}

function prependNewLine() {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < GAME_COLS; j++) {
    const matrtix = document.createElement("li");
    ul.prepend(matrtix);
  }
  li.prepend(ul);
  playground.prepend(li);
}

function renderBlocks() {}
