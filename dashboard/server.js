const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://asuparna25:6yEmazpsmsYGBmrG@cluster0.swjuwzp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { client, connectToDB };
