const keys = [
    Backquote = {
      class: 'Backquote',
      dictionary: {
        EN: '`~',
        RU: 'ёЁ',
        }
      },
    Digit1 = {
      class: 'Digit1',
      dictionary: {
        EN: '1!',
        RU: '1!',
        }
      },
    Digit2 = {
      class: 'Digit2',
      dictionary: {
        EN: '2@',
        RU: '2"',
        }
      },
    Digit3 = {
      class: 'Digit3',
      dictionary: {
        EN: '3#',
        RU: '3№',
      }
    },
    Digit4 = {
      class: 'Digit4',
      dictionary: {
        EN: '4$',
        RU: '4;',
      }
    },
    Digit5 = {
      class: 'Digit5',
      dictionary: {
        EN: '5%',
        RU: '5%',
      }
    },
    Digit6 = {
      class: 'Digit6',
      dictionary: {
        EN: '6^',
        RU: '6:',
      }
    },
    Digit7 = {
      class: 'Digit7',
      dictionary: {
        EN: '7&',
        RU: '7?',
      }
    },
    Digit8 = {
      class: 'Digit8',
      dictionary: {
        EN: '8*',
        RU: '8*',
      }
    },
    Digit9 = {
      class: 'Digit9',
      dictionary: {
        EN: '9(',
        RU: '9(',
      }
    },
    Digit0 = {
      class: 'Digit0',
      dictionary: {
        EN: '0)',
        RU: '0)',
      }
    },
    Minus = {
      class: 'Minus',
      dictionary: {
        EN: '-_',
        RU: '-_',
      }
    },
    Equal = {
      class: 'Equal',
      dictionary: {
        EN: '=+',
        RU: '=+',
      }
    },
    Backspace = {
      class: 'Backspace',
      name: '←',
      functional: (text, position) => {return text.slice(0, position - 1) + text.slice(position)},
    },
    Tab = {
      class: 'Tab',
      name: 'Tab',
      functional: (text, position) => { return `${text.slice(0, position)}\t${text.slice(position)}`},
    },
    KeyQ = {
      class: 'KeyQ',
      dictionary: {
        EN: 'qQ',
        RU: 'йЙ',
      }
    },
    KeyW = {
      class: 'KeyW',
      dictionary: {
        EN: 'wW',
        RU: 'цЦ',
      }
    },
    KeyE = {
      class: 'KeyE',
      dictionary: {
        EN: 'eE',
        RU: 'уУ',
      }
    },
    KeyR = {
      class: 'KeyR',
      dictionary: {
        EN: 'rR',
        RU: 'кК',
        }
    },
    KeyT = {
      class: 'KeyT',
      dictionary: {
        EN: 'tT',
        RU: 'еЕ',
      }
    },
    KeyY = {
      class: 'KeyY',
      dictionary: {
        EN: 'yY',
        RU: 'нН',
      }
    },
    KeyU = {
      class: 'KeyU',
      dictionary: {
        EN: 'uU',
        RU: 'гГ',
      }
    },
    KeyI = {
      class: 'KeyI',
      dictionary: {
        EN: 'iI',
        RU: 'шШ',
      }
    },
    KeyO = {
      class: 'KeyO',
      dictionary: {
        EN: 'oO',
        RU: 'щЩ',
      }
    },
    KeyP = {
      class: 'KeyP',
      dictionary: {
        EN: 'pP',
        RU: 'зЗ',
      }
    },
    BracketLeft = {
      class: 'BracketLeft',
      dictionary: {
        EN: '[{',
        RU: 'хХ',
      }
    },
    BracketRight = {
      class: 'BracketRight',
      dictionary: {
        EN: ']}',
        RU: 'ъЪ',
      }
    },
    Backslash = {
      class: 'Backslash',
      dictionary: {
        EN: '\\|',
        RU: '\\|',
        }
    },
    Delete = {
      class: 'Delete',
      name: 'DEL',
      functional: (text, position) => (position ? text.slice(0, position) + text.slice(position + 1) : text),
    },
    CapsLock = {
      class: 'CapsLock',
      name: 'CapsLock',
    },
    KeyA = {
      class: 'KeyA',
      dictionary: {
        EN: 'aA',
        RU: 'фФ',
      }
    },
    KeyS = {
      class: 'KeyS',
      dictionary: {
        EN: 'sS',
        RU: 'ыЫ',
      }
    },
    KeyD = {
      class: 'KeyD',
      dictionary: {
        EN: 'dD',
        RU: 'вВ',
      }
    },
    KeyF = {
      class: 'KeyF',
      dictionary: {
        EN: 'fF',
        RU: 'аА',
      }
    },
    KeyG = {
      class: 'KeyG',
      dictionary: {
        EN: 'gG',
        RU: 'пП',
      }
    },
    KeyH = {
      class: 'KeyH',
      dictionary: {
        EN: 'hH',
        RU: 'рР',
      }
    },
    KeyJ = {
      class: 'KeyJ',
      dictionary: {
        EN: 'jJ',
        RU: 'оО',
      }
    },
    KeyK = {
      class: 'KeyK',
      dictionary: {
        EN: 'kK',
        RU: 'лЛ',
      }
    },
    KeyL = {
      class: 'KeyL',
      dictionary: {
        EN: 'lL',
        RU: 'дД',
      }
    },
    Semicolon = {
      class: 'Semicolon',
      dictionary: {
        EN: ';:',
        RU: 'жЖ',
      }
    },
    Quote = {
      class: 'Quote',
      dictionary: {
        EN: '\'"',
        RU: 'эЭ',
      }
    },
    Enter = {
      class: 'Enter',
      name: 'ENTER',
      functional: (text, position) => {return `${text.slice(0, position)}\r\n${text.slice(position + 1)}`},
    },
    ShiftLeft = {
      class: 'ShiftLeft',
      name: 'Shift',
      
    },
    IntlBackslash = {
        class: 'IntlBackslash',
        dictionary: {
          EN: '\\|',
          RU: '\\/',
          }
      },
    KeyZ = {
      class: 'KeyZ',
      dictionary: {
        EN: 'zZ',
        RU: 'яЯ',
      }
    },
    KeyX = {
      class: 'KeyX',
      dictionary: {
        EN: 'xX',
        RU: 'чЧ',
      }
    },
    KeyC = {
      class: 'KeyC',
      dictionary: {
        EN: 'cC',
        RU: 'сС',
      }
    },
    KeyV = {
      class: 'KeyV',
      dictionary: {
        EN: 'vV',
        RU: 'мМ',
      }
    },
    KeyB = {
      class: 'KeyB',
      dictionary: {
        EN: 'bB',
        RU: 'иИ',
      }
    },
    KeyN = {
      class: 'KeyN',
      dictionary: {
        EN: 'nN',
        RU: 'тТ',
      }
    },
    KeyM = {
      class: 'KeyM',
      dictionary: {
        EN: 'mM',
        RU: 'ьЬ',
      }
    },
    Comma = {
      class: 'Comma',
      dictionary: {
        EN: ',<',
        RU: 'бБ',
      }
    },
    Period = {
      class: 'Period',
      dictionary: {
        EN: '.>',
        RU: 'юЮ',
      }
    },
    Slash = {
      class: 'Slash',
      dictionary: {
        EN: '/?',
        RU: '.,',
      }
    },
    ArrowUp = {
      class: 'ArrowUp',
      dictionary: {
        EN: '▲▲',
        RU: '▲▲',
        }
    },
    ShiftRight = {
      class: 'ShiftRight',
      name: 'Shift',
      
    },
    ControlLeft = {
      class: 'ControlLeft',
      name: 'Ctrl',
      
    },
    MetaLeft = {
        class: 'MetaLeft',
        name: 'Win',
    },
    AltLeft = {
        class: 'AltLeft',
        name: 'Alt',
        
    },
    Space = {
      class: 'Space',
      name: 'Space',
      dictionary: {
        EN: '  ',
        RU: '  ',
      }
      //functional: (text, position) => `${text.slice(0, position)} ${text.slice(position + 1)}`,
    },
    AltRight = {
      class: 'AltRight',
      name: 'Alt',
      
    },
    ControlRight = {
      class: 'ControlRight',
      name: 'Ctrl',
      
    },
    ArrowLeft = {
      class: 'ArrowLeft',
      dictionary: {
        EN: '◄◄',
        RU: '◄◄'
      }
    },
    ArrowDown = {
        class: 'ArrowDown',
        dictionary: {
          EN: '▼▼',
          RU: '▼▼'
        }
      },
      ArrowRight = {
        class: 'ArrowRight',
        dictionary: {
          EN: '►►',
          RU: '►►'
        }
      },

];
class App {
    constructor() {
        this.language = 'EN';
        this.shiftPress = false;
        this.pressKeys = [];
        this.changeCombination = ['AltLeft', 'ControlLeft'].toString();
    }
    render() {
        let app = document.createElement('main');
        app.className = 'main';
        document.body.append(app);

        let textArea = document.createElement('textarea');
        textArea.className = 'text-area';
        app.append(textArea);

        let keyboard = document.createElement('div');
        keyboard.className = 'keyboard';
        app.append(keyboard);

        let keysAll = '';
        for (let i = 0; i < keys.length; i++) {
            let inner = '';
            if (i == 14 || i == 29 || i == 42 || i == 56) {
                keysAll += `<div class="clear-fix"></div>`;
            }
            if (keys[i].name) {
                inner = keys[i].name;
                keysAll += `
                <div class="key ${keys[i].class}" data-index="${i}">
                ${inner}
                </div>
                `;
            } else {
                inner = keys[i].dictionary[this.language][0];
                keysAll += `
                <div class="key ${keys[i].class}" data-index="${i}">
                  <span class="en">
                    <span class="lowerCase">${keys[i].dictionary.EN[0]}</span>
                    <span class="upperCase hidden">${keys[i].dictionary.EN[1]}</span>
                    <span class="capsOn hidden">${keys[i].dictionary.EN[1]}</span>
                    <span class="shiftCaps hidden">${keys[i].dictionary.EN[0]}</span>
                  </span>
                    <span class="ru hidden">
                    <span class="lowerCase">${keys[i].dictionary.RU[0]}</span>
                    <span class="upperCase hidden">${keys[i].dictionary.RU[1]}</span>
                    <span class="capsOn hidden">${keys[i].dictionary.RU[1]}</span>
                    <span class="shiftCaps hidden">${keys[i].dictionary.RU[0]}</span>
                  </span>
                </div>
                `;
            }

        }
        keyboard.innerHTML = keysAll;

      document.addEventListener('keydown', (key) => {
        key.preventDefault();
        if (this.pressKeys.indexOf(key.code) < 0) {
          this.pressKeys.push(key.code);
        }

        
        let currentKeyId =  document.querySelector(`.${key.code}`).dataset.index;

        document.querySelector(`.${key.code}`).classList.toggle('active-key');
 
        // смена языка
        if (this.pressKeys.sort().toString() == this.changeCombination) {

          document.querySelectorAll('.en').forEach((elem) => {
            elem.classList.toggle('hidden');
          });
          document.querySelectorAll('.ru').forEach((elem) => {
            elem.classList.toggle('hidden');
          });
          if (this.language == 'EN') {
            this.language = 'RU';
          } else {
            this.language = 'EN';
          }
        }
        //console.log(document.querySelector(`.${key.code}`).querySelectorAll(":not(.hidden)")[2].textContent);
        // Смена регистра
        if (key.code == 'ShiftLeft' || key.code == 'ShiftRight' || key.code == "CapsLock") {

          let lowerKeys = document.querySelectorAll('.lowerCase');
          lowerKeys.forEach((elem) => elem.classList.toggle('hidden'));
          let upperKeys = document.querySelectorAll('.upperCase');
          upperKeys.forEach((elem) => elem.classList.toggle('hidden'));
          if (key.code == "CapsLock" && this.shiftPress) {
            this.shiftPress = false;
          } else {
            this.shiftPress = true;
          }
        }
        
        if (keys[currentKeyId].functional) {
          let selector = textArea.selectionStart;
          textArea.value = keys[currentKeyId].functional(textArea.value, textArea.selectionStart);
          if (key.code == 'Tab' || key.code == 'Enter') {
            textArea.selectionStart = selector + 1;
            textArea.selectionEnd = selector + 1;
          }
          if (key.code == 'Backspace') {
            textArea.selectionStart = selector - 1;
            textArea.selectionEnd = selector - 1;
          }
          if (key.code == 'Delete') {
            textArea.selectionStart = selector;
            textArea.selectionEnd = selector;
          }
        }

        

        if (keys[currentKeyId].dictionary) {
          let register = key.shiftKey || this.shiftPress ? 1 : 0;
          let letter = keys[currentKeyId].dictionary[this.language][register];
          let text = textArea.value;
          let oldSelector = textArea.selectionEnd;
          textArea.value = text.slice(0, textArea.selectionStart) + letter + text.slice(textArea.selectionStart);
          textArea.selectionStart = oldSelector + 1;
          textArea.selectionEnd = oldSelector + 1;
        }
        
      });

      document.addEventListener('keyup', (key) => {
        this.pressKeys.pop(); 
        if (key.code !== "CapsLock") {
          document.querySelector(`.${key.code}`).classList.remove('active-key');
        }
        
        if (key.code == 'ShiftLeft' || key.code == 'ShiftRight') {

          let lowerKeys = document.querySelectorAll('.upperCase');
          lowerKeys.forEach((elem) => elem.classList.toggle('hidden'));
          
          let upperKeys = document.querySelectorAll('.lowerCase');
          upperKeys.forEach((elem) => elem.classList.toggle('hidden'));

          this.shiftPress = false;
        }
      });

      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('key')) {
          let currentKeyId = e.target.dataset.index;

          if (keys[currentKeyId].dictionary) {
            let register = this.shiftPress ? 1 : 0;
            let letter = keys[currentKeyId].dictionary[this.language][register];
            let text = textArea.value;
            let oldSelector = textArea.selectionEnd;
            textArea.value = text.slice(0, textArea.selectionStart) + letter + text.slice(textArea.selectionStart);
            textArea.selectionStart = oldSelector + 1;
            textArea.selectionEnd = oldSelector + 1;
          }

          if (keys[currentKeyId].functional) {
            let selector = textArea.selectionStart;
            textArea.value = keys[currentKeyId].functional(textArea.value, textArea.selectionStart);
            if (e.target.classList.contains('Tab') || e.target.classList.contains('Enter')) {
              textArea.selectionStart = selector + 1;
              textArea.selectionEnd = selector + 1;
            }
            if (e.target.classList.contains('Backspace')) {
              textArea.selectionStart = selector - 1;
              textArea.selectionEnd = selector - 1;
            }
            if (e.target.classList.contains('Delete')) {
              textArea.selectionStart = selector;
              textArea.selectionEnd = selector;
            }
          }
        }
      })
    }
}

let app = new App;
app.render()