const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Use Google Public DNS

const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofood:gofood@cluster0.8mapbhk.mongodb.net/?appName=Cluster0";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
   
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
   const fetched_data = await mongoose.connection.db.collection("food_items")
    fetched_data.find({}).toArray(function (err, data) {
      if (err) console.log(err)
      else console.log(data)
    })
};


module.exports = mongoDB;
