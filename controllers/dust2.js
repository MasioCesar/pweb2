module.exports = function (app) {
    var Dust2Controller = {
        index: function (req, res) {
            res.render('dust2/index');
        }
    };
    return Dust2Controller;
};
