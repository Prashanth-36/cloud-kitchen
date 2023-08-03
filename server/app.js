const express = require("express");
const app = express();
const authRouter = require("./router/auth");
const kitchensRoute = require("./router/kitchens");
const ordersRoute = require("./router/orders");
const dbConnection = require("./model/db");
const cors=require("cors")

app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/auth", authRouter);

app.use("/kitchens", kitchensRoute);

app.use("/orders", ordersRoute);

const start = async () => {
  try {
    console.log("Connecting...");
    await dbConnection();
    console.log("Connected to Db Successfully.");
    app.listen(5050, console.log("Server running in port 5050."));
  } catch (err) {
    console.log(err);
  }
};

start();
