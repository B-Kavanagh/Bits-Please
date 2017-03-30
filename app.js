var require = meteorInstall({"client":{"views":{"contentTemplates.html":["./template.contentTemplates.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/views/contentTemplates.html                                                                   //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.exports = require("./template.contentTemplates.js");                                             // 1
                                                                                                        // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.contentTemplates.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/views/template.contentTemplates.js                                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
                                                                                                        // 1
Template.__checkName("aboutUs");                                                                        // 2
Template["aboutUs"] = new Template("Template.aboutUs", (function() {                                    // 3
  var view = this;                                                                                      // 4
  return HTML.Raw("<h2> The aboutUs page has loaded </h2>");                                            // 5
}));                                                                                                    // 6
                                                                                                        // 7
Template.__checkName("contactUs");                                                                      // 8
Template["contactUs"] = new Template("Template.contactUs", (function() {                                // 9
  var view = this;                                                                                      // 10
  return HTML.Raw("<h2> The contactUs page has loaded  </h2>");                                         // 11
}));                                                                                                    // 12
                                                                                                        // 13
Template.__checkName("reviews");                                                                        // 14
Template["reviews"] = new Template("Template.reviews", (function() {                                    // 15
  var view = this;                                                                                      // 16
  return [ HTML.Raw("<h2> The reviews page has loaded </h2>\n    "), Spacebars.include(view.lookupTemplate("posts")) ];
}));                                                                                                    // 18
                                                                                                        // 19
Template.__checkName("community");                                                                      // 20
Template["community"] = new Template("Template.community", (function() {                                // 21
  var view = this;                                                                                      // 22
  return HTML.Raw("<h2> The community page has loaded </h2>");                                          // 23
}));                                                                                                    // 24
                                                                                                        // 25
Template.__checkName("hardware");                                                                       // 26
Template["hardware"] = new Template("Template.hardware", (function() {                                  // 27
  var view = this;                                                                                      // 28
  return HTML.Raw("<h2> The hardware page has loaded </h2>");                                           // 29
}));                                                                                                    // 30
                                                                                                        // 31
Template.__checkName("top");                                                                            // 32
Template["top"] = new Template("Template.top", (function() {                                            // 33
  var view = this;                                                                                      // 34
  return HTML.Raw("<h2> The top page has loaded </h2>");                                                // 35
}));                                                                                                    // 36
                                                                                                        // 37
Template.__checkName("walkthroughs");                                                                   // 38
Template["walkthroughs"] = new Template("Template.walkthroughs", (function() {                          // 39
  var view = this;                                                                                      // 40
  return HTML.Raw("<h2> The walkthroughs page has loaded </h2>");                                       // 41
}));                                                                                                    // 42
                                                                                                        // 43
Template.__checkName("more");                                                                           // 44
Template["more"] = new Template("Template.more", (function() {                                          // 45
  var view = this;                                                                                      // 46
  return HTML.Raw("<h2> The more page has loaded </h2>");                                               // 47
}));                                                                                                    // 48
                                                                                                        // 49Template.__checkName("Online Videos");                                                                   // 38
Template["onlineVids"] = new Template("onlineVids.walkthroughs", (function() {                          // 39
  var view = this;                                                                                      // 40
  return HTML.Raw("<h2> The Online videos page has loaded </h2>\n  <iframe width="600" height="450" frameborder="1" style="border:2" src="https://www.youtube.com/watch?v=7ftBN1f19Hg&feature=youtu.be" allowfullscreen=> \n </iframe>');                                       // 41
}));                 
Template.__checkName("dataTable");                                                                      // 50
Template["dataTable"] = new Template("Template.dataTable", (function() {                                // 51
  var view = this;                                                                                      // 52
  return [ HTML.Raw("<h2> The data page has loaded  </h2>\n    "), Spacebars.include(view.lookupTemplate("data")), "\n    ", Spacebars.include(view.lookupTemplate("addData")) ];
}));                                                                                                    // 54
                                                                                                        // 55
Template.__checkName("findUs");                                                                         // 56
Template["findUs"] = new Template("Template.findUs", (function() {                                      // 57
  var view = this;                                                                                      // 58
  return HTML.Raw('<h1> You have found us! </h1>\n    <iframe width="600" height="450" frameborder="1" style="border:2" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC-hQXOhE3FT5JbKV0lusO7bvlaAb3e1Ck\n            &amp;q=Manor Street,Mountmellick,Laois" allowfullscreen="">\n    </iframe>');
}));                                                                                                    // 60                                                                                    // 61
Template.__checkName("signup");                                                                         // 62
Template["signup"] = new Template("Template.signup", (function() {                                      // 63
  var view = this;                                                                                      // 64
  return HTML.Raw("<h2> The signUp page has loaded  </h2>");                                            // 65
}));                                                                                                    // 66
                                                                                                        // 67
Template.__checkName("home");                                                                           // 68
Template["home"] = new Template("Template.home", (function() {                                          // 69
  var view = this;                                                                                      // 70
  return [ HTML.Raw('<h1> You\'ve come to the right place!</h1>\n\t\n\n<div class="container">\n  <div class="jumbotron">\n    <h1>Welcome to our Gaming App!</h1> \n    <p>Bits Please would like to introduce you to our app, it is the most popular HTML, CSS, and JS framework for developing\n    responsive, mobile-first projects on the web!</p> \n  </div>\n    <div class="well well-sm">Donations welcome.</div>\n    <div class="well well-lg">Like us on BookFace.</div>\n  <p>text.</p> \n  <p>more stuff...</p> \n</div>\n    \n'), Spacebars.include(view.lookupTemplate("carousel")), HTML.Raw('\n\n<div class="container">\n  <h2>Basic Progress Bar</h2>\n  <div class="progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">\n      <span class="sr-only">70% Complete</span>\n    </div>\n  </div>\n</div>\n\n<button type="button" class="btn btn-default">Default</button>\n<button type="button" class="btn btn-primary">Primary</button>\n<button type="button" class="btn btn-success">Success</button>\n<button type="button" class="btn btn-info">Info</button>\n<button type="button" class="btn btn-warning">Warning</button>\n<button type="button" class="btn btn-danger">Danger</button>\n<button type="button" class="btn btn-link">Link</button>\n<button type="button">Link</button>\n\n    <div class="container">\n      <h2>Alerts</h2>\n      <div class="alert alert-success">\n        <strong>Success!</strong> This alert box could indicate a successful or positive action.\n      </div>\n      <div class="alert alert-info">\n        <strong>Info!</strong> This alert box could indicate a neutral informative change or action.\n      </div>\n      <div class="alert alert-warning">\n        <strong>Warning!</strong> This alert box could indicate a warning that might need attention.\n      </div>\n      <div class="alert alert-danger">\n        <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.\n      </div>\n    </div>') ];
}));                                                                                                    // 72
                                                                                                        // 73
Template.__checkName("nav");                                                                            // 74
Template["nav"] = new Template("Template.nav", (function() {                                            // 75
  var view = this;                                                                                      // 76
  return HTML.Raw('<nav class="navbar navbar-inverse">\n  <div class="container-fluid">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#">Bits Please</a>\n    </div>\n    <div class="collapse navbar-collapse" id="myNavbar">\n      <ul class="nav navbar-nav">\n        <li class="active"><a href="/">Home</a></li>\n        <li><a href="community">Community</a></li>\n        <li><a href="reviews">Reviews</a></li>\n        <li><a href="hardware">Hardware</a></li>\n        <li><a href="top">Top</a></li>\n        <li class="dropdown">\n          <a class="dropdown-toggle" data-toggle="dropdown" href="walkthrough">Walkthrough\n              <span class="caret"></span></a>\n          <ul class="dropdown-menu">\n            <li><a href="#">PC</a></li>\n            <li><a href="#">PS4</a></li>\n            <li><a href="#">Xbox</a></li>\n            <li><a href="#">#</a></li>\n          </ul>\n        </li>\n        <li class="dropdown">\n          <a class="dropdown-toggle" data-toggle="dropdown" href="more">More\n              <span class="caret"></span></a>\n          <ul class="dropdown-menu">\n            <li><a href="DataTable">Data</a></li>\n            <li><a href="aboutUs">AboutUs</a></li>\n            <li><a href="contactUs">ContactUs</a></li>\n            <li><a href="findUs">FindUs</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>\n        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>');
}));                                                                                                    // 78
                                                                                                        // 79
Template.__checkName("data");                                                                           // 80
Template["data"] = new Template("Template.data", (function() {                                          // 81
  var view = this;                                                                                      // 82
  return HTML.TABLE({                                                                                   // 83
    class: "table table-bordered"                                                                       // 84
  }, "\n\t\t", HTML.THEAD("\n\t\t", HTML.TR("\n\t\t    ", HTML.TH("Username"), "\n\t\t    ", HTML.TH("Make"), "\t\n\t\t    ", HTML.TH("Model"), "\n\t\t    ", HTML.TH("Age"), "\n\t\t    ", HTML.TH("Mileage"), "\n\t\t    ", HTML.TH("Action"), "\n\t\t"), "\n\t\t"), "\n\t\t", HTML.TBODY("\n\t\t", Blaze.Each(function() {
    return Spacebars.call(view.lookup("vehicles"));                                                     // 86
  }, function() {                                                                                       // 87
    return [ "\n\t\t", HTML.TR("\n\t\t    ", HTML.TD("\n\t\t\t", Blaze.View("lookup:user", function() {
      return Spacebars.mustache(view.lookup("user"));                                                   // 89
    }), "\n\t\t    "), "\n\t\t    ", HTML.TD("\n\t\t\t", Blaze.View("lookup:make", function() {         // 90
      return Spacebars.mustache(view.lookup("make"));                                                   // 91
    }), "\n\t\t    "), "\n \t\t    ", HTML.TD("\n\t\t\t", Blaze.View("lookup:model", function() {       // 92
      return Spacebars.mustache(view.lookup("model"));                                                  // 93
    }), "\n\t\t    "), "\n\t\t    ", HTML.TD("\n\t\t\t", Blaze.View("lookup:age", function() {          // 94
      return Spacebars.mustache(view.lookup("age"));                                                    // 95
    }), "\n\t\t    "), "\n \t\t    ", HTML.TD("\n\t\t\t", Blaze.View("lookup:mileage", function() {     // 96
      return Spacebars.mustache(view.lookup("mileage"));                                                // 97
    }), "\n\t\t    "), "\n\t\t    ", HTML.TD("\n\t\t\t", HTML.BUTTON({                                  // 98
      id: "delete",                                                                                     // 99
      class: "btn btn-danger"                                                                           // 100
    }, "\n\t\t\t\tDelete\n\t\t\t"), "\n\t\t    "), "\n\t\t"), "\n\t\t" ];                               // 101
  }), "\n\t\t"), "\n\t");                                                                               // 102
}));                                                                                                    // 103
                                                                                                        // 104
Template.__checkName("addData");                                                                        // 105
Template["addData"] = new Template("Template.addData", (function() {                                    // 106
  var view = this;                                                                                      // 107
  return HTML.Raw('<form class="addDataForm">\n\t<h2> Add a new car</h2>\n\t<div class="row">\n\t    <div class="col-sm-1">\n\t\t<label class="form-control" for="make">Username</label>\n\t    </div>\n\t    <div class="col-sm-2">\n\t\t<input class="form-control required" type="text" name="user" placeholder="Please Enter Username"><br>\n\t\t\n\t    </div>\n\t</div>\n\t\n\t<div class="row">\n\t    <div class="col-sm-1">\n\t\t<label class="form-control" for="make">Make</label>\n\t    </div>\n\t    <div class="col-sm-2">\n\t\t<input class="form-control required" type="text" name="make" placeholder="Please Enter Make"><br>\n\t\t\n\t    </div>\n\t</div>\n\t<div class="row">\n\t    <div class="col-sm-1">\n\t\t<label class="form-control" for="model">Model</label>\n\t    </div>\n\t    <div class="col-sm-2">\n\t\t<input class="form-control" type="text" name="model" placeholder="Please Enter Model"><br>\n\t\t\n\t    </div>\n\t</div>\n\t<div class="row">\n\t    <div class="col-sm-1">\n\t\t<label class="form-control" for="age">Age</label>\n\t    </div>\n\t    <div class="col-sm-2">\n\t\t<input class="form-control number" type="text" name="age" placeholder="Please Enter Age"><br>\n\t\t\n\t    </div>\n\t</div>\n\t<div class="row">\n\t    <div class="col-sm-1">\n\t\t<label class="form-control" for="mileage">Mileage</label>\n\t    </div>\n\t    <div class="col-sm-2">\n\t\t<input class="form-control number" type="text" name="mileage" placeholder="Please Enter Mileage"><br>\n\t\t\n\t    </div>\n\t</div>\n\t    <input type="submit" value="save" class="btn btn-primary"> \n         \n\t   \n    </form>');
}));                                                                                                    // 109
                                                                                                        // 110
Template.__checkName("carousel");                                                                       // 111
Template["carousel"] = new Template("Template.carousel", (function() {                                  // 112
  var view = this;                                                                                      // 113
  return HTML.Raw('<div class="container">\n  <br>\n  <div id="myCarousel" class="carousel slide" data-ride="carousel">\n    <!-- Indicators -->\n    <ol class="carousel-indicators">\n      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\n      <li data-target="#myCarousel" data-slide-to="1"></li>\n      <li data-target="#myCarousel" data-slide-to="2"></li>\n      <li data-target="#myCarousel" data-slide-to="3"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class="carousel-inner" role="listbox">\n      <div class="item active">\n        <img src="picture1.jpg" alt="Chania" width="460" height="345">\n        <div class="carousel-caption">\n          <h3>Gamer</h3>\n          <p>The atmosphere in the website is fabulous.</p>\n        </div>\n      </div>\n\n      <div class="item">\n        <img src="picture2.jpg" alt="Chania" width="460" height="345">\n        <div class="carousel-caption">\n          <h3>Assassins Creed</h3>\n          <p>Member how cool this shit was! Yeah I member.</p>\n        </div>\n      </div>\n    \n      <div class="item">\n        <img src="picture3.jpg" alt="Flower" width="460" height="345">\n        <div class="carousel-caption">\n          <h3>Halo</h3>\n          <p>The demon is coming!.</p>\n        </div>\n      </div>\n\n      <div class="item">\n        <img src="picture4.jpg" alt="Flower" width="460" height="345">\n        <div class="carousel-caption">\n          <h3>Fallout</h3>\n          <p>The atmosphere in Fallout has a touch of Detroit and Radiation.</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">\n      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n      <span class="sr-only">Previous</span>\n    </a>\n    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">\n      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n      <span class="sr-only">Next</span>\n    </a>\n  </div>\n</div>');
}));                                                                                                    // 115
                                                                                                        // 116
Template.__checkName("posts");                                                                          // 117
Template["posts"] = new Template("Template.posts", (function() {                                        // 118
  var view = this;                                                                                      // 119
  return HTML.DIV({                                                                                     // 120
    class: "well col-xs-6 col-xs-offset-3"                                                              // 121
  }, "\n    ", HTML.DIV({                                                                               // 122
    class: "row col-xs-10 col-xs-offset-1"                                                              // 123
  }, "\n        ", HTML.FORM({                                                                          // 124
    class: "form-horizontal",                                                                           // 125
    role: "form",                                                                                       // 126
    id: "postForm"                                                                                      // 127
  }, "\n            ", HTML.DIV({                                                                       // 128
    class: "row"                                                                                        // 129
  }, "\n            ", HTML.DIV({                                                                       // 130
    class: "form-group"                                                                                 // 131
  }, "\n                ", HTML.DIV({                                                                   // 132
    class: "col-xs-12",                                                                                 // 133
    id: "well-post"                                                                                     // 134
  }, "\n                    ", HTML.TEXTAREA({                                                          // 135
    class: "form-control required",                                                                     // 136
    rows: "3",                                                                                          // 137
    id: "inputPost",                                                                                    // 138
    placeholder: "Post a Comment!",                                                                     // 139
    maxlength: "140"                                                                                    // 140
  }), "\n                    ", HTML.LABEL({                                                            // 141
    id: "charRemaining",                                                                                // 142
    for: "inputPost"                                                                                    // 143
  }, Blaze.View("lookup:charsRemaining", function() {                                                   // 144
    return Spacebars.mustache(view.lookup("charsRemaining"));                                           // 145
  })), "\n                "), "\n            "), "\n            "), "\n            ", HTML.Raw('<div class="form-group">\n                \n                <div class="col-xs-3">\n                    <!--Camera-->\n                   <!-- <i class="fa fa-camera-retro fa-lg" aria-hidden="true"></i> -->\n                    <a href="#">\n                     <span class="glyphicon glyphicon-camera"></span>\n                    </a>\n                </div>\n                <div class="col-xs-3">\n                    <!--Video-->\n                   <!-- <i class="fa fa-camera-retro fa-lg" aria-hidden="true"></i> -->\n                    <a href="#">\n                        <span class="glyphicon glyphicon-facetime-video"></span>\n                    </a>\n                </div>\n                <div class="col-xs-3">\n                   <!-- <i class="fa fa-camera-retro fa-lg" aria-hidden="true"></i> -->\n                    <a href="#">\n                        <span class="glyphicon glyphicon-option-horizontal"></span>\n                    </a>\n                </div>\n                <div class="col-xs-3">\n                    <button type="submit" class="btn btn-primary">Post</button>\n                </div>\n            </div>'), "\n        "), "\n    "), "\n    ");
}));                                                                                                    // 147
                                                                                                        // 148
Template.__checkName("comments");                                                                       // 149
Template["comments"] = new Template("Template.comments", (function() {                                  // 150
  var view = this;                                                                                      // 151
  return HTML.Raw('<form class="addDataForm">\n\t<h2> Add a new comment</h2>\n\t<div class="row">\n\t    <div class="col-sm-1">\n\t\t<label class="form-control" for="make">Username</label>\n\t    </div>\n\t    <div class="col-sm-2">\n\t\t<input class="form-control required" type="text" name="user" placeholder="Please Enter Username"><br>\n\t\t\n\t    </div>\n\t</div>\n\t\n\t<div class="row">\n\t    <div class="col-sm-1">\n\t\t<label class="form-control" for="make">Make</label>\n\t    </div>\n\t    <div class="col-sm-2">\n\t\t<input class="form-control required" type="text" name="make" placeholder="Please Enter Make"><br>\n\t\t\n\t    </div>\n\t</div>\n\t\n\t\n\n\t    <input type="submit" value="save" class="btn btn-primary"> \n         \n\t   \n    </form>');
}));                                                                                                    // 153
                                                                                                        // 154
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.html":["./template.main.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/views/main.html                                                                               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
module.exports = require("./template.main.js");                                                         // 1
                                                                                                        // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/views/template.main.js                                                                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
                                                                                                        // 1
Template.body.addContent((function() {                                                                  // 2
  var view = this;                                                                                      // 3
  return Spacebars.include(view.lookupTemplate("nav"));                                                 // 4
}));                                                                                                    // 5
Meteor.startup(Template.body.renderToDocument);                                                         // 6
Meteor.startup(function() {                                                                             // 7
  var attrs = {"background":"appBackgroundmrkII.jpg"};                                                  // 8
  for (var prop in attrs) {                                                                             // 9
    document.body.setAttribute(prop, attrs[prop]);                                                      // 10
  }                                                                                                     // 11
});                                                                                                     // 12
                                                                                                        // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"router.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/lib/router.js                                                                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
Router.route('/aboutUs');                                                                               // 1
Router.route('/findUs');                                                                                // 2
Router.route('/dataTable');                                                                             // 3
Router.route('/contactUs');                                                                             // 4
Router.route('/', {                                                                                     // 5
    template: 'home'                                                                                    // 6
});                                                                                                     // 5
Router.route('/reviews');                                                                               // 8
Router.route('/community');                                                                             // 9
Router.route('/hardware');                                                                              // 10
Router.route('/top');                                                                                   // 11
Router.route('/walkthroughs');                                                                          // 12
Router.route('/more');
Router.route('/Online Videos');                                                                                  // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":["meteor/templating","meteor/reactive-var","./views/main.html","./views/contentTemplates.html",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// client/main.js                                                                                       //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});module.import('./views/main.html');module.import('./views/contentTemplates.html');
                                                                                                        // 2
                                                                                                        //
                                                                                                        // 4
                                                                                                        // 5
                                                                                                        //
Template.data.helpers({                                                                                 // 9
  vehicles: function () {                                                                               // 10
    function vehicles() {                                                                               // 10
      console.log(Vehicles.find().fetch());                                                             // 11
      return Vehicles.find();                                                                           // 12
    }                                                                                                   // 13
                                                                                                        //
    return vehicles;                                                                                    // 10
  }()                                                                                                   // 10
});                                                                                                     // 9
                                                                                                        //
Template.data.events({                                                                                  // 17
  'click #delete': function () {                                                                        // 18
    function clickDelete(event, instance) {                                                             // 18
      Vehicles.remove(this._id);                                                                        // 19
    }                                                                                                   // 20
                                                                                                        //
    return clickDelete;                                                                                 // 18
  }()                                                                                                   // 18
});                                                                                                     // 17
                                                                                                        //
Template.addData.events({                                                                               // 23
  'submit .addDataForm': function () {                                                                  // 24
    function submitAddDataForm(event, instance) {                                                       // 24
      event.preventDefault();                                                                           // 25
      Vehicles.insert({ make: event.target.make.value,                                                  // 26
        model: event.target.model.value,                                                                // 27
        age: event.target.age.value,                                                                    // 28
        mileage: event.target.mileage.value                                                             // 29
      });                                                                                               // 26
    }                                                                                                   // 31
                                                                                                        //
    return submitAddDataForm;                                                                           // 24
  }()                                                                                                   // 24
});                                                                                                     // 23
                                                                                                        //
/*----------------------------------------------------------------------*/                              // 35
                                                                                                        //
Template.posts.helpers({                                                                                // 37
  charsRemaining: function () {                                                                         // 38
    function charsRemaining() {                                                                         // 38
      return Session.get('CharactersRemaining');                                                        // 39
    }                                                                                                   // 40
                                                                                                        //
    return charsRemaining;                                                                              // 38
  }()                                                                                                   // 38
});                                                                                                     // 37
                                                                                                        //
Template.posts.onRendered(function () {                                                                 // 43
  $("#postForm").validate();                                                                            // 44
});                                                                                                     // 45
                                                                                                        //
Template.posts.events({                                                                                 // 47
  'keyup #inputPost': function () {                                                                     // 48
    function keyupInputPost(event) {                                                                    // 48
      // Retrieve the contents from the Textarea                                                        // 49
      var inputText = event.target.value;                                                               // 50
      //  Posts.insert({obj}, function(err,success){});                                                 // 51
      Session.set("CharactersRemaining", 140 - inputText.length + " characters remaining");             // 52
    }                                                                                                   // 53
                                                                                                        //
    return keyupInputPost;                                                                              // 48
  }(),                                                                                                  // 48
  'submit #postForm': function () {                                                                     // 54
    function submitPostForm(event) {                                                                    // 54
      event.preventDefault();                                                                           // 55
      var post = event.target.inputPost.value;                                                          // 56
      //Clearing the textarea content                                                                   // 57
      event.target.reset();                                                                             // 58
      Session.set("CharactersRemaining", 140 + " characters remaining");                                // 59
      Meteor.call('insertPost', post);                                                                  // 60
      //  Posts.insert({post}, function(err,success){});                                                // 61
    }                                                                                                   // 62
                                                                                                        //
    return submitPostForm;                                                                              // 54
  }()                                                                                                   // 54
});                                                                                                     // 47
                                                                                                        //
/*-----------------------------------------------------------------------*/                             // 67
                                                                                                        //
Template.addData.onRendered(function () {                                                               // 69
                                                                                                        //
  jQuery.validator.addMethod("doesUsernameExist", function (value, element) {                           // 71
    return meteor.users.findOne({ username: value }) ? true : false;                                    // 72
  }, "Sorry, this username is not in the database, please try another");                                // 73
                                                                                                        //
  $(".addDataForm").validate({                                                                          // 75
    rules: {                                                                                            // 76
                                                                                                        //
      user: {                                                                                           // 78
        required: true,                                                                                 // 79
        doesUsernameExist: true                                                                         // 80
      },                                                                                                // 78
      make: {                                                                                           // 82
        required: true                                                                                  // 83
      },                                                                                                // 82
      age: {                                                                                            // 85
        number: true                                                                                    // 86
      },                                                                                                // 85
      mileage: {                                                                                        // 88
        number: true                                                                                    // 89
      }                                                                                                 // 88
    },                                                                                                  // 76
                                                                                                        //
    messages: {                                                                                         // 93
      make: {                                                                                           // 94
        required: "Enter a vehicle make, stupid!"                                                       // 95
      },                                                                                                // 94
      age: {                                                                                            // 97
        number: "Age is a number, idiot!"                                                               // 98
      },                                                                                                // 97
      mileage: {                                                                                        // 100
        number: "Your mother has more mileage"                                                          // 101
      }                                                                                                 // 100
                                                                                                        //
    }                                                                                                   // 93
  });                                                                                                   // 75
});                                                                                                     // 107
                                                                                                        //
Meteor.call('sendEmail', 'b.murphy49@nuigalway.ie', 'How', 'test job for Email.send.');                 // 109
                                                                                                        //
/*                                                                                                      // 132
jQuery.extend(jQuery.validator.messages, {                                                              //
    required: "This field is required bitch!",                                                          //
    remote: "Please fix this field.",                                                                   //
    email: "Please enter a valid email address.",                                                       //
    url: "Please enter a valid URL.",                                                                   //
    date: "Please enter a valid date.",                                                                 //
    dateISO: "Please enter a valid date (ISO).",                                                        //
    number: "Please enter a valid number, also your gay!",                                              //
    digits: "Please enter only digits.",                                                                //
    creditcard: "Please enter a valid credit card number.",                                             //
    equalTo: "Please enter the same value again.",                                                      //
    accept: "Please enter a value with a valid extension.",                                             //
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),                    //
    minlength: jQuery.validator.format("Please enter at least {0} characters."),                        //
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),  //
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),                        //
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),                    //
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")                  //
});                                                                                                     //
*/                                                                                                      //
/*                                                                                                      // 153
Template.hello.onCreated(function helloOnCreated() {                                                    //
  // counter starts at 0                                                                                //
  this.counter = new ReactiveVar(0);                                                                    //
});                                                                                                     //
                                                                                                        //
Template.hello.helpers({                                                                                //
  counter() {                                                                                           //
    return Template.instance().counter.get();                                                           //
  },                                                                                                    //
});                                                                                                     //
                                                                                                        //
Template.hello.events({                                                                                 //
  'click button'(event, instance) {                                                                     //
    // increment the counter when button is clicked                                                     //
    instance.counter.set(instance.counter.get() + 1);                                                   //
  },                                                                                                    //
});*/                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"collections":{"vehicles.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// collections/vehicles.js                                                                              //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
Vehicles = new Mongo.Collection('vehicles');                                                            // 1
console.log(Vehicles.find().count());                                                                   // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/views/template.contentTemplates.js");
require("./client/views/template.main.js");
require("./client/lib/router.js");
require("./collections/vehicles.js");
require("./client/main.js");