import{_ as i}from"./AppLayout-b8018130.js";import o from"./DeleteTeamForm-a9e70106.js";import{S as r}from"./SectionBorder-f878a5b5.js";import l from"./TeamMemberManager-ef2b409d.js";import n from"./UpdateTeamNameForm-d8557d41.js";import{o as a,c,w as s,a as m,b as t,d as p,F as d,e as f}from"./app-dd396527.js";import"./travel-logo-princ-1b51a2e8.js";import"./Modal-00dad823.js";import"./SectionTitle-d00da113.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-9fe4e65f.js";import"./DangerButton-f6820ed5.js";import"./SecondaryButton-7f2fe88c.js";import"./ActionMessage-3d8ecb63.js";import"./DialogModal-134c35c9.js";import"./FormSection-44b4f05b.js";import"./TextInput-f3e40858.js";import"./InputLabel-21166f1d.js";import"./PrimaryButton-4831b279.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{E as default};