const router = require("express").Router();
const User = require("../models/User");


// router.get("/", (req,res) => {
//     res.send("hey it's auth route")
// })

//register (async function)
router.get("/register", async (req,res) => {
    const user = await new User ({
        username: "Kukjin",
        email:"tlaruddo2@gmail.com",
        password: "ssss"
    })

    await user.save()
    res.send("ok")
})

module.exports = router