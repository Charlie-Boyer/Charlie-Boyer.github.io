(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(8),i=r.n(c),o=(r(13),r(0)),u=r(1),s=r(4),b=r(18),p=(r(14),r(3));var f=function(){var e=Object(n.useRef)(),t=Object(n.useState)(new Array(21).fill("0000000000").fill("1111111111",20)),r=Object(s.a)(t,2),a=r[0],c=r[1],i=Object(n.useState)(new Array(21).fill("0000000000").fill("1111111111",20)),f=Object(s.a)(i,2),l=f[0],j=f[1],O=Object(n.useState)(1e3),d=Object(s.a)(O,2),y=d[0],x=d[1],w=Object(n.useReducer)((function(e,t){switch(t.type){case"down":return Object(o.a)(Object(o.a)({},e),{},{global:Object(o.a)(Object(o.a)({},e.global),{},{y:e.global.y+1}),parts:Object(u.a)(t.data.coordinates.map((function(e){return Object(o.a)({},e)})))});case"right":return Object(o.a)(Object(o.a)({},e),{},{global:Object(o.a)(Object(o.a)({},e.global),{},{x:e.global.x+1}),parts:Object(u.a)(e.parts.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{x:e.x+1})})))});case"left":return Object(o.a)(Object(o.a)({},e),{},{global:Object(o.a)(Object(o.a)({},e.global),{},{x:e.global.x-1}),parts:Object(u.a)(e.parts.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{x:e.x-1})})))});case"rotate":return Object(o.a)(Object(o.a)({},e),{},{pattern:Object(u.a)(t.data.newPattern),parts:Object(u.a)(t.data.coordinates.map((function(e){return Object(o.a)({},e)})))});case"reset":return L()}}),L()),g=Object(s.a)(w,2),v=g[0],h=g[1],m=Object(n.useState)(!1),k=Object(s.a)(m,2),E=k[0],A=k[1];function B(e,t,r){var n=[];return e.forEach((function(e,a){e.split("").map((function(e,c){0!=e&&n.push({x:t+c,y:r+a})}))})),n}function L(){var e,t={pattern:(e=[["0000","0oo0","0oo0","0000"],["0000","iiii","0000","0000"],["00l","lll","000"],["j00","jjj","000"],["0ss","ss0","000"],["zz0","0zz","000"],["0t0","ttt","000"]],e[Math.floor(7*Math.random())]),global:{x:0,y:0},parts:[{x:0,y:0}]};return t.class=Object(u.a)(t.pattern.join("")).find((function(e){return 0!=e})),t.global={x:3,y:0},t.parts=B(t.pattern,t.global.x,t.global.y),t}return Object(n.useEffect)((function(){window.addEventListener("keyup",r),window.addEventListener("keydown",n);var t=setInterval((function(){if(A(!0),e.current.piece.parts.find((function(t){return 0!=e.current.baseBoard[t.y+1][t.x]}))){var t=Object(u.a)(e.current.board);console.log(e.current.piece.parts,e.current.baseBoard),t.forEach((function(e,r){e.includes("0")||20==r||(t.splice(r,1),t.unshift("0000000000"))})),j(Object(u.a)(t)),h({type:"reset"})}else{var r=e.current.piece.parts.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{y:e.y+1})}));h({type:"down",data:{coordinates:r}})}}),y);function r(e){"ArrowDown"==e.code&&x(1e3)}function n(t){switch(t.code){case"ArrowDown":t.repeat||x(50);break;case"ArrowLeft":if(!E){if(A(!0),e.current.piece.parts.find((function(e){return e.x<0}))||e.current.piece.parts.find((function(t){return 0!=e.current.baseBoard[t.y][t.x-1]})))return;h({type:"left"})}break;case"ArrowRight":if(!E){if(A(!0),e.current.piece.parts.find((function(e){return e.x>9}))||e.current.piece.parts.find((function(t){return 0!=e.current.baseBoard[t.y][t.x+1]})))return;h({type:"right"})}break;case"KeyW":if(!E){if(A(!0),t.repeat)return;var r=e.current.piece.pattern.map((function(t,r){return e.current.piece.pattern.map((function(e){return e[e.length-1-r]})).join("")})),n=B(r,e.current.piece.global.x,e.current.piece.global.y);if(n.find((function(e){return e.x>9}))||n.find((function(e){return e.x<0})))return;h({type:"rotate",data:{newPattern:r,coordinates:n}})}break;case"ArrowUp":if(t.repeat)return;var a=e.current.piece.pattern.map((function(t,r){return e.current.piece.pattern.map((function(t,n){return e.current.piece.pattern[e.current.piece.pattern.length-1-n][r]})).join("")})),c=B(a,e.current.piece.global.x,e.current.piece.global.y);if(c.find((function(e){return e.x>9}))||c.find((function(e){return e.x<0})))return;h({type:"rotate",data:{newPattern:a,coordinates:c}})}}return function(){window.removeEventListener("keyup",r),window.removeEventListener("keydown",n),clearInterval(t)}}),[y]),Object(n.useEffect)((function(){for(var t=Object(u.a)(l),r=Object(u.a)(v.parts.map((function(e){return Object(o.a)({},e)})));!r.find((function(e){return 0!=t[e.y+1][e.x]}));)r=Object(u.a)(r.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{y:e.y+1})})));r.forEach((function(e,r){var n=t[e.y].split("");n[e.x]=v.class.toUpperCase(),t[e.y]=n.join("")})),v.parts.forEach((function(e,r){var n=t[e.y].split("");n[e.x]=v.class,t[e.y]=n.join("")})),c(Object(u.a)(t)),A(!1),e.current={piece:Object(o.a)({},v),board:Object(u.a)(t),baseBoard:Object(u.a)(l)}}),[v]),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"infos",children:"lignes:"}),Object(p.jsx)("div",{className:"board",children:a.map((function(e,t){return 20!=t&&Object(p.jsx)("div",{className:"row",children:e.split("").map((function(e){return Object(p.jsx)("div",{className:"cell ".concat(e,"-block")},Object(b.a)())}))},Object(b.a)())}))})]})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.81baaf49.chunk.js.map