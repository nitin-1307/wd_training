// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://nitin713:minecraft13@nitin713.b8lyf9o.mongodb.net/");
  console.log("Connected to MongoDB Atlas");
}
module.exports = main; 