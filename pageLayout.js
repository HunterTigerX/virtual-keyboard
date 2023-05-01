function createPageLayout() {
  const nodeDoctype = document.implementation.createDocumentType(
    "html",
    "",
    ""
  );
  document.insertBefore(nodeDoctype, document.childNodes[0]);

  document.documentElement.setAttribute("lang", "en");

  const meta = document.createElement("meta");
  const charset = document.createAttribute("charset");
  meta.setAttributeNode(charset);
  meta.attributes["charset"].value = "utf-8";

  const meta2 = document.createElement("meta");
  const equiv = document.createAttribute("http-equiv");
  const content = document.createAttribute("content");
  meta2.setAttributeNode(equiv);
  meta2.setAttributeNode(content);
  meta2.attributes["http-equiv"].value = "X-UA-Compatible";
  meta2.attributes["content"].value = "IE=edge";

  const meta3 = document.createElement("meta");
  const name = document.createAttribute("name");
  const content2 = document.createAttribute("content");
  meta3.setAttributeNode(name);
  meta3.setAttributeNode(content2);
  meta3.attributes["name"].value = "viewport";
  meta3.attributes["content"].value = "width=device-width, initial-scale=1.0";

  const title = document.createElement("title");
  title.innerText = "Virtual Keyboard";

  const link = document.createElement("link");
  const linkRel = document.createAttribute("rel");
  const linkHref = document.createAttribute("href");
  link.setAttributeNode(linkRel);
  link.setAttributeNode(linkHref);
  link.attributes["rel"].value = "stylesheet";
  link.attributes["href"].value = "./styles.css";

  document.head.append(meta, meta2, meta3, title, link);
}

createPageLayout();

window.addEventListener("load", function () {
  const rowkeysCount = [14, 15, 13, 13, 12];
  let keyboardLanguage;
  let keyboardCapitalisation = false;
  let isShiftPressed = false;
  let isCapslockPressed = false;
  let isAltPressed = false;
  let arrowsModeOn = true;
  let lastPosition = 0;
  //let git  = 0;
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
  let isBackSpaceClicked = false;
  let isBackSpaceHold = false;
  let keyboardBackSpaceWasPressed = false;
  let isDelClicked = false;
  let isDelHold = false;
  let keyboardDelWasPressed = false;
  let changedElement;
  let runDel;
  let runBS;

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
    "Язык",
    "Arrows mode",
    "Режим стрелочек",
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
    "Язык",
    "Arrows mode",
    "Режим стрелочек",
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
    [
      "CapsLock",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "Enter",
    ],
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
    [
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ":",
      '"',
      "Enter",
    ],
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
    [
      "CapsLock",
      "Ф",
      "Ы",
      "В",
      "А",
      "П",
      "Р",
      "О",
      "Л",
      "Д",
      "Ж",
      "Э",
      "Enter",
    ],
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
      "Язык",
      "Режим стрелочек",
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
    [
      "CapsLock",
      "ф",
      "ы",
      "в",
      "а",
      "п",
      "р",
      "о",
      "л",
      "д",
      "ж",
      "э",
      "Enter",
    ],
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
      "Язык",
      "Режим стрелочек",
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

    const keyboardOS = document.createElement("div"); //Создаём панель статуса языка
    keyboardOS.classList.add("div__os-block");

    keyboardStatus.append(keyboardStatusLanguage, keyboardStatusArrows);
    document.body.append(
      inputWrapper,
      keyboardStatus,
      keyboardOS,
      keyboardWrapper
    ); //Вставляем клавиатуру в документ
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

    if (keyboardLanguage === "Ru") {
      document.querySelector(".div__os-block").innerText =
        "Клавиатура была создана под/для ОС Виндоус";
    } else {
      document.querySelector(".div__os-block").innerText =
        "The keyboard was created in and for Windows OS";
    }

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

  document.addEventListener("keydown", function (event) {
    if (event.code !== "CapsLock") {
      document.querySelector(".key__" + event.code).style.background = "green";
    }
    checkIfEmulateKeysWerePressed();

    if (event.code === "CapsLock") {
      event.preventDefault();
      if (keyboardCapsWasPressed === false) {
        capsLockIsPressed();
      }
      keyboardCapsWasPressed = true;
      return;
    }

    if (event.code === "Tab") {
      tabKeyIsPressed();
      event.preventDefault();
      return;
    }

    if (event.code === "Enter") {
      lastPosition += 1;
    }

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

    if (event.code === "AltLeft" || event.code === "AltRight") {
      event.preventDefault();
      if (keyboardAltWasPressed === false) {
        altIsPressed();
      }
      keyboardAltWasPressed = true;
    }

    if (event.code === "Backspace") {
      console.log("Нажали на клавиатуре");
      keyboardBackSpaceWasPressed = true;
      backSpaceIsPressed();
    }

    if (event.code === "Del") {
      console.log("Нажали на клавиатуре");
      keyboardDelWasPressed = true;
      DelIsPressed();
    }
  });

  document.addEventListener("keyup", function (event) {
    if (event.code !== "CapsLock") {
      document.querySelector(".key__" + event.code).style.background = "none";
    }

    if (event.code === "CapsLock") {
      keyboardCapsWasPressed = false;
    }

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

    if (event.code === "Backspace") {
      keyboardBackSpaceWasPressed = false;
      const input = document.querySelector(".input__text-from-keyboard");
      lastPosition = input.selectionStart;
    }

    if (event.code === "Delete") {
      keyboardDelWasPressed = false;
      const input = document.querySelector(".input__text-from-keyboard");
      lastPosition = input.selectionStart;
    }
  });

  document.addEventListener("click", (e) => {
    const input = document.querySelector(".input__text-from-keyboard");
    if (e.target.classList.contains("key__text")) {
      if (e.target.innerText === "CapsLock") {
        //Если нажат Капслок
        returnFocus();
        capsLockIsPressed();
      }

      if (e.target.innerText === "Lang" || e.target.innerText === "Язык") {
        changeLanguage();
        returnFocus();
      }

      if (e.target.innerText === "Tab") {
        tabKeyIsPressed();
        //Если нажат Шифт
      }

      if (e.target.innerText === "Enter") {
        EnterIsPressed();
        //Если нажат Шифт
      }
      if (e.target.innerText === "Shift") {
        returnFocus();
        shiftIsPressed();
        //Если нажат Шифт
      }

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
      if (e.target.innerText === "Ctrl") {
        returnFocus();
       // ctrlIsPressed();
      }

      if (e.target.innerText === "Win") {
        returnFocus();
        winPressed();
      }

      if (
        e.target.innerText === "Arrows mode" ||
        e.target.innerText === "Режим стрелочек"
      ) {
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
          return;
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
          return;
        } else {
          printCharacter(`↑`);
        }
      }
    }

    if (e.target.classList.contains("key")) {

      //Если была нажата буква или знак
      if (!singleKeys.includes(e.target.firstChild.innerText)) {

        printCharacter(e.target.firstChild.innerText);
      }
        //Если нажат шифт
      if (isShiftPressed && keyboardShiftWasPressed === false) {
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

    if (document.activeElement === input) {
      //Сохранить фокус
      lastPosition = input.selectionStart;
    }
  });

  document.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("key__text")) {
      if (e.target.innerText === "BackSpace") {
        isBackSpaceClicked = true;
        runBSNTimes();
      }
      if (e.target.innerText === "Del") {
        isDelClicked = true;
        runDelNTimes();
      }

      if (
        e.target.innerText === "Left" ||
        e.target.innerText === "Right" ||
        e.target.innerText === "Down" ||
        e.target.innerText === "Up"
      ) {
        event.preventDefault();
      }
    }

    changeStyleOnClick(e.target);
  });

  document.addEventListener("mouseup", function () {
    const input = document.querySelector(".input__text-from-keyboard");
    // if () {
    //   lastPosition = document.querySelector(
    //     ".input__text-from-keyboard"
    //   ).selectionStart;
    // }
    clearInterval(runBS);
    clearInterval(runDel);
    if (isBackSpaceHold === false && isBackSpaceClicked === true) {
      backSpaceIsPressed();
    }
    isBackSpaceClicked = false;
    isBackSpaceHold = false;

    if (isDelHold === false && isDelClicked === true) {
      DelIsPressed();
    }
    isDelClicked = false;
    isDelHold = false;

    if (
      document.activeElement === input
    ) {
      selectedText = window.getSelection().toString();
      if (selectedText === '') {
        selectedText = false;
      }
    }

    changeStyleOnClick2();
  });

  let inputRow = document.querySelector(".input__text-from-keyboard");

  inputRow.addEventListener("input", function () {
      //При вводе текста с клавиатуры обновляем значения
      lastPosition = inputRow.selectionStart;
      //inputLength = document.querySelector(".input__text-from-keyboard").value.length;
    });

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

  function capsLockIsPressed() {
    isCapslockPressed = !isCapslockPressed;
    keyboardCapitalisation = !keyboardCapitalisation;
    createKeyboard(); //Меняем раскладку
  }

  function tabKeyIsPressed() {
    const input = document.querySelector(".input__text-from-keyboard");
    let leftHalf = input.value.slice(0, lastPosition);
    let rightHalf = input.value.slice(lastPosition, input.length);
    input.value = `${leftHalf}${"\t"}${rightHalf}`;
    lastPosition += 1;
    returnFocus();
  }

  function EnterIsPressed() {
    const input = document.querySelector(".input__text-from-keyboard");
    let leftHalf = input.value.slice(0, lastPosition);
    let rightHalf = input.value.slice(lastPosition, input.length);
    input.value = `${leftHalf}${"\r\n"}${rightHalf}`;
    lastPosition += 1;
    returnFocus();
  }

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

  // function ctrlIsPressed() {
  //   isCtrlPressed = !isCtrlPressed;
  //   greenCtrl();
  // }

  // function greenCtrl() {
  //   if (isCtrlPressed === true) {
  //     document.querySelector(".key__ControlLeft").style.background = "green";
  //     document.querySelector(".key__ControlRight").style.background = "green";
  //   } else {
  //     document.querySelector(".key__ControlLeft").style.background = "none";
  //     document.querySelector(".key__ControlRight").style.background = "none";
  //   }
  // }

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

  function runBSNTimes() {
    runBS = setInterval(backSpaceIsPressed, 100);
  }

  function backSpaceIsPressed() {
    console.log(selectedText);
    const input = document.querySelector(".input__text-from-keyboard");
    let leftHalf, rightHalf;
    isBackSpaceHold = true;

     if (selectedText !== false) {
      //Если был выделен текст
      leftHalf = input.value.slice(0, lastPosition);
      rightHalf = input.value.slice(
        lastPosition + selectedText.length,
        input.length
      );
      selectedText = false;
      inputRow.value = `${leftHalf}${rightHalf}`;
      returnFocus();
    } else {

    if (keyboardBackSpaceWasPressed === false) {
      if (lastPosition !== 0) {
        let leftHalf = input.value.slice(0, lastPosition - 1);
        let rightHalf = input.value.slice(lastPosition, input.length);
        if (lastPosition === 1 && input.value.length === 1) {
          input.value = ``;
        } else {
          input.value = `${leftHalf}${rightHalf}`;
        }
  
        if (lastPosition > 0) {
          lastPosition -= 1;
        } 
        returnFocus();
      }
    } 
    }
  }

  function runDelNTimes() {
    runDel = setInterval(DelIsPressed, 100);
  }

  function DelIsPressed() {
    const input = document.querySelector(".input__text-from-keyboard");
    let leftHalf, rightHalf;
    isDelHold = true;

    if (selectedText !== false) {
      leftHalf = input.value.slice(0, lastPosition);
      rightHalf = input.value.slice(
        lastPosition + selectedText.length,
        input.length
      );
      selectedText = false;
      inputRow.value = `${leftHalf}${rightHalf}`;
      returnFocus();
    } else {

      if (keyboardDelWasPressed !== true) {
        let leftHalf = input.value.slice(0, lastPosition);
        let rightHalf = input.value.slice(lastPosition + 1, input.length);
        if (lastPosition === 0 && input.value.length === 1) {
          input.value = ``;
        } else {
          input.value = `${leftHalf}${rightHalf}`;
        }
        returnFocus();
      }
    }
  }

  function checkIfEmulateKeysWerePressed() {
    if (isArrowKeyPressed === true) {
      document.querySelector(".key__ArrowDown").style.background = "none";
      document.querySelector(".key__ArrowUp").style.background = "none";
      document.querySelector(".key__ArrowLeft").style.background = "none";
      document.querySelector(".key__ArrowRight").style.background = "none";
      isArrowKeyPressed = false;
    }
  }

  function updateStatus() {
    if (keyboardLanguage === "Ru") {
      document.querySelector(
        ".keyboard__status-wrapper"
      ).firstChild.firstChild.innerText = "Текущий язык:";
      document.querySelector(
        ".keyboard__status-wrapper"
      ).firstChild.lastChild.innerText =
        "Русский язык. Используйте shift+alt для смены языка.";
    } else {
      document.querySelector(
        ".keyboard__status-wrapper"
      ).firstChild.firstChild.innerText = "Current language:";
      document.querySelector(
        ".keyboard__status-wrapper"
      ).firstChild.lastChild.innerText =
        " English Language. Use shift+alt to change language.";
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
    const input = document.querySelector(".input__text-from-keyboard");

    if (lastPosition === 0) {
      //После выделения selectionStart возвращает 0. Проводим двойную проверку последнего положения курсора.
      lastPosition = input.selectionStart;
    }

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

  function changeStyleOnClick(event) {
    changedElement = event;
    let targetedKeyClass = event.classList;
    let eventTarget = event;

    if (
      targetedKeyClass.contains("key__big") ||
      targetedKeyClass.contains("key__small") ||
      targetedKeyClass.contains("key__text")
    ) {
      eventTarget.parentNode.style.background = "green";
    } else if (targetedKeyClass.contains("key")) {
      eventTarget.style.background = "green";
    }
  }

  function changeStyleOnClick2() {
    let targetedKeyClass = changedElement.classList;
    let eventTarget = changedElement;
    if (
      targetedKeyClass.contains("key__big") ||
      targetedKeyClass.contains("key__small") ||
      targetedKeyClass.contains("key__text")
    ) {
      eventTarget.parentNode.style.background = "none";
    } else if (
      targetedKeyClass.contains("key__text") ||
      targetedKeyClass.contains("key")
    ) {
      eventTarget.style.background = "none";
    }
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

  // console.log(
  //   "Памятка 1. При наличии у вас не PS2 клавиатуры, максимальное количество одновременных нажатий клавиш - 6."
  // );
  // console.log(
  //   "Памятка 2. В качестве основы использовалась виртуальная клавиатура Windows 10. В ней при нажатии на любой Shift, Alt, Ctrl на любой клавиатуре подсвечиваются обе клавиши с таким названием."
  // );
  // console.log(
  //   "Памятка 3. JS не может включить/выключить капслок у вас на физической клавиатуре, как и не может переключить на ней язык. Переключение языка и нажатие капслока на виртуальноя клавиатуре распространяется только на виртуальную клавиатуру"
  // );
  // console.log(
  //   "p.s. Хотя практически можно попробовать обойти это, но к счастью по ТЗ нам это делать не надо"
  // );
  // console.log(
  //   "Памятка 4. Стрелочки печатают стрелочки. По ТЗ этого достаточно. Однако дополнительно добавлен второй режим стрелочек, но пока работают только стрелочки влево и вправо (на 01.05.2023)"
  // );
});
