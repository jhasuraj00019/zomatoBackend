const Restaurant = require("../Models/restaurantSchema");

exports.getRestaurantsByLocation = (req, res) => {
  const city_id = req.params.city_id;
  Restaurant.find({ city: city_id })
    .then((response) => {
      res.status(200).json({
        message: "Restaurant Data Fetched Successfully",
        restaurants: response,
      });
      // console.log(req);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getLocality = (req, res) => {
  const locality = req.params.locality;
  Restaurant.find({ locality: locality })
    .then((response) => {
      res.status(200).json({
        message: "Restraunt by Locality fetched",
        restaurant: response,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getRestaurantById = (req, res) => {
  const restId = req.params.id;
  Restaurant.find({ _id: restId })
    .then((response) =>
      res.status(200).json({
        message: "Restaurant By ID fetched",
        restaurant: response,
      })
    )
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getfilter = (req, res) => {
  const {
    mealtype,
    city,
    cuisine,
    locality,
    lcost,
    hcost,
    sort = 1,
    page = 1
  } = req.body;

  let condition = {};

  if (mealtype) {
    condition = { type: mealtype };
  }
  if (mealtype && city) {
    condition = {
      type: mealtype,
      city: city,
    };
  }
  if (mealtype && city && locality) {
    condition = {
      type: mealtype,
      city: city,
      locality: locality,
    };
  }
  if (mealtype && lcost && hcost) {
    condition = {
      type: mealtype,
      cost: { $lte: hcost, $gte: lcost },
    };
  }
  if (mealtype && lcost && hcost && city) {
    condition = {
      type: mealtype,
      cost: { $lte: hcost, $gte: lcost },
      city: city,
    };
  }
  if (mealtype && lcost && hcost && city && locality) {
    condition = {
      type: mealtype,
      cost: { $lte: hcost, $gte: lcost },
      city: city,
    };
  }
  if (locality) {
    condition = {
      locality: locality,
    };
  }
  if (cuisine && mealtype) {
    condition = {
      type: mealtype,
      Cuisine: { $in: cuisine },
    };
  }
  if (cuisine && city) {
    condition = {
      Cuisine: { $in: cuisine },
      city: city,
    };
  }
  if (cuisine && city && lcost && hcost) {
    condition = {
      Cuisine: { $in: cuisine },
      city: city,
      cost: { $lte: hcost, $gte: lcost },
    };
  }

  Restaurant.find(condition)
    .sort({ cost: sort })
    .then((response) => {

      const countPerPage = 2;
      let startIndex = page * countPerPage - 2;
      let endIndex = page * countPerPage;
      let slicedArray = response.slice(startIndex, endIndex)



      res.status(200).json({
        message: "Restaurant Filtered SuccessFully",
        restaurant: slicedArray,
      });
      const filteredResponse = response.slice()
      res.status(200).json({
        message: "Restaurant Filtered SuccessFully",
        restaurant: filteredResponse
      })
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
