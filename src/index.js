import dotenv from "dotenv"

import connectDb from "./db/index.js";
dotenv.config({
  path:'./env'
})




connectDb()
















// (async () => {
//   // ye iff use hua hai
//   try {
//     const f = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.Port, () => {
//       console.log("App is listening on port ${process.env.Port}");
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw err;
//   }
// })();
