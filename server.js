const express = require("express");
const bodyParser = require("body-parser");
const { Router } = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send([
    {
      id: "1",
      img: "https://placeimg.com/300/100/1",
      name: "Aria",
      birth: "2008088",
      gender: "female",
      job: "student",
    },
    {
      id: "2",
      img: "https://placeimg.com/300/100/2",
      name: "Star",
      birth: "20080977",
      gender: "male",
      job: "student",
    },
    {
      id: "3",
      img: "https://placeimg.com/300/100/3",
      name: "kei",
      birth: "20887088",
      gender: "female",
      job: "student",
    },
  ]);
}); // app.method(경로, 핸들러--어떻게 처리 할건지)

app.listen(port, () => console.log(`Listening on port ${port}`));
