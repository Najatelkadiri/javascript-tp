import express from 'express'
import router from './Routes/BookRoutes.js';
import dotenv from 'dotenv';

dotenv.config;

const PORT = process.env.PORT || 5000;


const app =express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});


app.use('/api/books',router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});