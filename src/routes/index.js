const { Router } = require("express");

const router = Router();
router.get("/", (req, res) => {
  console.log("index route");
  res.status(200).send({ saludo: "Hellow world" });
});

module.exports = router;
