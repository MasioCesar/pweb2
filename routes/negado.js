module.exports = function (app) {
    var negado = app.controllers.negado;
    app.get("/negado", negado.index);
}