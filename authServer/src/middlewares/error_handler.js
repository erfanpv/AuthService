const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({ sucess: false, message: errors });
  }

  if (err.code === 11000) {
    return res.status(400).json({ success: false, message: "Already Exist" });
  }

  res.status(500).json({ sucess: false, message: "server Error" });
};

export default errorHandler