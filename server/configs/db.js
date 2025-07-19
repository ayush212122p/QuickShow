import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
      await mongoose.connect(`${process.env.MONGO_URI}/quickshow`);
       mongoose.connection.on("connected",()=>console.log("Database connected successfully"));
    } catch (error){
        console.log(error.message)
    }
};
connectDB();
export default connectDB;