(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(8),r=n.n(l),i=(n(16),n(2)),s=n(3),c=n(6),u=n(4),m=n(5),h=(n(17),a.Component,a.Component,n(9)),b=n.n(h),g=(a.Component,n(1)),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:"",firstName:"",lastName:"",email:"",phone:""},n.onSubmitForm=n.onSubmitForm.bind(Object(g.a)(Object(g.a)(n))),n.onChangeConfirmPassword=n.onChangeConfirmPassword.bind(Object(g.a)(Object(g.a)(n))),n.onChangeEmail=n.onChangeEmail.bind(Object(g.a)(Object(g.a)(n))),n.onChangeFirst=n.onChangeFirst.bind(Object(g.a)(Object(g.a)(n))),n.onChangeLast=n.onChangeLast.bind(Object(g.a)(Object(g.a)(n))),n.onChangePhone=n.onChangePhone.bind(Object(g.a)(Object(g.a)(n))),n.onChangeUserName=n.onChangeUserName.bind(Object(g.a)(Object(g.a)(n))),n.onChangePassword=n.onChangePassword.bind(Object(g.a)(Object(g.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"form",value:function(){var e=this;return o.a.createElement("form",{id:"signUpForm",onSubmit:this.onSubmitForm},o.a.createElement("label",null,"First Name"),o.a.createElement("br",null),o.a.createElement("input",{id:"firstName",type:"text",onChange:function(t){return e.onChangeFirst(t)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,"Last Name"),o.a.createElement("br",null),o.a.createElement("input",{id:"lastName",type:"text",onChange:function(t){return e.onChangeLast(t)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,"Email"),o.a.createElement("br",null),o.a.createElement("input",{id:"email",type:"text",onChange:function(t){return e.onChangeEmail(t)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,"Phone Number"),o.a.createElement("br",null),o.a.createElement("input",{id:"phone",type:"text",onChange:function(t){return e.onChangePhone(t)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,"Username"),o.a.createElement("br",null),o.a.createElement("input",{id:"username",type:"text",onChange:function(t){return e.onChangeUserName(t)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,"Password"),o.a.createElement("br",null),o.a.createElement("input",{id:"password",type:"text",onChange:function(t){return e.onChangePassword(t)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",null,"Confirm Password"),o.a.createElement("br",null),o.a.createElement("input",{id:"confirmPassword",type:"text",onChange:function(t){return e.onChangeConfirmPassword(t)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{id:"signUpSubmit",type:"submit"},"Submit"))}},{key:"onChangeFirst",value:function(e){this.setState({firstName:e.target.value})}},{key:"onChangeLast",value:function(e){this.setState({lastName:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onChangeUserName",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeConfirmPassword",value:function(e){}},{key:"onSubmitForm",value:function(e){e.preventDefault(),console.log("testing console- first name: "+this.state.firstName),console.log(this.state.username),console.log(this.state.firstName),console.log(this.state.lastName),console.log(this.state.email),console.log(this.state.password),console.log(this.state.phone),console.log("before fetch"),fetch("/user",{method:"POST",body:JSON.stringify(this.state),headers:{"Content-Type":"application/json"}}),console.log("After fetch")}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,this.form())}}]),t}(a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n.p+"static/media/stickiesLogo.6703d347.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.caf7529b.chunk.js.map