module.exports = (req, res, next) => {
  let user = req.query.user;
  user == "Ada" || user == "Greta" || user == "Vim" || user == "Tim"
    ? next()
    : res.send("No tienes los privilegios para ingresar")
};
