import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
const existingUser = await findUserByEmail(email);

if (existingUser) {
  return res.status(409).json({
    message: "Email already registered"
  });
}
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


export const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Find user
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }
    const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);
  res.status(200).json({
  message: "Login Successful",
  token,
  user: {
    id: user.id,
    fullName: user.full_name,
    email: user.email
  }
});

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message
    });

  }
};