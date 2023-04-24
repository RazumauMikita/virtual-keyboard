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
      functional: function(){},
    },
    Tab = {
      class: 'Tab',
      name: 'Tab',
      functional: function(){},
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
        EN: '1!',
        RU: '1!',
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
      functional: function(){},
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
      functional: function(){},
    },
    ShiftLeft = {
      class: 'ShiftLeft',
      name: 'Shift',
      functional: function(){},
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
      functional: function(){},
    },
    ControlLeft = {
      class: 'ControlLeft',
      name: 'Ctrl',
      functional: function(){},
    },
    MetaLeft = {
        class: 'MetaLeft',
        name: 'Win',
    },
    AltLeft = {
        class: 'AltLeft',
        name: 'Alt',
        functional: function(){},
    },
    Space = {
      class: 'Space',
      name: 'Space',
      functional: function(){},
    },
    AltRight = {
      class: 'AltRight',
      name: 'Alt',
      functional: function(){},
    },
    ControlRight = {
      class: 'ControlRight',
      name: 'Ctrl',
      functional: function(){},
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
       
        let currentKeyId =  document.querySelector(`.${key.code}`).dataset.index;
        
        document.querySelector(`.${key.code}`).classList.toggle('active-key');
      //  console.log(document.querySelector(`.${key.code}`).querySelectorAll(":not(.hidden)")[1].textContent);
        if (key.code == 'ShiftLeft' ||key.code == 'ShiftRight') {
          let step1 = document.querySelectorAll('.lowerCase');
          step1.forEach((elem) => elem.classList.toggle('hidden'))
          
          let step2 = document.querySelectorAll('.upperCase');
          step2.forEach((elem) => elem.classList.toggle('hidden'))
        }
        if (keys[currentKeyId].dictionary) {
          let register = key.shiftKey ? 1 : 0;
          textArea.value += keys[currentKeyId].dictionary[this.language][register];
        }
        
      });

      document.addEventListener('keyup', (key) => {
        document.querySelector(`.${key.code}`).classList.remove('active-key');
      });

      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('key')) {
          let currentKeyId = e.target.dataset.index;

          if (keys[currentKeyId].dictionary) {
            let register = this.shiftPress ? 1 : 0;
            textArea.value += keys[currentKeyId].dictionary[this.language][register];
          }
        }


      })
    }
}

let app = new App;
app.render()