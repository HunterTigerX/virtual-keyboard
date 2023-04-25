const rowkeysCount = [14, 15, 13, 13, 10];

const specialSymbols = [
  "BackSpace",
  "Tab",
  "Del",
  "CapsLock",
  "Enter",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Left",
  "Down",
  "Right",
  "Up",
];

const singleKeys = [
  "BackSpace",
  "Tab",
  "Del",
  "CapsLock",
  "Enter",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Left",
  "Down",
  "Right",
  "Up",
];

/*using keycodes*/
const keycodesOfKeyboard = [
  [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
  ],
  [
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Delete",
  ],
  [
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    "Enter",
  ],
  [
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ArrowUp",
    "ShiftRight",
  ],
  [
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "MetaRight",
    "ControlRight",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
  ],
];

const engSmall = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "BackSpace",
  ],
  [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "Del",
  ],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up", "Shift"],
  [
    "Ctrl",
    "Win",
    "Alt",
    "Space",
    "Alt",
    "Win",
    "Ctrl",
    "Left",
    "Down",
    "Right",
  ],
];

const engBig = [
  [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "BackSpace",
  ],
  [
    "Tab",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "{",
    "}",
    "|",
    "Del",
  ],
  ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "Up", "Shift"],
  [
    "Ctrl",
    "Win",
    "Alt",
    "Space",
    "Alt",
    "Win",
    "Ctrl",
    "Left",
    "Down",
    "Right",
  ],
];

async function createKeyboard() {
  const keyboardWrapper = document.createElement("div"); //Создаём обёртку для клавиатуры
  keyboardWrapper.classList.add("keyboard__wrapper"); //Добавляем ей стили
  for (let i = 0; i < rowkeysCount.length; i++) {
    //Создаём ряды клавиш
    keyboardWrapper.append(fillRowsWithKeys(rowkeysCount[i], i)); //Заполняем ряд клавишами
  }

  document.body.append(keyboardWrapper); //Вставляем клавиатуру в документ
  console.log("↑↓→←");
  console.log(document.body);
}

function fillRowsWithKeys(count, currentRow) {
  const keyboardRow = document.createElement("div"); //Создаём ряд клавиш
  for (let i = 0; i < count; i++) {
    //Создаём клавиши
    const name = engSmall[currentRow][i];
    const keyWrapper = document.createElement("div");
    keyWrapper.classList.add(
      "key",
      `key__${keycodesOfKeyboard[currentRow][i]}`
    );
    const bigKey = document.createElement("div"); //Левое верхнее значение

    bigKey.innerText = engBig[currentRow][i];

    keyWrapper.append(bigKey);
    if (!singleKeys.includes(engSmall[currentRow][i])) {
      //Проверяем, надо ли создавать альтернативное значение
      const smallKey = document.createElement("div"); //Правое нижнее значение
      smallKey.classList.add("key__small");
      smallKey.textContent = engSmall[currentRow][i];
      keyWrapper.append(smallKey);
    }

    if (specialSymbols.includes(name)) {
      //Добавляем классы для нестандартных клавиш
      if (name === "Space") {
        keyWrapper.classList.add(`key__xsix`);
      } else if (
        name === "BackSpace" ||
        name === "CapsLock" ||
        name === "Shift" ||
        name === "Enter"
      ) {
        keyWrapper.classList.add(`key__xthree`);
      } else if (name === "Tab" || name === "Ctrl") {
        keyWrapper.classList.add(`key__xtwo`);
      } else {
        bigKey.classList.add(`key__xone`);
      }
      bigKey.classList.add(`key__text`); //
    } else {
      bigKey.classList.add("key__big");
    }

    keyWrapper.append(bigKey);

    keyboardRow.append(keyWrapper);
  }
  keyboardRow.classList.add("keyboard__row");
  return keyboardRow;
}

async function startTask() {
  await createKeyboard();
}

startTask();

document.addEventListener("keydown", function (event) {
  console.log(event.key, event.code);
  document.querySelector(".key__" + event.code).style.background = "green";
});

/*

*/
