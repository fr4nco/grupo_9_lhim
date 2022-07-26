function userLoggedMiddleware(req, res, next){
let isLogged= false;
next();
}

module.exports= userLoggedMiddleware;