module.exports = function(app) {
    var InfernoController = {
    index: function(req, res) {
    res.render('inferno/index');
    }
};
    return InfernoController;
};
