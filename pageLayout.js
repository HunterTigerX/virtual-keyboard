const rowkeysCount = [14, 15, 13, 13, 11];
let keyboardLanguage = "En";

const specialSymbols = [ //Клавиши с особыми размерами клавиш
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
  "Lang"
];

const singleKeys = [ //Клавиши без маленького текста
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
  "Lang"
];

/*using keycodes*/
const keycodesOfKeyboard = [ //Добавляем классы для работы с клавишами
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
    "Lang"
  ],
];

const engBig = [ //Большие буквы в клавиатуре и буквы с текстом
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

const ruBig = [ //Большие буквы в клавиатуре и буквы с текстом
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
  ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", 'Э', "Enter"],
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
    "Lang"
  ],
];

function createKeyboardWrapper() {
  const keyboardWrapper = document.createElement("div"); //Создаём обёртку для клавиатуры
  keyboardWrapper.classList.add("keyboard__wrapper"); //Добавляем ей стили
  document.body.append(keyboardWrapper); //Вставляем клавиатуру в документ
}

function createKeyboard() {
  const keyboardWrapper = document.querySelector('.keyboard__wrapper');
  keyboardWrapper.innerText = '';
  for (let i = 0; i < rowkeysCount.length; i++) {
    //Создаём ряды клавиш
    keyboardWrapper.append(fillRowsWithKeys(rowkeysCount[i], i)); //Заполняем ряд клавишами
  }

  const languageKey = document.querySelector(".key__ChangeLanguage");
  languageKey.addEventListener("click", function () {
  console.log('changed');
  changeLayout();
});

}

function fillRowsWithKeys(count, currentRow) {

  let keyboardLanguageBigKeys;
  let keyboardLanguageSmallkeys;

  if (keyboardLanguage === 'Ru') {
    console.log(keyboardLanguage)
    keyboardLanguageBigKeys = ruBig;
    keyboardLanguageSmallkeys = ruSmall;
  } else if (keyboardLanguage === 'En') {
    console.log(keyboardLanguage)
    keyboardLanguageBigKeys = engBig;
    keyboardLanguageSmallkeys = engSmall;
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
      if (name === "Space" || name === 'Пробел') {
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
  changeStyleOfPressedKey(event);
  document.querySelector(".key__" + event.code).style.background = "green";
  //console.log(event.code)

  if (event.code === "Tab" || //Prevent keys from staying active
    event.code === "CapsLock") {
      event.preventDefault();
      return;
    }
});

document.addEventListener("keyup", function (event) {
  console.log(event.key, event.code);
  changeStyleOfPressedKey(event);
  document.querySelector(".key__" + event.code).style.background = "none";
});

function changeLayout() {
  if (keyboardLanguage === 'Ru') {
    keyboardLanguage = 'En';
  } else {
    keyboardLanguage = 'Ru';
  }
  createKeyboard();
}

function changeStyleOfPressedKey(event) {
  // console.log( document.querySelector(".key__" + event.code));
  // document.querySelector(".key__" + event.code).classList.toggle("key__pressed")
}

if (navigator.keyboard) {
  const keyboard = navigator.keyboard;
  console.log();
  keyboard.getLayoutMap();
} else {
  // Do something else.
}

/*
  console.log("↑↓→←");
  console.log(document.body);
*/
