import express from "express"
import { middleAuthentication } from "../middleware/authMiddleware.js"
import { createEventController, deleteEventController, getAllEventController, getEventByStatusController, getEventController, updateEventController, updateEventStatusController } from "../controller/eventController.js"
const router = express.Router()


router.post('/create',middleAuthentication,createEventController)
router.get('/details/:id',middleAuthentication,getEventController)
router.patch('/update/:id',middleAuthentication,updateEventController)
router.get('/all',middleAuthentication,getAllEventController)
router.patch('/update/status/:id',middleAuthentication,updateEventStatusController)
router.delete('/delete/:id',middleAuthentication,deleteEventController)
router.get('/all/:status',middleAuthentication,getEventByStatusController)

export default router