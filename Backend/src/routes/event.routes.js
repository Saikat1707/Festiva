import express from "express"
import { middleAuthentication } from "../middleware/authMiddleware.js"
import { createEventController, deleteEventController, getAllEventController, getEventByStatusController, getEventController, getEventsCreatedByUserController, updateEventController, updateEventStatusController } from "../controller/eventController.js"
const router = express.Router()


router.post('/create',middleAuthentication,createEventController)
router.get('/details/:id',middleAuthentication,getEventController)
router.patch('/update/:id',middleAuthentication,updateEventController)
router.get('/user',middleAuthentication,getEventsCreatedByUserController)
router.get('/all/:status',middleAuthentication,getEventByStatusController)


router.delete('/delete/:id',middleAuthentication,deleteEventController) //for admin
router.get('/all',middleAuthentication,getAllEventController) //for admin
router.patch('/update/status/:id',middleAuthentication,updateEventStatusController) // for admin

export default router