const express = require("express");
const { createOrder,getCost } = require("../controllers/order");
const {hasAuthorization, userById} = require("../controllers/user");
const {requireSignin} = require("../controllers/auth");

const router = express.Router();


router.post("/order/create/:userId", requireSignin, hasAuthorization, createOrder);
router.post("/order/getcost/:userId", requireSignin, hasAuthorization, getCost);


router.param("userId", userById);


module.exports = router;