const locationController = require("../controllers/location");
const mealtypeController = require("../controllers/mealtype");
// const filterController = require('../controllers/filter')
const restaurantController = require("../controllers/restaurant");
const orderController = require("../controllers/order");

const userController = require('../controllers/user')

const paymentGatewayController  = require('../controllers/PaymentGateway')



const express = require("express");
const router = express.Router();

router.get("/locations", locationController.getLocations);
router.post("/addlocations", locationController.addLocations);

router.get('/restaurantByLocality/:locality', restaurantController.getLocality)

router.get("/mealtypes", mealtypeController.getMealTypes);

router.get(
  "/restaurantbylocation/:city_id",
  restaurantController.getRestaurantsByLocation
);
router.post("/filter", restaurantController.getfilter);
router.get("/restaurantById/:id", restaurantController.getRestaurantById);

router.post("/updateOrder", orderController.updateOrders);
router.get("/getOrders", orderController.getOrders);

router.post("/signup", userController.updateUsers)
router.get('/getUserByEmail/:email', userController.getUser)


router.post('/payment', paymentGatewayController.payment);
router.post('/callback', paymentGatewayController.callback)
module.exports = router;
