import{T as d,o as m,d as n,b as e,u as t,w as o,F as c,Z as f,t as _,e as p,a,n as v,f as g,h as b}from"./app-0ae0119a.js";import{A as x}from"./AuthenticationCard-355ebb19.js";import{_ as h}from"./AuthenticationCardLogo-b2c95c02.js";import{_ as V,a as w}from"./TextInput-353505fb.js";import{_ as y}from"./InputLabel-77d7c389.js";import{_ as $}from"./PrimaryButton-eaafab8f.js";import"./_plugin-vue_export-helper-c27b6911.js";const k=a("div",{class:"mb-4 text-sm text-gray-600"}," Vous avez oublié votre mot de passe ? Pas de problème. Indiquez-nous votre adresse électronique et nous vous enverrons un lien de réinitialisation du mot de passe qui vous permettra d'en choisir un nouveau. ",-1),q={key:0,class:"mb-4 font-medium text-sm text-green-600"},C=["onSubmit"],F={class:"flex items-center justify-end mt-4"},j={__name:"ForgotPassword",props:{status:String},setup(i){const s=d({email:""}),l=()=>{s.post(route("password.email"))};return(N,r)=>(m(),n(c,null,[e(t(f),{title:"Forgot Password"}),e(x,null,{logo:o(()=>[e(h)]),default:o(()=>[k,i.status?(m(),n("div",q,_(i.status),1)):p("",!0),a("form",{onSubmit:b(l,["prevent"])},[a("div",null,[e(y,{for:"email",value:"Email"}),e(V,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":r[0]||(r[0]=u=>t(s).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(w,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",F,[e($,{class:v({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[g(" Lien de réinitialisation ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{j as default};
