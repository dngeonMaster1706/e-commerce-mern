const notFound=(req,res,next)=>{
    const error = new Error(`Not Found- ${req.orinialUrl}`)
    res.status(404);
    next(error)
}

const errorHanlder=(err,req,res,next)=>{
    let statusCode=res.statusCode===200 ? 500 : res.statusCode;
    let message=err.message;


    if(err.name==='CastError' && err.kind === 'objectId'){
        message=`Resource not Found`;
        statusCode=404
    }

    res.status(statusCode).json({
        message,
        stack :process.env.NODE_ENV==='production'?'**':err.stack
    })
};

export {notFound, errorHanlder};