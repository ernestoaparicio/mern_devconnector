const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

const app = express();
const port = "5000";

//DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log(`mongodb connected`))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("yo dude"));

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server running on port ${port}`));
