import { Sequelize, DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: process.env.DB_PORT,
    }
);

const User = sequelize.define("User", {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

export default User;