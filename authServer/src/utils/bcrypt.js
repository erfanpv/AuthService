import bcrypt from "bcrypt";

const hashePassword = (password) => {
  const hashedPassword = bcrypt.hash(password, 10);
  return hashedPassword;
};

const comparePassword = async (password, userPassword) => {
  try {
    const comparedPassword = await bcrypt.compare(password, userPassword);
    return comparedPassword;
  } catch (error) {
    console.log("Error Occures", error);
    return false;
  }
};

export { hashePassword, comparePassword };
