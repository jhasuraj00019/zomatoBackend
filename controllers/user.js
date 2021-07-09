const User = require("../Models/userSchema");

exports.updateUsers = (req, res) => {
  const { firstName, lastName, password, email, mobileNumber } = req.body;

  const userData = new User({
    firstName: firstName,
    lastName: lastName,
    password: password,
    email: email,
    mobileNumber: mobileNumber,
  });

  userData
    .save()
    .then((response) =>
      res.status(200).json({
        message: "User data updated",
        updatedData: response,
      })
    )
    .catch((err) => {
      res
        .status(500)
        .json({ message: "User Data inserting failed", error: err });
    });
};

exports.getUser = (req, res) => {
  const email = req.params.email;
  User.find({ email: email })
    .then((response) =>
      res.status(200).json({
        message: "Users List has been fetched",
        users: response,
      })
    )
    .catch((err) => "User is Not Registered");
};
