class homeController {
    index(req, res) {
        res.json("Home Page");
    }
}

module.exports = new homeController();
