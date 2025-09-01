import express from "express"
import { middleAuthentication } from "../middleware/authMiddleware.js"
import {getAllTicketController, getTicketByEventIdController, getTicketByIdController, getTicketsByUserIdController, purchaseTicketController} from "../controller/ticketController.js"

const router = express.Router()


router.post('/purchase/:id',middleAuthentication,purchaseTicketController)
router.get('/one/:id',middleAuthentication,getTicketByIdController)
router.get('/user/all',middleAuthentication,getTicketsByUserIdController)
router.get('/event/all/:id',middleAuthentication,getTicketByEventIdController)

router.get('/all',middleAuthentication,getAllTicketController)
// router.patch('/update/:id',middleAuthentication,updateTicketController) //for admin
// router.delete('/delete/:id',middleAuthentication,deleteTicketController) //we cant use it

export default router