//database sai jab bhi  connect karenge to problem aa sakti hai isliye hamesha  jab connect kare tab us function/code ko try-catch mai wrap karo ya promise mai
//sath ami async-await ka dhyan rakho kyuki time lagta hai data retireval /connection mao
import mongoose  from "mongoose"
import { DB_Name } from "../constants.js"


const  connectDb = async ()=>{
  try {
    const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
    console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`);
  } catch(error){
    console.log("mongodb connection error", error);
    process.exit(1)
  }
}
export default connectDb