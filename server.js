const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();  // Load .env file for environment variables

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use(express.json());

// Your routes will be here, for example:
const webtoonRoutes = require('./routes/webtoons');
app.use('/api/webtoons', webtoonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
