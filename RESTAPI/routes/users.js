const router = require("express").Router();

router.get("/", (req,res) => {
    res.send("hey it'users route")
})

module.exports = router