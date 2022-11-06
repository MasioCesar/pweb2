module.exports = function (app) {
    var mirage = app.controllers.mirage;
    app.get("/mirage", mirage.index);
}