module.exports = function (app) {
    let AcessoController = {
        index: function (req, res) {
            res.render("acesso/index");
        },
        login: function (req, res) {
            //#1
            let email = req.body.usuario.email;
            let nome = req.body.usuario.nome;
            if (email && nome) {
                let usuario = req.body.usuario;
                usuario["contatos"] = [];
                req.session.usuario = usuario;
                //res.redirect("/home");
                res.redirect("/home");

            } else {
                res.redirect("/");
            }
        },
        logout: function (req, res) { //#2
            req.session.destroy();
            res.redirect("/");
        },
    };
    return AcessoController;
};