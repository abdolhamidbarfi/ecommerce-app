const controller = require("../controller");

class adminController extends controller {
    index(req, res) {
        res.json("admin Page");
    }
}

module.exports = new adminController();
