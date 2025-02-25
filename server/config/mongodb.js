import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "GenixArt"  // Especifica o banco de dados a ser utilizado
        });
        console.log("Banco de dados GenixArt conectado!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1);
    }
};

export default connectDB;
