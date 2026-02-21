// Implementing the middleware using the app.use()
const ADMIN_KEY = "xyz";

const adminAuth = (req, res, next) => {
  const { key } = req.headers;
  const isAdminAuthenticated = key === ADMIN_KEY;
  if (isAdminAuthenticated) {
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = adminAuth;
