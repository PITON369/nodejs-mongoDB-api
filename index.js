import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;
const DB_URL = "mongodb+srv://user:user@cluster0.9ulsg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp();