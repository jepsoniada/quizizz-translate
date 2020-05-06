# quizizz-translate
translates questions and answears on quizizz for more accessibility (works only in chrome)

before use: 
  you will need [node.js](https://nodejs.org/en/download/) and [chromedriver](https://chromedriver.chromium.org/downloads)
### seting up: 
  1: download and unpack zip
  2: move chromedriver to quizizz-translate folder
  3: open cmd, go to location of unpacked files and type:
  ```bash
  $ npm install
  ```
  ##### runing:
  4: in same location type:
  ```bash
  $ node serverside.js
  ```
  5: last thing to do is open any quiz and in debug console (F12 / ctrl+shift+i) drop "generate translate button.js" file
### problems with translation
This script uses google translate for transaltion so some of texts may seems weird; if you want to see original texts they will be shown by hover on any of tranaslated text
If your quiz isn't translated in few secouds after clicking translate button it can be caused by older quiz layout, that means texts will stay same as before translation and hover on them wont work; but any translated texts are logged in console so you can use thoes
