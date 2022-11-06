module.exports = function (app) {
    let dust2 = app.controllers.dust2;
    let autenticar = require("../middlewares/autenticador");
    app.get("/dust2", autenticar, dust2.index);
}