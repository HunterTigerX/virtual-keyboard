const rowkeysCount = [14, 15, 13, 13, 11];
let keyboardLanguage;
let keyboardCapitalisation = false;
let isShiftPressed = false;
let isCapslockPressed = false;
let isAltPressed = false;

if (localStorage.getItem("keyboardLanguage") === "undefined") {
  keyboardLanguage = "En";
  localStorage.setItem("keyboardLanguage", keyboardLanguage);
} else {
  keyboardLanguage = localStorage.getItem("keyboardLanguage");
}

const specialSymbols = [
  //Клавиши с особыми размерами клавиш
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
  "Пробел",
  "Left",
  "Down",
  "Right",
  "Up",
  "Lang",
];

const singleKeys = [
  //Клавиши без маленького текста
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
  "Пробел",
  "Left",
  "Down",
  "Right",
  "Up",
  "Lang",
];

/*using keycodes*/
const keycodesOfKeyboard = [
  //Добавляем классы для работы с клавишами
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
    "ChangeLanguage",
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
    "Lang",
  ],
];

const engBig = [
  //Большие буквы в клавиатуре и буквы с текстом
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
    "Lang",
  ],
];

const ruBig = [
  //Большие буквы в клавиатуре и буквы с текстом
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
    "Й",
    "Ц",
    "У",
    "К",
    "Е",
    "Н",
    "Г",
    "Ш",
    "Щ",
    "З",
    "Х",
    "Ъ",
    "/",
    "Del",
  ],
  ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "Up", "Shift"],
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
    "Lang",
  ],
];

const ruSmall = [
  [
    "ё",
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
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "Del",
  ],
  ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Up", "Shift"],
  [
    "Ctrl",
    "Win",
    "Alt",
    "Пробел",
    "Alt",
    "Win",
    "Ctrl",
    "Left",
    "Down",
    "Right",
    "Lang",
  ],
];

function createKeyboardWrapper() {
  const keyboardWrapper = document.createElement("div"); //Создаём обёртку для клавиатуры
  keyboardWrapper.classList.add("keyboard__wrapper"); //Добавляем ей стили
  const inputWrapper = document.createElement("textarea"); //Создаём обёртку для клавиатуры
  inputWrapper.rows = "4";
  inputWrapper.classList.add("input__text-from-keyboard"); //Добавляем ей стили
  document.body.append(inputWrapper, keyboardWrapper); //Вставляем клавиатуру в документ
}

function createKeyboard() {
  const keyboardWrapper = document.querySelector(".keyboard__wrapper");
  keyboardWrapper.innerText = "";
  for (let i = 0; i < rowkeysCount.length; i++) {
    //Создаём ряды клавиш
    keyboardWrapper.append(fillRowsWithKeys(rowkeysCount[i], i)); //Заполняем ряд клавишами
  }

  if (isShiftPressed === true) {
    document.querySelector(".key__ShiftLeft").style.background = "green";
    document.querySelector(".key__ShiftRight").style.background = "green";
  } else {
    document.querySelector(".key__ShiftLeft").style.background = "none";
    document.querySelector(".key__ShiftRight").style.background = "none";
  }
  if (isCapslockPressed === true) {
    document.querySelector(`.key__CapsLock`).style.background = "green"; 
  } else {
    document.querySelector(`.key__CapsLock`).style.background = "none"; 
  }
  if (isAltPressed === true) {
    document.querySelector(`.key__AltLeft`).style.background = "green"; 
    document.querySelector(`.key__AltRight`).style.background = "green"; 
  } else {
    document.querySelector(`.key__AltLeft`).style.background = "none"; 
    document.querySelector(`.key__AltRight`).style.background = "none"; 
  }

  const languageKey = document.querySelector(".key__ChangeLanguage");
  languageKey.addEventListener("click", function () {
    console.log("changed");
    changeLayout();
  });
}

function fillRowsWithKeys(count, currentRow) {
  let keyboardLanguageBigKeys;
  let keyboardLanguageSmallkeys;

  if (keyboardLanguage === "Ru") {
    if (keyboardCapitalisation) {
      keyboardLanguageBigKeys = ruSmall;
      keyboardLanguageSmallkeys = ruBig;
    } else {
      keyboardLanguageBigKeys = ruBig;
      keyboardLanguageSmallkeys = ruSmall;
    }

  } else if (keyboardLanguage === "En") {
    if (keyboardCapitalisation) {
      keyboardLanguageBigKeys = engSmall;
      keyboardLanguageSmallkeys = engBig;
    } else {
      keyboardLanguageBigKeys = engBig;
      keyboardLanguageSmallkeys = engSmall;
    }
  }

  const keyboardRow = document.createElement("div"); //Создаём ряд клавиш
  for (let i = 0; i < count; i++) {
    //Создаём клавиши
    const name = keyboardLanguageSmallkeys[currentRow][i];
    const keyWrapper = document.createElement("div");
    keyWrapper.classList.add(
      "key",
      `key__${keycodesOfKeyboard[currentRow][i]}`
    );
    const bigKey = document.createElement("div"); //Левое верхнее значение
    bigKey.innerText = keyboardLanguageBigKeys[currentRow][i];

    keyWrapper.append(bigKey);
    if (!singleKeys.includes(keyboardLanguageSmallkeys[currentRow][i])) {
      //Проверяем, надо ли создавать альтернативное значение
      const smallKey = document.createElement("div"); //Правое нижнее значение
      smallKey.classList.add("key__small");
      smallKey.textContent = keyboardLanguageSmallkeys[currentRow][i];
      keyWrapper.append(smallKey);
    }

    if (specialSymbols.includes(name)) {
      //Добавляем классы для нестандартных клавиш
      if (name === "Space" || name === "Пробел") {
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

createKeyboardWrapper();
createKeyboard();

document.addEventListener("keydown", function (event) {
  document.querySelector(".key__" + event.code).style.background = "green";
  //console.log(event.code)
  if (
    event.code === "Tab" || //Prevent keys from staying active
    event.code === "CapsLock"
  ) {
    event.preventDefault();
    return;
  }
});

document.addEventListener("keyup", function (event) {
  console.log(event.key, event.code);
  document.querySelector(".key__" + event.code).style.background = "none";
});

function changeLayout() {
  if (keyboardLanguage === "Ru") {
    keyboardLanguage = "En";
    localStorage.setItem("keyboardLanguage", "En");
  } else {
    keyboardLanguage = "Ru";
    localStorage.setItem("keyboardLanguage", "Ru");
  }
  createKeyboard();
}

let inputRow = document.querySelector(".input__text-from-keyboard");

document.addEventListener("click", (e) => {
  //Вернуть фокус на поле ввода при нажатии на клавишу
  if (
    e.target.classList.length !== 0 &&
    e.target.classList.value !== "keyboard__wrapper" &&
    e.target.classList.value !== "keyboard__row"
  ) {
    inputRow.focus();
  }

  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "Shift") {
      shiftIsPressed();
      //Если нажат Шифт
    }
    if (e.target.innerText === "CapsLock") {
      //Если нажат Капслок
      capsLockIsPressed(e.target.parentNode.classList[1]);
      if (!isCapslockPressed) {
        removeCapsLock();
      } 
    }
    if (e.target.innerText === "Alt") {
      altIsPressed();
    }
  }

  if (e.target.classList.contains("key")) {
    //Если была нажата буква или знак
    inputRow.value += e.target.firstChild.innerText;
    if (isShiftPressed) { //Если нажат шифт
      shiftIsPressed();
    } 

  } else {
    if (
      e.target.classList.contains("key__big") || //Елси мы нажали на вложенный элемент
      e.target.classList.contains("key__small")
    ) {
      inputRow.value += e.target.parentNode.firstChild.innerText;
      if (isShiftPressed) { //Если нажат шифт
        shiftIsPressed();
      } 
    }
  }
});

function shiftIsPressed() {
  if (isAltPressed === true) {
    keyboardCapitalisation = false;
    isShiftPressed = false;
    isAltPressed = false;
    changeLayout();
  } else {
    isShiftPressed = !isShiftPressed;
    keyboardCapitalisation = !keyboardCapitalisation;
    createKeyboard(); //Меняем раскладку
  }
}

function removeCapsLock() {
  const capsLockKey = document.querySelector(".key__CapsLock");
  capsLockKey.style.background = "none";
}

function capsLockIsPressed() {
  isCapslockPressed = !isCapslockPressed;
  keyboardCapitalisation = !keyboardCapitalisation;
  createKeyboard(); //Меняем раскладку
}

function altIsPressed() {
  isAltPressed = !isAltPressed;
  if (isShiftPressed === true) {
    isAltPressed = false;
    isShiftPressed = false;
    keyboardCapitalisation = false;
    changeLayout();
  } else {
    createKeyboard();
  }
}

/*
  console.log("↑↓→←");
  console.log(document.body);
*/
