module.exports = function (app) {
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/', (req, res) => {
        if (req.body.sites) {
            var sites = req.body.sites.split(", ");
            require("./controllers/rankerController.js")(sites);
        } else {
            res.redirect('/');
        }
    });
}
