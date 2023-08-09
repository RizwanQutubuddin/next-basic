const username = process.env.USERNAME;
const password = process.env.SERVERPASSWORD;
export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@umeandfootball.mgjbaqd.mongodb.net/productDB?retryWrites=true&w=majority";

// const { createPool } = require("mysql");
// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "umeandfootball",
//   port: 3306,
// });

// pool.getConnection((err) => {
//   if (err) {
//     console.log("Error connecting to db");
//   } else {
//     console.log("connected to db");
//   }
// });
