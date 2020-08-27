const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers/:id", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

// router.put("/api/burgers/:id", function (req, res) {});

module.exports = router;
