import{c as I,b as U,u as t,N as s,O as n,P as i,W as a,ae as l,Q as o,ai as f,a1 as u,a9 as S,an as w,ao as B,_ as T,G as O}from"./framework-95cb4087.js";import{N as k}from"./Alert-4a4c015c.js";import{as as b,N as m}from"./app-72e141e5.js";import{N}from"./Input-ae65239c.js";import{N as j}from"./Button-ebbb2f1f.js";import"./resolve-slot-16e06725.js";import"./browser-74495f17.js";import"./Scrollbar-1d5ba9cb.js";import"./use-merged-state-eecea3fd.js";import"./color-to-class-b0332f36.js";const c=p=>(w("data-v-611118eb"),p=p(),B(),p),V=c(()=>o("b",null,"client_id: ",-1)),D=c(()=>o("b",null,"client_secret: ",-1)),G=c(()=>o("b",null,"zone: ",-1)),E=c(()=>o("p",null,[o("b",null,"redirect_uri: "),a("https://alist.nn.ci/tool/onedrive/callback")],-1)),J=c(()=>o("b",null,"refresh_token:",-1)),A=c(()=>o("h3",null,"Get sharepoint site ID",-1)),L={key:2},Q=c(()=>o("b",null,"site_id: ",-1)),R=I({__name:"Callback",setup(p){const d=new URL(window.location.href),h=d.searchParams.get("code"),_=d.searchParams.get("state"),g=d.searchParams.get("error"),x=d.searchParams.get("error_description"),e=U({refreshToken:"",accessToken:"",error1:"",errorMessage1:"",siteUrl:"",siteId:"",error2:"",errorMessage2:"",gettingSiteId:!1});h&&_&&!g&&(()=>{fetch("https://api.nn.ci/alist/onedrive/get_refresh_token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:h,client:_})}).then(r=>r.json()).then(r=>{if(console.log(r),r.error){e.error1=r.error,e.errorMessage1=r.error_description;return}e.refreshToken=r.refresh_token,e.accessToken=r.access_token})})();const[C,M,v]=atob(_).split("::"),z=()=>{e.gettingSiteId=!0,fetch("https://api.nn.ci/alist/onedrive/get_site_id",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({site_url:e.siteUrl,access_token:e.accessToken,zone:v})}).then(r=>(e.gettingSiteId=!1,r.json())).then(r=>{if(r.error){e.error2=r.error,e.errorMessage2=r.error.message;return}e.siteId=r.id})};return(r,y)=>!t(h)||!t(_)||t(g)?(s(),n(t(k),{key:0,title:t(g)||"Error",type:"error"},{default:i(()=>[a(l(t(x)),1)]),_:1},8,["title"])):(s(),n(t(m),{key:1,vertical:"",size:"large"},{default:i(()=>[o("p",null,[V,a(l(t(C)),1)]),o("p",null,[D,a(l(t(M)),1)]),o("p",null,[G,a(l(t(v)),1)]),E,e.error1||e.errorMessage1?(s(),n(t(k),{key:0,title:e.error1,type:"error"},{default:i(()=>[a(l(e.errorMessage1),1)]),_:1},8,["title"])):f("v-if",!0),u(t(m),{vertical:""},{default:i(()=>[J,!e.refreshToken&&!e.errorMessage1?(s(),n(t(b),{key:0})):(s(),n(t(N),{key:1,type:"textarea",autosize:"",readonly:"",value:e.refreshToken},null,8,["value"]))]),_:1}),e.accessToken?(s(),n(t(m),{key:1,vertical:"",size:"large"},{default:i(()=>[A,e.error2||e.errorMessage2?(s(),n(t(k),{key:0,title:e.error2,type:"error"},{default:i(()=>[a(l(e.errorMessage2),1)]),_:1},8,["title"])):f("v-if",!0),u(t(N),{placeholder:"input site url (https://xx.sharepoint.xx/sites/xx)",size:"large",value:e.siteUrl,"onUpdate:value":y[0]||(y[0]=P=>e.siteUrl=P)},null,8,["value"]),u(t(j),{type:"primary",size:"large",onClick:z},{default:i(()=>[a("Get SiteID")]),_:1}),e.gettingSiteId?(s(),n(t(b),{key:1})):e.siteId?(s(),S("p",L,[Q,a(l(e.siteId),1)])):f("v-if",!0)]),_:1})):f("v-if",!0)]),_:1}))}});const W=T(R,[["__scopeId","data-v-611118eb"],["__file","Callback.vue"]]),$=I({__name:"callback.html",setup(p){return(d,h)=>{const _=O("NaiveClient");return s(),S("div",null,[u(_,null,{default:i(()=>[u(t(W))]),_:1})])}}}),se=T($,[["__file","callback.html.vue"]]);export{se as default};
