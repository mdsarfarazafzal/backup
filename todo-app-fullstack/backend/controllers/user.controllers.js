import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { encrypt, decrypt } from "../utils/encryption.js";
import { users } from "../data.js";
import { User } from "../models/user.models.js";

async function register(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    throw new ApiError(400, "Email Password Required.");
  }

  const exitedUser = await User.findOne({ email });

  if (exitedUser) {
    throw new ApiError(409, "User already exits.");
  }

  const user = await User.create({
    email,
    password: encrypt(password),
  });

  const createdUser = await User.findById(user._id).select("-password");
  res
    .status(201)
    .json(new ApiResponse(201, "User created successfully", createdUser));
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    throw new ApiError(400, "Email Password Required.");
  }

  // const user = users.find(
  //   (u) => decrypt(u.email) === email && decrypt(u.password) === password,
  // );
  const user = await User.findOne({ email });
  const decryptedPassword = decrypt(user.password);

  if (decryptedPassword !== password) {
    throw new ApiError(401, "Invalid credentials");
  }

  const loggedInUser = await User.findById(user._id).select("-password");

  if (loggedInUser) {
    console.log(`User logged in: ${loggedInUser.email}`);
    res
      .status(200)
      .json(new ApiResponse(200, "Login Successful", loggedInUser));
  } else {
    res.status(401).json(new ApiError(401, "Invalid credentials"));
  }
}

export { login, register };
