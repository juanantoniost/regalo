import{v as c,e as f,b as e,u as o,w as l,F as w,o as _,G as g,a as r,n as V,g as b,i as v}from"./app-895b783b.js";import{A as k}from"./AuthenticationCard-85edf48c.js";import{_ as x}from"./AuthenticationCardLogo-7c7e379f.js";import{_ as i,a as m}from"./TextInput-c4b486fd.js";import{_ as n}from"./InputLabel-b84237f3.js";import{_ as y}from"./PrimaryButton-e170d1c7.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=["onSubmit"],$={class:"mt-4"},C={class:"mt-4"},S={class:"flex items-center justify-end mt-4"},E={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(h,a)=>(_(),f(w,null,[e(o(g),{title:"Reset Password"}),e(k,null,{logo:l(()=>[e(x)]),default:l(()=>[r("form",{onSubmit:v(u,["prevent"])},[r("div",null,[e(n,{for:"email",value:"Email"}),e(i,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),r("div",$,[e(n,{for:"password",value:"Password"}),e(i,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),r("div",C,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(i,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),r("div",S,[e(y,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:l(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{E as default};
