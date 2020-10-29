# quizizz-translate
translates questions and answears on quizizz for more accessibility (works only in chrome)

### before use: 
  you will need:
  * [node.js](https://nodejs.org/en/download/)
  * [chromedriver](https://chromedriver.chromium.org/downloads)
### seting up: 
  1. download and unpack zip
  2. move chromedriver to quizizz-translate folder
  3. open cmd, go to location of unpacked files and type:
  ```bash
  $ npm install
  ```
  ##### runing:
  4. in same location type:
  ```bash
  $ node serverside.js
  ```
  5. last thing to do is open any quiz and in debug console (F12 / ctrl+shift+i) drop "generate translate button.js" file
