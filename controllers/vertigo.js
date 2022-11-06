module.exports = function(app) {
    var VertigoController = {
    index: function(req, res) {
    res.render('vertigo/index');
    }
};
    return VertigoController;
};
