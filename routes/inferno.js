module.exports = function (app) {
    var inferno = app.controllers.inferno;
    app.get("/inferno", inferno.index);
}