
const mongoose = require('mongoose')

async function connect() {
    try {
        const uri = "mongodb+srv://duy2912www:hkd29122004.@cluster0.0swleeq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(uri)   
        console.log("Connected to DB Successfully!")
    } catch (err) {
        console.log("Connected to DB Failure!")
        console.log(err)
    }
}

module.exports = connect