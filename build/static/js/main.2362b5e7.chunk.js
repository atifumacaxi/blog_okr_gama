(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,n,t){e.exports=t(52)},52:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(26),i=t.n(r),c=t(5),l=t(6);function m(){var e=Object(c.a)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Lato');\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  body {\n    background: #ECF0F1;\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    font-family: 'Lato', sans-serif;\n  }\n\n  html, body, #root{\n    height:100%;\n\n  }\n\n  input, button{\n    font-family: 'Lato', sans-serif;\n  }\n\n  button{\n    cursor:pointer;\n  }\n"]);return m=function(){return e},e}var u=Object(l.a)(m());function s(){var e=Object(c.a)(["\n  list-style: none;\n"]);return s=function(){return e},e}function p(){var e=Object(c.a)([""]);return p=function(){return e},e}function f(){var e=Object(c.a)(["\n  width: 100%;\n  height: 80px;\n  margin-bottom: 100px;\n  display: flex;\n  justify-content: center;\n\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 0 25px;\n    /* max-width: 1440px; */\n    background: #3498db;\n    color: #fff;\n  }\n"]);return f=function(){return e},e}var h=l.b.div(f()),d=l.b.div(p()),b=l.b.ul(s()),g=function(){return o.a.createElement(h,null,o.a.createElement("header",null,o.a.createElement(d,null,"Blog"),o.a.createElement(b,null,o.a.createElement("li",null,o.a.createElement("span",null,"Link")))))},y=t(33),v=t(7),w=t(11),E=t.n(w),x=t(17),k=t(29),j=t(30),O=t(31),I=t(36),z=t(32),S=t(39),C=t(18),L=t.n(C);t(49);L.a.initializeApp({apiKey:"AIzaSyAtzki8x2aw7QJXbqrbvR5hMhUhuNkz2z0",authDomain:"blog-fcam.firebaseapp.com",databaseURL:"https://blog-fcam.firebaseio.com",projectId:"blog-fcam",storageBucket:"blog-fcam.appspot.com",messagingSenderId:"301059358640",appId:"1:301059358640:web:5a72db5bd7eb6ab2"});var F=L.a.database();function A(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return A=function(){return e},e}function B(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: #ffe;\n"]);return B=function(){return e},e}function D(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n"]);return D=function(){return e},e}var q=l.b.div(D()),J=(l.b.section(B()),l.b.form(A())),M=["gmail.com","yahoo.com","hotmail.com","aol.com","hotmail.co.uk","hotmail.fr","msn.com","yahoo.fr","wanadoo.fr","orange.fr","comcast.net","yahoo.co.uk","yahoo.com.br","yahoo.co.in","live.com","rediffmail.com","free.fr","gmx.de","web.de","yandex.ru","ymail.com","libero.it","outlook.com","uol.com.br","bol.com.br","mail.ru","cox.net","hotmail.it","sbcglobal.net","sfr.fr","live.fr","verizon.net","live.co.uk","googlemail.com","yahoo.es","ig.com.br","live.nl","bigpond.com","terra.com.br","yahoo.it","neuf.fr","yahoo.de","alice.it","rocketmail.com","att.net","laposte.net","facebook.com","bellsouth.net","yahoo.in","hotmail.es","charter.net","yahoo.ca","yahoo.com.au","rambler.ru","hotmail.de","tiscali.it","shaw.ca","yahoo.co.jp","sky.com","earthlink.net","optonline.net","freenet.de","t-online.de","aliceadsl.fr","virgilio.it","home.nl","qq.com","telenet.be","me.com","yahoo.com.ar","tiscali.co.uk","yahoo.com.mx","voila.fr","gmx.net","mail.com","planet.nl","tin.it","live.it","ntlworld.com","arcor.de","yahoo.co.id","frontiernet.net","hetnet.nl","live.com.au","yahoo.com.sg","zonnet.nl","club-internet.fr","juno.com","optusnet.com.au","blueyonder.co.uk","bluewin.ch","skynet.be","sympatico.ca","windstream.net","mac.com","centurytel.net","chello.nl","live.ca","aim.com","bigpond.net.au"],_=function(e){function n(){var e,t;Object(j.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(I.a)(this,(e=Object(z.a)(n)).call.apply(e,[this].concat(o)))).state={email:"",nome:"",ip:"",tipo:"",data_hora:""},t.handleInputChange=function(e){t.setState(Object(k.a)({},e.target.name,e.target.value))},t.handleSubmit=function(){var e=Object(x.a)(E.a.mark(function e(n){var a,o,r,i,c,l,m,u,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.state,o=a.email,r=a.nome,i=a.ip,c=a.tipo,l=a.data_hora,m=o.split("@").pop(),e.next=5,t.findMyIp();case 5:i=e.sent,c=M.some(function(e){return e===m})?"b2c":"b2b",l="".concat((new Date).toISOString().slice(0,10)," ").concat((new Date).toLocaleTimeString()),u=F.ref().push().key,(s={})["leads/"+u]={email:o,nome:r,ip:i,tipo:c,data_hora:l},F.ref().update(s);case 12:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(S.a)(n,e),Object(O.a)(n,[{key:"findMyIp",value:function(){var e=Object(x.a)(E.a.mark(function e(){var n,t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://httpbin.org/ip");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.origin.split(",")[0]);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.email,t=e.nome;return o.a.createElement(a.Fragment,null,o.a.createElement(q,null,o.a.createElement(J,{onSubmit:this.handleSubmit,type:"post"},o.a.createElement("label",{htmlFor:"nome"},"Nome"),o.a.createElement("input",{name:"nome",id:"nome",type:"text",value:t,onChange:this.handleInputChange}),o.a.createElement("label",{htmlFor:"email"},"E-mail"),o.a.createElement("input",{name:"email",id:"email",type:"text",value:n,placeholder:"E-mail",onChange:this.handleInputChange}),o.a.createElement("button",{type:"submit"},"Cadastrar"))))}}]),n}(a.Component),N=function(){return o.a.createElement("div",null,"Login")},R=function(){return o.a.createElement("div",null,"admin")},U=function(){return o.a.createElement(y.a,null,o.a.createElement(a.Fragment,null,o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/",component:_}),o.a.createElement(v.a,{path:"/login",component:N}),o.a.createElement(v.a,{path:"/admin",component:R}))))},W=function(){return o.a.createElement(a.Fragment,null,o.a.createElement(g,null),o.a.createElement(U,null),o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.2362b5e7.chunk.js.map