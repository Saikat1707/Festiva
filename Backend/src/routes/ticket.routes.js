import express from "express"
import { middleAuthentication } from "../middleware/authMiddleware.js"
import { deleteTicketController, getAllTicketController, getTicketByEventIdController, getTicketByIdController, getTicketsByUserIdController, purchaseTicketController, updateTicketController } from "../controller/ticketController.js"

const router = express.Router()


router.post('/purchase/:id',middleAuthentication,purchaseTicketController)
router.get('/one/:id',middleAuthentication,getTicketByIdController)
router.get('/user/all',middleAuthentication,getTicketsByUserIdController)
router.get('/event/all/:id',middleAuthentication,getTicketByEventIdController)
router.patch('/update/:id',middleAuthentication,updateTicketController)
router.delete('/delete/:id',middleAuthentication,deleteTicketController)
router.get('/all',middleAuthentication,getAllTicketController)

export default router