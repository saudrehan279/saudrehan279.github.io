const express = require("express");
const cors = require("cors");


const App = express();
App.use(cors({
     origin: true
}));


App.get("/get", async (req, res) => {
     res.status(200).send({
          message: "Success!" 
     })
});


App.listen(4000, () => {
     console.log(`Listening on port 4000`)
})