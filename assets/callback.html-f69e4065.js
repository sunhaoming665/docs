import{c as g,r as S,u as e,N as r,O as s,P as n,W as l,ae as c,Q as a,ai as V,a1 as f,an as B,ao as I,_ as P,a9 as G,G as T}from"./framework-95cb4087.js";import{N as C}from"./Alert-4a4c015c.js";import{as as z,N as y}from"./app-72e141e5.js";import{N as K}from"./Input-ae65239c.js";import"./resolve-slot-16e06725.js";import"./browser-74495f17.js";import"./Scrollbar-1d5ba9cb.js";import"./use-merged-state-eecea3fd.js";const i=o=>(B("data-v-f8161509"),o=o(),I(),o),O=i(()=>a("b",null,"client_id: ",-1)),W=i(()=>a("b",null,"client_secret: ",-1)),j=i(()=>a("b",null,"redirect_uri: ",-1)),E=i(()=>a("b",null,"refresh_token:",-1)),F=g({__name:"Callback",setup(o){const m="iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v",v="jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG",_="https://alist.nn.ci/tool/baidu/callback",p=new URL(window.location.href),u=p.searchParams.get("code"),d=p.searchParams.get("error"),w=p.searchParams.get("error_description"),t=S();return u&&!d&&(async()=>{const h=await(await fetch(`https://api.nn.ci/alist/baidu/get_refresh_token?code=${u}`)).json();t.value=h})(),(x,h)=>!e(u)||e(d)?(r(),s(e(C),{key:0,title:e(d)||"Error",type:"error"},{default:n(()=>[l(c(e(w)),1)]),_:1},8,["title"])):(r(),s(e(y),{key:1,vertical:"",size:"large"},{default:n(()=>{var k,b,N;return[a("p",null,[O,l(c(m))]),a("p",null,[W,l(c(v))]),a("p",null,[j,l(c(_))]),(k=t.value)!=null&&k.error||(b=t.value)!=null&&b.error_description?(r(),s(e(C),{key:0,title:(N=t.value)==null?void 0:N.error,type:"error"},{default:n(()=>[l(c(t.value.error_description),1)]),_:1},8,["title"])):V("v-if",!0),f(e(y),{vertical:""},{default:n(()=>[E,t.value?(r(),s(e(K),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(r(),s(e(z),{key:0}))]),_:1})]}),_:1}))}});const M=P(F,[["__scopeId","data-v-f8161509"],["__file","Callback.vue"]]),Q=g({__name:"callback.html",setup(o){return(m,v)=>{const _=T("NaiveClient");return r(),G("div",null,[f(_,null,{default:n(()=>[f(e(M))]),_:1})])}}}),Y=P(Q,[["__file","callback.html.vue"]]);export{Y as default};
