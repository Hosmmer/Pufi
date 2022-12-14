(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[15],{257:function(e,a,t){"use strict";t.r(a);var r=t(9),c=t(19),l=t(0),n=t.n(l),o=t(252),s=t(248),d=t(240),i=t(157),j=t(250),b=t(259),u=t(249),m=t(241),O=t.n(m),x=t(67),h=t(255),p=t(35),v=t.n(p),g=t(1),f=function(e){var a=e.color,t=e.mensaje,r=e.nombre;return"danger"===a&&Object(g.jsx)(o.a,{children:Object(g.jsx)(o.a.Body,{children:Object(g.jsxs)(h.a,{variant:a,children:[Object(g.jsx)("i",{className:v()("dripicons-warning","me-2")}),Object(g.jsx)("strong",{children:"Advertencia:"})," ",t]},r)})})},C=function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(d.a,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(f,{color:e.color,mensaje:e.mensaje,nombre:e.nombre})})})})},E=t(242),N=t.n(E);var y=function(e){var a=e.value;return Object(g.jsx)(o.a,{children:Object(g.jsx)(o.a.Body,{children:Object(g.jsx)(s.a,{now:a,label:"".concat(a,"%"),visuallyHidden:!0})})})},w={Nombre:null,Email:null,Edad:null,Celular:null,now:0,textcolor:"success",mensalert:"",validated:!1};a.default=function(){var e=Object(l.useState)(w),a=Object(c.a)(e,2),t=a[0],s=a[1];return Object(g.jsxs)(n.a.Fragment,{children:[Object(g.jsx)(x.a,{breadCrumbItems:[{label:"Forms",path:"/pages/forms/form",active:!0}],title:"Formulario para el registro de Pasajeros"}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(i.a,{lg:3}),Object(g.jsx)(i.a,{lg:6,children:Object(g.jsx)(C,{color:t.textcolor,mensaje:t.mensalert,nombre:t.Nombre})}),Object(g.jsx)(i.a,{lg:3})]}),Object(g.jsxs)(d.a,{children:[Object(g.jsx)(i.a,{lg:3}),Object(g.jsxs)(i.a,{lg:6,children:[t.now>0?Object(g.jsx)(y,{value:t.now}):"",Object(g.jsx)(o.a,{children:Object(g.jsx)(o.a.Body,{children:Object(g.jsxs)(j.a,{noValidate:!0,validated:t.validated,onSubmit:function(e){if(t.validated){e.preventDefault(),e.stopPropagation(),N()("Tu informaci\xf3n fue enviada con \xe9xito, estaremos en contacto contigo",{buttons:!1,timer:3e3});var a={Nombre:t.Nombre,Email:t.Email,Edad:t.Edad,Celular:t.Celular};console.log(a),s(w)}},children:[Object(g.jsxs)(j.a.Group,{className:"mb-3",controlId:"Nombre",children:[Object(g.jsxs)(j.a.Label,{children:["Nombre Completo ",t.Nombre]}),Object(g.jsx)(j.a.Control,{required:!0,pattern:"^[a-zA-Z ]*$",type:"text",placeholder:"Nombre Completo",defaultValue:t.Nombre,onChange:function(e){s(Object(r.a)(Object(r.a)({},t),{},{Nombre:e.target.value})),function(e){var a=e.target.value,c=Object(r.a)(Object(r.a)({},t),{},{textcolor:"danger",validated:!1,mensalert:"El Campo Nombre no puede llevar n\xfamero",now:25}),l=Object(r.a)(Object(r.a)({},t),{},{textcolor:"success",validated:!0,mensalert:"",now:25,Nombre:a});a&&(0===function(e){for(var a=0;a<e.length;a++)if(-1!=="0123456789".indexOf(e.charAt(a),0))return 1;return 0}(a)?s(l):s(c))}(e)}}),Object(g.jsx)(j.a.Control.Feedback,{children:"Datos ingresados correctamente"})]}),Object(g.jsxs)(j.a.Group,{className:"mb-3",controlId:"Email",children:[Object(g.jsx)(j.a.Label,{children:"Email"}),Object(g.jsxs)(b.a,{hasValidation:!0,children:[Object(g.jsx)(b.a.Text,{id:"inputGroupPrepend",children:"@"}),Object(g.jsx)(j.a.Control,{type:"text",placeholder:"Email","aria-describedby":"inputGroupPrepend",defaultValue:t.Email,onChange:function(e){s(Object(r.a)(Object(r.a)({},t),{},{Email:e.target.value})),function(e){var a=e.target.value,c=Object(r.a)(Object(r.a)({},t),{},{textcolor:"danger",validated:!1,mensalert:"El Campo Email requiere el car\xe1cter @"}),l=Object(r.a)(Object(r.a)({},t),{},{textcolor:"success",validated:!0,mensalert:"",now:25,Email:a});!/^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.exec(a)>0?s(c):s(l)}(e)}}),Object(g.jsx)(j.a.Control.Feedback,{type:"invalid",children:"Por favor verifique la validaci\xf3n de su Email."})]})]}),Object(g.jsxs)(j.a.Group,{className:"mb-3",controlId:"Celular",children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Celular"})," ",Object(g.jsx)("br",{}),Object(g.jsx)(O.a,{required:!0,defaultValue:t.Celular,mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(___) ___-____",className:"form-control",onChange:function(e){s(Object(r.a)(Object(r.a)({},t),{},{Celular:e.target.value}))}})]}),Object(g.jsx)(j.a.Control.Feedback,{type:"invalid",children:"Please provide a valid Celular."})]}),Object(g.jsxs)(j.a.Group,{className:"mb-3",controlId:"Edad",children:[Object(g.jsx)(j.a.Label,{children:"Rango de edad de 18-100"}),Object(g.jsx)(j.a.Control,{type:"text",placeholder:"Edad",pattern:"^[0-9]*$",required:!0,defaultValue:t.Edad,onChange:function(e){s(Object(r.a)(Object(r.a)({},t),{},{Edad:e.target.value})),function(e){var a=parseInt(e.target.value),c=Object(r.a)(Object(r.a)({},t),{},{textcolor:"success",validated:!0,mensalert:"",now:25,Edad:a}),l=Object(r.a)(Object(r.a)({},t),{},{textcolor:"danger",validated:!1,mensalert:"El Campo Edad esta fuera del rango solicitado"});s((a>=18&&a<=100)>0?c:l)}(e)}}),Object(g.jsx)(j.a.Control.Feedback,{type:"invalid",children:"Please provide a valid Rango de edad."})]}),Object(g.jsx)(u.a,{type:"submit",children:"Registrar"})]})})})]}),Object(g.jsx)(i.a,{lg:3})]})]})}},67:function(e,a,t){"use strict";t(0);var r=t(240),c=t(157),l=t(258),n=t(1);a.a=function(e){return Object(n.jsx)(r.a,{children:Object(n.jsx)(c.a,{children:Object(n.jsxs)("div",{className:"page-title-box",children:[Object(n.jsx)("div",{className:"page-title-right",children:Object(n.jsxs)(l.a,{className:"m-0",children:[Object(n.jsx)(l.a.Item,{href:"/",children:"Inicio"}),e.breadCrumbItems.map((function(e,a){return e.active?Object(n.jsx)(l.a.Item,{active:!0,children:e.label},a):Object(n.jsx)(l.a.Item,{href:e.path,children:e.label},a)}))]})}),Object(n.jsx)("h4",{className:"page-title",children:e.title})]})})})}}}]);
//# sourceMappingURL=15.b0be2b98.chunk.js.map