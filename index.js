const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./Routes/userRoutes'); // Ensure this line is uncommented and correct

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/worko/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
