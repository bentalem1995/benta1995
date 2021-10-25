const jwt = require("jsonwebtoken");
function verifyToken(request, response, next) {
    try {
        if (!request.headers.authorization) {
            response.status(401).send("you are not logged in");
            return;
        }
        const token = request.headers.authorization.split(" ")[1];

        if (!token) {
            response.status(401).send("you are not logged in");
            return;
        }
        jwt.verify(token, process.env.SECRET_CODE)
        next();
    }
    catch (err) { console.log(err) }
}
module.exports = verifyToken;