import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";


dotenv.config();
const app = express();

app.use(express.json()); 


app.use("/User", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.DB_PORT, () => {
    console.log(`Server is running on port ${process.env.DB_PORT}`);
})