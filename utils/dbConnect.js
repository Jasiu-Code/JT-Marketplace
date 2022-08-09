const mongoose = require("mongoose");

dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  await mongoose.connect(process.env.MONGO_URI);
}

export default dbConnect;
