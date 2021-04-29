# 題庫練習網頁

[![Build Status](https://travis-ci.com/winwu/f2e-exam-practice.svg?branch=master)](https://travis-ci.com/winwu/f2e-exam-practice) [![Maintainability](https://api.codeclimate.com/v1/badges/757a101d05abd8537431/maintainability)](https://codeclimate.com/github/winwu/f2e-exam-practice/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/757a101d05abd8537431/test_coverage)](https://codeclimate.com/github/winwu/f2e-exam-practice/test_coverage)

## 功能

* 練習所有題目
* 查看所有練習進度百分比
* 模擬試題
* 過去模擬成績歷程 (最近五筆)
* 瀏覽答錯過的題目
* 書籤功能及書籤列表

題庫可改成自己所需要的內容。須將相對應的 public/data/html_css.json 以及 javascript.json 替換檔名及內容等等。

<img src="../master/public/demo_localhost_3000_.png?raw=true" width="320">


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
