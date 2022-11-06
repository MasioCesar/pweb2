module.exports = function (app) {
    var NegadoController = {
        index: function (req, res) {
            res.render('negado/index');
        }
    };
    return NegadoController;
};
