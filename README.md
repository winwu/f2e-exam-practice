# 金融市場常識與職業道德題庫練習網頁

<img src="../master/public/demo_localhost_3000_.png?raw=true" width="320">

<img src="../master/public/demo_localhost_3000_2.png?raw=true" width="320">

主要功能: 

* 練習所有題目
* 查看所有練習進度百分比
* 模擬試題
* 過去模擬成績歷程 (最近五筆)
* 瀏覽答錯過的題目
* 書籤功能及書籤列表

## 前置作業說明

因為尚未聯絡到 https://webline.sfi.org.tw/T/ethics/download.asp 該單位，不確定是否能公開題庫內容之重置為 JSON 格式後的內容及此練習網頁，因此如需使用此網頁須自行整理題庫之 PDF 等內容，不好意思...。

### 匯入題庫並編譯

1. 從 https://webline.sfi.org.tw/T/ethics/download.asp 下載兩份題庫後，分別將兩份題庫之 pdf 轉換為 csv 格式，可以使用 Adobe 的 pdf-to-excel 線上工具進行轉換

2. 轉換後需整理 excel 檔案之格式，並製作 json 檔案，格式參考 public/data/ethics_formated.example.json 及 market_formated.example.json，並將檔名改為 ethics_formated.json 及 market_formated.json。


## 開發環境

需要 Node.js 環境。

* 初始化專案使用 [Create React App](https://github.com/facebook/create-react-app)
* Bootstrap / TypeScript / sass / d3.js ... 


### 相關指令

首先先執行 `npm i` 以下載所需要之相關開發套件。

#### 1. 本地開發與編譯 

```
npm start
```

npm start 後將使用 [http://localhost:3000](http://localhost:3000)。


#### 2. 執行測試

```
npm test
```

或者

```
npm test:coverage
```


#### 3. 編譯 production 版本的 code

```
npm run build`
```


---


### Troubleshooting

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
