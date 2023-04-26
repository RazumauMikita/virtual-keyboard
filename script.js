const keys = [
  {
    class: 'Backquote',
    dictionary: {
      EN: '`~',
      RU: 'ёЁ',
    },
  },
  {
    class: 'Digit1',
    dictionary: {
      EN: '1!',
      RU: '1!',
    },
  },
  {
    class: 'Digit2',
    dictionary: {
      EN: '2@',
      RU: '2"',
    },
  },
  {
    class: 'Digit3',
    dictionary: {
      EN: '3#',
      RU: '3№',
    },
  },
  {
    class: 'Digit4',
    dictionary: {
      EN: '4$',
      RU: '4;',
    },
  },
  {
    class: 'Digit5',
    dictionary: {
      EN: '5%',
      RU: '5%',
    },
  },
  {
    class: 'Digit6',
    dictionary: {
      EN: '6^',
      RU: '6:',
    },
  },
  {
    class: 'Digit7',
    dictionary: {
      EN: '7&',
      RU: '7?',
    },
  },
  {
    class: 'Digit8',
    dictionary: {
      EN: '8*',
      RU: '8*',
    },
  },
  {
    class: 'Digit9',
    dictionary: {
      EN: '9(',
      RU: '9(',
    },
  },
  {
    class: 'Digit0',
    dictionary: {
      EN: '0)',
      RU: '0)',
    },
  },
  {
    class: 'Minus',
    dictionary: {
      EN: '-_',
      RU: '-_',
    },
  },
  {
    class: 'Equal',
    dictionary: {
      EN: '=+',
      RU: '=+',
    },
  },
  {
    class: 'Backspace',
    name: 'Backspace',
    functional: (text, position) => text.slice(0, position - 1) + text.slice(position),
  },
  {
    class: 'Tab',
    name: 'Tab',
    functional: (text, position) => `${text.slice(0, position)}\t${text.slice(position)}`,
  },
  {
    class: 'KeyQ',
    dictionary: {
      EN: 'qQ',
      RU: 'йЙ',
    },
  },
  {
    class: 'KeyW',
    dictionary: {
      EN: 'wW',
      RU: 'цЦ',
    },
  },
  {
    class: 'KeyE',
    dictionary: {
      EN: 'eE',
      RU: 'уУ',
    },
  },
  {
    class: 'KeyR',
    dictionary: {
      EN: 'rR',
      RU: 'кК',
    },
  },
  {
    class: 'KeyT',
    dictionary: {
      EN: 'tT',
      RU: 'еЕ',
    },
  },
  {
    class: 'KeyY',
    dictionary: {
      EN: 'yY',
      RU: 'нН',
    },
  },
  {
    class: 'KeyU',
    dictionary: {
      EN: 'uU',
      RU: 'гГ',
    },
  },
  {
    class: 'KeyI',
    dictionary: {
      EN: 'iI',
      RU: 'шШ',
    },
  },
  {
    class: 'KeyO',
    dictionary: {
      EN: 'oO',
      RU: 'щЩ',
    },
  },
  {
    class: 'KeyP',
    dictionary: {
      EN: 'pP',
      RU: 'зЗ',
    },
  },
  {
    class: 'BracketLeft',
    dictionary: {
      EN: '[{',
      RU: 'хХ',
    },
  },
  {
    class: 'BracketRight',
    dictionary: {
      EN: ']}',
      RU: 'ъЪ',
    },
  },
  {
    class: 'Backslash',
    dictionary: {
      EN: '\\|',
      RU: '\\|',
    },
  },
  {
    class: 'Delete',
    name: 'Del',
    functional: (text, pos) => (pos ? text.slice(0, pos) + text.slice(pos + 1) : text),
  },
  {
    class: 'CapsLock',
    name: 'CapsLock',
  },
  {
    class: 'KeyA',
    dictionary: {
      EN: 'aA',
      RU: 'фФ',
    },
  },
  {
    class: 'KeyS',
    dictionary: {
      EN: 'sS',
      RU: 'ыЫ',
    },
  },
  {
    class: 'KeyD',
    dictionary: {
      EN: 'dD',
      RU: 'вВ',
    },
  },
  {
    class: 'KeyF',
    dictionary: {
      EN: 'fF',
      RU: 'аА',
    },
  },
  {
    class: 'KeyG',
    dictionary: {
      EN: 'gG',
      RU: 'пП',
    },
  },
  {
    class: 'KeyH',
    dictionary: {
      EN: 'hH',
      RU: 'рР',
    },
  },
  {
    class: 'KeyJ',
    dictionary: {
      EN: 'jJ',
      RU: 'оО',
    },
  },
  {
    class: 'KeyK',
    dictionary: {
      EN: 'kK',
      RU: 'лЛ',
    },
  },
  {
    class: 'KeyL',
    dictionary: {
      EN: 'lL',
      RU: 'дД',
    },
  },
  {
    class: 'Semicolon',
    dictionary: {
      EN: ';:',
      RU: 'жЖ',
    },
  },
  {
    class: 'Quote',
    dictionary: {
      EN: '\'"',
      RU: 'эЭ',
    },
  },
  {
    class: 'Enter',
    name: 'Enter',
    functional: (text, position) => `${text.slice(0, position)}\r\n${text.slice(position)}`,
  },
  {
    class: 'ShiftLeft',
    name: 'Shift',

  },
  {
    class: 'IntlBackslash',
    dictionary: {
      EN: '\\|',
      RU: '\\/',
    },
  },
  {
    class: 'KeyZ',
    dictionary: {
      EN: 'zZ',
      RU: 'яЯ',
    },
  },
  {
    class: 'KeyX',
    dictionary: {
      EN: 'xX',
      RU: 'чЧ',
    },
  },
  {
    class: 'KeyC',
    dictionary: {
      EN: 'cC',
      RU: 'сС',
    },
  },
  {
    class: 'KeyV',
    dictionary: {
      EN: 'vV',
      RU: 'мМ',
    },
  },
  {
    class: 'KeyB',
    dictionary: {
      EN: 'bB',
      RU: 'иИ',
    },
  },
  {
    class: 'KeyN',
    dictionary: {
      EN: 'nN',
      RU: 'тТ',
    },
  },
  {
    class: 'KeyM',
    dictionary: {
      EN: 'mM',
      RU: 'ьЬ',
    },
  },
  {
    class: 'Comma',
    dictionary: {
      EN: ',<',
      RU: 'бБ',
    },
  },
  {
    class: 'Period',
    dictionary: {
      EN: '.>',
      RU: 'юЮ',
    },
  },
  {
    class: 'Slash',
    dictionary: {
      EN: '/?',
      RU: '.,',
    },
  },
  {
    class: 'ArrowUp',
    dictionary: {
      EN: '▲▲',
      RU: '▲▲',
    },
  },
  {
    class: 'ShiftRight',
    name: 'Shift',

  },
  {
    class: 'ControlLeft',
    name: 'Ctrl',

  },
  {
    class: 'MetaLeft',
    name: 'Win',
  },
  {
    class: 'AltLeft',
    name: 'Alt',

  },
  {
    class: 'Space',
    name: 'Space',
    dictionary: {
      EN: '  ',
      RU: '  ',
    },

  },
  {
    class: 'AltRight',
    name: 'Alt',

  },
  {
    class: 'ControlRight',
    name: 'Ctrl',

  },
  {
    class: 'ArrowLeft',
    dictionary: {
      EN: '◄◄',
      RU: '◄◄',
    },
  },
  {
    class: 'ArrowDown',
    dictionary: {
      EN: '▼▼',
      RU: '▼▼',
    },
  },
  {
    class: 'ArrowRight',
    dictionary: {
      EN: '►►',
      RU: '►►',
    },
  },

];
const check = [];
class App {
  constructor() {
    this.language = 'EN';
    this.shiftPress = false;
    this.pressKeys = [];
    this.changeCombination = ['AltLeft', 'ControlLeft'].toString();
  }

  render() {
    const app = document.createElement('main');
    app.className = 'main';
    document.body.append(app);

    const textArea = document.createElement('textarea');
    textArea.className = 'text-area';
    app.append(textArea);

    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    app.append(keyboard);

    const whatOS = document.createElement('p');
    whatOS.className = 'whatOS';
    whatOS.textContent = 'Клавиатура создана в операционной системе Windows';
    app.append(whatOS);

    const howChangeLang = document.createElement('p');
    howChangeLang.className = 'howChangeLang';
    howChangeLang.textContent = 'Для переключения языка комбинация: левые ctrl + alt';
    app.append(howChangeLang);

    let keysAll = '';
    for (let i = 0; i < keys.length; i += 1) {
      let inner = '';
      check.push(keys[i].class);
      if (i === 14 || i === 29 || i === 42 || i === 56) {
        keysAll += '<div class="clear-fix"></div>';
      }
      if (keys[i].name) {
        inner = keys[i].name;
        keysAll += `
                <div class="key ${keys[i].class}" data-index="${i}">
                ${inner}
                </div>
                `;
      } else {
        // inner = keys[i].dictionary[this.language][0];
        keysAll += `
                <div class="key ${keys[i].class}" data-index="${i}">
                  <span class="en">
                    <span class="lowerCase">${keys[i].dictionary.EN[0]}</span>
                    <span class="upperCase hidden">${keys[i].dictionary.EN[1]}</span>

                    
                  </span>
                    <span class="ru hidden">
                    <span class="lowerCase">${keys[i].dictionary.RU[0]}</span>
                    <span class="upperCase hidden">${keys[i].dictionary.RU[1]}</span>

                    
                  </span>
                </div>
                `;
      }
    }
    keyboard.innerHTML = keysAll;
    // НАЖАТИЕ КЛАВИШИ
    document.addEventListener('keydown', (key) => {
      key.preventDefault();

      if (check.indexOf(key.code) < 0) {
        return;
      }
      if (this.pressKeys.indexOf(key.code) < 0) {
        this.pressKeys.push(key.code);
      }
      const currentKeyId = document.querySelector(`.${key.code}`).dataset.index;

      if (key.code !== 'CapsLock') {
        document.querySelector(`.${key.code}`).classList.add('active-key');
      } else {
        document.querySelector(`.${key.code}`).classList.toggle('active-key');
      }

      // смена языка
      if (this.pressKeys.sort().toString() === this.changeCombination) {
        document.querySelectorAll('.en').forEach((elem) => {
          elem.classList.toggle('hidden');
        });
        document.querySelectorAll('.ru').forEach((elem) => {
          elem.classList.toggle('hidden');
        });
        if (this.language === 'EN') {
          this.language = 'RU';
        } else {
          this.language = 'EN';
        }
      }
      // Смена регистра
      if (key.code === 'ShiftLeft' || key.code === 'ShiftRight' || key.code === 'CapsLock') {
        const upperKeys = document.querySelectorAll('.upperCase');
        const lowerKeys = document.querySelectorAll('.lowerCase');

        lowerKeys.forEach((elem) => elem.classList.add('hidden'));
        upperKeys.forEach((elem) => elem.classList.remove('hidden'));

        if (key.code === 'CapsLock' && this.shiftPress) {
          lowerKeys.forEach((elem) => elem.classList.remove('hidden'));
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          this.shiftPress = false;
        } else {
          this.shiftPress = true;
        }
      }

      if (keys[currentKeyId].functional) {
        const selector = textArea.selectionStart;
        textArea.value = keys[currentKeyId].functional(textArea.value, textArea.selectionStart);
        if (key.code === 'Tab' || key.code === 'Enter') {
          textArea.selectionStart = selector + 1;
          textArea.selectionEnd = selector + 1;
        }
        if (key.code === 'Backspace') {
          textArea.selectionStart = selector - 1;
          textArea.selectionEnd = selector - 1;
        }
        if (key.code === 'Delete') {
          textArea.selectionStart = selector;
          textArea.selectionEnd = selector;
        }
      }
      if (keys[currentKeyId].dictionary) {
        const register = key.shiftKey || this.shiftPress ? 1 : 0;
        const letter = keys[currentKeyId].dictionary[this.language][register];
        const text = textArea.value;
        const oldSelector = textArea.selectionEnd;
        const oldSelectorStart = textArea.selectionStart;
        textArea.value = text.slice(0, oldSelectorStart) + letter + text.slice(oldSelectorStart);
        textArea.selectionStart = oldSelector + 1;
        textArea.selectionEnd = oldSelector + 1;
      }
    });
    // ОТЖАТИЕ КЛАВИШИ
    document.addEventListener('keyup', (key) => {
      if (check.indexOf(key.code) < 0) {
        return;
      }
      this.pressKeys.pop();
      if (key.code !== 'CapsLock') {
        document.querySelector(`.${key.code}`).classList.remove('active-key');
      }

      if (key.code === 'ShiftLeft' || key.code === 'ShiftRight') {
        const upperKeys = document.querySelectorAll('.upperCase');
        upperKeys.forEach((elem) => elem.classList.add('hidden'));

        const lowerKeys = document.querySelectorAll('.lowerCase');
        lowerKeys.forEach((elem) => elem.classList.remove('hidden'));

        this.shiftPress = false;
      }
    });

    // НАЖАТИЕ МЫШИ
    document.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) {
        const lowerKeys = document.querySelectorAll('.lowerCase');
        lowerKeys.forEach((elem) => elem.classList.toggle('hidden'));
        const upperKeys = document.querySelectorAll('.upperCase');
        upperKeys.forEach((elem) => elem.classList.toggle('hidden'));
        this.shiftPress = true;
      }
    });
    // ОТЖАТИЕ МЫШИ
    document.addEventListener('mouseup', (e) => {
      if (e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) {
        const lowerKeys = document.querySelectorAll('.lowerCase');
        lowerKeys.forEach((elem) => elem.classList.toggle('hidden'));
        const upperKeys = document.querySelectorAll('.upperCase');
        upperKeys.forEach((elem) => elem.classList.toggle('hidden'));
        this.shiftPress = false;
      }
    });
    // КЛИК МЫШИ
    document.addEventListener('click', (e) => {
      if (e.target.closest('.key')) {
        const targetKey = e.target.closest('.key');

        const currentKeyId = targetKey.dataset.index;

        if (keys[currentKeyId].dictionary) {
          const register = this.shiftPress ? 1 : 0;
          const letter = keys[currentKeyId].dictionary[this.language][register];
          const text = textArea.value;
          const oldSelector = textArea.selectionEnd;
          const oldSelectorStart = textArea.selectionStart;
          textArea.value = text.slice(0, oldSelectorStart) + letter + text.slice(oldSelectorStart);
          textArea.selectionStart = oldSelector + 1;
          textArea.selectionEnd = oldSelector + 1;
        }

        if (keys[currentKeyId].functional) {
          const selector = textArea.selectionStart;
          textArea.value = keys[currentKeyId].functional(textArea.value, textArea.selectionStart);
          if (targetKey.classList.contains('Tab') || targetKey.classList.contains('Enter')) {
            textArea.selectionStart = selector;
            textArea.selectionEnd = selector;
          }
          if (targetKey.classList.contains('Backspace')) {
            textArea.selectionStart = selector - 1;
            textArea.selectionEnd = selector - 1;
          }
          if (targetKey.classList.contains('Delete')) {
            textArea.selectionStart = selector;
            textArea.selectionEnd = selector;
          }
        }

        if (targetKey.classList.contains('CapsLock')) {
          targetKey.classList.toggle('active-key');
          const lowerKeys = document.querySelectorAll('.lowerCase');
          lowerKeys.forEach((elem) => elem.classList.toggle('hidden'));
          const upperKeys = document.querySelectorAll('.upperCase');
          upperKeys.forEach((elem) => elem.classList.toggle('hidden'));

          if (targetKey.classList.contains('CapsLock') && this.shiftPress) {
            this.shiftPress = false;
          } else {
            this.shiftPress = true;
          }
        }
      }
    });
  }
}

const app = new App();
app.render();
