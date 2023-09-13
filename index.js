import express, { json } from "express";
import mongoose from "mongoose";
import { registerValidation, loginValidation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://maximdm22:wwwwww@cluster0.zv5krs3.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB ok");
  })
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());



app.post("/auth/register", registerValidation, UserController.register);
app.post("/auth/login", loginValidation, UserController.login);
app.get("/auth/me", checkAuth, UserController.getMe);

// app.get('/posts', PostController.getAll);
// app.get('/posts/:id', PostController.getOne);
// app.post('/posts', PostController.create);
// app.delete('/posts', PostController.remove);
// app.putch('/posts', PostController.update);




app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
