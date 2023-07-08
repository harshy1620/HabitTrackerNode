const express = require('express');
const router=express.Router();

const homeController=require('../controller/home_controller');

router.get('/',homeController.home);
router.post("/createhabbit",homeController.createHabbit);
router.get("/delete-habit",homeController.deleteHabbit);

router.get('/favorite-habbit', homeController.favoriteHabbit);
router.get('/status-update',homeController.statusUpdate);




module.exports=router;