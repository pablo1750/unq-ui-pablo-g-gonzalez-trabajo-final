(this.webpackJsonprpsls=this.webpackJsonprpsls||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),s=a.n(n),r=a(8),i=a.n(r),l=(a.p,a(15),function(e){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(c.jsx)("a",{className:"navbar-brand",href:"#",children:"RPSLS Game"})})}),o=a(9),d=a(3),u=a(1),b=a(4),j=a.n(b),m={name:"Covered",beat:[{card:"",message:""},{card:"",message:""}],image:"assets/card_covered.png"},p={name:"Empty",beat:[{card:"",message:""},{card:"",message:""}],image:"assets/card_empty.png"},h=[{name:"Rock",beat:[{card:"Lizard",message:"Rock crushes Lizard"},{card:"Scissors",message:"Rock crushes Scissors"}],image:"assets/card_rock.png"},{name:"Paper",beat:[{card:"Rock",message:"Paper covers Rock"},{card:"Spock",message:"Paper disproves Spock"}],image:"assets/card_paper.png"},{name:"Scissors",beat:[{card:"Paper",message:"Scissors cuts Paper"},{card:"Lizard",message:"Scissors decapitates Lizard"}],image:"assets/card_scissors.png"},{name:"Lizard",beat:[{card:"Spock",message:"Lizard poisons Spock"},{card:"Paper",message:"Lizard eats Paper"}],image:"assets/card_lizard.png"},{name:"Spock",beat:[{card:"Scissors",message:"Spock smashes Scissors"},{card:"Rock",message:"Spock vaporizes Rock"}],image:"assets/card_spock.png"}],O=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"card",style:{width:"100%",textAlign:"center",backgroundColor:"rgba(255, 255, 255, 0.192)"},children:Object(c.jsx)("img",{src:e.card.image,style:{width:e.width?e.width:"100%"},className:"rounded mx-auto d-block p-1 m-0",alt:"card-image"})})})},x=function(e){return Object(c.jsxs)("div",{style:{width:"100%"},children:[e.card&&!e.show&&Object(c.jsx)(O,{card:m,width:"100px"}),e.card&&e.show&&Object(c.jsx)(O,{card:e.card,width:"100px"}),!e.card&&Object(c.jsx)(O,{card:p,width:"100px"})]})},f=0,v=1,g=0,y=1,S=2,N=3,w=function(e){return{ok:!1,index:0,name:"",victories:0,score:0,readonly:e,type:v,turn:!1,choices:[],cardSelected:void 0,show:!1,status:g}},C=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),s=(a[0],a[1]);Object(n.useEffect)((function(){s(!1)}),[e.status]);return Object(c.jsxs)("div",{className:"card player text-white ".concat(e.turn?"bg-primary":"bg-secondary"," ").concat(e.data.status==y&&"blink bg-warning"),style:{minWidth:"160px"},children:[Object(c.jsxs)("div",{className:"card-header  d-flex justify-content-between align-items-center p-2",style:{minHeight:"38px"},children:[e.data.type===v&&Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-person",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})}),e.data.type===f&&Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-cpu",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"})}),e.data.victories>0&&Object(c.jsxs)("span",{className:"badge badge-warning badge-pill pb-1",title:"victories",children:[e.data.victories,Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trophy ml-1",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"})})]})]}),Object(c.jsxs)("div",{className:"card-body p-2",children:[Object(c.jsxs)("div",{className:"card-title",children:[e.data.name.substring(0,6),e.data.name.length>6&&"\u2026"]}),Object(c.jsx)("div",{className:"card-text text-center mb-3",children:Object(c.jsx)(x,{card:e.data.cardSelected,show:e.show})}),Object(c.jsxs)("div",{style:{minHeight:"40px"},children:[e.data.type===v&&e.turn&&Object(c.jsxs)("button",{className:"btn btn-success",onClick:function(){s(!0),e.onReady()},disabled:!e.turn,children:["Choice ",e.readyCountDown>0&&Object(c.jsxs)("span",{children:["(",e.readyCountDown,")"]})]}),e.data.type===f&&e.turn&&Object(c.jsxs)("button",{className:"btn btn-success",onClick:e.onReady,disabled:!0,children:[Object(c.jsx)("div",{className:"spinner-border  spinner-border-sm text-primary",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})," Choosing"]}),!e.turn&&!1,e.data.status==g&&!1,e.data.status==y&&Object(c.jsxs)("div",{className:"alert alert-success m-1 p-1",children:["Winner (",e.data.score,")"]}),e.data.status==S&&Object(c.jsxs)("div",{className:"alert alert-danger m-1 p-1",children:["Loser (",e.data.score,")"]}),e.data.status==N&&Object(c.jsxs)("div",{className:"alert alert-success m-1 p-1",children:["Tied (",e.data.score,")"]})]})]})]})},k=function(e){return Object(c.jsxs)("button",{className:"btn m-0 p-0",onClick:function(){e.onSelect(e.card)},disabled:e.player.type==f,children:[e.player.type==f&&Object(c.jsx)(O,{card:m}),e.player.type==v&&Object(c.jsx)(O,{card:e.card})]})},A=function(e){var t=Object(n.useState)(Object(u.a)(Object(u.a)({},{players:[],current:0,state:H.START,roundHasWinner:!1}),{},{players:e.players})),a=Object(d.a)(t,2),s=a[0],r=a[1];Object(n.useEffect)((function(){s.players.length>0&&s.players.filter((function(e){return e.status===g})).every((function(e){return!!e.cardSelected}))&&(r(Object(u.a)(Object(u.a)({},s),{},{state:H.END_ROUND})),O()),s.current in s.players&&s.players[s.current].status===S?i(m):s.current in s.players&&s.players[s.current].type===f&&(b(),setTimeout((function(){i(h[p(0,5)])}),500))}),[s.current]);var i=function(e){r(Object(u.a)(Object(u.a)({},s),{},{players:s.players.map((function(t,a){return a===s.current?Object(u.a)(Object(u.a)({},t),{},{cardSelected:e}):t})),current:s.current+1,state:H.START})),console.log(s)},l=function(){var e=s.players.filter((function(e){return e.status===g})).map((function(e){return e.cardSelected})),t=e.filter((function(e,t,a){return a.indexOf(e)===t})).map((function(t){return{name:t.name,value:e.filter((function(e){return function(e,t){return e.beat.some((function(e){return e.card==t.name}))}(t,e)})).length,count:e.filter((function(e){return t.name===e.name})).length}})),a=Math.max.apply(null,t.map((function(e){return e.value}))),c=1==t.filter((function(e){return e.value==a})).length&&1==t.filter((function(e){return e.value==a}))[0].count,n=c?y:N;r(Object(u.a)(Object(u.a)({},s),{},{state:H.SHOW_RESULTS,roundHasWinner:c,players:s.players.map((function(s){if(s.status!==g)return s;var r=t.find((function(e){return e.name===s.cardSelected.name})).value;return console.log({cardsSelected:e,scores:t,maxScore:a,hasWinner:c,winnersStatus:n,player:s,score:r}),Object(u.a)(Object(u.a)({},s),{},{score:r,status:r==a?n:S,victories:r==a&&c?s.victories+1:s.victories})}))}))},o=function(){r(Object(u.a)(Object(u.a)({},s),{},{roundHasWinner:!1,state:H.START,current:0,players:s.players.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{cardSelected:void 0,score:0,status:s.roundHasWinner||e.status!==S?g:e.status})}))}))},b=function(){r(Object(u.a)(Object(u.a)({},s),{},{state:H.PLAYER_READY}))},p=function(e,t){return Math.floor(Math.random()*(t-e))+e},O=function(){j.a.fire({title:"RPSLS!",html:"All players have chosen.",timer:500,timerProgressBar:!0,willOpen:function(){j.a.showLoading()},willClose:function(){l()}}).then((function(e){}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"row",style:{minHeight:"55px"},children:Object(c.jsxs)("div",{className:"col col-12 mh-100",children:[Object(c.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){e.onExitBoard(s.players)},children:"Exit"}),s.state==H.END_ROUND&&Object(c.jsx)("button",{className:"btn btn-info m-1",onClick:function(){r(Object(u.a)(Object(u.a)({},s),{},{state:H.SHOW_CARDS})),setTimeout((function(){l()}),1e3)},children:"Show Cards"}),s.state==H.SHOW_RESULTS&&s.roundHasWinner&&Object(c.jsx)("button",{className:"btn btn-success m-1",onClick:o,children:"Next Round"}),s.state==H.SHOW_RESULTS&&!s.roundHasWinner&&Object(c.jsx)("button",{className:"btn btn-warning m-1",onClick:o,children:"Tie-breaker"})]})}),Object(c.jsx)("div",{className:"row d-flex justify-content-center",children:s.players.map((function(e,t){return Object(c.jsx)("div",{className:"col-6 col-md-4 col-lg-2 mb-3",children:Object(c.jsx)(C,{data:e,onReady:b,turn:t==s.current,show:s.state>=H.SHOW_CARDS},"playerBoard-".concat(e.index))})}))}),Object(c.jsx)("div",{className:"container fixed-bottom overflow-auto ".concat(s.state===H.PLAYER_READY&&"w3-animate-bottom"),children:s.state===H.PLAYER_READY&&Object(c.jsx)("div",{className:"row",children:h.map((function(e){return Object(c.jsx)("div",{className:"col m-0 p-0",children:Object(c.jsx)(k,{card:e,onSelect:function(){return i(e)},player:s.players[s.current]})},"slot_".concat(e.name))}))})})]})},R=function(e){var t=Object(n.useState)(e.data),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(!1),l=Object(d.a)(i,2),o=l[0],b=l[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{className:"".concat(o&&"was-validated"),onSubmit:function(t){t.preventDefault(),""!=s.name?e.onConfirmPlayer(Object(u.a)(Object(u.a)({},s),{},{ok:!0})):b(!0)},noValidate:!0,children:[Object(c.jsxs)("div",{className:"input-group input-group-sm",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsxs)("span",{className:"input-group-text",children:["Player ",s.index]})}),Object(c.jsx)("input",{className:"form-control",placeholder:"Name",value:s.name,autoFocus:2!=s.index,disabled:s.type==f,onChange:function(e){r(Object(u.a)(Object(u.a)({},s),{},{name:e.target.value}))},required:!0,maxLength:30}),Object(c.jsxs)("div",{className:"input-group-append",children:[s.type==f&&Object(c.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(e){r(Object(u.a)(Object(u.a)({},s),{},{name:"",type:v}))},children:"HUMAN"}),s.type==v&&Object(c.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(e){r(Object(u.a)(Object(u.a)({},s),{},{name:"CPU",type:f}))},children:"CPU"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-outline-success",children:"Confirm"}),!s.readonly&&Object(c.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return e.onCancelPlayer()},children:"Cancel"})]})]}),Object(c.jsx)("div",{className:"invalid-feedback",children:"Please choose a name."})]})})},H={CONFIG:0,START:1,PLAYER_READY:2,END_ROUND:3,SHOW_CARDS:4,SHOW_RESULTS:5},P={playersSlots:[Object(u.a)(Object(u.a)({},w(!0)),{},{index:1}),Object(u.a)(Object(u.a)({},w(!0)),{},{index:2})],players:[],start:!1,state:H.CONFIG,playersCounter:2},L=function(e){var t=Object(n.useState)(P),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(!1),l=Object(d.a)(i,2),b=(l[0],l[1]);Object(n.useEffect)((function(){b(0===s.playersSlots.length)}),[s.playersSlots]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"container overflow-auto ".concat(s.state==H.CONFIG&&"w3-animate-top"),children:s.state==H.CONFIG&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"row",style:{minHeight:"55px"},children:Object(c.jsxs)("div",{className:"col col-12 mh-100",children:[s.players.length>0&&Object(c.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){j.a.fire({icon:"question",html:"Are you sure to restart?",confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,focusCancel:!0,focusConfirm:!1,timer:4e3,timerProgressBar:!0}).then((function(e){e.isConfirmed&&r(P)}))},children:"Restart"}),s.players.length>1&&0==s.playersSlots.length&&Object(c.jsx)("button",{className:"btn btn-success m-1",onClick:function(){r(Object(u.a)(Object(u.a)({},s),{},{state:H.START}))},children:"Play"})]})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col col-2 d-none d-sm-none d-md-block",children:" "}),Object(c.jsx)("div",{className:"col col-12 col-md-8 ",children:Object(c.jsxs)("ul",{className:"list-group",children:[Object(c.jsx)("li",{className:"list-group-item align-items-center",children:"Players"}),s.players.map((function(e){return Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.name,Object(c.jsxs)("span",{children:[Object(c.jsx)("span",{className:"badge badge-secondary badge-pill",children:e.victories}),Object(c.jsx)("a",{className:"btn btn-outline-primary btn-sm ml-2",onClick:function(){!function(e){j.a.fire({icon:"info",html:"Are you sure to eliminate ".concat(e.name,"?"),confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,focusCancel:!0,focusConfirm:!1,timer:4e3,timerProgressBar:!0}).then((function(t){t.isConfirmed&&r(Object(u.a)(Object(u.a)({},s),{},{players:s.players.filter((function(t){return t!==e}))}))}))}(e)},children:Object(c.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]})]},"playerOk-".concat(e.index))})),s.playersSlots.map((function(e){return Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)(R,{data:e,onConfirmPlayer:function(t){!function(e,t){r(Object(u.a)(Object(u.a)({},s),{},{players:[].concat(Object(o.a)(s.players),[t]),playersSlots:s.playersSlots.filter((function(t){return e!==t}))}))}(e,t)},onCancelPlayer:function(){return t=e,void r(Object(u.a)(Object(u.a)({},s),{},{playersSlots:s.playersSlots.filter((function(e){return e!==t}))}));var t}})},e.index)})),0==s.playersSlots.length&&Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){r(Object(u.a)(Object(u.a)({},s),{},{playersSlots:[Object(u.a)(Object(u.a)({},w(!1)),{},{index:s.playersCounter+1})],playersCounter:s.playersCounter+1}))},children:"Add Player"})})]})}),Object(c.jsx)("div",{className:"col col-2 d-none d-sm-none d-md-block",children:" "})]})]})}),Object(c.jsx)("div",{className:"container overflow-auto ".concat(s.state>=H.START&&"w3-animate-top"),children:s.state>=H.START&&Object(c.jsx)(A,{players:s.players,onExitBoard:function(e){r(Object(u.a)(Object(u.a)({},s),{},{state:H.CONFIG,players:e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{cardSelected:void 0,score:0,status:g})}))}))}})})]})},T=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(L,{})]})};var z=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(T,{})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(16),a(17),a(18);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),E()}},[[19,1,2]]]);
//# sourceMappingURL=main.15bb78c1.chunk.js.map