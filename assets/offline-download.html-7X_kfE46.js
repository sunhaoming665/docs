import{_ as c}from"./offline-download-H9yzVjl-.js";import{_ as h,r as s,o as n,c as r,b as t,a as l,w as u,e as o,f as i}from"./app-l2dYaIWN.js";const p={},_=i('<h1 id="离线下载" tabindex="-1"><a class="header-anchor" href="#离线下载" aria-hidden="true">#</a> 离线下载</h1><div class="hint-container warning"><p class="hint-container-title">请仔细阅读以下提示</p><p>有两款离线下载功能软件</p><p>两款用法都一样，提前设置好软件配置(具体配置看下面说明)，</p><p>然后回到前端界面， <mark>找到你想把离线文件上传到哪个文件夹，你就手动进入到该文件夹</mark></p><p>然后再右下角找到离线下载按钮，自行选择使用 Aria2下载还是qBittorrent下载(＞v 3.11.0)</p><p>如果你使用 <strong>docker</strong>，请自行映射以下两个默认路径（映射至宿主机相同的目录）</p><ul><li><p><strong>/opt/alist/data/temp/aria2</strong></p></li><li><p><strong>/opt/alist/data/temp/qbittorrent</strong></p></li></ul></div><h2 id="_1-aria2" tabindex="-1"><a class="header-anchor" href="#_1-aria2" aria-hidden="true">#</a> <strong>1.Aria2</strong></h2>',3),g=t("strong",null,"点击查看使用说明",-1),m=t("h2",{id:"_2-qbittorrent",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-qbittorrent","aria-hidden":"true"},"#"),o(),t("strong",null,"2.qBittorrent")],-1),f=t("p",null,"（这里以Windows端举例，Linux端不清楚有没有）",-1),k=t("p",null,[o("首先我们先要在 "),t("strong",null,[t("code",null,"qBittorrent")]),o(" 客户端配置好预设值")],-1),w={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162",target:"_blank",rel:"noopener noreferrer"},b=t("ul",null,[t("li",null,[t("strong",null,"ip"),o("：localhost")]),t("li",null,[t("strong",null,"port"),o("：8080")]),t("li",null,[t("strong",null,"user"),o("：admin")]),t("li",null,[t("strong",null,"password"),o("：adminadmin")])],-1),v=t("li",null,[t("p",null,[o("将以上参数我们填写到 "),t("strong",null,[t("code",null,"qBittorrent")]),o(" 客户端，配置好后我们去Alist前端进行离线下载（"),t("strong",null,"方法参考开头的说明"),o("）")]),t("ul",null,[t("li",null,[o("若提交离线链接后提示："),t("strong",null,"Qbittorrent not ready"),o(" 将Alist和qBittorrent都重启试试看")])])],-1),L=t("p",null,"预设值配置查看地址：",-1),B={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162",target:"_blank",rel:"noopener noreferrer"},M=t("li",null,[t("p",null,[t("code",null,'{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ')])],-1),x=t("li",null,[t("p",null,[o("使用 "),t("strong",null,[t("code",null,"qBittorrent")]),o(" 来离线 "),t("code",null,".torrent"),o(" 类型的文件")])],-1),q=t("code",null,".torrent",-1),y={href:"https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010",target:"_blank",rel:"noopener noreferrer"},P=i('<ol start="4"><li>可以自行配置下载完毕后不进行删除，进行做种，默认为<code>0</code>会上传完毕后立即删除</li></ol><ul><li>修改位置：<strong>Alist后台</strong> --&gt; <strong>设置</strong> --&gt; <strong>Qbittorrent 做种时间</strong> 选项，设置你自己需要配置的时间单位是<code>分钟</code>，到了设置的做种时间后会自动删除</li></ul><ol start="5"><li><mark>我们也可以自定义，不使用默认的预设值</mark></li></ol><ul><li>修改位置：<strong>Alist后台</strong> --&gt; <strong>设置</strong> --&gt; <strong>Qbittorrent url</strong> 选项，照着修改即可</li></ul><p><img src="'+c+'" alt="Offline download"></p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> <strong>注意事项</strong></h3><ol><li>在后台qBittorrent任务中出现：<strong><code>torrent parse timeout</code></strong>，解析超时</li><li>可以解析种子下载，但是在上传的时候出现 <strong><code>The system cannot find the path specified.</code></strong> 找不到路径</li></ol><p>以上两种办法大概率是因为 qBittorrent 软件本体导致的，可能是因为绿色版,修改版 进行了一些功能阉割 修改导致的，建议去官网下载安装即可恢复（由本人亲自踩坑后得出的结论）</p>',8),V=t("strong",null,"qBittorrent",-1),C={href:"https://www.qbittorrent.org/",target:"_blank",rel:"noopener noreferrer"},z=t("strong",null,"qBittorrent增强版",-1),A={href:"https://github.com/c0re100/qBittorrent-Enhanced-Edition",target:"_blank",rel:"noopener noreferrer"},J=i('<ol start="3"><li>因为用到了 <code>v2.8.3</code> 的 API，所以 qBittorrent 的版本最低应该是 <code>4.4.0beta2</code> 或者 <code>4.3.8</code> 正式版</li><li>如果 <strong>qBittorrent</strong> 设置了 alist 所在的 ip 免验证的话可以直接省略 <code>@</code> 前面的用户名和密码（在<strong>qBittorrent</strong>客户端配置） <ul><li>3 和 4 是视频中没有提到的.</li></ul></li></ol><p><strong>qBittorrent</strong>视频教程</p>',2),N={href:"https://b23.tv/J34qDiG",target:"_blank",rel:"noopener noreferrer"},E=t("br",null,null,-1),T=t("h2",{id:"_3-simplehttp",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-simplehttp","aria-hidden":"true"},"#"),o(),t("strong",null,"3.SimpleHttp")],-1),S=t("p",null,"后续补充",-1),G=t("br",null,null,-1),X=t("h2",{id:"_4-pikpak",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_4-pikpak","aria-hidden":"true"},"#"),o(),t("strong",null,"4.PikPak")],-1),H=t("p",null,"v3.36.0及以上版本支持在AList调用Pikpak离线下载功能",-1),K={style:{color:"rgb(24, 144, 255)"}},Z={fill:"none","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css",height:"1em",width:"1em",style:{overflow:"visible"}},D=t("path",{fill:"currentColor",d:"M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"},null,-1),I=t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z","clip-rule":"evenodd"},null,-1),O=[D,I],Q={style:{color:"rgb(24, 144, 255)"}},j={fill:"currentColor","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css",tips:"offline_download",height:"1em",width:"1em",style:{overflow:"visible"}},R=t("path",{fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32",d:"M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"},null,-1),F=t("path",{"stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"},null,-1),W=t("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"},null,-1),U=[R,F,W],Y=t("code",null,"Pikpak",-1),$=i('<ul><li>支持：<code>magne</code>、<code>http</code>、 <code>ed2k</code> 链接</li><li>也支持：X、TikTok、Facebook、TG的网址链接</li></ul><p>仅支持使用Pikpak离线下载，非Pikpak会提示如下错误：</p><ul><li>unsupported storage driver for offline download, only Pikpak is supported</li></ul><h2 id="_5-115-cloud" tabindex="-1"><a class="header-anchor" href="#_5-115-cloud" aria-hidden="true">#</a> <strong>5.115 Cloud</strong></h2><p>v3.36.0以上版本支持在AList调用115网盘离线下载功能</p>',5),tt={style:{color:"rgb(24, 144, 255)"}},ot={fill:"none","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css",height:"1em",width:"1em",style:{overflow:"visible"}},lt=t("path",{fill:"currentColor",d:"M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"},null,-1),et=t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z","clip-rule":"evenodd"},null,-1),nt=[lt,et],rt={style:{color:"rgb(24, 144, 255)"}},it={fill:"currentColor","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css",tips:"offline_download",height:"1em",width:"1em",style:{overflow:"visible"}},st=t("path",{fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32",d:"M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"},null,-1),at=t("path",{"stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"},null,-1),dt=t("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"},null,-1),ct=[st,at,dt],ht=t("code",null,"115 Cloud",-1),ut=t("ul",null,[t("li",null,[o("支持："),t("code",null,"magne"),o("、"),t("code",null,"http"),o("、 "),t("code",null,"ed2k"),o(" 链接")])],-1),pt=t("p",null,"仅支持使用115网盘离线下载，非115网盘会提示如下错误：",-1),_t=t("ul",null,[t("li",null,"unsupported storage driver for offline download, only 115 Cloud is supported")],-1);function gt(mt,ft){const a=s("RouterLink"),e=s("ExternalLinkIcon"),d=s("BiliBili");return n(),r("div",null,[_,t("p",null,[l(a,{to:"/zh/config/other.html"},{default:u(()=>[g]),_:1})]),m,f,k,t("p",null,[o("根据"),t("a",w,[o("源码"),l(e)]),o("我们知道预设值分别是 admin:adminadmin@localhost:8080/")]),b,t("ol",null,[v,t("li",null,[L,t("ul",null,[t("li",null,[t("p",null,[t("strong",null,[t("a",B,[o("https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162"),l(e)])])])]),M])]),x]),t("ul",null,[t("li",null,[o("虽然不可以直接添加离线"),q,o(" 类型的文件，可以曲线救国 参考:"),t("a",y,[o("查看方法"),l(e)])])]),P,t("ul",null,[t("li",null,[V,o("官网："),t("strong",null,[t("a",C,[o("https://www.qbittorrent.org/"),l(e)])])]),t("li",null,[z,o("GitHub："),t("strong",null,[t("a",A,[o("https://github.com/c0re100/qBittorrent-Enhanced-Edition"),l(e)])])])]),J,l(d,{bvid:"BV1NT411q7EN"}),t("p",null,[t("strong",null,[o("视频若失效可以前往观看："),t("a",N,[o("https://b23.tv/J34qDiG"),l(e)])])]),E,T,S,G,X,H,t("p",null,[o("右下角选择 "),t("span",K,[(n(),r("svg",Z,O))]),t("span",Q,[(n(),r("svg",j,U))]),o("离线下载选项选择"),Y]),$,t("p",null,[o("右下角选择 "),t("span",tt,[(n(),r("svg",ot,nt))]),t("span",rt,[(n(),r("svg",it,ct))]),o("离线下载选项选择"),ht]),ut,pt,_t])}const bt=h(p,[["render",gt],["__file","offline-download.html.vue"]]);export{bt as default};
