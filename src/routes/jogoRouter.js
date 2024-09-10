const express = require("express");
const router = express.Router();
const jogoController = require("../controllers/jogoController.js");

router.post("/", (req,res) => {
    const code = jogoController.store(req.body);
    res.status(code).json();
})

router.get("/", (req,res) => {
    res.json(jogoController.index());
});

router.get("/:id", (req, res)=> {
    res.json(jogoController.show(req.params.id));
})

router.put("/:id", (req, res)=>{
    const code = jogoController.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res)=>{
    const code = jogoController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router