const Admin=require("../../model/Admin");
exports.adminEdit=(req,res)=>{
    var admin=new Admin();
    Admin.fetchAllData(req.params.id)
    .then((result)=>{
        res.render("./admin/cat.edit.ejs",{result});
    })
    .catch((err)=>{

    });
    
}
exports.adminDelete=(req,res)=>{
    Admin.delete(req.params.id)
    .then((result)=>{
        res.send("Category deleted successfully");
    })
    .catch();
}
exports.adminView=(req,res)=>{
    var admin=new Admin();
    admin.viewCat()
    .then(result=>{
      res.render("./admin/view_category.ejs",{result});
  })
  .catch();
}
exports.loginpage=(req,res)=>{
    res.render("./admin/adminlogin.ejs");
}

exports.loginpost=(req,res)=>
   {
     var admin=new Admin(req.body.email,req.body.password);
     
     admin.checkLogin()
     .then((result)=>{
          req.session.current_user = req.body.email; 
          res.redirect("/admin/homepage");
    })
    .catch((err)=>{
        res.send(err);
    });
}

exports.admin_homepage=(req,res)=>{
    res.render("admin/homepage.ejs",{
      title :'Admin Homepage'  
    });
}