const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log(req.body);
  burger.updateOne(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

// router.put("/", function (req, res){

// res.json({ok:true})

// })

module.exports = router;
