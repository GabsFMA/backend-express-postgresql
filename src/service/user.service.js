import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (name, username, email, password) => {
    
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error("Email já está em uso.");
    }

    
    const user = await User.create({ name, username, email, password });
    return user;
};

export const loginUser = async (email, password) => {
    
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error("Usuário não encontrado.");
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Senha inválida.");
    }

    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { user, token };
};