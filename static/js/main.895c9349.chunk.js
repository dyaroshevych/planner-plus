(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e){e.exports=JSON.parse('{"lists":[{"colorId":0,"id":"b86ac249-41e3-4cb3-b80b-274d57ab9de5","name":"Shopping"},{"id":"cb697277-6ab4-4133-be77-fb2bda7d99fc","colorId":7,"name":"Books"}],"tasks":[{"id":"c85d7007-52aa-48bd-bbf4-b9b910965f89","listId":"b86ac249-41e3-4cb3-b80b-274d57ab9de5","name":"Apples x5","completed":false},{"id":"92edfa8d-0065-4d53-09a4-e426a74f9750","listId":"b86ac249-41e3-4cb3-b80b-274d57ab9de5","name":"Oranges x4","completed":false},{"id":"d96cc57a-4413-4965-ba0a-71015fe74aa4","listId":"cb697277-6ab4-4133-be77-fb2bda7d99fc","name":"You Don\'t Know JS Yet: Get Started - 2nd Edition","completed":true},{"id":"5a8f9c1e-0c0a-4b09-b8df-04a0ea9f1327","listId":"cb697277-6ab4-4133-be77-fb2bda7d99fc","name":"You Don\'t Know JS Yet: Scope & Closures - 2nd Edition","completed":true},{"id":"7b305355-70eb-4571-b2ac-ada2f88d602d","listId":"cb697277-6ab4-4133-be77-fb2bda7d99fc","name":"You Don\'t Know JS Yet: Objects & Classes - 2nd Edition","completed":true},{"id":"f08b58fa-4494-4c27-bb90-13e5c70b6b37","listId":"cb697277-6ab4-4133-be77-fb2bda7d99fc","name":"You Don\'t Know JS Yet: Types & Grammar - 2nd Edition","completed":true},{"id":"0bfa09a7-0b70-4ac9-b13f-222eea071c0b","listId":"cb697277-6ab4-4133-be77-fb2bda7d99fc","name":"You Don\'t Know JS Yet: Async & Performance - 2nd Edition","completed":false},{"id":"30ad897f-2ae9-4d56-b2d4-4b0a4d781434","listId":"cb697277-6ab4-4133-be77-fb2bda7d99fc","name":"You Don\'t Know JS Yet: ES.Next & Beyond - 2nd Edition","completed":false}],"colors":[{"id":0,"hex":"#42b883","name":"green"},{"id":1,"hex":"#64c4ed","name":"lightblue"},{"id":2,"hex":"#2a8fbd","name":"blue"},{"id":3,"hex":"#ffbbcc","name":"pink"},{"id":4,"hex":"#c355f5","name":"purple"},{"id":5,"hex":"#09011a","name":"black"},{"id":6,"hex":"#ff6464","name":"red"},{"id":7,"hex":"#f0db4f","name":"yellow"}]}')},function(e,t,a){e.exports=a.p+"static/media/remove.b175098f.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/close.51b6f612.svg"},function(e,t,a){e.exports=a.p+"static/media/edit.72322324.svg"},function(e,t,a){e.exports=a.p+"static/media/menu.77291a97.svg"},function(e,t,a){e.exports=a.p+"static/media/plus.263881f5.svg"},,,,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(23),s=a.n(i),l=a(9),o=a(2),r=a(16),d=a(6),m=a(7),u=a(11),b=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:t&&11).toString(16)}))},f=a(18),k=a.n(f),p=a(19),v=a.n(p),E=a(20),_=a.n(E),x=a(21),g=a.n(x),h=a(12),N=a.n(h),O=(a(31),function(e){var t=e.colors,a=e.listAdd,i=function(){m(!1),x(""),p(0)},s=function(){i(),a(_||"New Folder",f)},l=Object(n.useState)(!1),r=Object(o.a)(l,2),d=r[0],m=r[1],u=Object(n.useState)(0),b=Object(o.a)(u,2),f=b[0],p=b[1],v=Object(n.useState)(""),E=Object(o.a)(v,2),_=E[0],x=E[1];return c.a.createElement("div",null,c.a.createElement(I,{lists:[{id:"addTask",icon:g.a,name:"Add Folder",className:"sidebar__list-button",active:d}],listClick:function(){m(!d)}}),d?c.a.createElement("div",{className:"sidebar__popup-container"},c.a.createElement("div",{className:"sidebar__popup"},c.a.createElement("img",{onClick:i,className:"sidebar__popup-close",src:k.a,alt:"close"}),c.a.createElement("input",{value:_,type:"text",className:"sidebar__popup-input field",placeholder:"Folder name",onChange:function(e){x(e.target.value)},onKeyDown:function(e){"Enter"===e.key?s():"Escape"===e.key&&i()},autoFocus:!0}),c.a.createElement("div",{className:"sidebar__popup-colors"},t.map((function(e){return c.a.createElement(j,{key:e.id,color:t[e.id].hex,className:f===Number(e.id)?"active":null,onClick:function(){p(Number(e.id))}})}))),c.a.createElement("div",{className:"sidebar__popup-button button button--green",onClick:s},"Add"))):null)}),S=(a(32),function(e){var t=e.addTask,a=function(){b&&(t(b),i())},i=function(){f(""),d(!r)},s=Object(n.useState)(!1),l=Object(o.a)(s,2),r=l[0],d=l[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),b=u[0],f=u[1];return c.a.createElement("div",{className:"tasks__item tasks__add-container"},r?c.a.createElement("div",null,c.a.createElement("input",{className:"tasks__add-input field",placeholder:"Task text",value:b,onChange:function(e){f(e.target.value)},onKeyDown:function(e){"Enter"===e.key?a():"Escape"===e.key&&i()},autoFocus:!0}),c.a.createElement("div",{className:"tasks__add-submit button button--green",onClick:a},"Add Task"),c.a.createElement("div",{className:"tasks__add-cancel button button--gray",onClick:i},"Cancel")):c.a.createElement("div",{className:"tasks__add-button",onClick:i},c.a.createElement("div",{className:"tasks__add-button-icon"},c.a.createElement("img",{src:g.a,alt:""})),c.a.createElement("p",{className:"tasks__item-name"},"New Task")))}),j=(a(33),function(e){var t=e.color,a=e.className,n=e.onClick;return c.a.createElement("span",{onClick:n,className:"badge ".concat(a||""),style:{backgroundColor:t}})}),y=(a(34),c.a.memo((function(e){var t=e.list,a=e.listIdx,n=e.tasks,i=e.checkboxClick,s=e.addTask,l=e.editTask,o=e.removeTask,r=e.listSelect,d=e.editFolder;return c.a.createElement("div",{className:"tasks__folder"},c.a.createElement(C,{key:t.id,list:t,listIdx:a,listSelect:r,listEdit:d}),c.a.createElement("ul",{className:"tasks__folder-list"},n.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(w,{task:e,toggleTask:i,removeTask:o,editTask:l}))})),c.a.createElement("li",null,c.a.createElement(S,{key:t.id,addTask:function(e){return s(t.id,e)}}))))}))),C=(a(35),function(e){var t=e.list,a=e.listIdx,i=e.listSelect,s=e.listEdit,l=function(){f(!1),E&&E!==t.name&&s(t.id,E)},r=function(){_(t.name),f(!b)},d=Object(n.useState)(!1),u=Object(o.a)(d,2),b=u[0],f=u[1],k=Object(n.useState)(t.name),p=Object(o.a)(k,2),E=p[0],_=p[1],x=Object(m.f)();return c.a.createElement("div",null,b&&c.a.createElement("div",{className:"tasks__folder-edit"},c.a.createElement("input",{className:"tasks__folder-edit-input field",type:"text",onChange:function(e){_(e.target.value)},value:E,onKeyDown:function(e){"Enter"===e.key?l():"Escape"===e.key&&r()},autoFocus:!0}),c.a.createElement("div",{className:"tasks__folder-edit-button button button--green",onClick:l},"Save Changes"),c.a.createElement("div",{className:"tasks__folder-edit-button button button--gray",onClick:r},"Cancel")),!b&&c.a.createElement("div",{className:"tasks__folder-heading"},c.a.createElement("h2",{className:"tasks__folder-heading-text",style:{color:t.color},onClick:function(){i(t.id),x.push("/lists/".concat(a))}},t.name),c.a.createElement("img",{className:"tasks__folder-heading-edit",src:v.a,alt:"Edit",onClick:r})))}),I=(a(41),function(e){var t=e.lists,a=e.listClick,n=e.listRemove,i=Object(m.f)();return t.length?c.a.createElement("ul",{className:"sidebar__list"},t.map((function(e,t){return c.a.createElement("li",{key:e.id,className:e.active?["active",e.className].join(" "):e.className,onClick:a||function(){return i.push(t?"/lists/".concat(t):"/")}},(s=e.icon,l=e.color,s?c.a.createElement("span",null,c.a.createElement("img",{src:s,alt:"Icon"})):c.a.createElement(j,{color:l})),c.a.createElement("span",{className:"sidebar__list-item-name"},e.name),e.color&&c.a.createElement("img",{className:"sidebar__list-item-remove",src:N.a,alt:"remove",onClick:function(t){return function(e,t){e.stopPropagation(),window.confirm('Are you sure you want to delete "'.concat(t.name,'"?'))&&n(t.id)}(t,e)}}));var s,l}))):null}),w=(a(42),c.a.memo((function(e){var t=e.task,a=e.toggleTask,i=e.removeTask,s=e.editTask,l=function(){b(!1),p&&p!==t.name?s(t.id,p):E(t.name)},r=function(){E(t.name),b(!u)},d=Object(n.useState)(!1),m=Object(o.a)(d,2),u=m[0],b=m[1],f=Object(n.useState)(t.name),k=Object(o.a)(f,2),p=k[0],E=k[1];return c.a.createElement("div",{className:"tasks__item-container"},u&&c.a.createElement("div",{className:"tasks__item"},c.a.createElement("div",{className:"tasks__item-edit-container"},c.a.createElement("input",{className:"tasks__item-edit-input field",type:"text",onChange:function(e){E(e.target.value)},value:p,onKeyDown:function(e){"Enter"===e.key?l():"Escape"===e.key&&r()},autoFocus:!0}),c.a.createElement("div",{className:"tasks__item-edit-button button button--green",onClick:l},"Save Changes"),c.a.createElement("div",{className:"tasks__item-edit-button button button--gray",onClick:r},"Cancel"))),!u&&c.a.createElement("div",{className:"tasks__item",onClick:function(){return a(t.id)}},c.a.createElement("input",{className:"tasks__item-checkbox",type:"checkbox",id:"input__".concat(t.listId,"-").concat(t.id),checked:t.completed,onChange:function(){return a(t.id)}}),c.a.createElement("label",{className:"tasks__item-label",htmlFor:"input__".concat(t.listId,"-").concat(t.id)},c.a.createElement("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))),c.a.createElement("p",{className:"tasks__item-name"},t.name),c.a.createElement("img",{className:"tasks__item-remove",src:N.a,alt:"remove",onClick:function(e){i(e,t.id)}}),c.a.createElement("img",{className:"tasks__item-edit",src:v.a,alt:"edit",onClick:function(e){e.stopPropagation(),b(!0)}})))}))),T=(a(43),{id:"allTasks",icon:_.a,name:"All tasks",active:!0}),J=function(){var e=function(e){localStorage.setItem("lists",JSON.stringify(e)),x(e)},t=function(e){localStorage.setItem("tasks",JSON.stringify(e)),S(e)},a=function(t){for(var a=Object(d.a)(_),n=0;n<a.length;n++)a[n].active&&(a[n].active=!1),a[n].id===t&&(a[n].active=!0);e(a)},i=function(e){var a=N.findIndex((function(t){return t.id===e})),n=Object(d.a)(N);n[a].completed=!n[a].completed,t(n)},s=function(e,a){var n=Object(d.a)(N);n.push({id:b(),listId:e,name:a,completed:!1}),t(n)},l=function(e,a){var n=N.findIndex((function(t){return t.id===e})),c=Object(d.a)(N);c[n].name=a,t(c)},f=function(e,a){e.stopPropagation();var n=Object(d.a)(N),c=N.findIndex((function(e){return e.id===a}));n.splice(c,1),t(n)},k=function(t,a){var n=_.findIndex((function(e){return e.id===t})),c=Object(d.a)(_);c[n].name=a,e(c)},p=u.colors,v=Object(n.useState)(function e(){var t=JSON.parse(localStorage.getItem("lists"));if(t)return t;var a=[Object(r.a)({},T)].concat(Object(d.a)(u.lists.map((function(e){return e.color=p[e.colorId].hex,e}))));return localStorage.setItem("lists",JSON.stringify(a)),e}()),E=Object(o.a)(v,2),_=E[0],x=E[1],g=Object(n.useState)(function(){var e=JSON.parse(localStorage.getItem("tasks"));return e||(localStorage.setItem("tasks",JSON.stringify(u.tasks)),u.tasks)}()),h=Object(o.a)(g,2),N=h[0],S=h[1],j=Object(n.useState)(window.innerWidth>700),C=Object(o.a)(j,2),w=C[0],J=C[1];window.addEventListener("resize",(function(){var e=window.innerWidth<700;w===e&&J(!e)}));var Y=Object(m.f)();return Object(n.useEffect)((function(){if("/"===Y.location.pathname)a("allTasks");else{var e=Number(Y.location.pathname.split("lists/")[1]);e&&e<_.length?a(_[e].id):Y.replace("/")}}),[_.length,Y.location.pathname]),c.a.createElement("div",{className:"todo"},w?c.a.createElement("div",{className:"sidebar"},c.a.createElement(I,{lists:_,listRemove:function(a){var n=[];if(_.length>2){var c=(n=Object(d.a)(_)).findIndex((function(e){return e.id===a}));n[c].active&&(n[0].active=!0,Y.replace("/")),n.splice(c,1)}else Y.push("/");var i=N.filter((function(e){return e.listId!==a}));e(n),t(i)}}),c.a.createElement(O,{colors:p,listAdd:function(t,a){var n={id:b(),name:t,colorId:a};n.color=p[n.colorId].hex,_.length?e([].concat(Object(d.a)(_),[n])):e([Object(r.a)({},T),n]),Y.push("/lists/".concat(_.length))}})):c.a.createElement("div",{className:"todo__menu-button",onClick:function(){}},"menu"),c.a.createElement("div",{className:"tasks"},c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/"},(function(){return N.length?_.map((function(e,t){var n=N.filter((function(t){return t.listId===e.id}));return"allTasks"!==e.id?c.a.createElement(y,{key:e.id,list:e,listIdx:t,tasks:n,checkboxClick:i,addTask:s,editTask:l,removeTask:f,listSelect:a,editFolder:k}):null})):c.a.createElement("div",{className:"tasks__blank"},"No Tasks Yet")})),c.a.createElement(m.a,{path:"/lists/"},(function(){var e=_.findIndex((function(e){return e.active}));return-1===e?(Y.replace("/"),null):c.a.createElement(y,{list:_[e],listIdx:e,tasks:N.filter((function(t){return t.listId===_[e].id})),checkboxClick:i,addTask:s,editTask:l,removeTask:f,listSelect:a,editFolder:k})})))))};s.a.render(c.a.createElement(l.a,null,c.a.createElement(J,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.895c9349.chunk.js.map