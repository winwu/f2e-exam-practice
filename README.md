# 金融市場常識與職業道德題庫練習網頁

此 repository 之題目內容皆取自 https://webline.sfi.org.tw/T/ethics/download.asp 金融市場常識與職業道德題庫專區，此 repository 所取得之題庫內容之最後更新日期為 2020/12/04，如答案判斷有疑惑或錯誤，請以 webline.sfi.org.tw/T/ethics/download.asp 網站所提供之內容為主。</small>

<img src="../master/public/demo_localhost_3000_.png?raw=true" width="320">

## 匯入題庫並編譯

1. 從 https://webline.sfi.org.tw/T/ethics/download.asp 下載題庫後，分別將兩份題庫之 pdf 轉換為 csv 格式，格式參考 src/datas/ethics_formated.example.json 及 market_formated.example.json，並將檔名改為 ethics_formated.json 及 market_formated.json。

2. 執行 npm i && npm start (將開啟 localhost:3000) 或 npm i && npm run build


## 開發環境

* 初始化專案使用 [Create React App](https://github.com/facebook/create-react-app)
* Bootstrap / TypeScript / Sass / d3.js


## 相關指令

### `npm start`

開發模式，會使用 [http://localhost:3000](http://localhost:3000


### `npm test`

執行測試

### `npm run build`

編譯 production 版本的 code


## Troubleshooting

一些編輯器或是開發過程可能遇到的問題:

1. show error: Error: Node Sass version 5.0.0 is incompatible with ^4.0.0.

```
npm uninstall node-sass
npm install node-sass@4.14.1
```
 
2. install TypeScript

To solve this editor error: 
Specify JSX code generation: 'preserve', 'react', 'react-jsx', 'react-jsxdev' or'react-native'. Requires TypeScript version 2.2 or late

npm install -g typescript

3. vscode 右下角選擇 typescrip -> 使用工作區的版本