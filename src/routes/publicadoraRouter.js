const express = require("express");
const router = express.Router();
const publicadoraController = require("../controllers/publicadoraController.js");

router.post("/", (req,res) => {
    const code = publicadoraController.store(req.body);
    res.status(code).json();
})

router.get("/", (req,res) => {
    res.json(publicadoraController.index());
});

router.get("/:id", (req, res)=> {
    res.json(publicadoraController.show(req.params.id));
})

router.put("/:id", (req, res)=>{
    const code = publicadoraController.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res)=>{
    const code = publicadoraController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router