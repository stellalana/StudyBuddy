(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(40),s=n.n(o),l=(n(56),n(4)),c=n(5),u=n(7),i=n(6),m=n(8),d=n(12),f=n.n(d),p={getUsers:function(){return f.a.get("/api/userInfo")},getUser:function(e){return f.a.get("/api/userInfo/"+e)},deleteUser:function(e){return f.a.delete("/api/userInfo/"+e)},saveUser:function(e){return f.a.post("/api/userInfo",e)},updateUserQuestion:function(e,t){return console.log(t),f.a.put("/api/userInfo"+e,t)},getQuestions:function(){return f.a.get("/api/questions")},getQuestion:function(e){return f.a.get("/api/questions/"+e)},deleteQuestion:function(e){return f.a.delete("/api/questions/"+e)},saveQuestion:function(e){return f.a.post("/api/questions",e)}},h=r.a.createContext(),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:null,password:null,currentId:null,userNames:[],passwords:[],userIds:[],auth:null},n.userInfo=function(){var e=[],t=[],a=[];p.getUsers().then(function(n){for(var r=0;r<n.data.length;r++)e.push(n.data[r].userName),t.push(n.data[r].password),a.push(n.data[r]._id)}).then(n.setState({userNames:e,passwords:t,userIds:a})).then(function(){return console.log(n.state)}).catch(function(e){return console.log(e)})},n.logIn=function(e,t){var a=n.state.userNames.indexOf(e);if(a>-1&&n.state.passwords[a]===t){var r=n.state.userIds[a];n.setState({currentUser:e,password:t,currentId:r,auth:!0})}else console.log("invalid password");console.log(n.state)},n.logOut=function(){console.log(n.state),n.setState({currentUser:null,password:null,auth:!1})},n.handleQuestion=function(e,t){console.log(n.state.currentId);var a={question:e,answer:t};p.saveQuestion(a).then(n.setState({question:"",answer:""})).then(function(e){return p.getQuestions().then(function(e){return n.setState({allQuestions:e.data})})}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.userInfo()}},{key:"render",value:function(){return r.a.createElement(h.Provider,{value:{currentId:this.state.currentId,currentUser:this.state.currentUser,password:this.state.password,logIn:this.logIn,logOut:this.logOut,handleQuestion:this.handleQuestion,auth:this.state.auth}},this.props.children)}}]),t}(a.Component),g=n(116),v=n(118),b=n(117),w=n(22);n(76);var O=function(e){var t=e.children;return r.a.createElement("div",{className:"jumbotron"},t)};function Q(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function j(e){var t=e.fluid,n=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function y(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(78);var N=function(e){return r.a.createElement("span",Object.assign({className:"btn delete-btn"},e,{role:"button",tabIndex:"0"}),"Delete")};n(80);function I(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)}function k(e){var t=e.id,n=e.answer,a=e.question,o=e.deleteQuestion;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement(Q,null,r.a.createElement(j,null,r.a.createElement(y,{size:"xs-8 sm-9"},r.a.createElement("div",{className:"cardSetQ"},r.a.createElement("p",{className:"storedQuestion"},a),r.a.createElement("p",{className:"headerTerm"},"TERM")),r.a.createElement("div",{className:"cardSetA"},r.a.createElement("p",{className:"storedAnswer"},n),r.a.createElement("p",{className:"headerDefinition"},"DEFINITION")))),r.a.createElement(N,{onClick:function(){return o(t)},id:t})))}n(82);function S(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function q(e){return r.a.createElement("button",Object.assign({},e,{style:{marginBottom:10},className:"btn btn-success"}),e.children)}var C=n(115),x=(n(30),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).userInput=r.a.createRef(),n.passwordInput=r.a.createRef(),n.state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.Consumer,null,function(t){var n=t.currentUser,a=t.logIn,o=t.logOut;return n?r.a.createElement("span",{style:{paddingRight:"10px"}},r.a.createElement("span",{style:{padding:"0 10px",fontSize:"25px"}}," ",n),r.a.createElement("button",{className:"btn-primary",onClick:o},"Log Out")):r.a.createElement("div",null,r.a.createElement("form",{style:{paddingRight:"10px"}},r.a.createElement("input",{className:"usernameInput",style:{borderRadius:"5%"},placeholder:"Username",ref:e.userInput}),r.a.createElement("input",{className:"passwordInput",style:{borderRadius:"5%"},placeholder:"Password",ref:e.passwordInput}),r.a.createElement("button",{className:"btn-primary",onClick:function(){a(e.userInput.current.value,e.passwordInput.current.value)}},"Log In")))})}}]),t}(a.Component));var A=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg d-flex flex-row-reverse"},r.a.createElement(x,null),r.a.createElement("div",{className:"mr-auto p-2"},r.a.createElement(C.a,{to:"/"},"Home"),r.a.createElement("span",{style:{padding:"10px"}},"|"),r.a.createElement(C.a,{to:"/getQuestions"},"Add Questions"),r.a.createElement("span",{style:{padding:"10px"}},"|"),r.a.createElement(C.a,{to:"/test"},"Start Quiz")))},R=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).deleteQuestion=function(e){p.deleteQuestion(e).then(function(e){return p.getQuestions().then(function(e){return n.setState({allQuestions:e.data})})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t,a=e.target,r=a.name,o=a.value;n.setState((t={},Object(w.a)(t,r,o),Object(w.a)(t,"event",e),t)),console.log(e.target.value)},n.handleQuestion=function(e){console.log(e);var t={question:n.state.question,answer:n.state.answer};p.saveQuestion(t).then(n.setState({question:"",answer:""})).then(function(e){return p.getQuestions().then(function(e){return n.setState({allQuestions:e.data})})}).catch(function(e){return console.log(e)})},n.saveUser=function(e){e.preventDefault(),console.log("started................");var t={userName:"Roger",password:"1234",firstName:"Roger",lastName:"Roger",saved:!0,createDate:new Date(Date.now())};p.saveUser(t).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},n.state={allQuestions:[],question:"",answer:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getQuestions().then(function(t){return e.setState({allQuestions:t.data})}).then(function(){return console.log(e.state.allQuestions)})}},{key:"render",value:function(){var e=this;return r.a.createElement(Q,{fluid:!0},r.a.createElement(A,null),r.a.createElement(j,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(h.Consumer,null,function(e){var t=e.currentUser;return r.a.createElement("h1",{className:"createIntro"},t?"Welcome, ".concat(t,", \nCreate a Flash Card Below!"):"Please Log In!")}))),r.a.createElement(h.Consumer,null,function(t){var n=t.auth,a=t.currentId;return n?r.a.createElement(j,null,r.a.createElement(y,{size:"md-12"},r.a.createElement("form",null,r.a.createElement(S,{value:e.state.question,onChange:e.handleInputChange,name:"question",placeholder:"Term"}),r.a.createElement(S,{value:e.state.answer,onChange:e.handleInputChange,name:"answer",placeholder:"Definition"}),r.a.createElement(q,{disabled:!e.state.question||!e.state.answer,onClick:function(){return e.handleQuestion(a)}},"Submit"))),r.a.createElement(y,{size:"md-12 sm-12"},e.state.allQuestions.length?r.a.createElement(I,null,e.state.allQuestions.map(function(t){return r.a.createElement(k,{key:t._id,id:t._id,answer:t.answer,question:t.question,deleteQuestion:e.deleteQuestion})})):r.a.createElement("h3",null,"No Questions Entered Yet!"))):r.a.createElement("h2",null)}))}}]),t}(a.Component);n(89);var U=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("h1",null,e.question)))};var D=function(e){return r.a.createElement("div",{className:"scoreBoard",style:{border:"2px solid red"}},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{id:"score"},"Number Correct: ",e.correct),r.a.createElement("div",{id:"hScore"},"Number Wrong: ",e.wrong),r.a.createElement("p",{onClick:function(){return e.restartGame()},id:"restart"},"Restart Game")))},L=n(23),_=n(13),z=n.n(_),B=n(41),W=n.n(B),P=n(42),T=n.n(P),M=n(43),G=n.n(M),Y=n(44),F=n.n(Y),J=n(45),V=n.n(J),H=n(46),$=n.n(H),K=n(47),X=n.n(K),Z=[T.a,G.a,F.a,V.a],ee=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{url:W.a,playStatus:z.a.status.PLAYING,autoLoad:!0})}}]),t}(a.Component),te=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).getArrayRandomElement=function(e){if(e&&e.length)return e[Math.floor(Math.random()*e.length)]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{url:this.getArrayRandomElement(Z),playStatus:z.a.status.PLAYING,autoLoad:!0,volume:50})}}]),t}(a.Component),ne=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{url:$.a,playStatus:z.a.status.PLAYING,autoLoad:!0})}}]),t}(a.Component),ae=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(z.a,{url:X.a,playStatus:z.a.status.PLAYING,autoLoad:!0})}}]),t}(a.Component),re=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).shuffle=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},n.checkAnswer=function(e,t,a){var r,o;if(e===t){console.log("Correct!");for(var s=0;s<n.state.allQuestions.length;s++)a===n.state.allQuestions[s]._id&&(r=s);var l=n.state;l.allQuestions[r].active=!1,n.state.correct+1===n.state.allQuestions.length?n.setState({allQuestions:l.allQuestions,correct:n.state.correct+1,notDone:!1,correctSound:!0}):n.setState({allQuestions:l.allQuestions,correct:n.state.correct+1,correctSound:!0})}else{console.log("Wrong");for(var c=0;c<n.state.allQuestions.length;c++)a===n.state.allQuestions[c]._id&&(o=c);var u=n.state;u.allQuestions[o].correct=!0,console.log(n.state.allQuestions[o].question),n.setState({allQuestions:u.allQuestions,wrong:n.state.wrong+1,rightScreen:!1,correctSound:!1}),console.log(n.state)}},n.wrongAnswer=function(e,t,a){var r;console.log(e,t,a);for(var o=0;o<n.state.allQuestions.length;o++)a===n.state.allQuestions[o]._id&&(r=o);var s=n.state;s.allQuestions[r].correct=!1,console.log(n.state.allQuestions[r].question),n.setState({allQuestions:s.allQuestions,rightScreen:!0}),console.log(n.state)},n.userAnswer=r.a.createRef(),n.state={allQuestions:[],shuffledQuestions:[],question:"",answer:"",correct:0,wrong:0,notDone:!0,rightScreen:!0,correctSound:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getQuestions().then(function(t){return e.setState({allQuestions:t.data})}).then(function(){return console.log(e.state.allQuestions)})}},{key:"render",value:function(){var e=this;return r.a.createElement(Q,{fluid:!0},r.a.createElement(A,null),r.a.createElement(h.Consumer,null,function(t){return t.auth?r.a.createElement("div",null,e.state.notDone?r.a.createElement(j,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(O,null,r.a.createElement("h1",null,"Study Buddy"),r.a.createElement("h3",null,"Answer the questions!")),r.a.createElement(D,{correct:e.state.correct,wrong:e.state.wrong}),e.state.rightScreen?r.a.createElement("div",{className:"quesWrap"},e.shuffle(e.state.allQuestions).filter(function(e){return!1!==e.active}).slice(0,1).map(function(t){return r.a.createElement("div",{className:"questionCard",key:t._id+"div"},e.state.correctSound?r.a.createElement(ne,null):r.a.createElement(ee,null),r.a.createElement(L.Animated,{animationIn:"bounceInRight",animationOut:"wobble",isVisible:!0},r.a.createElement(U,{key:t._id+"questionCard",question:t.question}),r.a.createElement("input",{key:t._id+"Input",style:{borderRadius:"5%"},placeholder:"Answer Question",ref:e.userAnswer}),r.a.createElement(q,{key:t._id+"Button",onClick:function(){return e.checkAnswer(e.userAnswer.current.value,t.answer,t._id)}},"Answer")))})):r.a.createElement("div",{className:"quesWrap"},e.state.allQuestions.filter(function(e){return!1!==e.correct}).map(function(t){return r.a.createElement("div",{className:"questionCard",key:t._id+"div"},r.a.createElement(te,null),r.a.createElement(L.Animated,{animationIn:"wobble",animationOut:"wobble",isVisible:!1},r.a.createElement(U,{key:t._id+"questionCard",question:"The correct answer is "+t.answer})),r.a.createElement(q,{key:t._id+"Button",onClick:function(){return e.wrongAnswer(t.question,t.answer,t._id)}},"Got It!"))}))),r.a.createElement(y,{size:"md-12 sm-12"})):r.a.createElement(j,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(O,null,r.a.createElement("h1",null,"Study Buddy"),r.a.createElement("h3",null,"Answer the questions!")),r.a.createElement(D,{correct:e.state.correct,wrong:e.state.wrong}),r.a.createElement("h1",null,"Done"),r.a.createElement(ae,null)))," "):r.a.createElement("h1",{className:"createIntro"},"Please Log In!")}))}}]),t}(a.Component);var oe=function(){return r.a.createElement(Q,{fluid:!0},r.a.createElement(j,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(O,null,r.a.createElement("div",{className:"jumboTitle"},r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))))},se=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,{fluid:!0},r.a.createElement(A,null),r.a.createElement(j,null,r.a.createElement(y,{size:"md-12"},r.a.createElement(O,null,r.a.createElement("h1",{className:"jumboTitle"},"Study Buddy"),r.a.createElement("h3",{className:"jumboSlogan"},"The Best Way To Learn!")),r.a.createElement("span",null,r.a.createElement("p",{className:"sbDescription"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))}}]),t}(a.Component),le=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:se}),r.a.createElement(b.a,{exact:!0,path:"/getQuestions",component:R}),r.a.createElement(b.a,{exact:!0,path:"/test",component:re}),r.a.createElement(b.a,{component:oe})))))}}]),t}(a.Component),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(le,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");ce?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ue(e)})}}()},30:function(e,t,n){},41:function(e,t,n){e.exports=n.p+"static/media/shuffling-cards-5.ca9d9fe1.mp3"},42:function(e,t,n){e.exports=n.p+"static/media/fail-buzzer-02.b69b598a.mp3"},43:function(e,t,n){e.exports=n.p+"static/media/fail-trombone-01.273b256e.mp3"},44:function(e,t,n){e.exports=n.p+"static/media/fail-trombone-02.3f7b9819.mp3"},45:function(e,t,n){e.exports=n.p+"static/media/bulb-horn-01.5551c91f.mp3"},46:function(e,t,n){e.exports=n.p+"static/media/small-bell-ring-01a.cbb6064f.mp3"},47:function(e,t,n){e.exports=n.p+"static/media/dream-harp-03.5d245d20.mp3"},50:function(e,t,n){e.exports=n(114)},56:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},89:function(e,t,n){}},[[50,2,1]]]);
//# sourceMappingURL=main.308e75e6.chunk.js.map