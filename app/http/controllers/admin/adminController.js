class adminController {
    index(req, res) {
        res.json("admin Page");
    }
}

module.exports = new adminController();
