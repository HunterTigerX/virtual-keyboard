const rowkeysCount = [14, 15, 13, 13, 12];
let keyboardLanguage;
let keyboardCapitalisation = false;
let isShiftPressed = false;
let isCapslockPressed = false;
let isAltPressed = false;
let arrowsModeOn = false;
let lastPosition = 0;
//let inputLength = 0;
let selectedText = false;
let isArrowKeyPressed = false;
let keyboardCapsWasPressed = false;
let keyboardShiftWasPressed = false;
let keyboardAltWasPressed = false;
let keyboardCtrlWasPressed = false;
let keyboardWinWasPressed = false;
let doNotChangeLang = false;
let isCtrlPressed = false;
let isWinPressed = false;

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
  "Arrows mode",
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
  "Arrows mode",
];

//using keycodes
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
    "arrowsMode",
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
    "Arrows mode",
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
    "Arrows mode",
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
    "Пробел",
    "Alt",
    "Win",
    "Ctrl",
    "Left",
    "Down",
    "Right",
    "Lang",
    "Arrows mode",
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
    "Arrows mode",
  ],
];

function createKeyboardWrapper() {
  const keyboardWrapper = document.createElement("div"); //Создаём обёртку для клавиатуры
  keyboardWrapper.classList.add("keyboard__wrapper"); //Добавляем ей стили
  const inputWrapper = document.createElement("textarea"); //Создаём обёртку для клавиатуры
  inputWrapper.rows = "4";
  inputWrapper.classList.add("input__text-from-keyboard"); //Добавляем ей стили

  const keyboardStatus = document.createElement("div"); //Создаём панель статуса
  keyboardStatus.classList.add("keyboard__status-wrapper"); //Добавляем ей стили

  const keyboardStatusLanguage = document.createElement("div"); //Создаём панель статуса языка
  keyboardStatusLanguage.classList.add("div__status-block");
  const keyboardStatusLanguageText1 = document.createElement("span"); //Создаём панель статуса языка
  keyboardStatusLanguageText1.innerText = `Текущий язык: `;
  const keyboardStatusLanguageText2 = document.createElement("span"); //Создаём панель статуса языка
  keyboardStatusLanguageText2.classList.add("span__result");
  keyboardStatusLanguage.append(
    keyboardStatusLanguageText1,
    keyboardStatusLanguageText2
  );

  const keyboardStatusArrows = document.createElement("div"); //Создаём панель статуса стрелочек
  keyboardStatusArrows.classList.add("div__status-block");
  const keyboardStatusArrowsText1 = document.createElement("span"); //Создаём панель статуса языка
  keyboardStatusArrowsText1.innerText = `Стрелочки`;
  const keyboardStatusArrowsText2 = document.createElement("span"); //Создаём панель статуса языка
  keyboardStatusArrowsText2.classList.add("span__result");
  keyboardStatusArrows.append(
    keyboardStatusArrowsText1,
    keyboardStatusArrowsText2
  );

  keyboardStatus.append(keyboardStatusLanguage, keyboardStatusArrows);

  document.body.append(inputWrapper, keyboardStatus, keyboardWrapper); //Вставляем клавиатуру в документ
}

function createKeyboard() {
  const keyboardWrapper = document.querySelector(".keyboard__wrapper");
  keyboardWrapper.innerText = "";
  for (let i = 0; i < rowkeysCount.length; i++) {
    //Создаём ряды клавиш
    keyboardWrapper.append(fillRowsWithKeys(rowkeysCount[i], i)); //Заполняем ряд клавишами
  }

  if (isShiftPressed === true || keyboardShiftWasPressed === true) {
    makeShiftsGreenAgain();
  } else {
    document.querySelector(".key__ShiftLeft").style.background = "none";
    document.querySelector(".key__ShiftRight").style.background = "none";
  }
  if (isCapslockPressed === true || keyboardCapsWasPressed === true) {
    document.querySelector(`.key__CapsLock`).style.background = "green";
  } else {
    document.querySelector(`.key__CapsLock`).style.background = "none";
  }
  if (isAltPressed === true || keyboardAltWasPressed === true) {
    document.querySelector(`.key__AltLeft`).style.background = "green";
    document.querySelector(`.key__AltRight`).style.background = "green";
  } else {
    document.querySelector(`.key__AltLeft`).style.background = "none";
    document.querySelector(`.key__AltRight`).style.background = "none";
  }

  if (isCtrlPressed === true || keyboardCtrlWasPressed === true) {
    document.querySelector(`.key__ControlLeft`).style.background = "green";
    document.querySelector(`.key__ControlRight`).style.background = "green";
  } else {
    document.querySelector(`.key__ControlLeft`).style.background = "none";
    document.querySelector(`.key__ControlRight`).style.background = "none";
  }

  if (isWinPressed === true || keyboardWinWasPressed === true) {
    document.querySelector(`.key__MetaLeft`).style.background = "green";
    document.querySelector(`.key__MetaRight`).style.background = "green";
  } else {
    document.querySelector(`.key__MetaLeft`).style.background = "none";
    document.querySelector(`.key__MetaRight`).style.background = "none";
  }

  const languageKey = document.querySelector(".key__ChangeLanguage");

  languageKey.addEventListener("click", function () {
    changeLanguage();
    returnFocus();
  });

  updateStatus();
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
      bigKey.classList.add(`key__text`);
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

function changeLanguage() {
  if (keyboardLanguage === "Ru") {
    keyboardLanguage = "En";
    localStorage.setItem("keyboardLanguage", "En");
  } else {
    keyboardLanguage = "Ru";
    localStorage.setItem("keyboardLanguage", "Ru");
  }
  createKeyboard();
}

document.addEventListener("keydown", function (event) {
  if (event.code !== "CapsLock") {
    document.querySelector(".key__" + event.code).style.background = "green";
  }
  checkIfEmulateKeysWerePressed();
});

/* Капслок ниже*/

document.addEventListener("keydown", function (event) {
  if (event.code === "CapsLock") {
    event.preventDefault();
    if (keyboardCapsWasPressed === false) {
      capsLockIsPressed();
    }
    keyboardCapsWasPressed = true;
    return;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code !== "CapsLock") {
    document.querySelector(".key__" + event.code).style.background = "none";
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "CapsLock") {
      //Если нажат Капслок
      returnFocus();
      capsLockIsPressed();
    }
  }
});

function capsLockIsPressed() {
  isCapslockPressed = !isCapslockPressed;
  keyboardCapitalisation = !keyboardCapitalisation;
  createKeyboard(); //Меняем раскладку
}

document.addEventListener("keyup", function (event) {
  if (event.code === "CapsLock") {
    keyboardCapsWasPressed = false;
  }
});
/* Капслок выше*/

/* Таб ниже */

document.addEventListener("keydown", function (event) {
  if (event.code === "Tab") {
    tabKeyIsPressed();
    event.preventDefault();
    return;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "Tab") {
      tabKeyIsPressed();
      //Если нажат Шифт
    }
  }
});

function tabKeyIsPressed() {
  const input = document.querySelector(".input__text-from-keyboard");
  let leftHalf = input.value.slice(0, lastPosition);
  let rightHalf = input.value.slice(lastPosition, input.length);
  input.value = `${leftHalf}${"\t"}${rightHalf}`;
  lastPosition += 1;
  returnFocus();
}

/* Таб выше */

/* Шифты ниже */
document.addEventListener("keydown", function (event) {
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    if (isShiftPressed === false) {
      //Если мы не нажимали на шифт на вирт клаве
      if (keyboardShiftWasPressed === false) {
        //Отключаем дублирование при зажатии шифта
        shiftIsPressed();
      }
    }
    keyboardShiftWasPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    if (doNotChangeLang === true) {
      /* Если не менялся язык */
      if (keyboardAltWasPressed === false || isAltPressed === false) {
        //Если не был нажат альт во время отпускания клавиши
        doNotChangeLang = false;
        shiftIsPressed();
      }
      doNotChangeLang = false;
    }
    //Возвращаем шифт в обычное положение
    isShiftPressed = false;
    keyboardShiftWasPressed = false;
    if (isCapslockPressed === false) {
      keyboardCapitalisation = false;
    } else {
      keyboardCapitalisation = true;
    }
    createKeyboard();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "Shift") {
      returnFocus();
      shiftIsPressed();
      //Если нажат Шифт
    }
  }
});

function shiftIsPressed() {
  if (keyboardAltWasPressed) {
    //Если был нажат альт на клавиатуре
    changeLanguage();
    doNotChangeLang = true;
  } else if (isAltPressed === true) {
    isShiftPressed = false;
    isAltPressed = false;
    changeLanguage();
  } else {
    //Альт не был нажат
    keyboardCapitalisation = !keyboardCapitalisation;
    isShiftPressed = !isShiftPressed;
    createKeyboard(); //Меняем раскладку
  }
}

/* Шифты выше */

/* Альты ниже */

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "Alt") {
      returnFocus();
      if (keyboardShiftWasPressed) {
        //Былы зажат шифт на компьютере
        altIsPressed();
        document.querySelector(".key__AltLeft").style.background = "none";
        document.querySelector(".key__AltRight").style.background = "none";
      } else {
        altIsPressed();
      }
    }
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "AltLeft" || event.code === "AltRight") {
    event.preventDefault();
    if (keyboardAltWasPressed === false) {
      altIsPressed();
    }
    keyboardAltWasPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "AltLeft" || event.code === "AltRight") {
    if (doNotChangeLang === true) {
      doNotChangeLang = false;
    } else {
      altIsPressed();
    }
    document.querySelector(".key__AltLeft").style.background = "none";
    document.querySelector(".key__AltRight").style.background = "none";
    keyboardAltWasPressed = false;
    isAltPressed = false;
  }
});

function altIsPressed() {
  isAltPressed = !isAltPressed;
  if (isAltPressed) {
    document.querySelector(".key__AltLeft").style.background = "green";
    document.querySelector(".key__AltRight").style.background = "green";
  } else {
    document.querySelector(".key__AltLeft").style.background = "none";
    document.querySelector(".key__AltRight").style.background = "none";
  }

  if (keyboardShiftWasPressed) {
    //Былы зажат шифт на компьютере
    changeLanguage(); //Поменяли язык при нажатии
    isAltPressed = false;
    isShiftPressed = false;
    doNotChangeLang = true;
  } else {
    if (isShiftPressed === true) {
      //Был нажат шифт на вирт. клавиатуре
      isAltPressed = false;
      isShiftPressed = false;
      keyboardCapitalisation = false;
      changeLanguage();
    }
  }
}

/* Альты выше */

/* CTRL ниже */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "Ctrl") {
      returnFocus();
      ctrlIsPressed();
    }
  }
});

function ctrlIsPressed() {
  isCtrlPressed = !isCtrlPressed;
  greenCtrl();
}

function greenCtrl() {
  if (isCtrlPressed === true) {
    document.querySelector(".key__ControlLeft").style.background = "green";
    document.querySelector(".key__ControlRight").style.background = "green";
  } else {
    document.querySelector(".key__ControlLeft").style.background = "none";
    document.querySelector(".key__ControlRight").style.background = "none";
  }
}
/* CTRL выше */

/* WIN ниже */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "Win") {
      returnFocus();
      winPressed();
    }
  }
});

function winPressed() {
  isWinPressed = !isWinPressed;
  greenWin();
}

function greenWin() {
  if (isWinPressed === true) {
    document.querySelector(".key__MetaLeft").style.background = "green";
    document.querySelector(".key__MetaRight").style.background = "green";
  } else {
    document.querySelector(".key__MetaLeft").style.background = "none";
    document.querySelector(".key__MetaRight").style.background = "none";
  }
}
/* WIN выше */

/* Стелочки ниже */

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key__text")) {
    if (e.target.innerText === "Arrows mode") {
      arrowsModeOn = !arrowsModeOn;
      updateStatus();
    }
    if (e.target.innerText === "Left") {
      isArrowKeyPressed = true;
      if (!arrowsModeOn) {
        if (lastPosition > 0) {
          lastPosition -= 1;
        }
        returnFocus();

        let simulateKey = new KeyboardEvent("keydown", {
          key: "ArrowLeft",
          keyCode: 37,
          which: 37,
          code: "ArrowLeft",
          location: 0,
          altKey: false,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          repeat: false,
        });
        document.dispatchEvent(simulateKey);
      } else {
        printCharacter(`←`);
      }
    }
    if (e.target.innerText === "Down") {
      isArrowKeyPressed = true;
      if (!arrowsModeOn) {
        // const input = document.querySelector('.input__text-from-keyboard');
        // input.focus();
        // input.setSelectionRange(lastPosition, lastPosition);
        // console.log(window.getSelection().toString())
        // console.log(input.getSelection().toString())
        // let simulateKey = new KeyboardEvent("keydown", {
        //   key: "ArrowDown",
        //   keyCode: 40,
        //   which: 40,
        //   code: "ArrowDown",
        //   location: 0,
        //   altKey: false,
        //   ctrlKey: false,
        //   metaKey: false,
        //   shiftKey: false,
        //   repeat: false,
        // });
        // document.dispatchEvent(simulateKey);
      } else {
        printCharacter(`↓`);
      }
    }
    if (e.target.innerText === "Right") {
      isArrowKeyPressed = true;
      if (!arrowsModeOn) {
        if (lastPosition >= 0) {
          lastPosition += 1;
        }
        returnFocus();
        let simulateKey = new KeyboardEvent("keydown", {
          key: "ArrowRight",
          keyCode: 39,
          which: 39,
          code: "ArrowRight",
          location: 0,
          altKey: false,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          repeat: false,
        });

        document.dispatchEvent(simulateKey);
      } else {
        printCharacter(`→`);
      }
    }
    if (e.target.innerText === "Up") {
      isArrowKeyPressed = true;
      if (!arrowsModeOn) {
        // let simulateKey = new KeyboardEvent("keydown", {
        //   key: "ArrowUp",
        //   keyCode: 38,
        //   which: 38,
        //   code: "ArrowUp",
        //   location: 0,
        //   altKey: false,
        //   ctrlKey: false,
        //   metaKey: false,
        //   shiftKey: false,
        //   repeat: false,
        // });
        //  input.focus();
        //  console.log(simulateKey)
        //  document.dispatchEvent(simulateKey);
        //input.dispatchEvent(simulateKey2);
      } else {
        printCharacter(`↑`);
      }
    }
  }
});

function checkIfEmulateKeysWerePressed() {
  if (isArrowKeyPressed === true) {
    document.querySelector(".key__ArrowDown").style.background = "none";
    document.querySelector(".key__ArrowUp").style.background = "none";
    document.querySelector(".key__ArrowLeft").style.background = "none";
    document.querySelector(".key__ArrowRight").style.background = "none";
    isArrowKeyPressed = false;
  }
}

document
  .querySelector(".key__ArrowDown")
  .addEventListener("mousedown", (event) => {
    event.preventDefault(); // prevent textarea to loose focus when buttons are clicked
  });

document
  .querySelector(".key__ArrowUp")
  .addEventListener("mousedown", (event) => {
    event.preventDefault(); // prevent textarea to loose focus when buttons are clicked
  });

document
  .querySelector(".key__ArrowLeft")
  .addEventListener("mousedown", (event) => {
    event.preventDefault(); // prevent textarea to loose focus when buttons are clicked
  });

document
  .querySelector(".key__ArrowRight")
  .addEventListener("mousedown", (event) => {
    event.preventDefault(); // prevent textarea to loose focus when buttons are clicked
  });

/* Стрелочки выше */

let inputRow = document.querySelector(".input__text-from-keyboard");

document.addEventListener("click", (e) => {
  //console.log(e)
  if (
    document.activeElement ===
    document.querySelector(".input__text-from-keyboard")
  ) {
    //Сохранить фокус
    lastPosition = document.querySelector(
      ".input__text-from-keyboard"
    ).selectionStart;
  }

  //Вернуть фокус на поле ввода при нажатии на клавишу

  if (e.target.classList.contains("key")) {
    //Если была нажата буква или знак
    if (!singleKeys.includes(e.target.firstChild.innerText)) {
      printCharacter(e.target.firstChild.innerText);
    }

    if (isShiftPressed && keyboardShiftWasPressed === false) {
      //Если нажат шифт
      shiftIsPressed();
    }
  } else {
    if (
      e.target.classList.contains("key__big") || //Елси мы нажали на вложенный элемент
      e.target.classList.contains("key__small")
    ) {
      printCharacter(e.target.parentNode.firstChild.innerText);
      if (isShiftPressed && keyboardShiftWasPressed === false) {
        //Если нажат шифт на виртуальной клавиатуре
        shiftIsPressed();
      }
    }
  }

  // console.log(document.querySelector('.input__text-from-keyboard').selectionStart.focus())
});

function updateStatus() {
  if (keyboardLanguage === "Ru") {
    document.querySelector(
      ".keyboard__status-wrapper"
    ).firstChild.firstChild.innerText = "Текущий язык:";
    document.querySelector(
      ".keyboard__status-wrapper"
    ).firstChild.lastChild.innerText = "Русский язык";
  } else {
    document.querySelector(
      ".keyboard__status-wrapper"
    ).firstChild.firstChild.innerText = "Current language:";
    document.querySelector(
      ".keyboard__status-wrapper"
    ).firstChild.lastChild.innerText = " English Language";
  }
  if (arrowsModeOn === false) {
    if (keyboardLanguage === "Ru") {
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.firstChild.innerText = `Стрелочки:`;
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.lastChild.innerText = " Верх Низ Лево Право";
    } else {
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.firstChild.textContent = "Arrows:";
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.lastChild.textContent = " Up Down Left Right";
    }
  } else {
    if (keyboardLanguage === "Ru") {
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.firstChild.innerText = "Стрелочки:";
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.lastChild.innerText = "↑ ↓ ← →";
    } else {
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.firstChild.innerText = "Arrows:";
      document.querySelector(
        ".keyboard__status-wrapper"
      ).lastChild.lastChild.innerText = "↑ ↓ ← →";
    }
  }
}

function printCharacter(character) {
  if (lastPosition === 0) {
    //После выделения selectionStart возвращает 0. Проводим двойную проверку последнего положения курсора.
    lastPosition = document.querySelector(
      ".input__text-from-keyboard"
    ).selectionStart;
  }

  const input = document.querySelector(".input__text-from-keyboard");
  let leftHalf, rightHalf;

  if (selectedText !== false) {
    //Если был выделен текст
    leftHalf = input.value.slice(0, lastPosition);
    rightHalf = input.value.slice(
      lastPosition + selectedText.length,
      input.length
    );
    selectedText = false;
  } else {
    leftHalf = input.value.slice(0, lastPosition);
    rightHalf = input.value.slice(lastPosition, input.value.length);
  }
  inputRow.value = `${leftHalf}${character}${rightHalf}`;
  lastPosition += 1;
  returnFocus();
}

document
  .querySelector(".input__text-from-keyboard")
  .addEventListener("input", function () {
    //При вводе текста с клавиатуры обновляем значения
    lastPosition = document.querySelector(
      ".input__text-from-keyboard"
    ).selectionStart;
    //inputLength = document.querySelector(".input__text-from-keyboard").value.length;
  });

document.addEventListener("mouseup", function () {
  if (
    document.activeElement ===
    document.querySelector(".input__text-from-keyboard")
  ) {
    selectedText = window.getSelection().toString();
    lastPosition = window.getSelection().focusOffset;
  }
});

window.addEventListener("mousedown", (event) => {
  changeStyleOnClick(event.target);
});

function changeStyleOnClick(event) {
  let targetedKeyClass = event.classList;
  let eventTarget = event;

  if (
    targetedKeyClass.contains("key__big") ||
    targetedKeyClass.contains("key__small")
  ) {
    eventTarget.parentNode.style.background = "green";
  } else if (
    targetedKeyClass.contains("key__text") ||
    targetedKeyClass.contains("key")
  ) {
    eventTarget.style.background = "green";
  }
  window.addEventListener("mouseup", function () {
    if (
      targetedKeyClass.contains("key__big") ||
      targetedKeyClass.contains("key__small")
    ) {
      eventTarget.parentNode.style.background = "none";
    } else if (
      targetedKeyClass.contains("key__text") ||
      targetedKeyClass.contains("key")
    ) {
      eventTarget.style.background = "none";
    }
  });
}

function returnFocus() {
  const input = document.querySelector(".input__text-from-keyboard");
  input.focus();
  input.setSelectionRange(lastPosition, lastPosition);
}

function makeShiftsGreenAgain() {
  document.querySelector(".key__ShiftLeft").style.background = "green";
  document.querySelector(".key__ShiftRight").style.background = "green";
}

// function makeShiftsWhite() {
//   document.querySelector(".key__ShiftLeft").style.background = "none";
//   document.querySelector(".key__ShiftRight").style.background = "none";
// }

console.log(
  "P.S. Помните, JS не может включить/выключить капслок у вас на клавиатуре и переключение языка на виртуальной клавиатуре не поменяет ваш язык в системе (JS ещё такое не умеет)."
);
