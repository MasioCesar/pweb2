module.exports = function(app) {
    var MirageController = {
    index: function(req, res) {
    res.render('mirage/index');
    }
};
    return MirageController;
};
