const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const storeRoutes = require('./routes/store');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stores', storeRoutes);

sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
