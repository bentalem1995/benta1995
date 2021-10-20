function verify(request,response,next){
    if(!request.session.isLogin){
        response.status(403).send("you are not loggedIn")
        return;
    }
    next();
}
module.exports = verify;