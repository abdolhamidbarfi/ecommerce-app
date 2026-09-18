const controller = require("app/http/controllers/controller");

class adminController extends controller {
    index(req, res) {
        res.json("admin Page");
    }
}

module.exports = new adminController();
