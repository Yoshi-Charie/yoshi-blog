// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();  // .env ファイルを使って環境変数を設定
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());  // CORSを有効化
app.use(express.json());  // JSONのリクエストボディをパース

// APIのルートを作成
app.get('/api/hello', (req, res) => {
  res.send('Hello, from the backend!');
});

// 例: 日記記事を取得
app.get('/api/diary', (req, res) => {
  res.json({ message: 'Your diary entries will be here.' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
