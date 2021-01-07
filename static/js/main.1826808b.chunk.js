(this["webpackJsonpdtapi-if-117-ui-react"]=this["webpackJsonpdtapi-if-117-ui-react"]||[]).push([[0],{126:function(e,t,a){},157:function(e,t,a){},197:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),i=a.n(c),r=a(11),s=a.n(r),o=(a(197),a(21)),l=a.n(o),u=a(30),d=a(10),j=a(14),p=(a(126),a(35)),b=function(e){var t=e.component,a=e.path,c=e.authInfo,i=e.setAuthInfo;return Object(n.jsx)(j.b,{render:function(e){var r,s;return(null===(r=c.data)||void 0===r?void 0:r.roles)?c.data.roles.includes("admin")?Object(n.jsx)(t,Object(p.a)({setAuthInfo:i,path:a},e)):Object(n.jsx)(j.a,{to:{pathname:"/student",state:{from:e.location}}}):"non logged"===(null===(s=c.data)||void 0===s?void 0:s.response)?Object(n.jsx)(j.a,{to:{pathname:"/login",state:{from:e.location}}}):void 0}})},h=a(17),m=a.n(h),f="https://dtapi.if.ua/api/",O=function(e,t){return m.a.post("".concat(f).concat(e,"/insertData"),t)},x=function(e,t){return m.a.get("".concat(f).concat(e,"/del/").concat(t))},g=function(e,t){return m.a.get("".concat(f).concat(e,"/getRecords/"),{cancelToken:t.token})},y=function(e,t,a){return m.a.post("".concat(f).concat(e,"/update/").concat(t),a)},v=function(){return m.a.get("".concat(f,"login/isLogged"))},_=a(404),w=a(369),D=a(365),S=a(400),B=a(166),C=a.n(B),k=a(64),N=a(360),P=a(363),I=a(60),R=a(28),E=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),A=function(e){var t=e.setAuthInfo,a=E(),c=R.a({name:R.b().required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"),password:R.b().required("\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435")}),i=function(){var e=Object(u.a)(l.a.mark((function e(a){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:a.name,password:a.password},e.next=3,i=n,m.a.post("".concat(f,"login/index"),i);case 3:return e.next=5,v();case 5:c=e.sent,t(c);case 7:case"end":return e.stop()}var i}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(P.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(D.a,{}),Object(n.jsxs)("div",{className:a.paper,children:[Object(n.jsx)(_.a,{className:a.avatar,children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(k.a,{component:"h1",variant:"h5",children:"Log in"}),Object(n.jsx)(I.a,{initialValues:{name:"",password:""},validationSchema:c,onSubmit:i,validateOnMount:!0,children:function(e){return Object(n.jsxs)("form",{className:a.form,noValidate:!0,onSubmit:e.handleSubmit,children:[Object(n.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",value:e.values.name,onBlur:e.handleBlur,onChange:e.handleChange,helperText:e.touched.name?e.errors.name:"",error:e.touched.name&&Boolean(e.errors.name)}),Object(n.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onBlur:e.handleBlur,value:e.values.password,onChange:e.handleChange,helperText:e.touched.password?e.errors.password:"",error:e.touched.password&&Boolean(e.errors.password)}),Object(n.jsx)(w.a,{disabled:!e.isValid,type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Log In"})]})}})]})]})},T=function(e){var t=e.component,a=e.path,c=e.authInfo,i=e.setAuthInfo;return Object(n.jsx)(j.b,{render:function(e){var r,s;return"non logged"===(null===(r=c.data)||void 0===r?void 0:r.response)?Object(n.jsx)(t,Object(p.a)({setAuthInfo:i,path:a},e)):(null===(s=c.data)||void 0===s?void 0:s.roles)?c.data.roles.includes("admin")?Object(n.jsx)(j.a,{to:{pathname:"/admin/dashboard",state:{from:e.location}}}):Object(n.jsx)(j.a,{to:{pathname:"/student",state:{from:e.location}}}):void 0}})},G=a(88),F=a(4),W=a(403),q=a(395),V=a(389),L=a(368),H=a(398),M=a(387),z=a(370),J=a(371),U=a(372),X=a(373),K=a(374),Q=a(375),Y=a(376),Z=[{path:"/admin/dashboard",icon:function(){return Object(n.jsx)(z.a,{})},title:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"},{path:"/admin/faculties",icon:function(){return Object(n.jsx)(J.a,{})},title:"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0438"},{path:"/admin/group",icon:function(){return Object(n.jsx)(U.a,{})},title:"\u0413\u0440\u0443\u043f\u0438"},{path:"/admin/speciality",icon:function(){return Object(n.jsx)(X.a,{})},title:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456"},{path:"/admin/subjects",icon:function(){return Object(n.jsx)(K.a,{})},title:"\u041f\u0440\u0435\u0434\u043c\u0435\u0442\u0438"},{path:"/admin/results",icon:function(){return Object(n.jsx)(Q.a,{})},title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438"},{path:"/admin/admins",icon:function(){return Object(n.jsx)(Y.a,{})},title:"\u0410\u0434\u043c\u0456\u043d\u0438"}],$=a(167),ee=a.n($),te=a(168),ae=a.n(te),ne=a(323),ce=a(377),ie=a(378),re=a(29),se=function(e){var t=e.path,a=e.icon,c=e.title;return Object(n.jsx)(re.c,{to:t,style:{color:"black"},exact:!0,activeClassName:"active",children:Object(n.jsxs)(ne.a,{children:[Object(n.jsx)(ce.a,{children:a()}),Object(n.jsx)(ie.a,{primary:c})]})})},oe=a(396),le=a(397),ue=a(384),de=a(386),je=a(383),pe=a(402),be=a(385),he=a(382),me=a(23),fe=a(379),Oe=a(381),xe=a(380),ge=function(e){var t=e.open,a=e.setOpen,c=e.speciality,i=e.setEdit,r=e.setSpecialityDate,s=e.specialityDates,o={name:c?c.speciality_name:"",code:c?c.speciality_code:""},l=R.a({name:R.b().required("\u0417\u0430\u043f\u043e\u0432\u043d\u0438 \u043f\u043e\u043b\u0435"),code:R.b().required("\u0417\u0430\u043f\u043e\u0432\u043d\u0438 \u043f\u043e\u043b\u0435").max(5,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 5 \u0447\u0438\u0441\u0435\u043b")}),u=function(){c?i(!1):a(!1)};return Object(n.jsxs)(fe.a,{open:t,onClose:u,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(xe.a,{id:"form-dialog-title",children:c?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c"}),Object(n.jsx)(Oe.a,{children:Object(n.jsx)(I.a,{initialValues:o,validationSchema:l,validateOnMount:!0,onSubmit:function(e){c?function(e){y("Speciality",c.speciality_id,{speciality_name:e.name,speciality_code:e.code}).then((function(e){var t=s.map((function(t){return e.data[0].speciality_id===t.speciality_id?e.data[0]:t}));r(t),i(!1)}))}(e):function(e){O("Speciality",{speciality_name:e.name,speciality_code:e.code}).then((function(e){r([].concat(Object(me.a)(s),[e.data[0]])),a(!1)})).catch((function(e){}))}(e)},children:function(e){var t=e.isValid,a=e.errors,i=e.touched,r=e.values,s=e.handleChange,o=e.handleBlur,l=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:l,children:[Object(n.jsx)(S.a,{name:"name",value:r.name,onChange:s,onBlur:o,autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,helperText:i.name?a.name:"",error:i.name&&Boolean(a.name)}),Object(n.jsx)(S.a,{name:"code",value:r.code,onChange:s,onBlur:o,margin:"dense",id:"code",label:"Code",type:"text",fullWidth:!0,helperText:i.code?a.code:"",error:i.code&&Boolean(a.code)}),Object(n.jsxs)("div",{style:{margin:"1rem",textAlign:"center"},children:[Object(n.jsx)(w.a,{onClick:u,color:"primary",children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"}),Object(n.jsx)(w.a,{disabled:!t,type:"submit",color:"primary",children:c?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})}})})]})},ye=a(96),ve=a.n(ye),_e=a(97),we=a.n(_e),De=function(e){var t=e.speciality,a=e.setOpen,i=e.setSpecialityDate,r=e.specialityDates,s=t.speciality_name,o=t.speciality_code,l=t.speciality_id,u=Object(c.useState)(!1),j=Object(d.a)(u,2),p=j[0],b=j[1];return Object(n.jsxs)(he.a,{children:[Object(n.jsx)(je.a,{children:l}),Object(n.jsx)(je.a,{children:s}),Object(n.jsx)(je.a,{children:o}),Object(n.jsx)(je.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(w.a,{color:"primary",onClick:function(){b(!0)},children:Object(n.jsx)(ve.a,{})}),Object(n.jsx)(w.a,{color:"primary",onClick:function(){x("Speciality",l).then((function(e){if("ok"===e.data.response){var t=r.filter((function(e){return e.speciality_id!==l}));i(t)}}))},children:Object(n.jsx)(we.a,{})})]})}),Object(n.jsx)(ge,{open:p,setSpecialityDate:i,setOpen:a,specialityDates:r,speciality:t,setEdit:b})]})},Se=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(0),s=Object(d.a)(r,2),o=s[0],j=s[1],p=Object(c.useState)(10),b=Object(d.a)(p,2),h=b[0],f=b[1],O=Object(c.useState)(!1),x=Object(d.a)(O,2),y=x[0],v=x[1];Object(c.useEffect)((function(){var e=m.a.CancelToken.source();function t(){return(t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g("Speciality",e);case 2:a=t.sent,i(a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.cancel()}}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"1rem"},children:[Object(n.jsx)("h2",{children:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456"}),Object(n.jsx)(w.a,{onClick:function(){v(!0)},variant:"contained",color:"primary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u0438 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c"})]}),Object(n.jsxs)("div",{style:{boxShadow:"0.5rem 1rem 2rem gray"},children:[Object(n.jsxs)(ue.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(n.jsx)(be.a,{children:Object(n.jsx)(he.a,{children:["ID","\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c","\u041a\u043e\u0434","\u0414\u0456\u044f"].map((function(e){return Object(n.jsx)(je.a,{children:e},e+1)}))})}),Object(n.jsx)(de.a,{children:a.slice(o*h,o*h+h).map((function(e){return Object(n.jsx)(De,{speciality:e,setOpen:v,open:y,specialityDates:a,setSpecialityDate:i},e.speciality_id)}))})]}),Object(n.jsx)(pe.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:h,page:o,onChangePage:function(e,t){j(t)},onChangeRowsPerPage:function(e){f(+e.target.value),j(0)}})]}),Object(n.jsx)(ge,{specialityDates:a,setSpecialityDate:i,setOpen:v,open:y})]})},Be=a(392),Ce=a(390),ke=a(391);a(157);var Ne=function(e){var t=e.card;return Object(n.jsxs)(Ce.a,{className:"card",children:[Object(n.jsx)(re.b,{to:t.path,className:"card-link"}),t.hasCount?Object(n.jsx)("span",{className:"card-count",children:t.count}):null,Object(n.jsx)(ke.a,{component:"img",alt:t.title,image:t.image,title:t.title,className:"card-image"}),Object(n.jsx)("h2",{className:"card-title",children:t.title}),Object(n.jsx)("div",{className:"card_hover",children:Object(n.jsx)("h3",{children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})})]})};function Pe(){return(Pe=Object(u.a)(l.a.mark((function e(){var t,a,n,c,i,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(f,"Faculty/countRecords")).then((function(e){return e.data}));case 2:return t=e.sent,e.next=5,m.a.get("".concat(f,"Group/countRecords")).then((function(e){return e.data}));case 5:return a=e.sent,e.next=8,m.a.get("".concat(f,"Speciality/countRecords")).then((function(e){return e.data}));case 8:return n=e.sent,e.next=11,m.a.get("".concat(f,"Subject/countRecords")).then((function(e){return e.data}));case 11:return c=e.sent,e.next=14,m.a.get("".concat(f,"Student/countRecords")).then((function(e){return e.data}));case 14:return i=e.sent,e.next=17,m.a.get("".concat(f,"AdminUser/countRecords")).then((function(e){return e.data}));case 17:return r=e.sent,s=m.a.all([t,a,n,c,i,r]).then((function(e){return e})),e.abrupt("return",s);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(e,t,a,n){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5?arguments[5]:void 0;return{title:e,path:t,component:a,hasCount:n,count:c,image:i}}var Re=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){(function(){return Pe.apply(this,arguments)})().then((function(e){var t;if(l(void 0!==(t=e)?[Ie("\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0438","/admin/faculties","Faculty",!0,t[0].numberOfRecords,"https://www.sandhills.edu/wp-content/uploads/2019/03/classroom.jpg"),Ie("\u0413\u0440\u0443\u043f\u0438","/admin/group","Groups",!0,t[1].numberOfRecords,"https://skilledwork.org/wp-content/uploads/2014/01/1105572-medium.jpg"),Ie("\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0456","/admin/speciality","Speciality",!0,t[2].numberOfRecords,"https://prontomarketing.pi.bypronto.com/3/wp-content/uploads/sites/3/2020/08/Managed-Services-Provider-e1596510425847.jpg"),Ie("\u041f\u0440\u0435\u0434\u043c\u0435\u0442\u0438","/admin/subjects","Subject",!0,t[3].numberOfRecords,"https://nhsportpress.com/wp-content/uploads/2019/11/district-tech.jpeg"),Ie("\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u0438","/admin/group","Groups",!0,t[4].numberOfRecords,"https://www.orangeschool.com.ua/wp-content/uploads/2019/07/%D0%BA%D1%83%D1%80%D1%81%D1%8B-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE.jpg"),Ie("\u0410\u0434\u043c\u0456\u043d\u0438","/admin/admins","Admins",!0,t[5].numberOfRecords,"https://teleme.io/assets/feature_updates/tg_group_admins.jpg"),Ie("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438","results","Results",!1,null,"https://images.hrtechnologist.com/images/uploads/content_images/how_hr_business_partners_can_translate_data_into_business_result_5e66237452fdc.png"),Ie("\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b","protocol","Protocol",!1,null,"https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/how-your-digital-agency-can-leverage-client-reports-to-prove-value-5debc3863d361-760x400.png")]:null),!e)return null;i(!0)}))}),[]),a?Object(n.jsx)("div",{className:"cards-grid",children:o.map((function(e,t){return Object(n.jsx)(Ne,{card:e},t)}))}):Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)(Be.a,{})})},Ee=a(401),Ae=a(388),Te=a(399),Ge=function(e){var t=e.open,a=e.setOpen,c=e.group,i=e.specialityData,r=e.facultyData,s=e.setGroupsData,o=e.setEdit,l=e.groupsData,u={group_name:c?c.group_name:"",faculty_name:c?c.faculty_name:"",speciality_name:c?c.speciality_name:""},d=R.a({group_name:R.b().required("\u0417\u0430\u043f\u043e\u0432\u043d\u0438 \u043f\u043e\u043b\u0435"),faculty_name:R.b().required("\u0417\u0430\u043f\u043e\u0432\u043d\u0438 \u043f\u043e\u043b\u0435"),speciality_name:R.b().required("\u0417\u0430\u043f\u043e\u0432\u043d\u0438 \u043f\u043e\u043b\u0435")}),j=function(){c?o(!1):a(!1)},b=function(e){return i.filter((function(t){return t.speciality_id===e}))[0].speciality_name},h=function(e){return r.filter((function(t){return t.faculty_id===e}))[0].faculty_name},m=function(e){return i.filter((function(t){return t.speciality_name===e}))[0].speciality_id},f=function(e){return r.filter((function(t){return t.faculty_name===e}))[0].faculty_id};return Object(n.jsxs)(fe.a,{open:t,onClose:j,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(xe.a,{id:"form-dialog-title",children:c?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0433\u0440\u0443\u043f\u0443":"\u0414\u043e\u0434\u0430\u0442\u0438 \u0433\u0440\u0443\u043f\u0443"}),Object(n.jsx)(Oe.a,{children:Object(n.jsx)(I.a,{initialValues:u,validationSchema:d,validateOnMount:!0,onSubmit:function(e){c?function(e){console.log(e),y("group",c.group_id,{group_name:e.group_name,faculty_id:f(e.faculty_name),speciality_id:m(e.speciality_name)}).then((function(e){e.data[0]=Object(p.a)(Object(p.a)({},e.data[0]),{},{speciality_name:b(e.data[0].speciality_id),faculty_name:h(e.data[0].faculty_id)});var t=l.map((function(t){return e.data[0].group_id===t.group_id?e.data[0]:t}));s(t),o(!1)}))}(e):function(e){console.log(e),O("group",{group_name:e.group_name,faculty_id:f(e.faculty_name),speciality_id:m(e.speciality_name)}).then((function(e){e.data[0]=Object(p.a)(Object(p.a)({},e.data[0]),{},{speciality_name:b(e.data[0].speciality_id),faculty_name:h(e.data[0].faculty_id)}),s([].concat(Object(me.a)(l),[e.data[0]])),a(!1)})).catch((function(e){}))}(e)},children:function(e){var t=e.isValid,a=e.errors,s=e.touched,o=e.values,l=e.handleChange,u=e.handleBlur,d=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:d,children:[Object(n.jsx)(S.a,{name:"group_name",value:o.group_name,onChange:l,onBlur:u,autoFocus:!0,margin:"dense",id:"group_name",label:"Name",type:"text",fullWidth:!0,error:s.group_name&&Boolean(a.group_name)}),Object(n.jsxs)(Te.a,{name:"faculty_name",className:"select",value:o.faculty_name,displayEmpty:!0,fullWidth:!0,margin:"dense",id:"faculties",label:"faculties",onChange:l,onBlur:u,error:s.faculty_name&&Boolean(a.faculty_name),children:[Object(n.jsx)(Ae.a,{value:o.faculty_name,children:o.faculty_name},Object(Ee.a)()),r.map((function(e){return Object(n.jsx)(Ae.a,{value:"".concat(e.faculty_name),children:e.faculty_name},Object(Ee.a)())}))]},Object(Ee.a)()),Object(n.jsxs)(Te.a,{name:"speciality_name",className:"select",value:o.speciality_name,displayEmpty:!0,fullWidth:!0,margin:"dense",id:"specialities",label:"specialities",onChange:l,onBlur:u,error:s.faculty_name&&Boolean(a.faculty_name),children:[Object(n.jsx)(Ae.a,{value:o.speciality_name,children:o.speciality_name},Object(Ee.a)()),i.map((function(e){return Object(n.jsx)(Ae.a,{value:"".concat(e.speciality_name),children:e.speciality_name},Object(Ee.a)())}))]},Object(Ee.a)()),Object(n.jsxs)("div",{style:{margin:"1rem",textAlign:"center"},children:[Object(n.jsx)(w.a,{onClick:j,color:"primary",children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"}),Object(n.jsx)(w.a,{disabled:!t,type:"submit",color:"primary",children:c?"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438":"\u0414\u043e\u0434\u0430\u0442\u0438"})]})]})}})})]})},Fe=a(394),We=a(393),qe=function(e){var t=e.open,a=e.setShowDelDialog,c=e.group,i=e.groupsData,r=e.setGroupsData,s=function(){a(!1)};return Object(n.jsxs)(fe.a,{open:t,onClose:s,"aria-labelledby":"responsive-dialog-title",children:[Object(n.jsx)(xe.a,{id:"responsive-dialog-title",children:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f?"}),Object(n.jsx)(Oe.a,{children:Object(n.jsx)(We.a,{children:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0438 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0434\u0430\u043d\u0443 \u0433\u0440\u0443\u043f\u0443?"})}),Object(n.jsxs)(Fe.a,{children:[Object(n.jsx)(w.a,{autoFocus:!0,onClick:s,color:"primary",children:"Disagree"}),Object(n.jsx)(w.a,{onClick:function(){var e;s(),e=c.group_id,x("group",e).then((function(t){var n=i.filter((function(t){return e!==t.group_id}));r(n),a(!1)}))},color:"primary",autoFocus:!0,children:"Agree"})]})]})},Ve=function(e){var t=e.groupData,a=e.specialityData,i=e.facultyData,r=e.setGroupsData,s=e.groupsData,o=Object(c.useState)(!1),l=Object(d.a)(o,2),u=l[0],j=l[1],p=Object(c.useState)(!1),b=Object(d.a)(p,2),h=b[0],m=b[1],f=Object(c.useState)(!1),O=Object(d.a)(f,2),x=O[0],g=O[1],y=Object(c.useState)(!1),v=Object(d.a)(y,2),_=v[0],D=v[1];return Object(n.jsxs)(he.a,{children:[Object(n.jsx)(je.a,{children:t.group_id}),Object(n.jsx)(je.a,{children:t.group_name}),Object(n.jsx)(je.a,{children:t.speciality_name}),Object(n.jsx)(je.a,{children:t.faculty_name}),Object(n.jsx)(je.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(w.a,{color:"primary",onClick:function(){j(!0),m(!0)},children:Object(n.jsx)(ve.a,{})}),Object(n.jsx)(w.a,{color:"primary",onClick:function(){g(!0),D(!0)},children:Object(n.jsx)(we.a,{})})]})}),h?Object(n.jsx)(Ge,{setEdit:j,open:u,specialityData:a,facultyData:i,setGroupsData:r,group:t,groupsData:s}):null,_?Object(n.jsx)(qe,{setEdit:g,open:x,setGroupsData:r,group:t,setShowDelDialog:D,groupsData:s}):null]},Object(Ee.a)())},Le=(a(320),function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)(5),s=Object(d.a)(r,2),o=s[0],j=s[1],p=Object(c.useState)([]),b=Object(d.a)(p,2),h=b[0],f=b[1],O=Object(c.useState)([]),x=Object(d.a)(O,2),y=x[0],v=x[1],_=Object(c.useState)([]),D=Object(d.a)(_,2),S=D[0],B=D[1],C=Object(c.useState)(!1),N=Object(d.a)(C,2),P=N[0],I=N[1];Object(c.useEffect)((function(){var e=m.a.CancelToken.source();return function(){var t=Object(u.a)(l.a.mark((function t(){var a,n,c,i,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[g("Group",e),g("speciality",e),g("faculty",e)],t.next=3,Promise.all(a);case 3:n=t.sent,c=[],i=[],n[1].data.forEach((function(e){return c.push({speciality_name:e.speciality_name,speciality_id:e.speciality_id})})),B(c),n[2].data.forEach((function(e){return i.push({faculty_name:e.faculty_name,faculty_id:e.faculty_id})})),v(i),r=R(n),f(r);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e.cancel()}}),[]);var R=function(e){var t=e[0].data;return t.map((function(t){e[1].data.map((function(e){t.speciality_id===e.speciality_id&&(t.speciality_name=e.speciality_name)})),e[2].data.map((function(e){t.faculty_id===e.faculty_id&&(t.faculty_name=e.faculty_name)}))})),t};return Object(n.jsxs)("div",{className:"groups",style:{width:"90%",margin:"auto"},children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(k.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:"\u0413\u0440\u0443\u043f\u0438 \u0456 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0438"}),Object(n.jsx)(w.a,{color:"primary",onClick:function(){I(!0)},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0433\u0440\u0443\u043f\u0443"})]}),Object(n.jsxs)("div",{style:{boxShadow:"0.5rem 1rem 2rem gray"},children:[Object(n.jsxs)(ue.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(n.jsx)(be.a,{children:Object(n.jsx)(he.a,{children:["\u2116","\u0428\u0438\u0444\u0440 \u0433\u0440\u0443\u043f\u0438","\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0456\u0441\u0442\u044c","\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442","\u0414\u0456\u0457"].map((function(e){return Object(n.jsx)(je.a,{children:e},Object(Ee.a)())}))})}),Object(n.jsx)(de.a,{children:h.slice(a*o,a*o+o).map((function(e){return Object(n.jsx)(Ve,{groupData:e,specialityData:S,facultyData:y,setGroupsData:f,groupsData:h},Object(Ee.a)())}))})]}),Object(n.jsx)(pe.a,{rowsPerPageOptions:[5,10,25,50],component:"div",count:h.length,rowsPerPage:o,page:a,onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){j(+e.target.value),i(0)}})]}),Object(n.jsx)(Ge,{setOpen:I,open:P,specialityData:S,facultyData:y,setGroupsData:f,groupsData:h})]})}),He=Object(N.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(G.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},contentBlock:{position:"relative",display:"block",width:"100%",height:"fit-content",padding:e.spacing(3)}}}));function Me(e){var t=e.setAuthInfo,a=He(),c=i.a.useState(!0),r=Object(d.a)(c,2),s=r[0],o=r[1],p=function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(f,"login/logout"));case 2:return e.next=4,v();case 4:a=e.sent,t(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)(q.a,{position:"absolute",className:Object(F.a)(a.appBar,s&&a.appBarShift),children:Object(n.jsxs)(V.a,{className:a.toolbar,children:[Object(n.jsx)(M.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0)},className:Object(F.a)(a.menuButton,s&&a.menuButtonHidden),children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)(k.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title,children:Object(n.jsx)(re.b,{style:{color:"white"},to:"/",children:"D-TESTER"})}),Object(n.jsx)(M.a,{color:"inherit",onClick:p,children:Object(n.jsx)(oe.a,{})})]})}),Object(n.jsxs)(W.a,{variant:"permanent",classes:{paper:Object(F.a)(a.drawerPaper,!s&&a.drawerPaperClose)},open:s,children:[Object(n.jsxs)("div",{className:a.toolbarIcon,children:[Object(n.jsx)(re.b,{to:"/",children:Object(n.jsx)(M.a,{children:Object(n.jsx)(le.a,{})})}),Object(n.jsx)(M.a,{onClick:function(){o(!1)},children:Object(n.jsx)(ae.a,{})})]}),Object(n.jsx)(H.a,{}),Object(n.jsxs)(L.a,{className:"navBar",children:[Z.map((function(e,t){var a=e.path,c=e.icon,i=e.title;return Object(n.jsx)(se,{path:a,icon:c,title:i},t+i)})),Object(n.jsxs)(ne.a,{onClick:p,children:[Object(n.jsx)(ce.a,{children:Object(n.jsx)(oe.a,{})}),Object(n.jsx)(ie.a,{primary:"\u0412\u0438\u0445\u0456\u0434"})]})]}),Object(n.jsx)(H.a,{})]}),Object(n.jsxs)("main",{className:a.content,children:[Object(n.jsx)("div",{className:a.appBarSpacer}),Object(n.jsxs)("div",{className:a.contentBlock,children:[Object(n.jsx)(j.d,{children:Object(n.jsx)(j.b,{path:"/admin/speciality",component:Se})}),Object(n.jsx)(j.d,{children:Object(n.jsx)(j.b,{path:"/admin/group",component:Le})}),Object(n.jsx)(j.d,{children:Object(n.jsx)(j.b,{path:"/admin/dashboard",component:Re})})]})]})]})}var ze=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.a,{path:"/",to:"/login",exact:!0}),Object(n.jsx)(j.b,{path:"/student",component:function(){return Object(n.jsx)("h1",{children:"Hello Student"})}}),Object(n.jsx)(j.a,{path:"/admin",exact:!0,to:"/admin/dashboard"}),Object(n.jsx)(b,{authInfo:a,setAuthInfo:i,path:"/admin",component:Me}),Object(n.jsx)(T,{setAuthInfo:i,authInfo:a,path:"/login",component:A}),Object(n.jsx)(j.b,{path:"*",component:function(){return Object(n.jsx)("h1",{children:"404"})}})]})})},Je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,406)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(re.a,{children:Object(n.jsx)(ze,{})}),document.getElementById("root")),Je()}},[[321,1,2]]]);
//# sourceMappingURL=main.1826808b.chunk.js.map