const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 靜態檔案路徑設定
app.use(express.static(path.join(__dirname, 'dist')));

// 所有路由都回傳編譯後的bundle.js檔案
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});