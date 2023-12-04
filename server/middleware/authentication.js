const CustomError = require("../errors");
const { istokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  console.log('Received Token:', token);
  
  if (!token) {
    throw new CustomError.UnauthenticatedError("authentication invalid no token");
  }

  try {
    const { name, userId, role } = istokenValid({ token });
    req.user = { name, userId, role };
    console.log('User:', req.user);
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("authentication invalid");
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError("Unauthorized to access");
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
