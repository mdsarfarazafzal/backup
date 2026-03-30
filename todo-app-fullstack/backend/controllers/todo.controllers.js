import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { users } from "../data.js";
import { User } from "../models/user.models.js";

async function syncTodos(req, res) {
  const { email, todos } = req.body;

  if (!(email && todos)) {
    throw new ApiError(400, "Email and Todos are required.");
  }

  // const user = users.find((u) => u.email === email);
  const user = await User.findOne({email});

  if (user) {
    user.todos = todos;
    await user.save();
    console.log(`Syncing data for: ${email} | Total tasks: ${todos.length}`);
    res.status(200).json(new ApiResponse(200, "Todos synced successfully"));
  } else {
    res.status(404).json(new ApiError(404, "User not found"));
  }
}

export { syncTodos };
