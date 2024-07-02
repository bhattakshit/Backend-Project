import dotenv from "dotenv"
import app from './app.js'
import connectDb from "./db/index.js";
dotenv.config({
  path:'./env'
})




connectDb().then(
  ()=>{

    app.on("error",()=>{
      console.log('ERRR',error);
      throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server is running at port: ${process.env.PORT}` );
    })
  }
).catch((error)=>{
  console.log("MONGO db connection failed");
}
);
















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
