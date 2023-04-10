import{_ as d,N as c,a9 as r,Q as e,W as n,a1 as a,P as t,ag as i,G as l}from"./framework-95cb4087.js";const p={},h=e("h3",{id:"如何为文件-文件夹添加密码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何为文件-文件夹添加密码","aria-hidden":"true"},"#"),n(" 如何为文件/文件夹添加密码？")],-1),u=e("h3",{id:"如何对子目录进行反向代理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何对子目录进行反向代理","aria-hidden":"true"},"#"),n(" 如何对子目录进行反向代理？")],-1),_={href:"https://nn.ci/alist",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"正常安装",-1),k=e("code",null,"https://nn.ci/alist",-1),m=e("code",null,"/alist",-1),b=e("li",null,"在 nginx 中添加反向代理配置",-1),f=i(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /alist/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Range <span class="token variable">$http_range</span></span><span class="token punctuation">;</span>
	  <span class="token directive"><span class="token keyword">proxy_set_header</span> If-Range <span class="token variable">$http_if_range</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5244/alist/</span><span class="token punctuation">;</span>
    <span class="token comment"># the max size of file to upload</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">20000m</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忘记密码怎么办" tabindex="-1"><a class="header-anchor" href="#忘记密码怎么办" aria-hidden="true">#</a> 忘记密码怎么办？</h3><p>如果您是站点的所有者，您可以通过在终端中运行 <code>./alist admin</code> 来获取管理员账号信息。</p><p>否则，您可以要求站点所有者重置密码。</p>`,4),g={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"提示",-1),y={href:"https://github.com/alist-org/alist/pull/3074",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"如何修改监听端口-​",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何修改监听端口-​","aria-hidden":"true"},"#"),n(" 如何修改监听端口 ​")],-1),q=e("h3",{id:"如何更新",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何更新","aria-hidden":"true"},"#"),n(" 如何更新")],-1),z=e("p",null,"除了 changelog 中标注的不兼容版本，通常可以直接替换二进制文件进行更新。",-1),$=e("p",null,"对于 docker 用户，只需删除旧的容器并拉取新的docker image，然后运行它即可。",-1),I=e("h3",{id:"如何允许访客上传文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何允许访客上传文件","aria-hidden":"true"},"#"),n(" 如何允许访客上传文件")],-1),L=i('<h3 id="如何去掉底部的-由-alist-驱动-​" tabindex="-1"><a class="header-anchor" href="#如何去掉底部的-由-alist-驱动-​" aria-hidden="true">#</a> 如何去掉底部的&quot;由 AList 驱动&quot;？​</h3><p>根据我们的开源许可: 此最强copyleft许可的权限以在同一许可下提供许可作品和修改的完整源代码为条件，其中包括使用许可作品的较大作品。**版权和许可声明必须保留。**贡献者明确授予专利权。当使用修改后的版本通过网络提供服务时，必须提供修改后版本的完整源代码。</p><h3 id="添加-189-云存储时-设备-id-不存在-需要二次设备验证-​" tabindex="-1"><a class="header-anchor" href="#添加-189-云存储时-设备-id-不存在-需要二次设备验证-​" aria-hidden="true">#</a> 添加 189 云存储时：设备 ID 不存在，需要二次设备验证 ​</h3><p>可能是触发了风控。更改密码后，再次添加即可。</p><h3 id="添加-天翼云盘客户端-存储时-提示-need-img-validate-code-验证码" tabindex="-1"><a class="header-anchor" href="#添加-天翼云盘客户端-存储时-提示-need-img-validate-code-验证码" aria-hidden="true">#</a> 添加 天翼云盘客户端 存储时：提示 need img validate code: 验证码</h3>',5),R=e("li",null,"点击编辑，把刚刚看到的验证码写进配置里面点击保存",-1),N=e("li",null,"点击编辑，把不使用OCR 按钮打开",-1),P=e("strong",null,"Ocr接口",-1),B=i(`<h3 id="tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers" tabindex="-1"><a class="header-anchor" href="#tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers" aria-hidden="true">#</a> TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers?</h3><p>诸如此类的网络问题，请自行排查解决。不要为此提出任何的issue</p><h3 id="怎么添加epub阅读" tabindex="-1"><a class="header-anchor" href="#怎么添加epub阅读" aria-hidden="true">#</a> 怎么添加epub阅读</h3><p>后台 ——&gt;设置——&gt;预览——&gt;Iframe 预览，写在PDF后面</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>/*下面的这个逗号也是哦，这个注释就不要复制了，从第二行开始复制*/
,
  &quot;epub&quot;: {
    &quot;EPUB.js&quot;:&quot;/static/epub.js/viewer.html?url=$e_url&quot;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.7.x 版本及更高的版本已经支持 &quot;.epub&quot; 阅读 但是需要自己手动添加(因为已经创建过数据库了 不好给你覆盖会出错) 如果是第一次安装启动（3.7.x版本及更高的版本）不用手动添加 如果设置了二级目录反代，请在url中自行添加相应前缀。</p>`,6);function C(E,F){const s=l("RouterLink"),o=l("ExternalLinkIcon");return c(),r("div",null,[h,e("p",null,[n("添加"),a(s,{to:"/zh/guide/advanced/meta.html"},{default:t(()=>[n("元信息")]),_:1})]),u,e("p",null,[n("使用 nginx 反向代理到 "),e("a",_,[n("https://nn.ci/alist"),a(o)]),n(" 的示例：")]),e("ul",null,[v,e("li",null,[n("将 "),a(s,{to:"/zh/config/configuration.html#site_url"},{default:t(()=>[n("site_url")]),_:1}),n(" 设置为 "),k,n(" 或者仅"),m,n(", 然后重启alist")]),b]),f,e("div",g,[x,e("p",null,[n("如果你使用v3.9.0及以上版本，你需要先停止alist服务因为这个pr: "),e("a",y,[n("https://github.com/alist-org/alist/pull/3074"),a(o)])])]),w,e("p",null,[n("参考"),a(s,{to:"/zh/config/configuration.html#port"},{default:t(()=>[n("config")]),_:1})]),q,z,$,I,e("p",null,[n("添加"),a(s,{to:"/zh/guide/advanced/meta.html"},{default:t(()=>[n("元信息")]),_:1}),n('，并启用"写入"')]),L,e("ul",null,[R,N,e("li",null,[n("或者自己进行搭建"),a(s,{to:"/zh/config/global.html#ocr-api"},{default:t(()=>[P]),_:1})])]),B])}const T=d(p,[["render",C],["__file","howto.html.vue"]]);export{T as default};
