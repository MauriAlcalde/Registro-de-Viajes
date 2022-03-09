const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userControllers = {
  newUser: async (req, res) => {
    let { user, password, rol } = req.body;

    try {
      const verifyUser = await User.findOne({ user });
      if (verifyUser) {
        res.json({
          success: false,
          response: [{ message: "El usuario ya esta en uso." }],
          error: true,
        });
      } else {
        const encryptedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
          user,
          password: encryptedPassword,
          rol,
        });
        const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY);
        const usuario = await newUser.save();
        res.json({ success: true, response: { token, usuario }, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: error, error: true });
    }
  },
  signIn: async (req, res) => {
    let { user, password } = req.body;

    try {
      const userMatch = await User.findOne({ user });
      if (userMatch) {
        let passwordMatch = bcryptjs.compareSync(password, userMatch.password);
        if (passwordMatch) {
          const token = jwt.sign({ ...userMatch }, process.env.SECRET_KEY);
          res.json({
            success: true,
            response: { ...userMatch, token },
            error: null,
          });
        } else {
          res.json({
            success: false,
            response: [{ message: "la contraseña ingresada es incorrecta" }],
            error: true,
          });
        }
      } else {
        return res.json({
          success: false,
          response: [{ message: "El usuario ingresado es incorrecto" }],
          error: true,
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        response: [{ message: "El usuario no esta registrado" }],
        error: true,
      });
    }
  },
  signInWithToken: (req, res) => {
    let { user, rol, id } = req.user;
    res.json({ success: true, response: { user, rol, id } });
  },
};

module.exports = userControllers;
