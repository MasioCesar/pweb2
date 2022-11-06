module.exports = function (app) {
    var vertigo = app.controllers.vertigo;
    app.get("/vertigo", vertigo.index);
}