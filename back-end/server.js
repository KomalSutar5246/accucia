const express = require ('express');
const env = require ('dotenv');
const app = express();
const bodyParser = require ('body-parser'); 
const mongoose = require('mongoose');


// routes
const userRoutes = require('./src/routes/user');


//environment variables or you can say constants
env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.fflpw.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://root:admin@cluster0.fflpw.mongodb.net/ecommerce?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    ).then (() => {
            console.log('Database Connected');
    });

app.use(express.json());

// app.get('/', (req,res, next) => {
//     res.status(200).json(
//         {message: 'Hello MERN React App' 
//     });
// });


// app.post('/data', (req,res, next) => {
//     res.status(200).json(
//         {message: req.body 
//     });
// });

app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(2000, () => {
    console.log(`Server is running on port ${2000}`);
});