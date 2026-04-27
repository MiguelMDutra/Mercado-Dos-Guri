import mongoose from "mongoose";

async function conexaoDB() {
  await mongoose.connect(process.env.DB__CONNECT);

  return mongoose.connection;
}

export default conexaoDB;
