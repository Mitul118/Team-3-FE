(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,a,t){e.exports=t(97)},60:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(49),r=t.n(c),s=(t(60),t(52)),o=t(51),m=t(28),i=t(1),u=(t(63),t(65),t(19)),p=t(20),d=t(25),b=t(14),E=t(26),h=(t(67),function(e){function a(){return Object(u.a)(this,a),Object(d.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"search"},l.a.createElement("i",{class:"fa fa-search"}),l.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search Document"}),l.a.createElement("button",{class:"btn btn-primary"},"Search"))}}]),a}(n.Component)),v=t(50),f=t.n(v),g=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(l)))).state={name:"",password:""},t.handleSubmit=function(e){e.preventDefault();f.a.post("https://jsonplaceholder.typicode.com/users",{user:{name:"abc",password:"qwery"}}).then(function(e){201===e.status&&window.location.replace("/dashboard"),console.log(e),console.log(e.data)})},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",null,"Login"),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"user_id",className:"form-control",placeholder:"Enter username"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Enter password"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),l.a.createElement("div",{className:"d-grid"},l.a.createElement("button",{type:"submit"},"Submit")),l.a.createElement("p",{className:"forgot-password text-right"},"Forgot"))}}]),a}(n.Component);var N=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(o.a.Brand,{href:"#home"},l.a.createElement("img",{alt:"",src:"https://team-3host.s3.amazonaws.com/logo.jpg",width:"30",height:"30",className:"d-inline-block align-top"})," ",l.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Captain America")),l.a.createElement(s.a,null,l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/"},"Register"))))))),l.a.createElement("div",{className:"auth-wrapper"},l.a.createElement("div",{className:"auth-inner"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",element:l.a.createElement(g,null)}),l.a.createElement(i.a,{path:"/Dashboard",element:l.a.createElement(h,null)}))))))},w=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,99)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null))),w()}},[[53,3,2]]]);
//# sourceMappingURL=main.b893f2c3.chunk.js.map