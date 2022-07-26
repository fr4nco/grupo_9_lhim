function guestMiddleware(req, res, next){
 
    if(req.session.logueado){
       return res.redirect("/user/profile");
   } 
   next();
}

module.exports= guestMiddleware;
