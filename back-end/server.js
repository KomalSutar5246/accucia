const express = require ('express');
const env = require ('dotenv');
const app = express();
const mongoose = require('mongoose');


// routes
const authRoutes = require('./src/routes/auth');
const adminRoutes = require('./src/routes/admin/auth');
const categoryRoutes = require('./src/routes/category');
const productRoutes = require('./src/routes/product');

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

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

app.listen(2000, () => {
    console.log(`Server is running on port ${2000}`);
});