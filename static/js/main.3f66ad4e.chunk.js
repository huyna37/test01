(this["webpackJsonpfe-react"]=this["webpackJsonpfe-react"]||[]).push([[0],{303:function(e,t,n){},304:function(e,t,n){},371:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(28),c=n.n(r),i=n(1),s=n(9),o=n(42),u=n(20),l=n.n(u),d=n(36),j=n(6),b=n(58),p=n(131),h=n(76),m=n(423),x=n(425),O=n(229),f=n(8),g=function(e){var t=e.loading,n=e.products;return console.log(t),!0===t?Object(f.jsx)(p.a,{gutter:[16,16],children:n.map((function(e){return Object(f.jsx)(h.a,{span:6,xs:12,sm:8,xxl:6,children:Object(f.jsxs)(m.a,{size:"small",extra:Object(f.jsx)(b.b,{href:"#",children:"More"}),hoverable:!0,title:e.name,children:[Object(f.jsx)(x.a,{alt:e.name,className:"product_image",src:"http://huylong37-001-site1.btempurl.com//user-content/"+e.image}),Object(f.jsx)(m.a.Meta,{description:e.description})]})},e.id)}))}):Object(f.jsx)(O.a,{style:{display:"flex",justifyContent:"center"},tip:"Loading...",size:"large"})},y=n(237),v=n(430),w=function(e){var t=e.onSubmit;return Object(f.jsx)(p.a,{span:6,justify:"end",children:Object(f.jsx)(h.a,{children:Object(f.jsx)(v.a.Search,{className:"search-bottom",onSearch:function(e){!function(e){t(e)}(e)},size:"middle"})})})};w.defaultProps={onSubmit:null};var I=w,S=n(230),k=n.n(S),C=n(231),N=n.n(C).a.create({baseURL:"http://huylong37-001-site1.btempurl.com/api/",headers:{"content-type":"application/json"},paramsSerializer:function(e){return k.a.stringify(e)}});N.interceptors.request.use(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var z=N,A={getAll:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/products/paging",e.next=3,z.get("/products/paging",{params:t,headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/products/create",e.next=3,z.post("/products/create",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/products/",e.next=3,z.delete("/products/",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/products/",e.next=3,z.update("/products/",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=n(429);function P(e,t,n){console.log(e,t,n)}var T={height:"300px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"},D=function(){return Object(f.jsxs)(F.a,{afterChange:P,children:[Object(f.jsx)("div",{children:Object(f.jsx)("h3",{style:T,children:Object(f.jsx)("img",{className:"ant-image-img",src:"https://localhost:5001/user-content/d7b10843-41dd-4560-8319-8ffb8b3414b8.jpg",style:{height:500,width:"100%"},alt:"no"})})}),Object(f.jsx)("div",{children:Object(f.jsx)("h3",{style:T,children:"2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("h3",{style:T,children:"3"})}),Object(f.jsx)("div",{children:Object(f.jsx)("h3",{style:T,children:"4"})})]})},R=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),s=Object(j.a)(c,2),o=s[0],u=s[1],b=Object(a.useState)({pageIndex:1,pageSize:6,keyword:""}),h=Object(j.a)(b,2),m=h[0],x=h[1],O=Object(a.useState)(!1),v=Object(j.a)(O,2),w=v[0],S=v[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getAll(m);case 2:t=e.sent,r(t.items),u({pageIndex:t.pageIndex,pageSize:t.pageSize,totalRows:t.toTalRecords}),S(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m,w]);return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("br",{}),Object(f.jsx)(D,{}),Object(f.jsx)(I,{onSubmit:function(e){x(Object(i.a)(Object(i.a)({},m),{},{keyword:e}))}}),Object(f.jsx)(g,{loading:w,products:n}),Object(f.jsxs)(p.a,{justify:"center",children:[" ",Object(f.jsx)(y.a,{current:o.pageIndex,defaultPageSize:6,onChange:function(e,t){return function(e,t){S(!1),x(Object(i.a)(Object(i.a)({},m),{},{pageIndex:e,pageSize:t}))}(e,t)},total:o.totalRows,showSizeChanger:!0,pageSizeOptions:[6,10,20,30]})]})]})})};var B=function(e){var t=Object(o.f)();return Object(f.jsxs)("div",{children:["fsds",Object(f.jsx)("button",{onClick:function(){return t.push("/Home")},children:"Pre"})]})},H=n(433),E=n(417),q=n(415),L=n(422),K=n(416),U=n(432),M=n(412),Y=n(418),W=n(426),V=n(233),_=n.n(V),J=n(245),$=n(413),G=n(414),X={authenticate:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/users/authenticate",e.next=3,z.post("/users/authenticate",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/users/paging",e.next=3,z.get("/users/paging",{params:t,headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"users/register",e.next=3,z.post("users/register",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"users/update",e.next=3,z.put("users/update",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),roleAssign:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"users/rolesassign",e.next=3,z.post("users/rolesassign",t,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getRole:function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="users/getrole/"+t,e.next=3,z.get(n,{params:t,headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"users/",e.next=3,z.delete("users/",{params:t,headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=n(188);function Q(){return Object(f.jsxs)(J.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(f.jsx)(M.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}Z.a.configure();var ee=Object($.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function te(){var e=ee(),t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(j.a)(i,2),u=s[0],b=s[1],p=Object(o.f)(),h=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.authenticate({username:r,password:u}).then((function(e){return console.log(e),localStorage.setItem("token",e.token),localStorage.setItem("Id",e.id),localStorage.setItem("role",e.roles),Z.a.success("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng"),e.roles.length>0?p.replace("/admin"):p.replace("/home")})).catch((function(e){Z.a.warning(e.response.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(G.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(q.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(H.a,{className:e.avatar,children:Object(f.jsx)(_.a,{})}),Object(f.jsx)(J.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(f.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(f.jsx)(L.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",onChange:function(e){return c(e.target.value)},label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(f.jsx)(L.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,onChange:function(e){return b(e.target.value)},name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(f.jsx)(K.a,{control:Object(f.jsx)(U.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(f.jsx)(E.a,{onClick:function(){return h()},fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(f.jsxs)(Y.a,{container:!0,children:[Object(f.jsx)(Y.a,{item:!0,xs:!0,children:Object(f.jsx)(M.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(f.jsx)(Y.a,{item:!0,children:Object(f.jsx)(M.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(f.jsx)(W.a,{mt:8,children:Object(f.jsx)(Q,{})})]})}n(303);var ne=n(419),ae=n(82),re=n(427),ce=n(240),ie=n(434),se=n(435),oe=n(436),ue=ne.a.Header,le=ne.a.Content,de=ne.a.Footer,je=ne.a.Sider,be=function(e){return Object(f.jsxs)(ne.a,{style:{minHeight:"100vh"},children:[Object(f.jsxs)(je,{collapsible:!0,children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsxs)(ae.a,{theme:"dark",defaultSelectedKeys:1,mode:"inline",children:[Object(f.jsx)(ae.a.Item,{icon:Object(f.jsx)(ie.a,{}),children:Object(f.jsx)(b.b,{to:"/",children:"Home"})},"1"),Object(f.jsx)(ae.a.Item,{icon:Object(f.jsx)(se.a,{}),children:Object(f.jsx)(b.b,{to:"/about",children:"About Us"})},"2"),Object(f.jsx)(ae.a.Item,{icon:Object(f.jsx)(oe.a,{}),children:Object(f.jsx)(b.b,{to:"/login",children:"Login"})},"3")]})]}),Object(f.jsxs)(ne.a,{className:"site-layout",children:[Object(f.jsx)(ue,{className:"site-layout-background",style:{padding:0,textAlign:"center"},children:Object(f.jsx)(re.a,{className:"site-page-header",onBack:function(){return null},title:"Title",subTitle:"This is a subtitle"})}),Object(f.jsxs)(le,{style:{margin:"0 16px"},children:[Object(f.jsxs)(ce.a,{style:{margin:"16px 0"},children:[Object(f.jsx)(ce.a.Item,{children:"Application"}),Object(f.jsx)(ce.a.Item,{children:"Home"})]}),Object(f.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:e.children})]}),Object(f.jsx)(de,{style:{textAlign:"center"},children:"HuyK3 Design \xa92021 Created by HuyK3"})]})]})},pe=(n(304),ne.a.Header),he=ne.a.Content,me=ne.a.Footer,xe=ne.a.Sider,Oe=function(e){return Object(f.jsxs)(ne.a,{style:{minHeight:"100vh"},children:[Object(f.jsxs)(xe,{collapsible:!0,children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsxs)(ae.a,{theme:"dark",defaultSelectedKeys:1,mode:"inline",children:[Object(f.jsx)(ae.a.Item,{icon:Object(f.jsx)(ie.a,{}),children:Object(f.jsx)(b.b,{to:"/",children:"Home"})},"1"),Object(f.jsx)(ae.a.Item,{icon:Object(f.jsx)(se.a,{}),children:Object(f.jsx)(b.b,{to:"/admin/product",children:"Manage_product"})},"2"),Object(f.jsx)(ae.a.Item,{icon:Object(f.jsx)(oe.a,{}),children:Object(f.jsx)(b.b,{to:"/admin/user",children:"Manage_users"})},"3")]})]}),Object(f.jsxs)(ne.a,{className:"site-layout",children:[Object(f.jsx)(pe,{className:"site-layout-background",style:{padding:0,textAlign:"center"},children:Object(f.jsx)(re.a,{className:"site-page-header",onBack:function(){return null},title:"Welcome",subTitle:"Xin L\u1ed7i. Layout c\u1ee7a admin \u0111ang \u0111\u01b0\u1ee3cc nh\u1eadt n\xean s\u1ebd s\u1eed d\u1ee5ng t\u1ea1m layout c\u1ee7a client"})}),Object(f.jsxs)(he,{style:{margin:"0 16px"},children:[Object(f.jsxs)(ce.a,{style:{margin:"16px 0"},children:[Object(f.jsx)(ce.a.Item,{children:"Application"}),Object(f.jsx)(ce.a.Item,{children:"Home"})]}),Object(f.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:e.children})]}),Object(f.jsx)(me,{style:{textAlign:"center"},children:"HuyK3 Design \xa92021 Created by HuyK3"})]})]})},fe=n(142),ge=n(424),ye=n(243),ve=n(56),we=n(431),Ie=n(421),Se=fe.a.Option,ke=function(){var e=ge.a.useForm(),t=Object(j.a)(e,1)[0],n=function(e,t){ye.a[e]({message:"Notification Title",description:t})},r=Object(f.jsx)(ge.a.Item,{name:"prefix",noStyle:!0,children:Object(f.jsxs)(fe.a,{style:{width:70},children:[Object(f.jsx)(Se,{value:"84",children:"+84"}),Object(f.jsx)(Se,{value:"86",children:"+86"})]})}),c=Object(a.useState)(!1),s=Object(j.a)(c,2),o=s[0],u=s[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)(ve.a,{type:"primary",onClick:function(){u(!0)},children:"Add New user"}),Object(f.jsx)(we.a,{title:"Basic Modal",visible:o,onCancel:function(){return u(!1)},footer:null,children:Object(f.jsxs)(ge.a,Object(i.a)(Object(i.a)({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),{},{form:t,name:"register",onFinish:function(e){var t=Object(i.a)(Object(i.a)({},e),{},{Dob:e.Dob.format("YYYY-MM-DD")});X.register(t).then((function(e){console.log(e),n("success","\u0110\u0103ng k\xed th\xe0nh C\xf4ng")})).catch((function(e){console.log(),n("error",e.response.data)}))},scrollToFirstError:!0,children:[Object(f.jsx)(ge.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(f.jsx)(v.a,{})}),Object(f.jsx)(ge.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Password must contain at least 8 characters and must contain uppercase and lowercase characters",pattern:new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,20}$")}],hasFeedback:!0,children:Object(f.jsx)(v.a.Password,{})}),Object(f.jsx)(ge.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(f.jsx)(v.a.Password,{})}),Object(f.jsx)(ge.a.Item,{name:"UserName",label:"UserName",tooltip:"Account to Login",rules:[{required:!0,message:"Please input your UserName!",whitespace:!0}],children:Object(f.jsx)(v.a,{})}),Object(f.jsx)(ge.a.Item,{name:"PhoneNumber",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(f.jsx)(v.a,{addonBefore:r,style:{width:"100%"}})}),Object(f.jsx)(ge.a.Item,Object(i.a)(Object(i.a)({name:"Dob",label:"Dob"},{rules:[{type:"object",required:!0,message:"Please select time!"}]}),{},{children:Object(f.jsx)(Ie.a,{})})),Object(f.jsx)(ge.a.Item,Object(i.a)(Object(i.a)({},{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}),{},{children:Object(f.jsx)(ve.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))})]})},Ce=n(428),Ne=n(420),ze=n(143),Ae=function(e){var t=e.id,n=Object(a.useState)(!1),r=Object(j.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)([]),o=Object(j.a)(s,2),u=o[0],b=o[1];Object(a.useEffect)((function(){var e=!0;return function(){var n=Object(d.a)(l.a.mark((function n(){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!0!==e||!0!==c){n.next=5;break}return n.next=3,X.getRole(t);case 3:a=n.sent,b(a.roles);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){return e=!1}}),[c,t]);return Object(f.jsxs)("div",{children:[Object(f.jsx)(ve.a,{onClick:function(){i(!0)},children:"Click"}),Object(f.jsx)(we.a,{title:"RoleAssign",visible:c,onCancel:function(){return i(!1)},onOk:function(){u.forEach((function(e){!0===e.selected&&X.roleAssign({userId:t,userIdRole:localStorage.getItem("Id"),roles:[e]})})),i(!1),ye.a.success({message:"Assign Role Success",description:"Success! You"})},children:u.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsx)(ze.a,{onChange:function(t){var n=t.target.checked;b(u.map((function(t){return e.id===t.id&&(t.selected=n),t})))},checked:e.selected,children:e.name})},t)}))})]})},Fe=["editing","dataIndex","title","inputType","record","index","children"],Pe=function(e){var t=e.editing,n=e.dataIndex,a=e.title,r=e.inputType,c=(e.record,e.index,e.children),o=Object(s.a)(e,Fe),u="number"===r?Object(f.jsx)(Ce.a,{}):Object(f.jsx)(v.a,{});return Object(f.jsx)("td",Object(i.a)(Object(i.a)({},o),{},{children:t?Object(f.jsx)(ge.a.Item,{name:n,rules:[{required:!0,message:"Please Input ".concat(a,"!")}],children:u}):c}))},Te=function(e){var t=e.loading,n=e.Data,r=ge.a.useForm(),c=Object(j.a)(r,1)[0],s=Object(a.useState)(""),o=Object(j.a)(s,2),u=o[0],b=o[1],p=function(e){return e.id===u},h=function(){b("")},m=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.validateFields();case 3:return n=e.sent,e.next=6,X.update({userId:localStorage.getItem("Id"),id:t,dob:n.dob,email:n.email,firstname:n.firstName,lastname:n.lastName,phone:n.phoneNumber}).then((function(){b(""),x("success","Update th\xe0nh C\xf4ng")})).catch((function(e){console.log(e)}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Validate Failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),x=function(e,t){ye.a[e]({message:"Notification Title",description:t})},g=[{title:"FirstName",dataIndex:"firstName",key:"firstName",editable:!0,width:"15%"},{title:"LastName",dataIndex:"lastName",key:"lastName",editable:!0,width:"15%"},{title:"email",dataIndex:"email",key:"email",editable:!0,width:"10%"},{title:"dob",dataIndex:"dob",key:"dob",editable:!0,width:"10%"},{title:"phoneNumber",dataIndex:"phoneNumber",key:"phoneNumber",editable:!0,width:"20%"},{title:"operation",dataIndex:"operation",width:"28%",colspan:2,render:function(e,t){return p(t)?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ve.a,{onClick:function(){return m(t.id)},type:"primary",danger:!0,shape:"round",children:"Save"}),Object(f.jsx)(ve.a,{type:"primary",danger:!0,shape:"round",onClick:h,children:"Cancel"})]}):Object(f.jsx)(ve.a,{disabled:""!==u,type:"primary",shape:"round",onClick:function(){return function(e){c.setFieldsValue(Object(i.a)({firstName:"",lastName:"",email:"",Dob:"",phoneNumber:0},e)),b(e.id)}(t)},children:"Edit"})}},{title:"Delete",render:function(e,t){return Object(f.jsx)(ve.a,{onClick:function(){X.delete({userId:localStorage.getItem("Id"),id:t.id})},children:"Delete"})}},{title:"RoleAssign",render:function(e,t){return Object(f.jsx)(Ae,{id:t.id})}}].map((function(e){return e.editable?Object(i.a)(Object(i.a)({},e),{},{onCell:function(t){return{record:t,dataIndex:e.dataIndex,title:e.title,editing:p(t)}}}):e}));return!0===t?Object(f.jsx)(ge.a,{form:c,component:!1,children:Object(f.jsx)(Ne.a,{components:{body:{cell:Pe}},bordered:!0,rowKey:"uid",dataSource:n,columns:g,rowClassName:"editable-row",pagination:!1})}):Object(f.jsx)(O.a,{style:{display:"flex",justifyContent:"center"},tip:"Loading...",size:"large"})},De=function(){var e=Object(a.useState)({pageIndex:1}),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({pageIndex:1,pageSize:6,keyword:""}),s=Object(j.a)(c,2),o=s[0],u=s[1],b=Object(a.useState)(!1),p=Object(j.a)(b,2),h=p[0],m=p[1],x=Object(a.useState)([]),O=Object(j.a)(x,2),g=O[0],v=O[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.getAll(o);case 2:t=e.sent,v(t.items),r({pageIndex:t.pageIndex,pageSize:t.pageSize,totalRows:t.toTalRecords}),m(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ke,{}),Object(f.jsx)(I,{onSubmit:function(e){m(!1),u(Object(i.a)(Object(i.a)({},o),{},{keyword:e}))}}),Object(f.jsx)(Te,{loading:h,Data:g}),Object(f.jsx)(y.a,{current:n.pageIndex,defaultPageSize:6,onChange:function(e,t){return function(e,t){m(!1),u(Object(i.a)(Object(i.a)({},o),{},{pageIndex:e,pageSize:t}))}(e,t)},total:n.totalRows,showSizeChanger:!0,pageSizeOptions:[6,10,20,30]}),";"]})},Re=["editing","dataIndex","title","inputType","record","index","children"],Be=function(e){var t=e.editing,n=e.dataIndex,a=e.title,r=e.inputType,c=(e.record,e.index,e.children),o=Object(s.a)(e,Re),u="number"===r?Object(f.jsx)(Ce.a,{}):Object(f.jsx)(v.a,{});return Object(f.jsx)("td",Object(i.a)(Object(i.a)({},o),{},{children:t?Object(f.jsx)(ge.a.Item,{name:n,rules:[{required:!0,message:"Please Input ".concat(a,"!")}],children:u}):c}))},He=function(e){var t=e.loading,n=e.Data,r=ge.a.useForm(),c=Object(j.a)(r,1)[0],s=Object(a.useState)(""),o=Object(j.a)(s,2),u=o[0],b=o[1],p=function(e){return e.id===u},h=function(){b("")},m=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("warning","T\u1eeb, s\u1ebd c\u1eadp nh\u1eadt l\u1ea1i s\u1edbm");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e,t){ye.a[e]({message:"Notification Title",description:t})},g=[{title:"T\xean S\u1ea3n Ph\u1ea9m",dataIndex:"name",key:"name",editable:!0,width:"15%"},{title:"description",dataIndex:"description",key:"description",editable:!0,width:"15%"},{title:"categoryName",dataIndex:"categoryName",key:"categoryName",editable:!0,width:"10%"},{title:"image",dataIndex:"image",render:function(e){return Object(f.jsx)("img",{src:"http://huylong37-001-site1.btempurl.com//user-content/"+e,style:{height:"50px",width:"100%"},alt:e})},editable:!1,width:"10%"},{title:"Gi\xe1 B\xe1n",dataIndex:"price",key:"price",editable:!0,width:"20%"},{title:"operation",dataIndex:"operation",width:"28%",colspan:2,render:function(e,t){return p(t)?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ve.a,{onClick:function(){return m(t.id)},type:"primary",danger:!0,shape:"round",children:"Save"}),Object(f.jsx)(ve.a,{type:"primary",danger:!0,shape:"round",onClick:h,children:"Cancel"})]}):Object(f.jsx)(ve.a,{disabled:""!==u,type:"primary",shape:"round",onClick:function(){return function(e){c.setFieldsValue(Object(i.a)({categoryName:"",lastName:"",email:"",Dob:"",phoneNumber:0},e)),b(e.id)}(t)},children:"Edit"})}},{title:"Delete",render:function(e,t){return Object(f.jsx)(ve.a,{onClick:function(){A.delete({userId:localStorage.getItem("Id"),id:t.id})},children:"Delete"})}}].map((function(e){return e.editable?Object(i.a)(Object(i.a)({},e),{},{onCell:function(t){return{record:t,dataIndex:e.dataIndex,title:e.title,editing:p(t)}}}):e}));return console.log(t),!0===t?Object(f.jsx)(ge.a,{form:c,component:!1,children:Object(f.jsx)(Ne.a,{components:{body:{cell:Be}},bordered:!0,rowKey:"uid",dataSource:n,columns:g,rowClassName:"editable-row",pagination:!1})}):Object(f.jsx)(O.a,{style:{display:"flex",justifyContent:"center"},tip:"Loading...",size:"large"})},Ee=function(){var e=Object(a.useState)({pageIndex:1}),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({pageIndex:1,pageSize:6,keyword:""}),s=Object(j.a)(c,2),o=s[0],u=s[1],b=Object(a.useState)(!1),p=Object(j.a)(b,2),h=p[0],m=p[1],x=Object(a.useState)([]),O=Object(j.a)(x,2),g=O[0],v=O[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getAll(o);case 2:t=e.sent,v(t.items),r({pageIndex:t.pageIndex,pageSize:t.pageSize,totalRows:t.toTalRecords}),m(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(I,{onSubmit:function(e){m(!1),u(Object(i.a)(Object(i.a)({},o),{},{keyword:e}))}}),Object(f.jsx)(He,{loading:h,Data:g}),Object(f.jsx)(y.a,{current:n.pageIndex,defaultPageSize:6,onChange:function(e,t){return function(e,t){m(!1),u(Object(i.a)(Object(i.a)({},o),{},{pageIndex:e,pageSize:t}))}(e,t)},total:n.totalRows,showSizeChanger:!0,pageSizeOptions:[6,10,20,30]})]})},qe=function(){return Object(f.jsx)("div",{children:"Updating..."})},Le=["component","layout"],Ke=function(e){var t=e.component,n=e.layout,a=Object(s.a)(e,Le);return Object(f.jsx)(o.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){return Object(f.jsx)(n,{children:Object(f.jsx)(t,Object(i.a)({},e))})}}))},Ue=function(){return Object(f.jsxs)(b.a,{children:[Object(f.jsx)(Ke,{path:"/",exact:!0,layout:be,component:R}),Object(f.jsx)(Ke,{path:"/home",exact:!0,layout:be,component:R}),Object(f.jsx)(Ke,{path:"/about",exact:!0,layout:be,component:B}),Object(f.jsx)(o.b,{path:"/login",exact:!0,component:te}),Object(f.jsx)(Ke,{path:"/admin",exact:!0,layout:Oe,component:function(){return null==localStorage.getItem("token")&&null==localStorage.getItem("role")?Object(f.jsx)(o.a,{to:"/"}):Object(f.jsx)(qe,{})}}),Object(f.jsx)(Ke,{path:"/admin/user",exact:!0,layout:Oe,component:De}),Object(f.jsx)(Ke,{path:"/admin/product",exact:!0,layout:Oe,component:Ee})]})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,439)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(370);c.a.render(Object(f.jsx)(Ue,{}),document.getElementById("root")),Me()}},[[371,1,2]]]);
//# sourceMappingURL=main.3f66ad4e.chunk.js.map