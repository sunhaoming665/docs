import{_ as u,a as h,b as p,c as _,d as f,e as m,f as b,g,h as k,i as v,j as w,k as y,l as S,m as A}from"./mini-io-nBo1LM1m.js";import{_ as x,r as a,o as O,c as C,a as o,w as n,e as t,b as e,f as R}from"./app-K3jJtKS8.js";const B={},E=R('<h1 id="s3" tabindex="-1"><a class="header-anchor" href="#s3" aria-hidden="true">#</a> S3</h1><p>S3 object storage protocols, such as COS, OSS, B2, etc.</p><h3 id="bucket" tabindex="-1"><a class="header-anchor" href="#bucket" aria-hidden="true">#</a> <strong>BucKet</strong></h3><p>bucket name</p><h3 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> <strong>Endpoint</strong></h3><p>Endpoint address (If you don’t know, you can read the official documents below)</p><h3 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> <strong>Region</strong></h3><p>area (If you don’t know, you can read the official documents below)</p><h3 id="access-key-id" tabindex="-1"><a class="header-anchor" href="#access-key-id" aria-hidden="true">#</a> <strong>Access key id</strong></h3><p>Access key id</p><h3 id="secret-access-key" tabindex="-1"><a class="header-anchor" href="#secret-access-key" aria-hidden="true">#</a> <strong>Secret access key</strong></h3><p>Secret access key</p><h2 id="session-token" tabindex="-1"><a class="header-anchor" href="#session-token" aria-hidden="true">#</a> <strong>Session token</strong></h2><p>Session token，Normally, the three-segment token needs to be used, and the two-segment token does not need to fill in this option.</p><h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> <strong>Root folder path</strong></h3><p>Root path, if not filled, it defaults to the root directory.</p><h3 id="custom-host" tabindex="-1"><a class="header-anchor" href="#custom-host" aria-hidden="true">#</a> <strong>Custom Host</strong></h3><p>Custom cdn acceleration domain name</p><h3 id="sign-url-expire" tabindex="-1"><a class="header-anchor" href="#sign-url-expire" aria-hidden="true">#</a> <strong>Sign url expire</strong></h3><p>The validity period of the signed download address is 4 hours by default. If a custom accelerated domain name is used, this option is invalid.</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> <strong>Placeholder</strong></h3><p>The name of placeholder file.</p><h3 id="force-path-style" tabindex="-1"><a class="header-anchor" href="#force-path-style" aria-hidden="true">#</a> <strong>Force path style</strong></h3><p>If enable ForcePathStyle, usually needed for minio.</p><h3 id="list-object-version" tabindex="-1"><a class="header-anchor" href="#list-object-version" aria-hidden="true">#</a> <strong>List object version</strong></h3><p>Refer to s3 sdk documents.</p><h2 id="add-object-storage-examples-and-official-documents" tabindex="-1"><a class="header-anchor" href="#add-object-storage-examples-and-official-documents" aria-hidden="true">#</a> <strong>Add object storage examples and official documents</strong></h2><p><code>S3 Object Storage</code> includes but is not limited to these. There are many more, such as Microsoft and Google, which have not been added. There are no examples here because it is difficult to register and activate and cannot provide example tutorials. If you have an account, please contact us and provide an account and I will add it.</p>',28),I={href:"https://oss.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},T=e("strong",null,"Alibaba Cloud OSS Official Website",-1),j={href:"https://help.aliyun.com/document_detail/31837.html",target:"_blank",rel:"noopener noreferrer"},D=e("strong",null,"Comparison Table of Endpoints in Different Regions of OSS under Public Cloud",-1),F=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,[t("Alist needs to skip "),e("code",null,"referer"),t(" to mount "),e("strong",null,"Alibaba Cloud Disk"),t(". If you do not allow "),e("code",null,"referer"),t(" to be empty in anti-leech, it will not work, because Alibaba Cloud Disk uses Alibaba Cloud OSS (in Beijing area)")]),e("p",null,[t("In fact, the "),e("code",null,"Region|Region"),t(" option can be written as "),e("code",null,"Endpoint"),t(", but for the sake of specification, let’s write it according to the comparison table.:::")])],-1),W=e("p",null,"Fill in example:",-1),U=e("p",null,[e("img",{src:u,alt:"s3"})],-1),z=e("p",null,null,-1),K={href:"https://console.cloud.tencent.com/cos",target:"_blank",rel:"noopener noreferrer"},L=e("strong",null,"Tencent Cloud COS Official Website",-1),N={href:"https://cloud.tencent.com/document/product/436/6224",target:"_blank",rel:"noopener noreferrer"},P=e("strong",null,"Collection Table of Endpoints in Each Region of COS under the Public Cloud",-1),q=e("p",null,"Fill in example:",-1),Q=e("p",null,[e("img",{src:h,alt:"s3"})],-1),Y={href:"https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html",target:"_blank",rel:"noopener noreferrer"},H=e("strong",null,"Tianyi Cloud OOS Official Website",-1),M={href:"https://www.ctyun.cn/document/10026693/10027878",target:"_blank",rel:"noopener noreferrer"},V=e("strong",null,"Comparison Table of Endpoints of OOS Regions under Public Cloud",-1),G=e("p",null,"Fill in example:",-1),J=e("p",null,[e("img",{src:p,alt:"s3"})],-1),X=e("p",null,null,-1),Z={href:"https://console.bce.baidu.com/bos",target:"_blank",rel:"noopener noreferrer"},$=e("strong",null,"Baidu Cloud BOS official website",-1),ee={href:"https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#Setrefererwhitelist",target:"_blank",rel:"noopener noreferrer"},te=e("strong",null,"Self-configure Bucket’s Referer whitelist permissions",-1),oe={href:"https://intl.cloud.baidu.com/doc/BOS/s/xjwvyq9l4-en",target:"_blank",rel:"noopener noreferrer"},ne=e("strong",null,"comparison table of Region and Endpoint of BOS under public cloud",-1),se=e("strong",null,"Endpoint comparison table compatible with AWS S3",-1),le={href:"https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4",target:"_blank",rel:"noopener noreferrer"},ie=e("strong",null,"Click to view details",-1),ae=e("p",null,"Fill in example:",-1),re=e("p",null,[e("img",{src:_,alt:"s3"})],-1),ce=e("p",null,null,-1),de={href:"https://portal.qiniu.com/kodo/bucket",target:"_blank",rel:"noopener noreferrer"},ue=e("strong",null,"Qiniu Cloud Kodo official website",-1),he=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),pe={href:"https://developer",target:"_blank",rel:"noopener noreferrer"},_e=e("p",null,"Fill in example:",-1),fe=e("p",null,[e("img",{src:f,alt:"s3"})],-1),me=e("p",null,null,-1),be={href:"https://www.huaweicloud.com/intl/en-us/",target:"_blank",rel:"noopener noreferrer"},ge=e("strong",null,"HUAWEI CLOUD OBS Official Website",-1),ke={href:"https://developer.huaweicloud.com/intl/en-us/endpoint",target:"_blank",rel:"noopener noreferrer"},ve=e("strong",null,"Check the Region and Endpoint comparison table of OBS under the public cloud",-1),we={href:"https://console.huaweicloud.com/iam/?region=cn-north-4#/mine/accessKey",target:"_blank",rel:"noopener noreferrer"},ye=e("p",null,"Fill in example:",-1),Se=e("p",null,[e("img",{src:m,alt:"s3"})],-1),Ae={href:"https://www.jdcloud.com/cn/products/object-storage-service",target:"_blank",rel:"noopener noreferrer"},xe=e("strong",null,"JD CLOUD OBS Official Website",-1),Oe={href:"https://www.jdcloud.com/cn/activity/oss",target:"_blank",rel:"noopener noreferrer"},Ce=e("br",null,null,-1),Re={href:"https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list",target:"_blank",rel:"noopener noreferrer"},Be=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),Ee=e("p",null,"Fill in example:",-1),Ie=e("p",null,[e("img",{src:b,alt:"s3"})],-1),Te={href:"https://www.dogecloud.com/product/oss",target:"_blank",rel:"noopener noreferrer"},je=e("strong",null,"Doge Cloud OSS Official Website",-1),De=e("code",null,"DogeCloud",-1),Fe=e("code",null,"S3",-1),We=e("p",null,"Region Code：",-1),Ue=e("div",{class:"language-json line-numbers-mode","data-ext":"json"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token comment"},"// 0: 上海（华东），1: 北京（华北），2: 广州（华南），3: 成都（西南）"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ze=e("p",null,[e("img",{src:g,alt:"s3"})],-1),Ke={href:"https://console.ecloud.10086.cn/api/page/eos-console-web/CIDC-RP-00/eos/bucket?productType=os&v=new",target:"_blank",rel:"noopener noreferrer"},Le=e("strong",null,"139 CLOUD EOS Official Website",-1),Ne=e("p",null,"need to precharge 100 to open",-1),Pe={href:"https://ecloud.10086.cn/op-help-center/doc/article/48082",target:"_blank",rel:"noopener noreferrer"},qe=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),Qe=e("p",null,"Fill in example:",-1),Ye=e("p",null,[e("img",{src:k,alt:"s3"})],-1),He={href:"https://console.upyun.com/services/file/",target:"_blank",rel:"noopener noreferrer"},Me=e("strong",null,"Yupyun USS Official Website",-1),Ve={href:"https://s3.console.aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"},Ge=e("strong",null,"Amazon S3 Official Website",-1),Je=e("p",null,"The endpoint URL contains the name of the region where the bucket is located",-1),Xe=e("p",null,[t("Example "),e("sup",null,"1"),t(", if your bucket is in the US East (Ohio) region")],-1),Ze=e("blockquote",null,[e("p",null,[t("Then the format of the Endpoint URL is "),e("strong",null,[e("code",null,"s3.us-east-2.amazonaws.com/your-bucket-name")])]),e("p",null,[t("Region parameter: "),e("strong",null,[e("code",null,"us-east-2")])]),e("p",null,[t("Bucket name: "),e("strong",null,[e("code",null,"your-bucket-name")]),t(" (your own bucket name)")])],-1),$e=e("p",null,[t("Example"),e("sup",null,"2"),t(", my storage bucket is "),e("code",null,"Tokyo"),t(", and the name of the storage bucket is "),e("code",null,"cdn-aw"),t(", then the complete parameter filling is as follows")],-1),et=e("strong",null,"Endpoint",-1),tt={href:"http://s3.ap-northeast-1.amazonaws.com",target:"_blank",rel:"noopener noreferrer"},ot=e("li",null,[e("strong",null,"Region"),t(": ap-northeast-1")],-1),nt=e("li",null,[e("strong",null,"Bucket Name"),t(": cdn-aw")],-1),st=e("p",null,"Let's take a look at the complete parameter filling example",-1),lt=e("p",null,"Fill in example:",-1),it=e("p",null,[e("img",{src:v,alt:"s3"})],-1),at={href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},rt=e("strong",null,"cloudflare R2 Official Website",-1),ct=e("p",null,[e("strong",null,"Endpoint"),t(" ：The S3 endpoint is available via the "),e("strong",null,[e("code",null,"https://<ACCOUNT_ID>.r2.cloudflarestorage.com")]),t(" endpoint.")],-1),dt=e("p",null,[e("strong",null,[e("code",null,"ACCOUNT_ID")]),t(" ：This account ID can be seen everywhere, and the simplest is the position at the top of the browser. The string of IDs behind the website link is your account ID.")],-1),ut=e("p",null,"填写示例：",-1),ht=e("p",null,[e("img",{src:w,alt:"s3"})],-1),pt={href:"https://secure.backblaze.com/b2_buckets.htm",target:"_blank",rel:"noopener noreferrer"},_t=e("strong",null,"B2 Official Website",-1),ft=e("p",null,[t("The full name is "),e("strong",null,[e("code",null,"Backblaze")]),t(", no verification information is required, and it is said that the first 10G is free.")],-1),mt=e("p",null,"Fill in example:",-1),bt=e("p",null,[e("img",{src:y,alt:"s3"})],-1),gt={href:"https://console.scaleway.com/object-storage/buckets",target:"_blank",rel:"noopener noreferrer"},kt=e("strong",null,"Scaleway Official Website",-1),vt=e("p",null,"Card required, verification information",-1),wt={href:"https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage",target:"_blank",rel:"noopener noreferrer"},yt=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),St=e("p",null,"Fill in example:",-1),At=e("p",null,[e("img",{src:S,alt:"s3"})],-1),xt=e("p",null,[t("Those who use "),e("code",null,"Minio"),t(" self-built object storage should know how to obtain the ID and secret key, so I won’t talk about it here")],-1),Ot=e("p",null,"You only need to fill in the four options of bucket name, access key ID, security access key, and Endpoint, and leave the region empty",-1),Ct=e("p",null,[e("strong",null,"Endpoint：http(s)://《YOUR_IP/URL》:9001/"),t("，You can use IP or domain name")],-1),Rt=e("strong",null,[e("code",null,"Force Path Style")],-1),Bt={href:"https://github.com/alist-org/alist/discussions/4920#discussioncomment-6635452",target:"_blank",rel:"noopener noreferrer"},Et=e("p",null,"填写示例：",-1),It=e("p",null,[e("img",{src:A,alt:"s3"})],-1),Tt=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),t(),e("strong",null,"The default download method used")],-1);function jt(Dt,Ft){const s=a("ExternalLinkIcon"),r=a("RouterLink"),c=a("Tabs"),d=a("Mermaid");return O(),C("div",null,[E,o(c,{id:"84",data:[{id:"Alibaba"},{id:"Tencent"},{id:"Tianyi"},{id:"Baidu"},{id:"Qiniu"},{id:"Huawei"},{id:"JD"},{id:"Doge"},{id:"139"},{id:"upyun"},{id:"Amazon"},{id:"R2"},{id:"B2"},{id:"scaleway"},{id:"Minio"}],"tab-id":"S3"},{title0:n(({value:l,isActive:i})=>[t("Alibaba")]),title1:n(({value:l,isActive:i})=>[t("Tencent")]),title2:n(({value:l,isActive:i})=>[t("Tianyi")]),title3:n(({value:l,isActive:i})=>[t("Baidu")]),title4:n(({value:l,isActive:i})=>[t("Qiniu")]),title5:n(({value:l,isActive:i})=>[t("Huawei")]),title6:n(({value:l,isActive:i})=>[t("JD")]),title7:n(({value:l,isActive:i})=>[t("Doge")]),title8:n(({value:l,isActive:i})=>[t("139")]),title9:n(({value:l,isActive:i})=>[t("upyun")]),title10:n(({value:l,isActive:i})=>[t("Amazon")]),title11:n(({value:l,isActive:i})=>[t("R2")]),title12:n(({value:l,isActive:i})=>[t("B2")]),title13:n(({value:l,isActive:i})=>[t("scaleway")]),title14:n(({value:l,isActive:i})=>[t("Minio")]),tab0:n(({value:l,isActive:i})=>[e("p",null,[e("a",I,[T,o(s)])]),e("p",null,[e("a",j,[D,o(s)])]),F,W,U,z]),tab1:n(({value:l,isActive:i})=>[e("p",null,[e("a",K,[L,o(s)])]),e("p",null,[e("a",N,[P,o(s)])]),q,Q]),tab2:n(({value:l,isActive:i})=>[e("p",null,[e("a",Y,[H,o(s)])]),e("p",null,[e("a",M,[V,o(s)])]),G,J,X]),tab3:n(({value:l,isActive:i})=>[e("p",null,[e("a",Z,[$,o(s)])]),e("p",null,[e("a",ee,[te,o(s)])]),e("p",null,[e("a",oe,[ne,o(s)])]),e("p",null,[se,e("a",le,[ie,o(s)])]),ae,re,ce]),tab4:n(({value:l,isActive:i})=>[e("p",null,[e("a",de,[ue,o(s)])]),e("p",null,[t("["),he,t("]("),e("a",pe,[t("https://developer"),o(s)]),t(" .qiniu.com/kodo/4088/s3-access-domainname)")]),_e,fe,me]),tab5:n(({value:l,isActive:i})=>[e("p",null,[e("a",be,[ge,o(s)])]),e("p",null,[e("a",ke,[ve,o(s)]),t(", the secret key AK/SK"),e("a",we,[t("acquire"),o(s)]),t(" to set by yourself.")]),ye,Se]),tab6:n(({value:l,isActive:i})=>[e("p",null,[e("a",Ae,[xe,o(s)])]),e("p",null,[t("Advantages: "),e("a",Oe,[t("free 10G"),o(s)]),t(", support IPV6"),Ce,t(" Disadvantages: need to precharge 100 to open，However, after the pre-deposit is completed, the object storage is activated, and the pre-deposited amount can still be used after withdrawal.")]),e("p",null,[e("a",Re,[Be,o(s)])]),Ee,Ie]),tab7:n(({value:l,isActive:i})=>[e("p",null,[e("a",Te,[je,o(s)]),t("，If you want to add Doge, use a separate "),De,t(" driver to add, please do not use the "),Fe,t(" the driver")]),We,Ue,ze]),tab8:n(({value:l,isActive:i})=>[e("p",null,[e("a",Ke,[Le,o(s)])]),Ne,e("p",null,[e("a",Pe,[qe,o(s)])]),Qe,Ye]),tab9:n(({value:l,isActive:i})=>[e("p",null,[e("a",He,[Me,o(s)]),t(":"),o(r,{to:"/guide/drivers/uss.html"},{default:n(()=>[t("Click here to configure USS")]),_:1})])]),tab10:n(({value:l,isActive:i})=>[e("p",null,[e("a",Ve,[Ge,o(s)])]),Je,Xe,Ze,$e,e("blockquote",null,[e("ol",null,[e("li",null,[et,t(": "),e("a",tt,[t("s3.ap-northeast-1.amazonaws.com"),o(s)])]),ot,nt])]),st,lt,it]),tab11:n(({value:l,isActive:i})=>[e("p",null,[e("a",at,[rt,o(s)])]),ct,dt,ut,ht]),tab12:n(({value:l,isActive:i})=>[e("p",null,[e("a",pt,[_t,o(s)])]),ft,mt,bt]),tab13:n(({value:l,isActive:i})=>[e("p",null,[e("a",gt,[kt,o(s)])]),vt,e("p",null,[e("a",wt,[yt,o(s)])]),St,At]),tab14:n(({value:l,isActive:i})=>[xt,Ot,Ct,e("p",null,[t("Finally, remember to enable "),Rt,t(" to use, otherwise it cannot be used "),e("a",Bt,[t("Click to view details"),o(s)])]),Et,It]),_:1}),Tt,o(d,{id:"mermaid-371",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}const zt=x(B,[["render",jt],["__file","s3.html.vue"]]);export{zt as default};
