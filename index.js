//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//password-1vWvgB5qLU70PNmD

//app
const app = express();
app.disable('etag');
//db
mongoose
  .connect('mongodb+srv://samwilson0745:1vWvgB5qLU70PNmD@cluster0.87indkw.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log('DB NOT CONNECTED', err));

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));

//routes
const testRoutes = require('./routes/moonQuake');
app.use('/api/moonQuake', testRoutes);

//port
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

//listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
