import express from "express"
import { middleAuthentication } from "../middleware/authMiddleware.js"
import { createEventController, getEventController, updateEventController } from "../controller/eventController.js"
const router = express.Router()


router.post('/create',middleAuthentication,createEventController)
router.get('/details/:id',middleAuthentication,getEventController)
router.patch('/update/:id',middleAuthentication,updateEventController)

export default router