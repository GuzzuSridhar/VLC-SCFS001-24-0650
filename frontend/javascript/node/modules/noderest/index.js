import express from "express";
const app = express();
const port = 3000;

// route creation
app.get("/", (req, res) => {
  res.send("Welcome to Rest API from Node Application");
});
app.get("/show", (req, res) => {
  res.send("Welcome to second end point");
});

app.listen(port, () => {
  console.log(
    `The app has started on the port: ${port}.\n open http://localhost:3000 on your browser`
  );
});
