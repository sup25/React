const express = require('express');
const app = express();
const { client, connectToDB } = require('./server');
const mongoose = require('mongoose');
app.use(express.json());

const userCollection = client.db("mydatabase").collection("users");

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.json({ message: 'User added' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error inserting user" });
    }
});



app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const result = await userCollection.insertOne({ username, email, password });
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error inserting user" });
    }
});

connectToDB().then(() => {
    app.listen(5000, () => console.log('Server is running on port 5000'));
});

