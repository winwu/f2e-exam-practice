# 題庫練習網頁

[![Build Status](https://travis-ci.com/winwu/sfi-exam-practice.svg?branch=master)](https://travis-ci.com/winwu/sfi-exam-practice)


## TL;DR

這個 Repo 主要是當初用來準備「金融市場常識與職業道德」考試而寫，其主要的功能包含: 

* 練習所有題目
* 查看所有練習進度百分比
* 模擬試題
* 過去模擬成績歷程 (最近五筆)
* 瀏覽答錯過的題目
* 書籤功能及書籤列表


<img src="../master/public/demo_localhost_3000_.png?raw=true" width="320">
<img src="../master/public/demo_localhost_3000_2.png?raw=true" width="320">

(如下載最新的 code 並起始專案後並不會與此圖相同，因為真正的題庫須自行建置，此圖僅表示作者在 local 端開發時自行爬取 sfi 的題庫內容)


## 前置作業說明

題庫可改成自己所需要的內容。須將相對應的 public/data/ethics_formated.example.json 以及 market_formated.example.json 替換檔名及內容等等。


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
