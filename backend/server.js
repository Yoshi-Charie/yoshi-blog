// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // .env ファイルを読み込む
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDBに接続
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// 日記スキーマ
const diarySchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

// 日記モデル
const Diary = mongoose.model('Diary', diarySchema);

// APIルート: 日記の投稿
app.post('/api/diaries', async (req, res) => {
  const { title, content } = req.body;
  const newDiary = new Diary({ title, content });
  
  try {
    const savedDiary = await newDiary.save();
    res.status(201).json(savedDiary);
  } catch (error) {
    res.status(400).json({ error: 'Error saving diary entry' });
  }
});

// APIルート: 日記の取得（指定した日）
app.get('/api/diaries/:date', async (req, res) => {
  const { date } = req.params;
  
  try {
    const diary = await Diary.findOne({ date: new Date(date) });
    if (!diary) {
      return res.status(404).json({ message: "Diary not found for this date" });
    }
    res.json(diary);
  } catch (error) {
    res.status(400).json({ error: 'Error retrieving diary entry' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
