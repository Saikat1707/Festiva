export const goodResponse = (res,status,message,data)=>{
    return res.status(status).json({
        success:true,
        message:message,
        data:data == "" ? "No Data":data
    })
}
export const badResponse = (res,statusCode,message) =>{
    return res.status(statusCode).json({
        success:false,
        message:message
    })
}