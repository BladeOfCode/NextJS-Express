const data = require("../data/integer_memory_store.js")

class Api {
  constructor(express) {
    this.express = express
  }

  init() {
    this.express.get("/api/get", (req, res) => {
      res.send({  i: data.value })
      console.log("nextjs+express:get");
    })

    this.express.post("/api/increment", (req, res) => {
      data.incr()
      res.send({ i: data.value })
    })
  }


}

module.exports = Api
