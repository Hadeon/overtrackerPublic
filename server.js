const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()
// const keys = require('./config/keys')
const dotenv = require('dotenv');
dotenv.config();

// const googleSetup = require('./config/google-setup');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const matches = require('./routes/api/matches');

// Auth routes

// Use Routes
// app.use('/profile', profileRoutes)
// app.use('/auth', authRoutes)
app.use('/api/matches', matches)

// Connection to DB
mongoose
  .connect(process.env.MONGOURI,
    { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

  // Serve static assets in Prod

  if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    
    app.get('*', (request, response) => {
      response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`));