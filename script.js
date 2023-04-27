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
    functional: function func(text, posSt, posEnd) {
      if (posSt === posEnd) {
        return (posSt ? text.slice(0, posSt - 1) + text.slice(posSt) : text);
      }
      return text.slice(0, posSt) + text.slice(posEnd);
    },
  },
  //  abcd
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
    functional: function func(text, posSt, posEnd) {
      if (posSt === posEnd) {
        return (posSt + 1 ? text.slice(0, posSt) + text.slice(posSt + 1) : text);
      }
      return text.slice(0, posSt) + text.slice(posEnd);
    },
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
    functional: (text, posSt, posEnd) => `${text.slice(0, posSt)}\r\n${text.slice(posSt)}`,
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
  constructor(lang = 'RU') {
    this.language = lang;
    this.shiftPress = false;
    this.pressKeys = [];
    this.capsON = false;
    this.changeCombination = ['AltLeft', 'ControlLeft'].toString();
  }

  render() {
    window.addEventListener('load', () => {
      this.language = localStorage.getItem('lang') || 'EN';
    });
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
        keysAll += `
                <div class="key ${keys[i].class}" data-index="${i}">
                  <span class="en">
                    <span class="lowerCase">${keys[i].dictionary.EN[0]}</span>
                    <span class="upperCase hidden">${keys[i].dictionary.EN[1]}</span>
                    <span class="capsCase hidden">${keys[i].dictionary.EN[0].toUpperCase()}</span>
                    <span class="shiftCapsCase hidden">${keys[i].dictionary.EN[1].toLowerCase()}</span>
                  </span>
                    <span class="ru hidden">
                    <span class="lowerCase">${keys[i].dictionary.RU[0]}</span>
                    <span class="upperCase hidden">${keys[i].dictionary.RU[1]}</span>
                    <span class="capsCase hidden">${keys[i].dictionary.RU[0].toUpperCase()}</span>
                    <span class="shiftCapsCase hidden">${keys[i].dictionary.RU[1].toLowerCase()}</span>
                  </span>
                </div>
                `;
      }
    }

    keyboard.innerHTML = keysAll;
    // ОПРЕДЕЛЕНІЕ ЯЗЫКА
    if (this.language === 'RU') {
      document.querySelectorAll('.en').forEach((elem) => {
        elem.classList.toggle('hidden');
      });
      document.querySelectorAll('.ru').forEach((elem) => {
        elem.classList.toggle('hidden');
      });
    }
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
        const storage = window.localStorage;
        storage.setItem('lang', this.language);
      }
      // СМЕНА РЕГИСТРА
      if (key.code === 'ShiftLeft' || key.code === 'ShiftRight' || key.code === 'CapsLock') {
        const upperKeys = document.querySelectorAll('.upperCase');
        const lowerKeys = document.querySelectorAll('.lowerCase');
        const capsCase = document.querySelectorAll('.capsCase');
        const shiftCapsCase = document.querySelectorAll('.shiftCapsCase');

        if ((key.code === 'ShiftLeft' || key.code === 'ShiftRight') && !this.capsON) {
          upperKeys.forEach((elem) => elem.classList.remove('hidden'));
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
          this.shiftPress = true;
        } else if ((key.code === 'ShiftLeft' || key.code === 'ShiftRight') && this.capsON) {
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.remove('hidden'));
          this.shiftPress = true;
        }

        if (key.code === 'CapsLock' && !this.capsON && !this.shiftPress) {
          capsCase.forEach((elem) => elem.classList.remove('hidden'));
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
          this.capsON = true;
        } else if (key.code === 'CapsLock' && this.capsON && !this.shiftPress) {
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          lowerKeys.forEach((elem) => elem.classList.remove('hidden'));
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
          this.capsON = false;
        } else if (key.code === 'CapsLock' && !this.capsON && this.shiftPress) {
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.remove('hidden'));
          this.capsON = true;
        } else if ((key.code === 'CapsLock' && this.capsON && this.shiftPress)) {
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          upperKeys.forEach((elem) => elem.classList.remove('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
          this.capsON = false;
        }
      }

      if (keys[currentKeyId].functional) {
        const selector = textArea.selectionStart;
        const selectorEnd = textArea.selectionEnd;
        textArea.value = keys[currentKeyId].functional(textArea.value, selector, selectorEnd);
        if (key.code === 'Tab' || key.code === 'Enter') {
          textArea.selectionStart = selector + 1;
          textArea.selectionEnd = selector + 1;
        }

        if (key.code === 'Backspace') {
          if ((selector === selectorEnd) && selector !== 0) {
            textArea.selectionStart = selector - 1;
            textArea.selectionEnd = selector - 1;
          } else if (selector !== selectorEnd) {
            textArea.selectionStart = selector;
            textArea.selectionEnd = selector;
          } else if (selectorEnd === 0 && selector === 0) {
            textArea.selectionStart = 0;
            textArea.selectionEnd = 0;
          }
        }

        if (key.code === 'Delete') {
          textArea.selectionStart = selector;
          textArea.selectionEnd = selector;
        }
      }
      let letter = '';
      if (keys[currentKeyId].dictionary) {
        const register = key.shiftKey || this.shiftPress ? 1 : 0;

        if (this.capsON && this.shiftPress) {
          letter = keys[currentKeyId].dictionary[this.language][register].toLowerCase();
        } else if (this.capsON && !this.shiftPress) {
          letter = keys[currentKeyId].dictionary[this.language][register].toUpperCase();
        } else {
          letter = keys[currentKeyId].dictionary[this.language][register];
        }

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

      const upperKeys = document.querySelectorAll('.upperCase');
      const lowerKeys = document.querySelectorAll('.lowerCase');
      const capsCase = document.querySelectorAll('.capsCase');
      const shiftCapsCase = document.querySelectorAll('.shiftCapsCase');

      if ((key.code === 'ShiftLeft' || key.code === 'ShiftRight') && !this.capsON) {
        upperKeys.forEach((elem) => elem.classList.add('hidden'));
        lowerKeys.forEach((elem) => elem.classList.remove('hidden'));
        capsCase.forEach((elem) => elem.classList.add('hidden'));
        shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));

        this.shiftPress = false;
      } else if ((key.code === 'ShiftLeft' || key.code === 'ShiftRight') && this.capsON) {
        upperKeys.forEach((elem) => elem.classList.add('hidden'));
        lowerKeys.forEach((elem) => elem.classList.add('hidden'));
        capsCase.forEach((elem) => elem.classList.remove('hidden'));
        shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
        this.shiftPress = false;
      }
    });

    // НАЖАТИЕ МЫШИ
    document.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) {
        const lowerKeys = document.querySelectorAll('.lowerCase');
        const upperKeys = document.querySelectorAll('.upperCase');
        const capsCase = document.querySelectorAll('.capsCase');
        const shiftCapsCase = document.querySelectorAll('.shiftCapsCase');

        if (this.capsON) {
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.remove('hidden'));
          this.shiftPress = true;
        } else {
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          upperKeys.forEach((elem) => elem.classList.remove('hidden'));
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
          this.shiftPress = true;
        }
      }
    });
    // ОТЖАТИЕ МЫШИ
    document.addEventListener('mouseup', (e) => {
      if (e.target.classList.contains('ShiftLeft') || e.target.classList.contains('ShiftRight')) {
        const lowerKeys = document.querySelectorAll('.lowerCase');
        const upperKeys = document.querySelectorAll('.upperCase');
        const capsCase = document.querySelectorAll('.capsCase');
        const shiftCapsCase = document.querySelectorAll('.shiftCapsCase');

        if (this.capsON) {
          lowerKeys.forEach((elem) => elem.classList.add('hidden'));
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          capsCase.forEach((elem) => elem.classList.remove('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
          this.shiftPress = false;
        } else {
          lowerKeys.forEach((elem) => elem.classList.remove('hidden'));
          upperKeys.forEach((elem) => elem.classList.add('hidden'));
          capsCase.forEach((elem) => elem.classList.add('hidden'));
          shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
          this.shiftPress = false;
        }
      }
    });
    // КЛИК МЫШИ
    document.addEventListener('click', (e) => {
      if (e.target.closest('.key')) {
        const targetKey = e.target.closest('.key');

        const currentKeyId = targetKey.dataset.index;

        if (keys[currentKeyId].dictionary) {
          let letter = '';
          const register = this.shiftPress ? 1 : 0;

          if (this.capsON && this.shiftPress) {
            letter = keys[currentKeyId].dictionary[this.language][register].toLowerCase();
          } else if (this.capsON && !this.shiftPress) {
            letter = keys[currentKeyId].dictionary[this.language][register].toUpperCase();
          } else {
            letter = keys[currentKeyId].dictionary[this.language][register];
          }

          const text = textArea.value;
          const oldSelector = textArea.selectionEnd;
          const oldSelectorStart = textArea.selectionStart;
          textArea.value = text.slice(0, oldSelectorStart) + letter + text.slice(oldSelectorStart);
          textArea.selectionStart = oldSelector + 1;
          textArea.selectionEnd = oldSelector + 1;
        }

        if (keys[currentKeyId].functional) {
          const selector = textArea.selectionStart;
          const selectionEnd = textArea.selectionEnd;

          textArea.value = keys[currentKeyId].functional(textArea.value, selector, selectionEnd);

          if (targetKey.classList.contains('Tab') || targetKey.classList.contains('Enter')) {
            textArea.selectionStart = selector + 1;
            textArea.selectionEnd = selector + 1;
          }
          if (targetKey.classList.contains('Backspace')) {
            if ((selector === selectionEnd) && selector !== 0) {
              textArea.selectionStart = selector - 1;
              textArea.selectionEnd = selector - 1;
              console.log('1')
            } else if (selector !== selectionEnd) {
              textArea.selectionStart = selector;
              textArea.selectionEnd = selector;
              console.log('2')
            } else if (selectionEnd === 0 && selector === 0) {
              textArea.selectionStart = 0;
              textArea.selectionEnd = 0;
              console.log('3')
            }
          }
          if (targetKey.classList.contains('Delete')) {
            textArea.selectionStart = selector;
            textArea.selectionEnd = selector;
          }
        }
        const upperKeys = document.querySelectorAll('.upperCase');
        const lowerKeys = document.querySelectorAll('.lowerCase');
        const capsCase = document.querySelectorAll('.capsCase');
        const shiftCapsCase = document.querySelectorAll('.shiftCapsCase');

        if (targetKey.classList.contains('CapsLock') && !this.capsON) {
          targetKey.classList.add('active-key');
          if (this.shiftPress) {
            lowerKeys.forEach((elem) => elem.classList.add('hidden'));
            upperKeys.forEach((elem) => elem.classList.add('hidden'));
            capsCase.forEach((elem) => elem.classList.add('hidden'));
            shiftCapsCase.forEach((elem) => elem.classList.remove('hidden'));
            this.capsON = true;
          } else if (!this.shiftPress) {
            lowerKeys.forEach((elem) => elem.classList.add('hidden'));
            upperKeys.forEach((elem) => elem.classList.add('hidden'));
            capsCase.forEach((elem) => elem.classList.remove('hidden'));
            shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
            this.capsON = true;
          }
        } else if (targetKey.classList.contains('CapsLock') && this.capsON) {
          targetKey.classList.remove('active-key');
          if (this.shiftPress) {
            lowerKeys.forEach((elem) => elem.classList.add('hidden'));
            upperKeys.forEach((elem) => elem.classList.remove('hidden'));
            capsCase.forEach((elem) => elem.classList.add('hidden'));
            shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
            this.capsON = false;
          } else if (!this.shiftPress) {
            lowerKeys.forEach((elem) => elem.classList.remove('hidden'));
            upperKeys.forEach((elem) => elem.classList.add('hidden'));
            capsCase.forEach((elem) => elem.classList.add('hidden'));
            shiftCapsCase.forEach((elem) => elem.classList.add('hidden'));
            this.capsON = false;
          }
        }
      }
    });
  }
}

const language = window.localStorage.getItem('lang');
const app = new App(language);

window.onload = () => {
  app.render();
};
