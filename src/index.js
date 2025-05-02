import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import createUsersTable from "./database/initDatabase.js";

dotenv.config();

const app = express();

app.use(express.json());

createUsersTable();

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});