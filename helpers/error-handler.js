function errorHandler(err){
    if(config.isProduction){
        return "something occur please try agen letter"
    }
    return err;
}
module.exports =errorHandler