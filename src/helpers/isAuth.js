function isAuth(req, res, next) {
  if (req.user) return next();
  else
    return res.status(401).json({
      error: "Wrong credentials"
    });
}

module.exports = isAuth;
