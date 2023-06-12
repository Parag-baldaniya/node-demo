const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}${process.env.DATABASE_Name}`);
        console.log('Mongo Connect', mongoose.connection.host);
    } catch (error) {
        console.log('Database connection error', error);
    }
}
module.exports = connectDB;