const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")


const App = express();
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(cors({
     origin: true
}));


App.get("/get", async (req, res) => {
     res.status(200).send({
          message: "Success!"
     })
});

App.get("/", async (req, res) => {
     res.status(200).send("Hello There!")
})

App.get("/post", async (req, res) => {
     let body = await req.body;

     res.status(200).send({
          ...body
     })
})


App.listen(4000, () => {
     console.log(`Listening on port 4000`)
})