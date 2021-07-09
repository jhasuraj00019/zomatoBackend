const Mealtype = require("../Models/mealtypeSchema");

exports.getMealTypes = (req, res) => {
  Mealtype.find()
    .then((response) => {
      res.status(200).json({ mealtypes: response });
    })
    .catch((err) => res.status(500).json({ error: err }));
};
