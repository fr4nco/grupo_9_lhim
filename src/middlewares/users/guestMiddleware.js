function guestMiddleware(req, res, next){
 
    if(req.session.logueado){
       return res.redirect("/users/profile");
   } 
   next();
}

module.exports= guestMiddleware;