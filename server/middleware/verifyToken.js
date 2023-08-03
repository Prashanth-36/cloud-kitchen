const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    let userToken = req.headers.Authorization || req.headers.authorization;
    if (userToken && userToken.startsWith("Bearer")) {
      userToken = userToken.split(" ")[1];
      if (!userToken) {
        return res.status(401).json({ message: "Missing token." });
      }
      jwt.verify(userToken, process.env.SECRET_KEY, (err, data) => {
        if (err) {
          return res.status(401).json(err);
          // return res.status(401).json({
          //   message: "User doesn't have a valid token",
          // });
        }
        req.user = data;
        next();
      });
    } else {
      res.status(401).json({ message: "Missing Token." });
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = verifyToken;
