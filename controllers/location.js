const Locations = require("../Models/locationSchema");

exports.getLocations = (req, res) => {
  Locations.find()
    .then((response) => {
      res.status(200).json({
        message: "Locations Fetched Sucessfully",
        locations: response,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.addLocations = (req, res) => {
  const reqBody = req.body;

  const name = reqBody.name;
  const city_name = reqBody.city_name;
  const city = reqBody.city;
  const country_name = reqBody.country_name;

  const locationData = new Locations({ name, city_name, city, country_name });
  locationData
    .save()
    .then((response) => {
      res.status(200).json({
        message: "Location Data inserted Successfully",
        location: response,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Location Data inserting failed", error: err });
    });
};
