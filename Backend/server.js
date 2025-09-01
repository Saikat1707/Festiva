import app from "./app.js"
import Razorpay from "razorpay"


export const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_SECRET_KEY
});

const port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
})
