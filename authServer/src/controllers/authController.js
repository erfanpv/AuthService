import User from "../models/User.js";
import { comparePassword, hashePassword } from "../utils/bcrypt.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if (existUser) {
      res.status(409).json({ success: false, message: "User already exist" });
    }

    const hashedPassword = await hashePassword(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res
      .status(201)
      .json({ success: true, message: "User Create Successfully" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res
        .status(404)
        .json({ success: false, message: "Invalid User Create an account" });
    }

    const validateUser = await comparePassword(password, user.password);

    if (!validateUser) {
      res
        .status(401)
        .json({ succes: false, message: "Invalid email or password" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Loggin Succceess",
        data: { user: user },
      });
  } catch (error) {
    next(error);
  }
};
