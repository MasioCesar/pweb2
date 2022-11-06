module.exports = function (app) {
    var overpass = app.controllers.overpass;
    app.get("/overpass", overpass.index);
}