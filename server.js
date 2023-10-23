import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const app = express();


//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  