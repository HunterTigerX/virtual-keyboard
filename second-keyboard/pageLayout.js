const rowkeysCount = [14, 15, 13, 13, 12];
let keyboardLanguage = 'En';
let keyboardCapitalisation = false;
let isShiftPressed = false;
let isCapslockPressed = false;
let isCapslockHold = false;
let arrowsModeOn = true;
let lastPosition = 0;
let selectedText = false;
let isArrowKeyPressed = false;
let keyboardShiftWasPressed = false;
let keyboardAltWasPressed = false;
let keyboardCtrlWasPressed = false;
let doNotChangeLang = false;
let isCtrlPressed = false;
let isWinPressed = false;
let isBackSpaceClicked = false;
let isBackSpaceHold = false;
let keyboardBackSpaceWasPressed = false;
let isDelClicked = false;
let isDelHold = false;
let keyboardDelWasPressed = false;
let runDel;
let runBS;
let styleToRemove;
let leftShiftPressed;
let rightShiftPressed;

const specialSymbols = [
  // Клавиши с особыми размерами клавиш
  'BackSpace',
  'Tab',
  'Del',
  'CapsLock',
  'Enter',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Пробел',
  'Left',
  'Down',
  'Right',
  'Up',
  'Lang',
  'Язык',
  'Arrows mode',
  'Режим стрелок',
];

const singleKeys = [
  // Клавиши без маленького текста
  'BackSpace',
  'Tab',
  'Del',
  'CapsLock',
  'Enter',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Пробел',
  'Left',
  'Down',
  'Right',
  'Up',
  'Lang',
  'Язык',
  'Arrows mode',
  'Режим стрелок',
];

// using keycodes
const keycodesOfKeyboard = [
  // Добавляем классы для работы с клавишами
  [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
  ],
  [
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
    'Delete',
  ],
  [
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
  ],
  [
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ArrowUp',
    'ShiftRight',
  ],
  [
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'MetaRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'ChangeLanguage',
    'arrowsMode',
  ],
];

const engSmallShift = [
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'BackSpace',
  ],
  [
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'Del',
  ],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Space',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Lang',
    'Arrows mode',
  ],
];

const eNshiftCaps = [
  [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'BackSpace',
  ],
  [
    'Tab',
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
    '\\',
    'Del',
  ],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Space',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Lang',
    'Arrows mode',
  ],
];

const engBigCaps = [
  // Большие буквы в клавиатуре и буквы с текстом
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'BackSpace',
  ],
  [
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '{',
    '}',
    '|',
    'Del',
  ],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Space',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Lang',
    'Arrows mode',
  ],
];

const engBigShift = [
  // Большие буквы в клавиатуре и буквы с текстом
  [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'BackSpace',
  ],
  [
    'Tab',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    '{',
    '}',
    '|',
    'Del',
  ],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Space',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Lang',
    'Arrows mode',
  ],
];

const ruBigShift = [
  // Большие буквы в клавиатуре и буквы с текстом
  [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'BackSpace',
  ],
  [
    'Tab',
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х',
    'Ъ',
    '/',
    'Del',
  ],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Пробел',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Язык',
    'Режим стрелок',
  ],
];

const ruBigCaps = [
  // Большие буквы в клавиатуре и буквы с текстом
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'BackSpace',
  ],
  [
    'Tab',
    'Й',
    'Ц',
    'У',
    'К',
    'Е',
    'Н',
    'Г',
    'Ш',
    'Щ',
    'З',
    'Х',
    'Ъ',
    '/',
    'Del',
  ],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Пробел',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Язык',
    'Режим стрелок',
  ],
];

const ruSmallShift = [
  [
    'ё',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'BackSpace',
  ],
  [
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    '\\',
    'Del',
  ],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Пробел',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Язык',
    'Режим стрелок',
  ],
];

const ruShiftCaps = [
  [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    'BackSpace',
  ],
  [
    'Tab',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    '\\',
    'Del',
  ],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift'],
  [
    'Ctrl',
    'Win',
    'Alt',
    'Пробел',
    'Alt',
    'Win',
    'Ctrl',
    'Left',
    'Down',
    'Right',
    'Язык',
    'Режим стрелок',
  ],
];

if (localStorage.getItem('keyboardLanguage') !== 'En') {
  keyboardLanguage = 'Ru';
  localStorage.setItem('keyboardLanguage', 'Ru');
}

function createPageLayout() {
  const nodeDoctype = document.implementation.createDocumentType(
    'html',
    '',
    '',
  );
  document.insertBefore(nodeDoctype, document.childNodes[0]);

  document.documentElement.setAttribute('lang', 'en');

  const meta = document.createElement('meta');
  const charset = document.createAttribute('charset');
  meta.setAttributeNode(charset);
  meta.attributes.charset.value = 'utf-8';

  const meta2 = document.createElement('meta');
  const equiv = document.createAttribute('http-equiv');
  const content = document.createAttribute('content');
  meta2.setAttributeNode(equiv);
  meta2.setAttributeNode(content);
  meta2.attributes['http-equiv'].value = 'X-UA-Compatible';
  meta2.attributes.content.value = 'IE=edge';

  const meta3 = document.createElement('meta');
  const name = document.createAttribute('name');
  const content2 = document.createAttribute('content');
  meta3.setAttributeNode(name);
  meta3.setAttributeNode(content2);
  meta3.attributes.name.value = 'viewport';
  meta3.attributes.content.value = 'width=device-width, initial-scale=1.0';

  const title = document.createElement('title');
  title.innerText = 'Virtual Keyboard';

  const link = document.createElement('link');
  const linkRel = document.createAttribute('rel');
  const linkHref = document.createAttribute('href');
  link.setAttributeNode(linkRel);
  link.setAttributeNode(linkHref);
  link.attributes.rel.value = 'stylesheet';
  link.attributes.href.value = './styles.css';

  document.head.append(meta, meta2, meta3, title, link);
}

createPageLayout();

window.addEventListener('load', () => {
  function createKeyboardWrapper() {
    const keyboardWrapper = document.createElement('div'); // Создаём обёртку для клавиатуры
    keyboardWrapper.classList.add('keyboard__wrapper'); // Добавляем ей стили
    const inputWrapper = document.createElement('textarea'); // Создаём обёртку для клавиатуры
    inputWrapper.rows = '4';
    inputWrapper.classList.add('input__text-from-keyboard'); // Добавляем ей стили

    const keyboardStatus = document.createElement('div'); // Создаём панель статуса
    keyboardStatus.classList.add('keyboard__status-wrapper'); // Добавляем ей стили

    const keyboardStatusLanguage = document.createElement('div'); // Создаём панель статуса языка
    keyboardStatusLanguage.classList.add('div__status-block');
    const keyboardStatusLanguageText1 = document.createElement('span'); // Создаём панель статуса языка
    keyboardStatusLanguageText1.innerText = 'Текущий язык: ';
    const keyboardStatusLanguageText2 = document.createElement('span'); // Создаём панель статуса языка
    keyboardStatusLanguageText2.classList.add('span__result');
    keyboardStatusLanguage.append(
      keyboardStatusLanguageText1,
      keyboardStatusLanguageText2,
    );

    const keyboardStatusArrows = document.createElement('div'); // Создаём панель статуса стрелок
    keyboardStatusArrows.classList.add('div__status-block');
    const keyboardStatusArrowsText1 = document.createElement('span'); // Создаём панель статуса языка
    keyboardStatusArrowsText1.innerText = 'Стрелочки';
    const keyboardStatusArrowsText2 = document.createElement('span'); // Создаём панель статуса языка
    keyboardStatusArrowsText2.classList.add('span__result');
    keyboardStatusArrows.append(
      keyboardStatusArrowsText1,
      keyboardStatusArrowsText2,
    );

    const keyboardOS = document.createElement('div'); // Создаём панель статуса языка
    keyboardOS.classList.add('div__os-block');

    keyboardStatus.append(keyboardStatusLanguage, keyboardStatusArrows);
    document.body.append(
      inputWrapper,
      keyboardStatus,
      keyboardOS,
      keyboardWrapper,
    ); // Вставляем клавиатуру в документ
  }

  function fillRowsWithKeys(count, currentRow) {
    let keyboardLanguageBigKeys;
    let keyboardLanguageSmallkeys;

    if (keyboardLanguage === 'En') {
      if (isShiftPressed && isCapslockPressed) {
        keyboardLanguageBigKeys = engBigCaps;
        keyboardLanguageSmallkeys = eNshiftCaps;
      } else if (isShiftPressed && !isCapslockPressed) {
        keyboardLanguageBigKeys = engSmallShift;
        keyboardLanguageSmallkeys = engBigShift;
      } else if (isCapslockPressed && !isShiftPressed) {
        keyboardLanguageBigKeys = eNshiftCaps;
        keyboardLanguageSmallkeys = engBigCaps;
      } else {
        keyboardLanguageBigKeys = engBigShift;
        keyboardLanguageSmallkeys = engSmallShift;
      }
    } else if (keyboardLanguage === 'Ru') {
      if (isShiftPressed && isCapslockPressed) {
        keyboardLanguageBigKeys = ruBigCaps;
        keyboardLanguageSmallkeys = ruShiftCaps;
      } else if (isShiftPressed && !isCapslockPressed) {
        keyboardLanguageBigKeys = ruSmallShift;
        keyboardLanguageSmallkeys = ruBigShift;
      } else if (isCapslockPressed && !isShiftPressed) {
        keyboardLanguageBigKeys = ruShiftCaps;
        keyboardLanguageSmallkeys = ruBigCaps;
      } else {
        keyboardLanguageBigKeys = ruBigShift;
        keyboardLanguageSmallkeys = ruSmallShift;
      }
    }

    const keyboardRow = document.createElement('div'); // Создаём ряд клавиш
    for (let i = 0; i < count; i += 1) {
      // Создаём клавиши
      const name = keyboardLanguageSmallkeys[currentRow][i];
      const keyWrapper = document.createElement('div');
      keyWrapper.classList.add(
        'key',
        `key__${keycodesOfKeyboard[currentRow][i]}`,
      );
      const bigKey = document.createElement('div'); // Левое верхнее значение
      bigKey.innerText = keyboardLanguageBigKeys[currentRow][i];

      keyWrapper.append(bigKey);
      if (!singleKeys.includes(keyboardLanguageSmallkeys[currentRow][i])) {
        // Проверяем, надо ли создавать альтернативное значение
        const smallKey = document.createElement('div'); // Правое нижнее значение
        smallKey.classList.add('key__small');
        smallKey.textContent = keyboardLanguageSmallkeys[currentRow][i];
        keyWrapper.append(smallKey);
      }

      if (specialSymbols.includes(name)) {
        // Добавляем классы для нестандартных клавиш
        if (name === 'Space' || name === 'Пробел') {
          keyWrapper.classList.add('key__xsix');
        } else if (
          name === 'BackSpace'
          || name === 'CapsLock'
          || name === 'Shift'
          || name === 'Enter'
        ) {
          keyWrapper.classList.add('key__xthree');
        } else if (name === 'Tab' || name === 'Ctrl') {
          keyWrapper.classList.add('key__xtwo');
        } else {
          bigKey.classList.add('key__xone');
        }
        bigKey.classList.add('key__text');
      } else {
        bigKey.classList.add('key__big');
      }

      keyWrapper.append(bigKey);

      keyboardRow.append(keyWrapper);
    }
    keyboardRow.classList.add('keyboard__row');
    return keyboardRow;
  }

  function updateStatus() {
    if (keyboardLanguage === 'Ru') {
      document.querySelector(
        '.keyboard__status-wrapper',
      ).firstChild.firstChild.innerText = 'Текущий язык:';
      document.querySelector(
        '.keyboard__status-wrapper',
      ).firstChild.lastChild.innerText = 'Русский язык. Используйте shift+alt для смены языка.';
    } else {
      document.querySelector(
        '.keyboard__status-wrapper',
      ).firstChild.firstChild.innerText = 'Current language:';
      document.querySelector(
        '.keyboard__status-wrapper',
      ).firstChild.lastChild.innerText = ' English Language. Use shift+alt to change language.';
    }
    if (arrowsModeOn === false) {
      if (keyboardLanguage === 'Ru') {
        document.querySelector(
          '.keyboard__status-wrapper',
        ).lastChild.firstChild.innerText = 'Стрелочки:';
        document.querySelector(
          '.keyboard__status-wrapper',
        ).lastChild.lastChild.innerText = ' Верх Низ Лево Право';
      } else {
        document.querySelector(
          '.keyboard__status-wrapper',
        ).lastChild.firstChild.textContent = 'Arrows:';
        document.querySelector(
          '.keyboard__status-wrapper',
        ).lastChild.lastChild.textContent = ' Up Down Left Right';
      }
    } else if (keyboardLanguage === 'Ru') {
      document.querySelector(
        '.keyboard__status-wrapper',
      ).lastChild.firstChild.innerText = 'Стрелочки:';
      document.querySelector(
        '.keyboard__status-wrapper',
      ).lastChild.lastChild.innerText = '↑ ↓ ← →';
    } else {
      document.querySelector(
        '.keyboard__status-wrapper',
      ).lastChild.firstChild.innerText = 'Arrows:';
      document.querySelector(
        '.keyboard__status-wrapper',
      ).lastChild.lastChild.innerText = '↑ ↓ ← →';
    }
  }

  function createKeyboard() {
    const keyboardWrapper = document.querySelector('.keyboard__wrapper');
    keyboardWrapper.innerText = '';
    for (let i = 0; i < rowkeysCount.length; i += 1) {
      // Создаём ряды клавиш
      keyboardWrapper.append(fillRowsWithKeys(rowkeysCount[i], i)); // Заполняем ряд клавишами
    }
    if (isCapslockPressed === true) {
      document.querySelector('.key__CapsLock').classList.add('changed__color');
    } else {
      document.querySelector('.key__CapsLock').classList.remove('changed__color');
    }
    if (leftShiftPressed === true) {
      document.querySelector('.key__ShiftLeft').classList.add('changed__color');
    } else if (rightShiftPressed === true) {
      document.querySelector('.key__ShiftRight').classList.add('changed__color');
    }
    if (keyboardLanguage === 'Ru') {
      document.querySelector('.div__os-block').innerText = 'Клавиатура была создана под/для ОС Виндоус';
    } else {
      document.querySelector('.div__os-block').innerText = 'The keyboard was created in and for Windows OS';
    }
    updateStatus();
  }

  createKeyboardWrapper();
  createKeyboard();

  function checkIfEmulateKeysWerePressed() {
    if (isArrowKeyPressed === true) {
      isArrowKeyPressed = false;
    }
  }

  function returnFocus() {
    const input = document.querySelector('.input__text-from-keyboard');
    input.focus();
    input.setSelectionRange(lastPosition, lastPosition);
  }

  function DelIsPressed() {
    const input = document.querySelector('.input__text-from-keyboard');
    let leftHalf;
    let rightHalf;
    isDelHold = true;

    if (input.value.length === selectedText.length) {
      selectedText = false;
      input.value = '';
      returnFocus();
    } else if (selectedText !== false) {
      leftHalf = input.value.slice(0, lastPosition);
      rightHalf = input.value.slice(
        lastPosition + selectedText.length,
        input.length,
      );
      selectedText = false;
      input.value = `${leftHalf}${rightHalf}`;
      returnFocus();
    } else if (keyboardDelWasPressed !== true) {
      leftHalf = input.value.slice(0, lastPosition);
      rightHalf = input.value.slice(lastPosition + 1, input.length);
      if (lastPosition === 0 && input.value.length === 1) {
        input.value = '';
      } else {
        input.value = `${leftHalf}${rightHalf}`;
      }
      returnFocus();
    }
  }

  function backSpaceIsPressed() {
    const input = document.querySelector('.input__text-from-keyboard');
    let leftHalf;
    let rightHalf;
    isBackSpaceHold = true;
    if (input.value.length === selectedText.length) {
      selectedText = false;
      input.value = '';
    } else if (keyboardBackSpaceWasPressed === false) {
      if (selectedText !== false) {
        // Если был выделен текст
        leftHalf = input.value.slice(0, lastPosition);
        rightHalf = input.value.slice(
          lastPosition + selectedText.length,
          input.length,
        );
        selectedText = false;
        input.value = `${leftHalf}${rightHalf}`;
      } else if (lastPosition !== 0) {
        leftHalf = input.value.slice(0, lastPosition - 1);
        rightHalf = input.value.slice(lastPosition, input.length);
        if (lastPosition === 1 && input.value.length === 1) {
          input.value = '';
        } else {
          input.value = `${leftHalf}${rightHalf}`;
        }

        if (lastPosition > 0) {
          lastPosition -= 1;
        }
        returnFocus();
      }
    }
    returnFocus();
  }

  function changeLanguage() {
    if (keyboardLanguage === 'Ru') {
      keyboardLanguage = 'En';
      localStorage.setItem('keyboardLanguage', 'En');
    } else {
      keyboardLanguage = 'Ru';
      localStorage.setItem('keyboardLanguage', 'Ru');
    }
    createKeyboard();
  }

  function shiftIsPressed() {
    keyboardCapitalisation = !keyboardCapitalisation;
    isShiftPressed = !isShiftPressed;
    createKeyboard(); // Меняем раскладку
  }

  function capsLockIsPressed() {
    if (isCapslockHold === false) {
      isCapslockPressed = !isCapslockPressed;
      keyboardCapitalisation = !keyboardCapitalisation;
      createKeyboard(); // Меняем раскладку
    } else {
      isCapslockPressed = true;
      keyboardCapitalisation = true;
      createKeyboard();
    }
  }

  function tabKeyIsPressed() {
    const input = document.querySelector('.input__text-from-keyboard');
    if (input.value.length === selectedText.length) {
      selectedText = false;
      input.value = `${'\t'}`;
    } else {
      const leftHalf = input.value.slice(0, lastPosition);
      const rightHalf = input.value.slice(lastPosition, input.length);
      input.value = `${leftHalf}${'\t'}${rightHalf}`;
    }
    lastPosition += 1;
    returnFocus();
  }

  function spaceKeyIsPressed() {
    const input = document.querySelector('.input__text-from-keyboard');
    if (input.value.length === selectedText.length) {
      selectedText = false;
      input.value = ' ';
    } else if (selectedText !== false) {
      const leftHalf = input.value.slice(0, lastPosition);
      const rightHalf = input.value.slice(
        lastPosition + selectedText.length,
        input.length,
      );
      selectedText = false;
      if (selectedText.length === input.value.length) {
        input.value = ' ';
      } else {
        input.value = `${leftHalf}${' '}${rightHalf}`;
      }
    } else {
      const leftHalf = input.value.slice(0, lastPosition);
      const rightHalf = input.value.slice(lastPosition, input.length);
      input.value = `${leftHalf}${' '}${rightHalf}`;
    }
    lastPosition += 1;
    returnFocus();
  }

  function EnterIsPressed() {
    const input = document.querySelector('.input__text-from-keyboard');
    if (input.value.length === selectedText.length) {
      selectedText = false;
      input.value = `${'\r\n'}`;
    } else if (selectedText !== false) {
      const leftHalf = input.value.slice(0, lastPosition);
      const rightHalf = input.value.slice(
        lastPosition + selectedText.length,
        input.length,
      );
      selectedText = false;
      if (selectedText.length === input.value.length) {
        // Если был выделен весь текст
        input.value = `${'\r\n'}`;
      } else {
        input.value = `${leftHalf}${'\r\n'}${rightHalf}`;
      }
    } else {
      const leftHalf = input.value.slice(0, lastPosition);
      const rightHalf = input.value.slice(lastPosition, input.length);
      input.value = `${leftHalf}${'\r\n'}${rightHalf}`;
    }

    lastPosition += 1;
    returnFocus();
  }

  function removeColor(text) {
    let targetToChange;
    let targetToChange2 = false;
    if (text === 'Shift') {
      targetToChange = document.querySelector('.key__ShiftLeft');
      targetToChange2 = document.querySelector('.key__ShiftRight');
    } else if (text === 'Ctrl') {
      targetToChange = document.querySelector('.key__ControlLeft');
      targetToChange2 = document.querySelector('.key__ControlRight');
    } else if (text === 'Win') {
      targetToChange = document.querySelector('.key__MetaLeft');
      targetToChange2 = document.querySelector('.key__MetaRight');
    } else if (text === 'Alt') {
      targetToChange = document.querySelector('.key__AltLeft');
      targetToChange2 = document.querySelector('.key__AltRight');
    }
    if (targetToChange !== null) {
      targetToChange.classList.add('changeKeysColorBack');
    }
    if (
      typeof targetToChange !== 'undefined'
      && targetToChange.classList.contains('changeKeyColor')
    ) {
      targetToChange.classList.remove('changeKeyColor');
    }

    targetToChange.onanimationend = () => {
      if (typeof targetToChange !== 'undefined' && targetToChange !== false) {
        if (targetToChange.classList.contains('changeKeysColorBack')) {
          targetToChange.classList.remove('changeKeysColorBack');
        }
      }
      targetToChange = false;
    };

    if (targetToChange2 !== false) {
      if (targetToChange2.classList.contains('changeKeyColor')) {
        targetToChange2.classList.remove('changeKeyColor');
        targetToChange2.classList.add('changeKeysColorBack');
      }
      targetToChange2.onanimationend = () => {
        if (
          typeof targetToChange2 !== 'undefined'
          && targetToChange2 !== false
        ) {
          if (targetToChange2.classList.contains('changeKeysColorBack')) {
            targetToChange2.classList.remove('changeKeysColorBack');
          }
        }
        targetToChange2 = false;
      };
    }
  }

  function printCharacter(character) {
    const copyChar = character === 'с'
      || character === 'С'
      || character === 'c'
      || character === 'C';
    const pasteChar = character === 'м'
      || character === 'М'
      || character === 'v'
      || character === 'V';
    const selectChar = character === 'a'
      || character === 'A'
      || character === 'ф'
      || character === 'Ф';
    const cutChar = character === 'x'
      || character === 'X'
      || character === 'Ч'
      || character === 'ч';
    const ctrlStatement = isCtrlPressed || keyboardCtrlWasPressed;
    const input = document.querySelector('.input__text-from-keyboard');

    if (lastPosition === 0) {
      // После выделения selectionStart возвращает 0.
      // Проводим двойную проверку последнего положения курсора.
      lastPosition = input.selectionStart;
    }

    let leftHalf;
    let rightHalf;

    if (ctrlStatement && (copyChar || pasteChar || selectChar || cutChar)) {
      if (ctrlStatement && copyChar) {
        // Копируем выделенный текст
        localStorage.setItem('ctrlStorage', selectedText);
        if (isCtrlPressed) {
          selectedText = false;
          isCtrlPressed = false;
          lastPosition += localStorage.getItem('ctrlStorage').length;
          returnFocus();
        }
      } else if (ctrlStatement && pasteChar) {
        if (localStorage.getItem('ctrlStorage') !== 'false') {
          if (selectedText !== false) {
            if (input.value.length === selectedText.length) {
              selectedText = false;
              input.value = `${localStorage.getItem('ctrlStorage')}`;
            } else {
              leftHalf = input.value.slice(0, lastPosition);
              rightHalf = input.value.slice(
                lastPosition + selectedText.length,
                input.length,
              );
              selectedText = false;
              input.value = `${leftHalf}${localStorage.getItem(
                'ctrlStorage',
              )}${rightHalf}`;
            }
          } else {
            leftHalf = input.value.slice(0, lastPosition);
            rightHalf = input.value.slice(lastPosition, input.value.length);
            input.value = `${leftHalf}${localStorage.getItem(
              'ctrlStorage',
            )}${rightHalf}`;
          }
          if (!keyboardCtrlWasPressed) {
            isCtrlPressed = false;
          }
          lastPosition += localStorage.getItem('ctrlStorage').length;
          returnFocus();
        } else if (selectedText !== false) {
          if (input.value.length === selectedText.length) {
            input.value = '';
            returnFocus();
          } else {
            leftHalf = input.value.slice(0, lastPosition);
            rightHalf = input.value.slice(lastPosition, input.length);
            input.value = `${leftHalf}${rightHalf}`;
          }
        }
        returnFocus();
      } else if (ctrlStatement && selectChar) {
        input.focus();
        input.setSelectionRange(0, input.value.length);
        selectedText = window.getSelection().toString();
      } else if (ctrlStatement && cutChar) {
        // Копируем выделенный текст
        localStorage.setItem('ctrlStorage', selectedText);
        if (isCtrlPressed) {
          if (selectedText !== false) {
            // ctrlIsPressed();
            if (input.value.length === selectedText.length) {
              input.value = '';
            } else {
              leftHalf = input.value.slice(0, lastPosition);
              // eslint-disable-next-line no-shadow
              rightHalf = input.value.slice(
                lastPosition + selectedText.length,
                input.length,
              );
              input.value = `${leftHalf}${rightHalf}`;
            }
            selectedText = false;
            isCtrlPressed = false;
            if (isCtrlPressed !== true) {
              removeColor('Ctrl');
            }
            returnFocus();
          }
        }
      }
    } else {
      if (input.value.length === selectedText.length) {
        selectedText = false;
        input.value = `${character}`;
      } else {
        if (selectedText !== false) {
          // Если был выделен текст
          leftHalf = input.value.slice(0, lastPosition);
          rightHalf = input.value.slice(
            lastPosition + selectedText.length,
            input.length,
          );
          selectedText = false;
        } else {
          leftHalf = input.value.slice(0, lastPosition);
          rightHalf = input.value.slice(lastPosition, input.value.length);
        }
        input.value = `${leftHalf}${character}${rightHalf}`;
      }
      lastPosition += 1;
      returnFocus();
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.altKey) {
      changeLanguage();
    }
    const input = document.querySelector('.input__text-from-keyboard');
    input.focus();
    document.querySelector(`.key__${e.code}`).classList.add('changed__color');

    checkIfEmulateKeysWerePressed();
    if (e.code === 'CapsLock') {
      e.preventDefault();
      capsLockIsPressed();
    }
    if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
      keyboardCtrlWasPressed = true;
      return;
    }

    if (e.code === 'Tab') {
      tabKeyIsPressed();
      e.preventDefault();
      return;
    }

    if (e.code === 'Space') {
      spaceKeyIsPressed();
      e.preventDefault();
      return;
    }

    if (e.code === 'CapsLock') {
      isCapslockHold = true;
    }
    if (e.code === 'ArrowUp') {
      e.preventDefault();
      printCharacter('↑');
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault();
      printCharacter('↓');
    }
    if (e.code === 'ArrowLeft') {
      e.preventDefault();
      printCharacter('←');
    }
    if (e.code === 'ArrowRight') {
      e.preventDefault();
      printCharacter('→');
    }
    if (e.code === 'Enter') {
      lastPosition += 1;
    }

    if (e.code === 'ShiftLeft') {
      leftShiftPressed = true;
      if (keyboardShiftWasPressed === false) {
        shiftIsPressed();
      }
      keyboardShiftWasPressed = true;
    } if (e.code === 'ShiftRight') {
      rightShiftPressed = true;
      if (keyboardShiftWasPressed === false) {
        shiftIsPressed();
      }
      keyboardShiftWasPressed = true;
    }

    if (e.code === 'AltLeft' || e.code === 'AltRight') {
      e.preventDefault();
      if (keyboardAltWasPressed === false) {
        keyboardAltWasPressed = true;
      }
      keyboardAltWasPressed = true;
    }

    if (e.code === 'Backspace') {
      keyboardBackSpaceWasPressed = true;
      backSpaceIsPressed();
    }

    if (e.code === 'Del') {
      keyboardDelWasPressed = true;
      DelIsPressed();
    }
  });

  function removeClass(e) {
    e.classList.remove('changed__color');
  }

  document.addEventListener('keyup', (e) => {
    const input = document.querySelector('.input__text-from-keyboard');
    if (e.code !== 'CapsLock') {
      setTimeout(() => {
        removeClass(document.querySelector(`.key__${e.code}`));
      }, 350);
    }

    if (document.activeElement === input) {
      selectedText = window.getSelection().toString();
      if (selectedText === '') {
        selectedText = false;
      }
    }

    if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
      keyboardCtrlWasPressed = false;
      isCtrlPressed = false;
    }

    if (e.code === 'ShiftLeft') {
      shiftIsPressed();
      keyboardShiftWasPressed = false;
      leftShiftPressed = false;
    } else if (e.code === 'ShiftRight') {
      shiftIsPressed();
      keyboardShiftWasPressed = false;
      rightShiftPressed = false;
    }

    if (e.code === 'AltLeft' || e.code === 'AltRight') {
      if (doNotChangeLang === true) {
        doNotChangeLang = false;
      }
      keyboardAltWasPressed = false;
    }

    if (e.code === 'Backspace') {
      keyboardBackSpaceWasPressed = false;
      lastPosition = input.selectionStart;
    }
    if (e.code === 'CapsLock') {
      isCapslockHold = false;
    }

    if (e.code === 'Delete') {
      keyboardDelWasPressed = false;
      lastPosition = input.selectionStart;
    }
  });

  function winPressed() {
    isWinPressed = !isWinPressed;
    if (!isWinPressed) {
      removeColor('Win');
    }
  }

  document.addEventListener('click', (e) => {
    const input = document.querySelector('.input__text-from-keyboard');
    if (e.target.classList.contains('key__text')) {
      if (e.target.innerText === 'Lang' || e.target.innerText === 'Язык') {
        changeLanguage();
        returnFocus();
      }

      if (e.target.innerText === 'Tab') {
        tabKeyIsPressed();
      }

      if (e.target.innerText === 'Space' || e.target.innerText === 'Пробел') {
        spaceKeyIsPressed();
      }

      if (e.target.innerText === 'Enter') {
        EnterIsPressed();
      }

      if (e.target.innerText === 'Alt') {
        returnFocus();
      }

      if (e.target.innerText === 'Win') {
        returnFocus();
        winPressed();
      }

      if (
        e.target.innerText === 'Arrows mode'
        || e.target.innerText === 'Режим стрелок'
      ) {
        arrowsModeOn = !arrowsModeOn;
        updateStatus();
      }

      if (e.target.innerText === 'Left') {
        isArrowKeyPressed = true;
        if (!arrowsModeOn) {
          if (lastPosition > 0) {
            lastPosition -= 1;
          }
          returnFocus();

          const simulateKey = new KeyboardEvent('keydown', {
            key: 'ArrowLeft',
            keyCode: 37,
            which: 37,
            code: 'ArrowLeft',
            location: 0,
            altKey: false,
            ctrlKey: false,
            metaKey: false,
            shiftKey: false,
            repeat: false,
          });
          document.dispatchEvent(simulateKey);
        } else {
          printCharacter('←');
        }
      }

      if (e.target.innerText === 'Down') {
        isArrowKeyPressed = true;
        if (!arrowsModeOn) {
          return;
        }
        printCharacter('↓');
      }

      if (e.target.innerText === 'Right') {
        isArrowKeyPressed = true;
        if (!arrowsModeOn) {
          if (lastPosition >= 0) {
            lastPosition += 1;
          }
          returnFocus();
          const simulateKey = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            keyCode: 39,
            which: 39,
            code: 'ArrowRight',
            location: 0,
            altKey: false,
            ctrlKey: false,
            metaKey: false,
            shiftKey: false,
            repeat: false,
          });

          document.dispatchEvent(simulateKey);
        } else {
          printCharacter('→');
        }
      }

      if (e.target.innerText === 'Up') {
        isArrowKeyPressed = true;
        if (!arrowsModeOn) {
          return;
        } printCharacter('↑');
      }
    }

    if (e.target.classList.contains('key')) {
      // Если была нажата буква или знак
      if (!singleKeys.includes(e.target.firstChild.innerText)) {
        printCharacter(e.target.firstChild.innerText);
      }
    } else if (
      e.target.classList.contains('key__big') // Елси мы нажали на вложенный элемент
        || e.target.classList.contains('key__small')
    ) {
      printCharacter(e.target.parentNode.firstChild.innerText);
    }

    if (document.activeElement === input) {
      // Сохранить фокус
      lastPosition = input.selectionStart;
    }
  });

  function runDelNTimes() {
    runDel = setInterval(DelIsPressed, 100);
  }

  function runBSNTimes() {
    runBS = setInterval(backSpaceIsPressed, 100);
  }

  document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('key')) {
      if (!singleKeys.includes(e.target.firstChild.innerText)) {
        styleToRemove = e.target;
        e.target.classList.add('changed__color');
      }
    } else if (
      e.target.classList.contains('key__big') // Если мы нажали на вложенный элемент
      || e.target.classList.contains('key__small')
    ) {
      e.target.parentNode.classList.add('changed__color');
      styleToRemove = e.target.parentNode;
    } else if (
      e.target.innerText === 'Tab'
        || e.target.innerText === 'BackSpace'
        || e.target.innerText === 'Del'
        || e.target.innerText === 'Enter'
        || e.target.innerText === 'Up'
        || e.target.innerText === 'Down'
        || e.target.innerText === 'Left'
        || e.target.innerText === 'Right'
        || e.target.innerText === 'Язык'
        || e.target.innerText === 'Lang'
        || e.target.innerText === 'Режим стрелок'
        || e.target.innerText === 'Arrows mode'
        || e.target.innerText === 'Space'
        || e.target.innerText === 'Пробел'
        || e.target.innerText === 'Ctrl'
        || e.target.innerText === 'Shift'
        || e.target.innerText === 'Win'
        || e.target.innerText === 'Alt'
    ) {
      e.target.parentNode.classList.add('changed__color');
      styleToRemove = e.target.parentNode;
    }
    if (
      e.target.innerText === 'CapsLock'
    ) {
      capsLockIsPressed();
    }

    if (e.target.innerText === 'Shift') {
      if (
        e.target.parentNode.classList.contains('key__ShiftLeft')
      ) {
        leftShiftPressed = true;
      }
      if (
        e.target.parentNode.classList.contains('key__ShiftRight')
      ) {
        rightShiftPressed = true;
      }
      returnFocus();
      shiftIsPressed();
    }
    if (e.target.classList.contains('key__text')) {
      if (e.target.innerText === 'BackSpace') {
        isBackSpaceClicked = true;
        runBSNTimes();
      }
      if (e.target.innerText === 'Del') {
        isDelClicked = true;
        runDelNTimes();
      }

      if (
        e.target.innerText === 'Left'
        || e.target.innerText === 'Right'
        || e.target.innerText === 'Down'
        || e.target.innerText === 'Up'
      ) {
        e.preventDefault();
      }
    }
  });

  document.addEventListener('mouseup', () => {
    rightShiftPressed = false;
    leftShiftPressed = false;
    const input = document.querySelector('.input__text-from-keyboard');
    if (typeof styleToRemove !== 'undefined') {
      if (styleToRemove !== false) {
        if (styleToRemove.firstChild.innerText === 'Shift') {
          shiftIsPressed();
          styleToRemove = false;
        } else {
          styleToRemove.classList.remove('changed__color');
        }
      }
    }

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
    rightShiftPressed = false;
    leftShiftPressed = false;

    if (document.activeElement === input) {
      selectedText = window.getSelection().toString();
      if (selectedText === '') {
        selectedText = false;
      }
    }
  });

  const input = document.querySelector('.input__text-from-keyboard');

  input.addEventListener('input', () => {
    // При вводе текста с клавиатуры обновляем значения
    lastPosition = input.selectionStart;
  });
});
