const express = require("express");
const cors = require("cors");
const controllers = require("./Controllers");
const app = express();


app.set("port", process.env.PORT || 8000);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});



app.use("/vote", controllers.vote);

app.listen(app.get("port"), () => {
  console.log(`app listening on port ${app.get("port")}`);
});

