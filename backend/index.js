import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


// Import routes
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.listen(port, () => {
    console.log('Server listening on port 3000');
});