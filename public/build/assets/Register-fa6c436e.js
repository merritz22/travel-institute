import{T as _,o as c,d as f,b as e,u as o,w as l,F as g,Z as w,a,f as d,e as h,i as v,n as y,h as V}from"./app-df7b76db.js";import{A as b}from"./AuthenticationCard-9e733d99.js";import{_ as k}from"./AuthenticationCardLogo-6302252b.js";import{_ as x}from"./Checkbox-7f50a943.js";import{_ as u,a as n}from"./TextInput-ddd022f4.js";import{_ as i}from"./InputLabel-82d6d49b.js";import{_ as $}from"./PrimaryButton-dfbd0d28.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./travel-logo-princ-1b51a2e8.js";const q=["onSubmit"],C={class:"mt-4"},N={class:"mt-4"},U={class:"mt-4"},F={key:0,class:"mt-4"},S={class:"flex items-center"},A={class:"ms-2"},B=["href"],P=["href"],T={class:"flex items-center justify-end mt-4"},I={__name:"Register",setup(j){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(m,t)=>(c(),f(g,null,[e(o(w),{title:"Register"}),e(b,null,{logo:l(()=>[e(k)]),default:l(()=>[a("form",{onSubmit:V(p,["prevent"])},[a("div",null,[e(i,{for:"name",value:"Nom"}),e(u,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":t[0]||(t[0]=r=>o(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.name},null,8,["message"])]),a("div",C,[e(i,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":t[1]||(t[1]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),a("div",N,[e(i,{for:"password",value:"Mot de passe"}),e(u,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":t[2]||(t[2]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),a("div",U,[e(i,{for:"password_confirmation",value:"Confirmer le mot de Passe"}),e(u,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(n,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),m.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",F,[e(i,{for:"terms"},{default:l(()=>[a("div",S,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":t[4]||(t[4]=r=>o(s).terms=r),name:"terms",required:""},null,8,["checked"]),a("div",A,[d(" J'accepte les"),a("a",{target:"_blank",href:m.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," termes du contrat",8,B),d(" et les "),a("a",{target:"_blank",href:m.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"politiques de confidentialitées",8,P)])]),e(n,{class:"mt-2",message:o(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),a("div",T,[e(o(v),{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:l(()=>[d(" Se Connecter? ")]),_:1},8,["href"]),e($,{class:y(["ms-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[d(" S'enregistrer ")]),_:1},8,["class","disabled"])])],40,q)]),_:1})],64))}};export{I as default};
