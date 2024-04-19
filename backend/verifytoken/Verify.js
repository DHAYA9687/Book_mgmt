import jwt from "jsonwebtoken";
const Verify = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return res.status(401).send("Access token Denied");
  }
  try {
    const verified = jwt.verify(token, "dhaya");
    if (!verified) return res.status(401).send("Access Denied");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
export default Verify;
// Path: backend/routes/Userroutes.js
