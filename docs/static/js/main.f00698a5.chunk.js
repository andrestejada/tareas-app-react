(this["webpackJsonptareas-app"]=this["webpackJsonptareas-app"]||[]).push([[0],{46:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(20),c=a.n(n),o=(a(46),a(3)),s=a(15),i=a(6),u=a(14),l=a(2),b=a(13),j=a(5),p=a.n(j),d=a(7),m="FORMULARIO_PROYECTO",O="OBTENER_PROYECTOS",f="AGREGAR_PROYECTO",h="VALIDAR_FORMULARIO",y="PROYECTO_ACTUAL",x="ELIMINAR_PROYECTO",v="PROYECTO_ERROR",g="TAREAS_PROYECTO",N="AGREGAR_TAREA",_="VALIDAR_TAREA",E="ELIMINAR_TAREA",R="TAREA_ACTUAL",w="ACTUALIZAR_TAREA",k="LIMPIAR_TAREA",T="MOSTRAR_ALERTA",A="OCULTAR_ALERTA",S="REGISTRO_EXITOSO",C="REGISTRO_ERROR",I="OBTENER_USUARIO",P="LOGIN_EXITOSO",L="LOGIN_ERROR",F="CERRAR_SESION",U=function(e,t){return function(){var a=Object(d.a)(p.a.mark((function a(r){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r(D(e,t)),setTimeout((function(){r(G())}),2e3);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},D=function(e,t){return{type:T,payload:{msg:e,categoria:t}}},G=function(){return{type:A}},M=a(40),Y=a.n(M).a.create({baseURL:"https://node-server-tareas.herokuapp.com/"}),V=function(e){e?Y.defaults.headers.common["x-auth-token"]=e:delete Y.defaults.headers.common["x-auth-token"]},X=function(e){return{type:S,payload:e}},B=function(e){return{type:C,payload:e}},J=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=localStorage.getItem("token"))&&V(a),e.prev=2,e.next=5,Y.get("/api/auth");case 5:r=e.sent,console.log(r),t(H(r.data.usuario)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},z=function(e){return{type:L,payload:e}},H=function(e){return{type:I,payload:e}},Z=function(e){return{type:P,payload:e}},q=a(0),K=function(e){var t=e.history,a=Object(o.b)(),n=Object(o.c)((function(e){return e.alerta})).alerta,c=Object(o.c)((function(e){return e.auth})),i=c.mensaje,j=c.autenticado;Object(r.useEffect)((function(){j&&t.push("/proyectos"),i&&a(U(i.msg,i.categoria))}),[i,j,t]);var m=Object(r.useState)({email:"",password:""}),O=Object(b.a)(m,2),f=O[0],h=O[1],y=f.email,x=f.password,v=function(e){h(Object(l.a)(Object(l.a)({},f),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(q.jsxs)("div",{className:"form-usuario",children:[n?Object(q.jsxs)("div",{className:"alerta ".concat(n.categoria),children:[" ",n.msg," "]}):null,Object(q.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(q.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),Object(q.jsxs)("form",{onSubmit:function(e){var t;(e.preventDefault(),""!==y.trim()&&""!==x.trim())?(console.log("paso la validacion"),a((t={email:y,password:x},function(){var e=Object(d.a)(p.a.mark((function e(a){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.post("/api/auth",t);case 3:r=e.sent,a(Z(r.data)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),n={msg:e.t0.response.data.msg,categoria:"alerta-error"},a(z(n)),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),a(J())):a(U("Todos los campos son obligatorios","alerta-error"))},children:[Object(q.jsxs)("div",{className:"campo-form",children:[Object(q.jsx)("label",{htmlFor:"email",children:"Email"}),Object(q.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:y,onChange:v})]}),Object(q.jsxs)("div",{className:"campo-form",children:[Object(q.jsx)("label",{htmlFor:"password",children:"Password"}),Object(q.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:x,onChange:v})]}),Object(q.jsx)("div",{className:"campo-form",children:Object(q.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Sesi\xf3n"})})]}),Object(q.jsx)(s.b,{to:"/nueva-cuenta",className:"enlace-cuenta",children:"Obtener Cuenta"})]})]})},Q=function(e){var t=e.history,a=Object(o.b)(),n=Object(o.c)((function(e){return e.alerta})).alerta,c=Object(o.c)((function(e){return e.auth})),i=c.mensaje,j=c.autenticado;Object(r.useEffect)((function(){j&&t.push("/proyectos"),i&&a(U(i.msg,i.categoria))}),[i,j,t]);var m=Object(r.useState)({nombre:"",email:"",password:"",confirmar:""}),O=Object(b.a)(m,2),f=O[0],h=O[1],y=f.nombre,x=f.email,v=f.password,g=f.confirmar,N=function(e){h(Object(l.a)(Object(l.a)({},f),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(q.jsxs)("div",{className:"form-usuario",children:[n?Object(q.jsxs)("div",{className:"alerta ".concat(n.categoria),children:[" ",n.msg," "]}):null,Object(q.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(q.jsx)("h1",{children:"Obtener una cuenta"}),Object(q.jsxs)("form",{onSubmit:function(e){var t;(e.preventDefault(),""!==y.trim()&&""!==x.trim()&&""!==v.trim()&&""!==g.trim())?v.length<6?a(U("El password debe ser de al menos 6 caracteres","alerta-error")):a(v===g?(t={nombre:y,email:x,password:v},function(){var e=Object(d.a)(p.a.mark((function e(a){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.post("/api/usuarios",t);case 3:r=e.sent,a(X(r.data)),J(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n={msg:e.t0.response.data.msg,categoria:"alerta-error"},a(B(n));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()):U("Los passwords no son iguales","alerta-error")):a(U("Todos los campos son obligatorios","alerta-error"))},children:[Object(q.jsxs)("div",{className:"campo-form",children:[Object(q.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(q.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tu Nombre",value:y,onChange:N})]}),Object(q.jsxs)("div",{className:"campo-form",children:[Object(q.jsx)("label",{htmlFor:"email",children:"Email"}),Object(q.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:x,onChange:N})]}),Object(q.jsxs)("div",{className:"campo-form",children:[Object(q.jsx)("label",{htmlFor:"password",children:"Password"}),Object(q.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:v,onChange:N})]}),Object(q.jsxs)("div",{className:"campo-form",children:[Object(q.jsx)("label",{htmlFor:"confirmar",children:"Confirmar Password"}),Object(q.jsx)("input",{type:"password",id:"confirmar",name:"confirmar",placeholder:"Repite tu Password",value:g,onChange:N})]}),Object(q.jsx)("div",{className:"campo-form",children:Object(q.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"})})]}),Object(q.jsx)(s.b,{to:"/",className:"enlace-cuenta",children:"Volver a Iniciar Sesi\xf3n"})]})]})},W=function(){return function(){var e=Object(d.a)(p.a.mark((function e(t){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.get("/api/proyectos");case 3:a=e.sent,t($(a.data.proyectos)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r={msg:e.t0.response.data,categoria:"alerta-error"},t(ae(r));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},$=function(e){return{type:O,payload:e}},ee=function(e){return{type:f,payload:e}},te=function(e){return{type:x,payload:e}},ae=function(e){return{type:v,payload:e}},re=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.get("/api/tareas",{params:{proyecto:e}});case 2:r=t.sent,console.log(r),a(ne(r.data.tareas));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ne=function(e){return{type:g,payload:e}},ce=function(e){return{type:N,payload:e}},oe=function(e){return{type:E,payload:e}},se=function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.put("/api/tareas/".concat(e._id),e);case 3:r=t.sent,console.log(r),a(ie(r.data.tarea)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.response);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ie=function(e){return{type:w,payload:e}},ue=function(e){var t=e.proyecto,a=Object(o.b)(),r=function(e){a({type:y,payload:e}),a(re(e))};return Object(q.jsx)("li",{className:"animate__animated animate__fadeIn animate__faster",children:Object(q.jsx)("button",{className:"btn btn-blank",type:"button",onClick:function(){return r(t._id)},children:t.nombre})})},le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.proyectos})),a=t.proyectos,n=t.mensaje,c=Object(o.c)((function(e){return e.alerta})).alerta;return Object(r.useEffect)((function(){n&&e(U(n.msg,n.categoria)),e(W())}),[W,n]),0===a.length?Object(q.jsx)("p",{children:"No hay Proyectos, comienza creando uno."}):Object(q.jsxs)("ul",{className:"listado-proyectos animate__animated animate__fadeIn animate__faster",children:[c?Object(q.jsx)("div",{className:"alerta ".concat(c.categoria," "),children:c.msg}):null,a.map((function(e){return Object(q.jsx)(ue,{proyecto:e},e._id)}))]})},be=function(){var e=Object(o.c)((function(e){return e.proyectos})),t=e.formulario,a=e.errorFormulario,n=Object(o.b)(),c=Object(r.useState)({nombre:""}),s=Object(b.a)(c,2),i=s[0],j=s[1],O=i.nombre;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){n({type:m})},children:"Nuevo Proyecto"}),t?Object(q.jsxs)("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==O?(n(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var r,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.post("/api/proyectos",e);case 3:r=t.sent,console.log(r.data),a(ee(r.data)),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.response),n={msg:t.t0.response.data,categoria:"alerta-error"},a(ae(n));case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(i)),j({nombre:""})):n({type:h})},children:[Object(q.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre Proyecto",name:"nombre",value:O,onChange:function(e){j(Object(l.a)(Object(l.a)({},i),{},Object(u.a)({},e.target.name,e.target.value)))}}),Object(q.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar Proyecto"})]}):null,a?Object(q.jsx)("p",{className:"mensaje error",children:"El nombre del Proyecto es obligatorio"}):null]})},je=function(){return Object(q.jsxs)("aside",{children:[Object(q.jsxs)("h1",{children:["MERN",Object(q.jsx)("span",{children:"Tasks"})]}),Object(q.jsx)(be,{}),Object(q.jsxs)("div",{className:"proyectos",children:[Object(q.jsx)("h2",{children:"Tus Proyectos"}),Object(q.jsx)(le,{})]})]})},pe=function(){var e=Object(o.c)((function(e){return e.auth})).usuario,t=Object(o.b)(),a=function(){t({type:F})};return Object(q.jsxs)("header",{className:"app-header",children:[Object(q.jsxs)("p",{className:"nombre-usuario",children:["Hola ",Object(q.jsx)("span",{children:null==e?"usuario":e.nombre})," "]}),Object(q.jsx)("nav",{className:"nav-principal",children:Object(q.jsx)("button",{className:"btn btn-blank cerrar-sesion text-white",onClick:function(){return a()},children:"Cerrar Sesi\xf3n"})})]})},de=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.proyectos})).proyecto,a=Object(o.c)((function(e){return e.tareas})),n=a.errorTarea,c=a.tareaSeleccionada;Object(r.useEffect)((function(){m(null!==c?c:{nombre:""})}),[c]);var s=Object(r.useState)({nombre:""}),i=Object(b.a)(s,2),j=i[0],m=i[1];if(!t)return null;var O=Object(b.a)(t,1)[0],f=j.nombre;return Object(q.jsxs)("div",{className:"formulario",children:[Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==f.trim()?(null===c?(j.proyecto=O._id,e(function(e){return function(){var t=Object(d.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.post("/api/tareas",e);case 3:r=t.sent,console.log(r.data.tarea),a(ce(r.data.tarea)),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(j))):(e(se(j)),e({type:k})),e(re(O._id)),m({nombre:""})):e({type:_})},children:[Object(q.jsx)("div",{className:"contenedor-input",children:Object(q.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre Tarea...",name:"nombre",value:f,onChange:function(e){m(Object(l.a)(Object(l.a)({},j),{},Object(u.a)({},e.target.name,e.target.value)))}})}),Object(q.jsx)("div",{className:"contenedor-input",children:Object(q.jsx)("input",{type:"submit",className:"btn btn-primario btn-submit btn-block",value:c?"Editar Tarea":"Agregar Tarea"})})]}),n?Object(q.jsx)("p",{className:"mensaje error",children:"El nombre de la tarea es obligatorio"}):null]})},me=function(e){var t=e.tarea,a=Object(o.c)((function(e){return e.proyectos})).proyecto,r=Object(o.b)(),n=function(e){r(function(e,t){return function(){var a=Object(d.a)(p.a.mark((function a(r){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Y.delete("/api/tareas/".concat(e),{params:{proyecto:t}});case 2:r(oe(e));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(e,a[0]._id)),r(re(a[0]._id))},c=function(e){e.estado?e.estado=!1:e.estado=!0,r(se(e))},s=function(e){r(function(e){return{type:R,payload:e}}(e))};return Object(q.jsxs)("li",{className:"tarea sombra animate__animated animate__fadeIn animate__faster",children:[Object(q.jsx)("p",{children:t.nombre}),Object(q.jsx)("div",{className:"estado",children:t.estado?Object(q.jsx)("button",{className:"completo",type:"button",onClick:function(){return c(t)},children:"Completo"}):Object(q.jsx)("button",{className:"incompleto",type:"button",onClick:function(){return c(t)},children:"Incompleto"})}),Object(q.jsxs)("div",{className:"acciones",children:[Object(q.jsx)("button",{type:"button",className:"btn btn-primario",onClick:function(){return s(t)},children:"Editar"}),Object(q.jsx)("button",{type:"button",className:"btn btn-secundario",onClick:function(){return n(t._id)},children:"Eliminar"})]})]})},Oe=function(){var e=Object(o.c)((function(e){return e.proyectos})).proyecto,t=Object(o.c)((function(e){return e.tareas})).tareasProyecto,a=Object(o.b)();if(!e)return Object(q.jsx)("h2",{children:"Selecciona un proyecto"});var r=Object(b.a)(e,1)[0];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("h2",{children:["Proyecto:",r.nombre]}),Object(q.jsxs)("ul",{className:"listado-tareas",children:[" ",0===t.length?Object(q.jsx)("li",{className:"tarea",children:Object(q.jsx)("p",{children:"No hay tareas"})}):t.map((function(e){return Object(q.jsx)(me,{tarea:e},e._id)}))]}),Object(q.jsx)("button",{type:"button",className:"btn btn-eliminar",onClick:function(){var e;a((e=r._id,function(){var t=Object(d.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y.delete("/api/proyectos/".concat(e));case 3:a(te(e)),t.next=11;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.response),r={msg:t.t0.response.data,categoria:"alerta-error"},a(ae(r));case 11:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Eliminar Proyecto \xd7"})]})},fe=function(){var e=Object(o.b)();return Object(r.useEffect)((function(){e(J())}),[]),Object(q.jsxs)("div",{className:"contenedor-app",children:[Object(q.jsx)(je,{}),Object(q.jsxs)("div",{className:"seccion-principal",children:[Object(q.jsx)(pe,{}),Object(q.jsxs)("main",{children:[Object(q.jsx)(de,{}),Object(q.jsx)("div",{className:"contenedor-tareas",children:Object(q.jsx)(Oe,{})})]})]})]})},he=a(24),ye=function(e){var t=e.component,a=Object(he.a)(e,["component"]),n=Object(o.c)((function(e){return e.auth})).autenticado,c=Object(o.b)();return Object(r.useEffect)((function(){c(J())}),[c]),Object(q.jsx)(i.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return n?Object(q.jsx)(t,Object(l.a)({},e)):Object(q.jsx)(i.a,{to:"/"})}}))},xe=function(e){var t=e.component,a=Object(he.a)(e,["component"]),r=Object(o.c)((function(e){return e.auth})).autenticado;return Object(q.jsx)(i.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return r?Object(q.jsx)(i.a,{to:"/proyectos"}):Object(q.jsx)(t,Object(l.a)({},e))}}))},ve=a(16),ge=a(41),Ne={alerta:null},_e={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},Ee=a(23),Re={proyectos:[],formulario:!1,errorFormulario:!1,proyecto:null,mensaje:null},we={tareasProyecto:[],errorTarea:!1,tareaSeleccionada:null},ke=Object(ve.c)({proyectos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(l.a)(Object(l.a)({},e),{},{formulario:!0});case O:return Object(l.a)(Object(l.a)({},e),{},{proyectos:t.payload});case f:return Object(l.a)(Object(l.a)({},e),{},{proyectos:[].concat(Object(Ee.a)(e.proyectos),[t.payload]),formulario:!1,errorFormulario:!1});case h:return Object(l.a)(Object(l.a)({},e),{},{errorFormulario:!0});case y:return Object(l.a)(Object(l.a)({},e),{},{proyecto:e.proyectos.filter((function(e){return e._id===t.payload}))});case x:return Object(l.a)(Object(l.a)({},e),{},{proyectos:e.proyectos.filter((function(e){return e._id!==t.payload})),proyecto:null});case v:return Object(l.a)(Object(l.a)({},e),{},{mensaje:t.payload});default:return e}},tareas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)({},e),{},{tareasProyecto:t.payload});case N:return Object(l.a)(Object(l.a)({},e),{},{tareasProyecto:[t.payload].concat(Object(Ee.a)(e.tareasProyecto)),errorTarea:!1});case _:return Object(l.a)(Object(l.a)({},e),{},{errorTarea:!0});case E:return Object(l.a)(Object(l.a)({},e),{},{tareasProyecto:e.tareasProyecto.filter((function(e){return e._id!==t.payload}))});case w:return Object(l.a)(Object(l.a)({},e),{},{tareasProyecto:e.tareasProyecto.map((function(e){return e._id===t.payload._id?t.payload:e}))});case R:return Object(l.a)(Object(l.a)({},e),{},{tareaSeleccionada:t.payload});case k:return Object(l.a)(Object(l.a)({},e),{},{tareaSeleccionada:null});default:return e}},alerta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{alerta:t.payload};case A:return{alerta:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case P:return localStorage.setItem("token",t.payload.token),Object(l.a)(Object(l.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!1,token:t.payload.token});case C:case L:case F:return localStorage.removeItem("token"),Object(l.a)(Object(l.a)({},e),{},{token:null,mensaje:t.payload,autenticado:null,usuario:null,cargando:!1});case I:return Object(l.a)(Object(l.a)({},e),{},{usuario:t.payload,autenticado:!0,cargando:!1});default:return e}}}),Te="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Ae=Object(ve.e)(ke,Te(Object(ve.a)(ge.a))),Se=localStorage.getItem("token");Se&&V(Se);var Ce=function(){return Object(q.jsx)(o.a,{store:Ae,children:Object(q.jsx)(s.a,{children:Object(q.jsxs)(i.d,{children:[Object(q.jsx)(xe,{exact:!0,path:"/",component:K}),Object(q.jsx)(xe,{exact:!0,path:"/nueva-cuenta",component:Q}),Object(q.jsx)(ye,{exact:!0,path:"/proyectos",component:fe}),Object(q.jsx)(i.a,{to:"/"})]})})})};c.a.render(Object(q.jsx)(Ce,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f00698a5.chunk.js.map