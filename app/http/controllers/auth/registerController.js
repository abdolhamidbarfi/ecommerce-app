const controller = require("app/http/controllers/controller");

class registerController extends controller {
    index(req, res) {
        res.render("auth/register");
    }
}

module.exports = new registerController();
