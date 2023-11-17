import{r as p,s as H,o as t,d as s,a as i,m as N,b as a,w as o,f as n,t as k,q as L,n as w,l as Q,Q as E,T as I,j as O,x as D,c as h,e as u,u as F,F as U,g as G,O as K}from"./app-106fc461.js";import{_ as J}from"./Modal-dc32acaf.js";import{_ as W}from"./DialogModal-1f3a8d36.js";import{_ as q,a as B}from"./TextInput-1c9b43de.js";import{_ as z}from"./PrimaryButton-4d47a36b.js";import{_ as C}from"./SecondaryButton-78f7ef57.js";import{_ as X}from"./DangerButton-b2f5ffe5.js";import{_ as Y}from"./InputLabel-4d610228.js";import"./SectionTitle-e52da5c5.js";import"./_plugin-vue_export-helper-c27b6911.js";const Z={class:"mt-4"},y={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(g,{emit:T}){const x=T,l=p(!1),e=H({password:"",error:"",processing:!1}),c=p(null),_=()=>{axios.get(route("password.confirmation")).then(r=>{r.data.confirmed?x("confirmed"):(l.value=!0,setTimeout(()=>c.value.focus(),250))})},v=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,d(),Q().then(()=>x("confirmed"))}).catch(r=>{e.processing=!1,e.error=r.response.data.errors.password[0],c.value.focus()})},d=()=>{l.value=!1,e.password="",e.error=""};return(r,m)=>(t(),s("span",null,[i("span",{onClick:_},[N(r.$slots,"default")]),a(W,{show:l.value,onClose:d},{title:o(()=>[n(k(g.title),1)]),content:o(()=>[n(k(g.content)+" ",1),i("div",Z,[a(q,{ref_key:"passwordInput",ref:c,modelValue:e.password,"onUpdate:modelValue":m[0]||(m[0]=S=>e.password=S),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:L(v,["enter"])},null,8,["modelValue","onKeyup"]),a(B,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[a(C,{onClick:d},{default:o(()=>[n(" Cancel ")]),_:1}),a(z,{class:w(["ms-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:v},{default:o(()=>[n(k(g.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee={key:0,class:"text-lg font-medium text-gray-900"},te={key:1,class:"text-lg font-medium text-gray-900"},oe={key:2,class:"text-lg font-medium text-gray-900"},se=i("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[i("p",null," Lorsque l'authentification à deux facteurs est activée, un jeton sécurisé et aléatoire vous est demandé lors de l'authentification. Vous pouvez récupérer ce jeton à partir de l'application Google Authenticator de votre téléphone. ")],-1),ae={key:3},ne={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600"},ie={key:0,class:"font-semibold"},le={key:1},ce=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600"},de={class:"font-semibold"},me=["innerHTML"],fe={key:1,class:"mt-4"},pe={key:1},ve=i("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[i("p",{class:"font-semibold"}," Conservez ces codes de récupération dans un gestionnaire de mots de passe sécurisé. Ils peuvent être utilisés pour récupérer l'accès à votre compte en cas de perte de votre dispositif d'authentification à deux facteurs. ")],-1),_e={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},he={class:"mt-5"},ye={key:0},ge={key:1},Ae={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(g){const T=g,x=E(),l=p(!1),e=p(!1),c=p(!1),_=p(null),v=p(null),d=p([]),r=I({code:""}),m=O(()=>{var f;return!l.value&&((f=x.props.auth.user)==null?void 0:f.two_factor_enabled)});D(m,()=>{m.value||(r.reset(),r.clearErrors())});const S=()=>{l.value=!0,K.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([M(),R(),V()]),onFinish:()=>{l.value=!1,e.value=T.requiresConfirmation}})},M=()=>axios.get(route("two-factor.qr-code")).then(f=>{_.value=f.data.svg}),R=()=>axios.get(route("two-factor.secret-key")).then(f=>{v.value=f.data.secretKey}),V=()=>axios.get(route("two-factor.recovery-codes")).then(f=>{d.value=f.data}),A=()=>{r.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,_.value=null,v.value=null}})},j=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>V())},$=()=>{c.value=!0,K.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{c.value=!1,e.value=!1}})};return(f,P)=>(t(),h(J,null,{title:o(()=>[n(" Authentification à deux facteurs ")]),description:o(()=>[n(" Ajoutez une sécurité supplémentaire à votre compte en utilisant l'authentification à deux facteurs. ")]),content:o(()=>[m.value&&!e.value?(t(),s("h3",ee," Vous avez activé l'authentification à deux facteurs. ")):m.value&&e.value?(t(),s("h3",te," Terminer l'activation de l'authentification à deux facteurs. ")):(t(),s("h3",oe," Vous n'avez pas activé l'authentification à deux facteurs. ")),se,m.value?(t(),s("div",ae,[_.value?(t(),s("div",ne,[i("div",re,[e.value?(t(),s("p",ie," Pour terminer l'activation de l'authentification à deux facteurs, scannez le code QR suivant à l'aide de l'application d'authentification de votre téléphone ou entrez la clé de configuration et fournissez le code OTP généré. ")):(t(),s("p",le," L'authentification à deux facteurs est maintenant activée. Scannez le code QR suivant à l'aide de l'application d'authentification de votre téléphone ou entrez la clé de configuration. "))]),i("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:_.value},null,8,ce),v.value?(t(),s("div",ue,[i("p",de,[n(" Clé de configuration : "),i("span",{innerHTML:v.value},null,8,me)])])):u("",!0),e.value?(t(),s("div",fe,[a(Y,{for:"code",value:"Code"}),a(q,{id:"code",modelValue:F(r).code,"onUpdate:modelValue":P[0]||(P[0]=b=>F(r).code=b),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:L(A,["enter"])},null,8,["modelValue","onKeyup"]),a(B,{message:F(r).errors.code,class:"mt-2"},null,8,["message"])])):u("",!0)])):u("",!0),d.value.length>0&&!e.value?(t(),s("div",pe,[ve,i("div",_e,[(t(!0),s(U,null,G(d.value,b=>(t(),s("div",{key:b},k(b),1))),128))])])):u("",!0)])):u("",!0),i("div",he,[m.value?(t(),s("div",ge,[a(y,{onConfirmed:A},{default:o(()=>[e.value?(t(),h(z,{key:0,type:"button",class:w(["me-3",{"opacity-25":l.value}]),disabled:l.value},{default:o(()=>[n(" Confirmer ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(y,{onConfirmed:j},{default:o(()=>[d.value.length>0&&!e.value?(t(),h(C,{key:0,class:"me-3"},{default:o(()=>[n(" Regénérer le code de récupération ")]),_:1})):u("",!0)]),_:1}),a(y,{onConfirmed:V},{default:o(()=>[d.value.length===0&&!e.value?(t(),h(C,{key:0,class:"me-3"},{default:o(()=>[n(" Afficher les codes de récupération ")]),_:1})):u("",!0)]),_:1}),a(y,{onConfirmed:$},{default:o(()=>[e.value?(t(),h(C,{key:0,class:w({"opacity-25":c.value}),disabled:c.value},{default:o(()=>[n(" Annuler ")]),_:1},8,["class","disabled"])):u("",!0)]),_:1}),a(y,{onConfirmed:$},{default:o(()=>[e.value?u("",!0):(t(),h(X,{key:0,class:w({"opacity-25":c.value}),disabled:c.value},{default:o(()=>[n(" Désactiver ")]),_:1},8,["class","disabled"]))]),_:1})])):(t(),s("div",ye,[a(y,{onConfirmed:S},{default:o(()=>[a(z,{type:"button",class:w({"opacity-25":l.value}),disabled:l.value},{default:o(()=>[n(" Activer ")]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Ae as default};