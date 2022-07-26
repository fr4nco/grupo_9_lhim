function authMiddleware(req, res, next){
 
    if(!req.session.logueado){
       return res.redirect("/user/login");
   } 
   next();
}

module.exports= authMiddleware;