const express = require("express");
const router = express.Router();
const generoController = require("../controllers/generoController.js");

router.post("/", (req,res) => {
    const code = generoController.store(req.body);
    res.status(code).json();
})

router.get("/", (req,res) => {
    res.json(generoController.index());
});

router.get("/:id", (req, res)=> {
    res.json(generoController.show(req.params.id));
})

router.put("/:id", (req, res)=>{
    const code = generoController.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res)=>{
    const code = generoController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router