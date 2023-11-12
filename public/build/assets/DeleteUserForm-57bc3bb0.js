import{r as p,T as _,o as v,c as w,w as e,f as o,a as l,b as t,u as r,p as h,n as x}from"./app-0ae0119a.js";import{_ as y}from"./Modal-c5b8cea5.js";import{_ as u}from"./DangerButton-8ac63863.js";import{_ as g}from"./DialogModal-db9acc70.js";import{_ as k,a as S}from"./TextInput-353505fb.js";import{_ as U}from"./SecondaryButton-889001cf.js";import"./SectionTitle-7a3a2af2.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=l("div",{class:"max-w-xl text-sm text-gray-600"}," Une fois votre compte supprimé, toutes ses ressources et données seront définitivement effacées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver. ",-1),C={class:"mt-5"},$={class:"mt-4"},I={__name:"DeleteUserForm",setup(z){const a=p(!1),n=p(null),s=_({password:""}),d=()=>{a.value=!0,setTimeout(()=>n.value.focus(),250)},c=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>n.value.focus(),onFinish:()=>s.reset()})},i=()=>{a.value=!1,s.reset()};return(b,m)=>(v(),w(y,null,{title:e(()=>[o(" Supprimer le compte ")]),description:e(()=>[o(" Supprimer définitivement votre compte. ")]),content:e(()=>[V,l("div",C,[t(u,{onClick:d},{default:e(()=>[o(" Supprimer le compte ")]),_:1})]),t(g,{show:a.value,onClose:i},{title:e(()=>[o(" Supprimer le compte ")]),content:e(()=>[o(" Êtes-vous sûr de vouloir supprimer votre compte ? Une fois votre compte supprimé, toutes ses ressources et données seront définitivement effacées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte. "),l("div",$,[t(k,{ref_key:"passwordInput",ref:n,modelValue:r(s).password,"onUpdate:modelValue":m[0]||(m[0]=f=>r(s).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:h(c,["enter"])},null,8,["modelValue","onKeyup"]),t(S,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(U,{onClick:i},{default:e(()=>[o(" Annuler ")]),_:1}),t(u,{class:x(["ms-3",{"opacity-25":r(s).processing}]),disabled:r(s).processing,onClick:c},{default:e(()=>[o(" Supprimer le compte ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{I as default};
