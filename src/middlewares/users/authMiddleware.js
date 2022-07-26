function authMiddleware(req, res, next){
 
    if(!req.session.logueado){
       return res.redirect("/users/login");
   } 
   next();
}

module.exports= authMiddleware;