import{_ as r,N as d,a9 as k,Q as n,W as s,a1 as t,P as a,ag as m,G as o}from"./framework-95cb4087.js";const v={},b=n("h1",{id:"手动安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#手动安装","aria-hidden":"true"},"#"),s(" 手动安装")],-1),g=n("h3",{id:"获取-alist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#获取-alist","aria-hidden":"true"},"#"),s(" 获取 AList")],-1),h={href:"https://github.com/Xhofe/alist/releases",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"start server@0.0.0.0:5244",-1),x=n("code",null,"http://ip:5244",-1),y=n("h3",{id:"手动运行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#手动运行","aria-hidden":"true"},"#"),s(" 手动运行")],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 解压下载的文件，得到可执行文件："),s(`
`),n("span",{class:"token function"},"tar"),s(),n("span",{class:"token parameter variable"},"-zxvf"),s(` alist-xxxx.tar.gz
`),n("span",{class:"token comment"},"# 授予程序执行权限："),s(`
`),n("span",{class:"token function"},"chmod"),s(` +x alist
`),n("span",{class:"token comment"},"# 运行程序"),s(`
./alist server
`),n("span",{class:"token comment"},"# 获得管理员信息"),s(`
./alist admin
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 解压下载的文件，得到可执行文件："),s(`
`),n("span",{class:"token function"},"tar"),s(),n("span",{class:"token parameter variable"},"-zxvf"),s(` alist-xxxx.tar.gz
`),n("span",{class:"token comment"},"# 授予程序执行权限："),s(`
`),n("span",{class:"token function"},"chmod"),s(` +x alist
`),n("span",{class:"token comment"},"# 运行程序"),s(`
./alist server
`),n("span",{class:"token comment"},"# 获得管理员信息"),s(`
./alist admin
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 解压下载的文件，得到可执行文件："),s(`
`),n("span",{class:"token function"},"unzip"),s(` alist-xxxx.zip
`),n("span",{class:"token comment"},"# 运行程序"),s(`
.`),n("span",{class:"token punctuation"},"\\"),s(`alist.exe server
`),n("span",{class:"token comment"},"# 获得管理员信息"),s(`
.`),n("span",{class:"token punctuation"},"\\"),s(`alist.exe admin
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 安装"),s(`
scoop `),n("span",{class:"token function"},"install"),s(` alist
`),n("span",{class:"token comment"},"# 运行"),s(`
alist server
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("h3",{id:"守护进程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#守护进程","aria-hidden":"true"},"#"),s(" 守护进程")],-1),D=n("p",null,[s("使用任意方式编辑 "),n("code",null,"/usr/lib/systemd/system/alist.service"),s(" 并添加如下内容，其中 path_alist 为 AList 所在的路径")],-1),S=n("div",{class:"language-ini line-numbers-mode","data-ext":"ini"},[n("pre",{class:"language-ini"},[n("code",null,[n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Unit"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"Description"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"alist"),s(`
`),n("span",{class:"token key attr-name"},"After"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"network.target"),s(`
 
`),n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Service"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"Type"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"simple"),s(`
`),n("span",{class:"token key attr-name"},"WorkingDirectory"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"path_alist"),s(`
`),n("span",{class:"token key attr-name"},"ExecStart"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"path_alist/alist server"),s(`
`),n("span",{class:"token key attr-name"},"Restart"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"on-failure"),s(`
 
`),n("span",{class:"token section"},[n("span",{class:"token punctuation"},"["),n("span",{class:"token section-name selector"},"Install"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"token key attr-name"},"WantedBy"),n("span",{class:"token punctuation"},"="),n("span",{class:"token value attr-value"},"multi-user.target"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,[s("然后，执行 "),n("code",null,"systemctl daemon-reload"),s(" 重载配置，现在你可以使用这些命令来管理程序：")],-1),z=n("ul",null,[n("li",null,[s("启动: "),n("code",null,"systemctl start alist")]),n("li",null,[s("关闭: "),n("code",null,"systemctl stop alist")]),n("li",null,[s("配置开机自启: "),n("code",null,"systemctl enable alist")]),n("li",null,[s("取消开机自启: "),n("code",null,"systemctl disable alist")]),n("li",null,[s("状态: "),n("code",null,"systemctl status alist")]),n("li",null,[s("重启: "),n("code",null,"systemctl restart alist")])],-1),B=n("p",null,[s("使用任意方式编辑 "),n("code",null,"~/Library/LaunchAgents/ci.nn.alist.plist"),s(" 并添加如下内容，修改 "),n("code",null,"path_alist"),s(" 为 AList 所在的路径，"),n("code",null,"path/to/working/dir"),s(" 为 AList的工作路径")],-1),E=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token prolog"},'<?xml version="1.0" encoding="UTF-8"?>'),s(`
`),n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"plist"),s(),n("span",{class:"token name"},"PUBLIC"),s(),n("span",{class:"token string"},'"-//Apple//DTD PLIST 1.0//EN"'),s(),n("span",{class:"token string"},'"http://www.apple.com/DTDs/PropertyList-1.0.dtd"'),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("plist")]),s(),n("span",{class:"token attr-name"},"version"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1.0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("dict")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("key")]),n("span",{class:"token punctuation"},">")]),s("Label"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("key")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("string")]),n("span",{class:"token punctuation"},">")]),s("ci.nn.alist"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("string")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("key")]),n("span",{class:"token punctuation"},">")]),s("KeepAlive"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("key")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("true")]),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("key")]),n("span",{class:"token punctuation"},">")]),s("ProcessType"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("key")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("string")]),n("span",{class:"token punctuation"},">")]),s("Background"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("string")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("key")]),n("span",{class:"token punctuation"},">")]),s("RunAtLoad"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("key")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("true")]),n("span",{class:"token punctuation"},"/>")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("key")]),n("span",{class:"token punctuation"},">")]),s("WorkingDirectory"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("key")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("string")]),n("span",{class:"token punctuation"},">")]),s("path/to/working/dir"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("string")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("key")]),n("span",{class:"token punctuation"},">")]),s("ProgramArguments"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("key")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("array")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("string")]),n("span",{class:"token punctuation"},">")]),s("path_alist/alist"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("string")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("string")]),n("span",{class:"token punctuation"},">")]),s("server"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("string")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("array")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("dict")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("plist")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("p",null,[s("然后，执行 "),n("code",null,"launchctl load ~/Library/LaunchAgents/ci.nn.alist.plist"),s(" 加载配置，现在你可以使用这些命令来管理程序：")],-1),V=n("ul",null,[n("li",null,[s("开启: "),n("code",null,"launchctl start ~/Library/LaunchAgents/ci.nn.alist.plist")]),n("li",null,[s("关闭: "),n("code",null,"launchctl stop ~/Library/LaunchAgents/ci.nn.alist.plist")]),n("li",null,[s("卸载配置: "),n("code",null,"launchctl unload ~/Library/LaunchAgents/ci.nn.alist.plist")])],-1),C=n("p",null,"方法1",-1),N=n("p",null,[s("用 "),n("strong",null,[n("code",null,".VBS")]),s(" 脚本启动和停止，分别创建两个脚本 分别是 启动.vbs 和 停止.vbs")],-1),R=n("p",null,"直接在和Alist启动程序同级文件夹里面双击启动即可，不用担心没有反应 直接去 浏览器访问即可",-1),q={class:"hint-container info"},I=n("p",{class:"hint-container-title"},"两个启动脚本",-1),O=n("p",null,[n("strong",null,"启动.vbs")],-1),U=n("div",{class:"language-vbscript line-numbers-mode","data-ext":"vbscript"},[n("pre",{class:"language-vbscript"},[n("code",null,`Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "alist.exe server",vbhide
Wscript.quit
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("p",null,[n("strong",null,"停止.vbs")],-1),G=n("div",{class:"language-vbscript line-numbers-mode","data-ext":"vbscript"},[n("pre",{class:"language-vbscript"},[n("code",null,`Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "taskkill /f /im alist.exe",0
Wscript.quit
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K={href:"https://www.aliyundrive.com/s/DHPMhRtKUzY/folder/63e0961eae317bd4d4d945cda69dbb00f9837fb7",target:"_blank",rel:"noopener noreferrer"},Y=n("strong",null,"脚本下载",-1),F={href:"https://www.bilibili.com/video/BV1DG411s7j5?t=266.2",target:"_blank",rel:"noopener noreferrer"},H=n("strong",null,"参考视频",-1),M=n("p",null,"如何实现Windows开机自启，可以参考上面提到的脚本使用视频(第二个)。",-1),Q=m(`<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>对于所有平台，您可以使用以下命令来静默启动、停止和重新启动。 （v3.4.0 及更高版本）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 携带\`--force-bin-dir\`参数启动服务</span>
alist start
<span class="token comment"># 通过pid停止服务</span>
alist stop
<span class="token comment"># 通过pid重启服务</span>
alist restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="如何更新" tabindex="-1"><a class="header-anchor" href="#如何更新" aria-hidden="true">#</a> 如何更新</h3><p>下载新版Alist，把之前的替换了即可。</p>`,3);function X(J,Z){const c=o("ExternalLinkIcon"),u=o("RouterLink"),p=o("Tabs");return d(),k("div",null,[b,g,n("p",null,[s("打开 "),n("a",h,[s("AList Release"),t(c)]),s(" 下载待部署系统对应的文件。最新版的前端已经和后端打包好了，不用再下载前端文件了。")]),n("p",null,[s("xxxx 指的是不同系统/架构对应的名称，一般 Linux-x86/64 为 alist-linux-amd64。如果"),t(u,{to:"/zh/faq/why.html#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-%E6%88%96%E8%80%85-accept-function-not-implemented"},{default:a(()=>[s("你的 glibc 版本太低")]),_:1}),s("，建议下载 musl 版本")]),n("p",null,[s("当你看到 "),_,s(" 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 "),x,s(" 可以看到登录页面，WebDAV 请参阅 "),t(u,{to:"/zh/guide/webdav.html"},{default:a(()=>[s("WebDav")]),_:1}),s("。")]),y,t(p,{id:"18",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"},{title:"win(scoop)"}],"tab-id":"os"},{tab0:a(({title:e,value:l,isActive:i})=>[f]),tab1:a(({title:e,value:l,isActive:i})=>[L]),tab2:a(({title:e,value:l,isActive:i})=>[w]),tab3:a(({title:e,value:l,isActive:i})=>[A]),_:1},8,["data"]),W,t(p,{id:"35",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"os"},{tab0:a(({title:e,value:l,isActive:i})=>[D,S,T,z]),tab1:a(({title:e,value:l,isActive:i})=>[B,E,P,V]),tab2:a(({title:e,value:l,isActive:i})=>[C,N,R,n("div",q,[I,O,U,j,G,n("ol",null,[n("li",null,[n("p",null,[s("脚本不会创建的可以自行下载："),n("a",K,[Y,t(c)])])]),n("li",null,[n("p",null,[s("脚本不会使用的可以看看视频："),n("a",F,[H,t(c)])])])])]),M]),_:1}),Q])}const nn=r(v,[["render",X],["__file","manual.html.vue"]]);export{nn as default};
