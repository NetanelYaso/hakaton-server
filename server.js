const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.Port || 5050;
require("./DB")
app.use(express.json({ extened: true }))
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const usersRouter = require("./routes/users-routes")

app.use("/users", usersRouter)

app.get("/", (req, res) => {
    res.send({ message: "it's up my brother" });
})

app.listen(PORT, () => {
    console.log(`server is up ${PORT}`);
})