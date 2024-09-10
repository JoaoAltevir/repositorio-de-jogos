const express = require("express");
const router = express.Router();
const estudioController = require("../controllers/estudioController.js");

router.post("/", (req,res) => {
    const code = estudioController.store(req.body);
    res.status(code).json();
})

router.get("/", (req,res) => {
    res.json(estudioController.index());
});

router.get("/:id", (req, res)=> {
    res.json(estudioController.show(req.params.id));
})

router.put("/:id", (req, res)=>{
    const code = estudioController.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res)=>{
    const code = estudioController.destroy(req.params.id);
    res.status(code).json();
})

module.exports = router