(this["webpackJsonptodo-react-redux-typescript-cypress"]=this["webpackJsonptodo-react-redux-typescript-cypress"]||[]).push([[0],{41:function(e,t,o){},42:function(e,t,o){"use strict";o.r(t);var n,c,r=o(0),i=o.n(r),a=o(12),l=o.n(a),s=o(10),d=o(22),u=o(13),j=o(14),x=j.a.div(n||(n=Object(u.a)(["\n  width: 100%;\n  \n  @media (min-width: 768px) {  \n    width: 50%;\n  }\n"]))),m=o(28),h=o(17),f=function(){return Object(s.b)()},b=s.c,p=o(23),v=o(29),O=o(16);!function(e){e.All="All",e.Active="Active",e.Done="Done"}(c||(c={}));var y=c,k={todos:[],filter:y.All},g=Object(O.b)({name:"todo",initialState:k,reducers:{addTodo:function(e,t){e.todos=[].concat(Object(v.a)(e.todos),[t.payload])},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t.payload.id}))},toggleCompleted:function(e,t){e.todos=e.todos.map((function(e){return e.id===t.payload.id?Object(p.a)(Object(p.a)({},e),{},{completed:!e.completed}):e}))},setFilter:function(e,t){e.filter=t.payload}}}),w=g.actions,N=w.addTodo,A=w.removeTodo,C=w.toggleCompleted,D=w.setFilter,T=function(e){return e.todo.filter===y.Active?e.todo.todos.filter((function(e){return!e.completed})):e.todo.filter===y.Done?e.todo.todos.filter((function(e){return e.completed})):e.todo.todos},q=g.reducer,B=o(5);var I=function(){var e=f(),t=function(t){e(D(t))};return Object(B.jsx)("div",{children:Object(B.jsxs)(m.a,{className:"mt-3",children:[Object(B.jsx)(h.a,{onClick:function(){return t(y.All)},variant:"link text-decoration-none",children:"All"}),Object(B.jsx)(h.a,{onClick:function(){return t(y.Active)},variant:"link text-decoration-none",children:"Active"}),Object(B.jsx)(h.a,{onClick:function(){return t(y.Done)},variant:"link text-decoration-none",children:"Done"})]})})};var E,F=function(){var e=f();return Object(B.jsx)("div",{className:"w-100",children:Object(B.jsx)("input",{onKeyDown:function(t){if("Enter"===t.key&&""!==t.currentTarget.value){var o={id:Date.now(),title:t.currentTarget.value,completed:!1};e(N(o)),t.currentTarget.value=""}},type:"text",placeholder:"add new todo",className:"form-control form-control-color-secondary p-4"})})},J=o(15),S=o(21),W=o(44),G=Object(j.a)(J.a.Item)(E||(E=Object(u.a)(["\n  height: 50px;\n  .checked label {\n    text-decoration: line-through;\n  }\n  .icon {\n    cursor: pointer;\n    opacity: 0;\n  }\n  &:hover .icon {\n    opacity: 1;\n  }\n}\n"])));var K=function(e){var t=e.item,o=f(),n=t.completed?"checked text-decoration-line-through":"";return Object(B.jsx)(G,{className:"todo",children:Object(B.jsxs)(S.a.Group,{controlId:"formBasicCheckbox",className:"d-flex align-items-center",children:[Object(B.jsx)(S.a.Check,{onClick:function(){o(C(t))},type:"checkbox",label:t.title,className:"checkbox flex-grow-1 text-secondary flex-grow-1 ".concat(n)}),Object(B.jsx)(W.a,{onClick:function(){o(A(t))},className:"icon text-primary"})]})})};var L=function(){var e=b(T);return Object(B.jsx)("div",{className:"w-100",children:Object(B.jsx)(J.a,{children:e.map((function(e){return Object(B.jsx)(K,{item:e},e.id)}))})})};var M=function(){return Object(B.jsx)("div",{className:"container-sm d-flex justify-content-center h-100 w-100",children:Object(B.jsxs)(x,{className:"d-flex flex-column align-items-center",children:[Object(B.jsxs)(d.a,{className:"text-center mt-5",children:[Object(B.jsx)("blockquote",{className:"blockquote",children:Object(B.jsx)("h1",{className:"h1 title text-primary text-uppercase",children:"To Do List"})}),Object(B.jsx)(d.a.Caption,{className:"blockquote-footer text-secondary",children:"you wont forget anything today!"})]}),Object(B.jsx)(F,{}),Object(B.jsx)(L,{}),Object(B.jsx)(I,{})]})})},$=Object(O.a)({reducer:{todo:q}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(40),o(41);l.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(s.a,{store:$,children:Object(B.jsx)(M,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.7badcd1c.chunk.js.map