const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const app = express()
const keys = require('./config/keys')

// const googleSetup = require('./config/google-setup');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const items = require('./routes/api/items');

// Auth routes

// Use Routes
// app.use('/profile', profileRoutes)
// app.use('/auth', authRoutes)
// app.use('/api/items', items)

// Connection to DB
mongoose
  .connect(keys.mongoURI,
    { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))