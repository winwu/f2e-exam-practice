# 金融市場常識與職業道德題庫練習網頁

此 repository 之題目內容皆取自 https://webline.sfi.org.tw/T/ethics/download.asp 金融市場常識與職業道德題庫專區，此 repository 所取得之題庫內容之最後更新日期為 2020/12/04，如答案判斷有疑惑或錯誤，請以 webline.sfi.org.tw/T/ethics/download.asp 網站所提供之內容為主。</small>


## 匯入題庫並編譯

1. 從 https://webline.sfi.org.tw/T/ethics/download.asp 下載題庫後，分別將兩份題庫之 pdf 轉換為 csv 格式，格式參考 src/datas/ethics_formated.example.json 及 market_formated.example.json，並將檔名改為 ethics_formated.json 及 market_formated.json。

2. 執行 npm i && npm start (將開啟 localhost:3000) 或 npm i && npm run build


---

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


Stacks:

- Bootstrap
- TypeScript
- Sass


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Troubleshooting

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