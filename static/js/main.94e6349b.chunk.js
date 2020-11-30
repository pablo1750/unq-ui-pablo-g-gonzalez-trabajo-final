(this.webpackJsonprpsls=this.webpackJsonprpsls||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),s=a.n(c),r=a(8),i=a.n(r),o=(a(15),a.p,a(16),function(e){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(n.jsx)("a",{className:"navbar-brand",href:"#",children:"RPSLS Game"})})}),l=a(9),d=a(3),u=a(1),b=a(4),j=a.n(b),m={name:"Covered",beat:[{card:"",message:""},{card:"",message:""}],image:"assets/card_covered.png"},p={name:"Empty",beat:[{card:"",message:""},{card:"",message:""}],image:"assets/card_empty.png"},O=[{name:"Rock",beat:[{card:"Lizard",message:"Rock crushes Lizard"},{card:"Scissors",message:"Rock crushes Scissors"}],image:"assets/card_rock.png"},{name:"Paper",beat:[{card:"Rock",message:"Paper covers Rock"},{card:"Spock",message:"Paper disproves Spock"}],image:"assets/card_paper.png"},{name:"Scissors",beat:[{card:"Paper",message:"Scissors cuts Paper"},{card:"Lizard",message:"Scissors decapitates Lizard"}],image:"assets/card_scissors.png"},{name:"Lizard",beat:[{card:"Spock",message:"Lizard poisons Spock"},{card:"Paper",message:"Lizard eats Paper"}],image:"assets/card_lizard.png"},{name:"Spock",beat:[{card:"Scissors",message:"Spock smashes Scissors"},{card:"Rock",message:"Spock vaporizes Rock"}],image:"assets/card_spock.png"}],h=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"card",style:{width:"100%",textAlign:"center",backgroundColor:"rgba(255, 255, 255, 0.192)"},children:Object(n.jsx)("img",{src:e.card.image,style:{width:e.width?e.width:"100%"},className:"rounded mx-auto d-block p-1 m-0",alt:"card-image"})})})},f=function(e){return Object(n.jsxs)("div",{style:{width:"100%"},children:[e.card&&!e.show&&Object(n.jsx)(h,{card:m,width:"100px"}),e.card&&e.show&&Object(n.jsx)(h,{card:e.card,width:"100px"}),!e.card&&Object(n.jsx)(h,{card:p,width:"100px"})]})},x=0,y=1,g=0,v=1,S=2,N=3,C=function(e){return{ok:!1,index:0,name:"",victories:0,score:0,readonly:e,type:y,turn:!1,choices:[],cardSelected:void 0,show:!1,status:g}},w=function(e){var t=Object(c.useState)(!1),a=Object(d.a)(t,2),s=(a[0],a[1]);Object(c.useEffect)((function(){s(!1)}),[e.status]);return Object(n.jsxs)("div",{className:"card player text-white ".concat(e.turn?"bg-primary":"bg-secondary"," ").concat(e.data.status==v&&"blink bg-warning"),style:{minWidth:"160px"},children:[Object(n.jsxs)("div",{className:"card-header",children:[e.data.name," ",e.data.victories>0&&Object(n.jsx)("span",{className:"badge badge-primary badge-pill",title:"victories",children:e.data.victories})]}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("div",{className:"card-text text-center mb-3",children:Object(n.jsx)(f,{card:e.data.cardSelected,show:e.show})}),Object(n.jsxs)("div",{style:{minHeight:"40px"},children:[e.data.type===y&&e.turn&&Object(n.jsxs)("button",{className:"btn btn-success",onClick:function(){s(!0),e.onReady()},disabled:!e.turn,children:["Choice ",e.readyCountDown>0&&Object(n.jsxs)("span",{children:["(",e.readyCountDown,")"]})]}),e.data.type===x&&e.turn&&Object(n.jsxs)("button",{className:"btn btn-success",onClick:e.onReady,disabled:!0,children:[Object(n.jsx)("div",{className:"spinner-border  spinner-border-sm text-primary",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})," Choosing"]}),!e.turn&&!1,e.data.status==g&&!1,e.data.status==v&&Object(n.jsxs)("div",{className:"alert alert-success m-1 p-1",children:["Winner (",e.data.score,")"]}),e.data.status==S&&Object(n.jsxs)("div",{className:"alert alert-danger m-1 p-1",children:["Loser (",e.data.score,")"]}),e.data.status==N&&Object(n.jsxs)("div",{className:"alert alert-success m-1 p-1",children:["Tied (",e.data.score,")"]})]})]})]})},k=function(e){return Object(n.jsxs)("button",{className:"btn m-0 p-0",onClick:function(){e.onSelect(e.card)},disabled:e.player.type==x,children:[e.player.type==x&&Object(n.jsx)(h,{card:m}),e.player.type==y&&Object(n.jsx)(h,{card:e.card})]})},R=function(e){var t=Object(c.useState)(Object(u.a)(Object(u.a)({},{players:[],current:0,state:T.START,roundHasWinner:!1}),{},{players:e.players})),a=Object(d.a)(t,2),s=a[0],r=a[1];Object(c.useEffect)((function(){s.players.length>0&&s.players.filter((function(e){return e.status===g})).every((function(e){return!!e.cardSelected}))&&(r(Object(u.a)(Object(u.a)({},s),{},{state:T.END_ROUND})),h()),s.current in s.players&&s.players[s.current].status===S?i(m):s.current in s.players&&s.players[s.current].type===x&&(b(),setTimeout((function(){i(O[p(0,5)])}),500))}),[s.current]);var i=function(e){r(Object(u.a)(Object(u.a)({},s),{},{players:s.players.map((function(t,a){return a===s.current?Object(u.a)(Object(u.a)({},t),{},{cardSelected:e}):t})),current:s.current+1,state:T.START})),console.log(s)},o=function(){var e=s.players.filter((function(e){return e.status===g})).map((function(e){return e.cardSelected})),t=e.filter((function(e,t,a){return a.indexOf(e)===t})).map((function(t){return{name:t.name,value:e.filter((function(e){return function(e,t){return e.beat.some((function(e){return e.card==t.name}))}(t,e)})).length,count:e.filter((function(e){return t.name===e.name})).length}})),a=Math.max.apply(null,t.map((function(e){return e.value}))),n=1==t.filter((function(e){return e.value==a})).length&&1==t.filter((function(e){return e.value==a}))[0].count,c=n?v:N;r(Object(u.a)(Object(u.a)({},s),{},{state:T.SHOW_RESULTS,roundHasWinner:n,players:s.players.map((function(s){if(s.status!==g)return s;var r=t.find((function(e){return e.name===s.cardSelected.name})).value;return console.log({cardsSelected:e,scores:t,maxScore:a,hasWinner:n,winnersStatus:c,player:s,score:r}),Object(u.a)(Object(u.a)({},s),{},{score:r,status:r==a?c:S,victories:r==a&&n?s.victories+1:s.victories})}))}))},l=function(){r(Object(u.a)(Object(u.a)({},s),{},{roundHasWinner:!1,state:T.START,current:0,players:s.players.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{cardSelected:void 0,score:0,status:s.roundHasWinner||e.status!==S?g:e.status})}))}))},b=function(){r(Object(u.a)(Object(u.a)({},s),{},{state:T.PLAYER_READY}))},p=function(e,t){return Math.floor(Math.random()*(t-e))+e},h=function(){j.a.fire({title:"RPSLS!",html:"All players have chosen.",timer:500,timerProgressBar:!0,willOpen:function(){j.a.showLoading()},willClose:function(){o()}}).then((function(e){}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"row",style:{minHeight:"55px"},children:Object(n.jsxs)("div",{className:"col col-12 mh-100",children:[Object(n.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){e.onExitBoard(s.players)},children:"Exit"}),s.state==T.END_ROUND&&Object(n.jsx)("button",{className:"btn btn-info m-1",onClick:function(){r(Object(u.a)(Object(u.a)({},s),{},{state:T.SHOW_CARDS})),setTimeout((function(){o()}),1e3)},children:"Show Cards"}),s.state==T.SHOW_RESULTS&&s.roundHasWinner&&Object(n.jsx)("button",{className:"btn btn-success m-1",onClick:l,children:"Next Round"}),s.state==T.SHOW_RESULTS&&!s.roundHasWinner&&Object(n.jsx)("button",{className:"btn btn-warning m-1",onClick:l,children:"Tie-breaker"})]})}),Object(n.jsx)("div",{className:"row",children:s.players.map((function(e,t){return Object(n.jsx)("div",{className:"col-6 col-md-4 col-lg-2 mb-3",children:Object(n.jsx)(w,{data:e,onReady:b,turn:t==s.current,show:s.state>=T.SHOW_CARDS},"playerBoard-".concat(e.index))})}))}),Object(n.jsx)("div",{className:"container fixed-bottom overflow-auto ".concat(s.state===T.PLAYER_READY&&"w3-animate-bottom"),children:s.state===T.PLAYER_READY&&Object(n.jsx)("div",{className:"row",children:O.map((function(e){return Object(n.jsx)("div",{className:"col m-0 p-0",children:Object(n.jsx)(k,{card:e,onSelect:function(){return i(e)},player:s.players[s.current]})},"slot_".concat(e.name))}))})})]})},P=function(e){var t=Object(c.useState)(e.data),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),l=o[0],b=o[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{className:"".concat(l&&"was-validated"),onSubmit:function(t){t.preventDefault(),""!=s.name?e.onConfirmPlayer(Object(u.a)(Object(u.a)({},s),{},{ok:!0})):b(!0)},noValidate:!0,children:[Object(n.jsxs)("div",{className:"input-group input-group-sm",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsxs)("span",{className:"input-group-text",children:["Player ",s.index]})}),Object(n.jsx)("input",{className:"form-control",placeholder:"Name",value:s.name,autoFocus:2!=s.index,disabled:s.type==x,onChange:function(e){r(Object(u.a)(Object(u.a)({},s),{},{name:e.target.value}))},required:!0}),Object(n.jsxs)("div",{className:"input-group-append",children:[s.type==x&&Object(n.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(e){r(Object(u.a)(Object(u.a)({},s),{},{name:"",type:y}))},children:"HUMAN"}),s.type==y&&Object(n.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(e){r(Object(u.a)(Object(u.a)({},s),{},{name:"CPU",type:x}))},children:"CPU"}),Object(n.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:"Confirm"}),!s.readonly&&Object(n.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return e.onCancelPlayer()},children:"Cancel"})]})]}),Object(n.jsx)("div",{className:"invalid-feedback",children:"Please choose a name."})]})})},T={CONFIG:0,START:1,PLAYER_READY:2,END_ROUND:3,SHOW_CARDS:4,SHOW_RESULTS:5},A={playersSlots:[Object(u.a)(Object(u.a)({},C(!0)),{},{index:1}),Object(u.a)(Object(u.a)({},C(!0)),{},{index:2})],players:[],start:!1,state:T.CONFIG,playersCounter:2},L=function(e){var t=Object(c.useState)(A),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),b=(o[0],o[1]);Object(c.useEffect)((function(){b(0===s.playersSlots.length)}),[s.playersSlots]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container overflow-auto ".concat(s.state==T.CONFIG&&"w3-animate-top"),children:s.state==T.CONFIG&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"row",style:{minHeight:"55px"},children:Object(n.jsxs)("div",{className:"col col-12 mh-100",children:[s.players.length>0&&Object(n.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){j.a.fire({icon:"question",html:"Are you sure to restart?",confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,focusCancel:!0,focusConfirm:!1,timer:4e3,timerProgressBar:!0}).then((function(e){e.isConfirmed&&r(A)}))},children:"Restart"}),s.players.length>1&&0==s.playersSlots.length&&Object(n.jsx)("button",{className:"btn btn-success m-1",onClick:function(){r(Object(u.a)(Object(u.a)({},s),{},{state:T.START}))},children:"Play"})]})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col col-2 d-none d-sm-none d-md-block",children:" "}),Object(n.jsx)("div",{className:"col col-12 col-md-8 ",children:Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsx)("li",{className:"list-group-item align-items-center",children:"Players"}),s.players.map((function(e){return Object(n.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.name,Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{className:"badge badge-secondary badge-pill",children:e.victories}),Object(n.jsx)("a",{className:"btn btn-outline-primary btn-sm ml-2",onClick:function(){!function(e){j.a.fire({icon:"info",html:"Are you sure to eliminate ".concat(e.name,"?"),confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,focusCancel:!0,focusConfirm:!1,timer:4e3,timerProgressBar:!0}).then((function(t){t.isConfirmed&&r(Object(u.a)(Object(u.a)({},s),{},{players:s.players.filter((function(t){return t!==e}))}))}))}(e)},children:Object(n.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(n.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]})]},"playerOk-".concat(e.index))})),s.playersSlots.map((function(e){return Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)(P,{data:e,onConfirmPlayer:function(t){!function(e,t){r(Object(u.a)(Object(u.a)({},s),{},{players:[].concat(Object(l.a)(s.players),[t]),playersSlots:s.playersSlots.filter((function(t){return e!==t}))}))}(e,t)},onCancelPlayer:function(){return t=e,void r(Object(u.a)(Object(u.a)({},s),{},{playersSlots:s.playersSlots.filter((function(e){return e!==t}))}));var t}})},e.index)})),0==s.playersSlots.length&&Object(n.jsx)("li",{className:"list-group-item",children:Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){r(Object(u.a)(Object(u.a)({},s),{},{playersSlots:[Object(u.a)(Object(u.a)({},C(!1)),{},{index:s.playersCounter+1})],playersCounter:s.playersCounter+1}))},children:"Add Player"})})]})}),Object(n.jsx)("div",{className:"col col-2 d-none d-sm-none d-md-block",children:" "})]})]})}),Object(n.jsx)("div",{className:"container overflow-auto ".concat(s.state>=T.START&&"w3-animate-top"),children:s.state>=T.START&&Object(n.jsx)(R,{players:s.players,onExitBoard:function(e){r(Object(u.a)(Object(u.a)({},s),{},{state:T.CONFIG,players:e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{cardSelected:void 0,score:0,status:g})}))}))}})})]})},E=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsx)(L,{})]})};var _=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(E,{})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(17),a(18);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),H()}},[[19,1,2]]]);
//# sourceMappingURL=main.94e6349b.chunk.js.map