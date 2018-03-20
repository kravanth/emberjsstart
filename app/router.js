import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


  Router.map(function() {
    console.log("Router.map() @ Router.js") ;
    this.route("home",{path: "/home"});
   this.route("about",{ path: "/about" });
   this.route("twowaybind",{ path: "/twowaybind" });
   this.route("products",{ path: "/products" });
   this.route("product" ,{path:"/product"});  //alt way of defining route.
   this.route("products",function(){
    this.route("new");
    
  });
  this.route("commits",function(){
   
    this.route("commit",{path:":sha"}); 
  });

    
  });


export default Router;
