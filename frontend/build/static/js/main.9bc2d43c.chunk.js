(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(22),i=a.n(s),r=(a(29),a(30),a(3)),j=a(8),l=a.n(j),d=a(2),o=a(6),b=a(0);var u=function(){var e=Object(d.f)(),t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(""),j=Object(r.a)(i,2),u=j[0],h=j[1],O=Object(c.useState)(""),x=Object(r.a)(O,2),p=x[0],m=x[1];return Object(b.jsx)("div",{className:"body",children:Object(b.jsxs)("div",{className:"container main",children:[Object(b.jsx)("h3",{id:"err",children:p}),Object(b.jsx)("div",{className:"title",children:"Login"}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("form",{method:"POST",children:[Object(b.jsxs)("div",{className:"user-details",children:[Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",placeholder:"Enter email",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:u,onChange:function(e){return h(e.target.value)}})]})]}),Object(b.jsx)("div",{className:"button",children:Object(b.jsx)("input",{type:"submit",value:"Login",onClick:function(t){t.preventDefault(),""===n||""===u?m("All field are require"):l.a.post("/api/signin",{email:n,password:u}).then((function(t){console.log(t),e("/")})).catch((function(e){console.log(e),m("Invalid Email/Password")}))}})})]})}),Object(b.jsx)(o.b,{to:"/register",children:"SignUp"})]})})},h=a(7),O=a.n(h),x=a(9);var p=function(){var e=Object(d.f)(),t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(""),j=Object(r.a)(i,2),l=j[0],u=j[1],h=Object(c.useState)(""),p=Object(r.a)(h,2),m=p[0],v=p[1],f=Object(c.useState)(""),N=Object(r.a)(f,2),g=N[0],w=N[1],y=Object(c.useState)(""),S=Object(r.a)(y,2),P=S[0],k=S[1],E=function(){var t=Object(x.a)(O.a.mark((function t(a){var c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),g===P){t.next=5;break}s("Password mismatch"),t.next=15;break;case 5:return t.prev=5,t.next=8,fetch("/api/signup",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({name:l,email:m,password:g,cpassword:P})});case 8:400===(c=t.sent).status?s("All fields are require"):404===c.status?s("Email already exist"):e("/login"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),s("Something went wrong");case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"body",children:Object(b.jsxs)("div",{className:"container main",children:[Object(b.jsx)("h4",{id:"error",children:n}),Object(b.jsx)("div",{className:"title",children:"Registration"}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("form",{method:"POST",children:[Object(b.jsxs)("div",{className:"user-details",children:[Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Full Name"}),Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",placeholder:"Enter email",value:m,onChange:function(e){return v(e.target.value)}})]}),Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Password"}),Object(b.jsx)("input",{type:"text",name:"password",placeholder:"Password",value:g,onChange:function(e){return w(e.target.value)}})]}),Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Confirm Password"}),Object(b.jsx)("input",{type:"text",name:"cpassword",placeholder:"Confirm Password",value:P,onChange:function(e){return k(e.target.value)}})]})]}),Object(b.jsx)("div",{className:"button",children:Object(b.jsx)("input",{type:"submit",value:"SignUp",name:"register",onClick:E})}),Object(b.jsx)(o.b,{to:"/login",children:"Login"})]})})]})})},m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"homePage",children:[Object(b.jsxs)("div",{className:"content-left",children:[Object(b.jsx)("div",{className:"circle"}),Object(b.jsx)("div",{className:"square",children:Object(b.jsxs)("div",{className:"txt",children:[Object(b.jsx)("h2",{children:"Now, Add Task along with date"}),Object(b.jsx)("h3",{children:"And get started "})]})}),Object(b.jsx)("div",{className:"circle1"})]}),Object(b.jsx)("div",{className:"content-right",children:Object(b.jsx)("button",{className:"btn",children:Object(b.jsxs)(o.b,{to:"/event",children:[Object(b.jsx)("span",{children:"Get Started"})," "]})})})]})})},v=function(){return Object(b.jsx)("div",{className:"main",children:Object(b.jsx)("h1",{children:"Page Not Found"})})},f=a(24),N=function(){var e=Object(d.f)(),t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(""),j=Object(r.a)(i,2),o=j[0],u=j[1],h=Object(c.useState)(""),p=Object(r.a)(h,2),m=p[0],v=p[1],N=Object(c.useState)([]),g=Object(r.a)(N,2),w=g[0],y=g[1],S={event:n,date:o,passedAway:!0},P=function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y([].concat(Object(f.a)(w),[S])),l.a.post("/api/addEvent",{data:S}).then((function(e){v("Task is added"),s("")})).catch((function(e){v("Login Please")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var t=Object(x.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.get("/api/findEvent").then((function(e){y(e.data)})).catch((function(t){e("/login")}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"homePage",children:Object(b.jsxs)("div",{className:"event-container",children:[Object(b.jsx)("div",{className:"event-container-left",children:void 0===w?Object(b.jsx)("h2",{children:"No Data"}):w.map((function(e,t){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("span",{children:Object(b.jsx)("h3",{children:e.event})}),e.passedAway?Object(b.jsx)("span",{className:"success",children:"You have time"}):Object(b.jsx)("span",{className:"fail",children:"Deadline Expire"}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{children:e.date})]},t)}))}),Object(b.jsx)("div",{className:"event-container-right",children:Object(b.jsxs)("div",{className:"inputField",children:[Object(b.jsx)("h4",{id:"msg",children:m}),Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h2",{children:"Add Task"})}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("form",{method:"POST",children:[Object(b.jsxs)("div",{className:"user-details",children:[Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Task Name"}),Object(b.jsx)("input",{type:"text",name:"title",value:n,placeholder:"Title of Event",onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"input-box",children:[Object(b.jsx)("span",{className:"details",children:"Deadline Date"}),Object(b.jsx)("input",{type:"date",name:"date",value:o,onChange:function(e){return u(e.target.value)}})]})]}),Object(b.jsx)("div",{className:"button",children:Object(b.jsx)("input",{type:"submit",value:"ADD",name:"addEvent",onClick:P})})]})})]})})]})})})},g=a(23);var w=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),i=Object(r.a)(s,2),j=i[0],d=i[1];return Object(c.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Math.floor(500*Math.random()+1),l.a.get("https://picsum.photos/id/"+t+"/info").then((function(e){n(e.data),d(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("span",{className:"home",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)(g.a,{color:"purple"})})}),Object(b.jsx)("span",{className:"profilePic",children:j?Object(b.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/709/709722.png",width:"80px",height:"80px",alt:""}):Object(b.jsx)("img",{src:a.download_url,width:"80px",height:"80px",alt:""})})]})})};var y=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",element:Object(b.jsx)(m,{})}),Object(b.jsx)(d.a,{path:"/register",element:Object(b.jsx)(p,{})}),Object(b.jsx)(d.a,{path:"/login",element:Object(b.jsx)(u,{})}),Object(b.jsx)(d.a,{path:"/event",element:Object(b.jsx)(N,{})}),Object(b.jsx)(d.a,{element:Object(b.jsx)(v,{})})]})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.9bc2d43c.chunk.js.map