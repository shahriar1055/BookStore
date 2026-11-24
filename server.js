import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';


dotenv.config();


connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());          
app.use(express.json());  

// Route prefix: any URL starting with /api/books goes to bookRoutes.
app.use('/api/books', bookRoutes);

// Start accepting HTTP requests. Until this line runs, nothing is listening.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});