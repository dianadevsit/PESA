const pesaController = require('../controller/controller');

const path = require('path');

module.exports = function(app) {
    app
    .get("/api/pesa",pesaController.findAll)
    .get("/api/pesa/:id", pesaController.findById)
    .post("/pesa", pesaController.create)
    .put("/api/pesa/:id", pesaController.update)
    .delete("/api/pesa/:id", pesaController.remove)
    .get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    })
}