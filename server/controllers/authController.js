import bcrypt from "bcrypt";
import { createUser } from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store hashed password
    const user = await createUser(fullName, email, hashedPassword);

    res.status(201).json({
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};