import{_ as h,N as _,a9 as k,Q as n,W as a,a1 as t,P as e,ag as i,G as s}from"./framework-95cb4087.js";const f={},g=i('<h1 id="通用项" tabindex="-1"><a class="header-anchor" href="#通用项" aria-hidden="true">#</a> 通用项</h1><h2 id="挂载路径" tabindex="-1"><a class="header-anchor" href="#挂载路径" aria-hidden="true">#</a> 挂载路径</h2><p>唯一标识，即要挂载到的位置，如果要挂载到根目录，就是 <code>/</code></p><h2 id="顺序" tabindex="-1"><a class="header-anchor" href="#顺序" aria-hidden="true">#</a> 顺序</h2><p>当有多个账户时，用于排序，越小越靠前</p><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2><p>随便你想填什么，只是提醒你这个存储是什么</p><h2 id="启用签名" tabindex="-1"><a class="header-anchor" href="#启用签名" aria-hidden="true">#</a> 启用签名</h2><p>对文件进行签名加密(不会需要密码)，仅对本驱动生效，如果别的没启用签名也没设置<code>签名全部</code>和<code>元信息加密</code>其他的不会进行签名</p><p>使用场景：不想开启全部签名，也不想设置元信息加密，只想对某驱动进行签名加密防止被扫</p><p>影响范围：<code>设置--&gt;全局--&gt;签名所有</code> &gt; <code>元信息目录加密</code> &gt; <code>单驱动签名</code></p><h2 id="缓存过期" tabindex="-1"><a class="header-anchor" href="#缓存过期" aria-hidden="true">#</a> 缓存过期</h2><p>目录结构的缓存时间。</p><h2 id="web-代理" tabindex="-1"><a class="header-anchor" href="#web-代理" aria-hidden="true">#</a> Web 代理</h2>',14),m=n("h2",{id:"webdav-策略",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webdav-策略","aria-hidden":"true"},"#"),a(" WebDAV 策略")],-1),b=n("ul",null,[n("li",null,"302 重定向：重定向到真实链接"),n("li",null,"使用代理 URL：重定向到代理 URL"),n("li",null,"本机代理：直接通过本地中转返回数据（最佳兼容性）")],-1),x=n("h3",{id:"三种模式说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三种模式说明","aria-hidden":"true"},"#"),a(" 三种模式说明")],-1),L=n("h2",{id:"下载代理-url",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载代理-url","aria-hidden":"true"},"#"),a(" 下载代理 URL")],-1),v=n("p",null,"开启代理时不填写此字段，默认使用本机进行传输。提供了两种代理方式：",-1),w=n("p",null,"可以使用 Cloudflare Workers 做代理，这里填写 Workers 地址即可。",-1),U={href:"https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js",target:"_blank",rel:"noopener noreferrer"},y=n("ul",null,[n("li",null,[a("ADDRESS: 你的 AList 地址，必须加上协议头，后面不能跟 "),n("code",null,"/"),a("。如 "),n("code",null,"https://pan.nn.ci"),a("；")]),n("li",null,"TOKEN: 在 AList 管理页面中进入“其他设置”得到。")],-1),S=n("p",null,[a("⚠️ Cloudflare Workers 免费CDN支持兼容国内的只有 "),n("strong",null,"http80端口"),a(" 和 "),n("strong",null,"https443端口"),a("，来自群友测试")],-1),N=n("ul",null,[n("li",null,[a("在Alist后台挂载配置时 填写 "),n("strong",null,"下载代理URL"),a(" 时候的 链接结尾 不可以带 "),n("code",null,"/")])],-1),T={href:"https://github.com/alist-org/alist-proxy/releases",target:"_blank",rel:"noopener noreferrer"},z=n("code",null,"./alist-proxy -help",-1),A=i('<p>你甚至可以开发自己的代理程序，一般步骤是：</p><ul><li>下载时会请求 <code>PROXY_URL/path?sign=sign_value</code></li><li>在代理程序中验证 sign，sign 的计算方法为：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> to_sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n<span class="token keyword">const</span> _sign <span class="token operator">=</span> <span class="token function">safeBase64</span><span class="token punctuation">(</span><span class="token function">hmac_sha256</span><span class="token punctuation">(</span>to_sign<span class="token punctuation">,</span> <span class="token constant">TOKEN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>_sign<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),R=n("code",null,"TOKEN",-1),j=i('<ul><li>验证签名正确后，请求 <code>HOST/api/fs/link</code>，可以得到文件的 URL 和要携带的请求头</li><li>使用信息请求和返回</li></ul><h2 id="排序相关" tabindex="-1"><a class="header-anchor" href="#排序相关" aria-hidden="true">#</a> 排序相关</h2><ul><li>排序方式：按什么排序</li><li>排序方向：排序方向是升序还是降序</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>有些驱动器使用自己的排序方法，可能会有所不同。</p></div><h2 id="提取文件夹" tabindex="-1"><a class="header-anchor" href="#提取文件夹" aria-hidden="true">#</a> 提取文件夹</h2><ul><li>提取到前面：排序时将所有文件夹放在前面</li><li>提取到后面：排序时将所有文件夹放在后面</li></ul>',6);function C(O,K){const l=s("RouterLink"),o=s("FlowChart"),c=s("ExternalLinkIcon"),p=s("Tabs");return _(),k("div",null,[g,n("p",null,[a("网页预览、下载和直接链接是否通过中转。如果你打开此项，建议你设置"),t(l,{to:"/zh/config/configuration.html#site_url"},{default:e(()=>[a("site_url")]),_:1}),a("，以帮助alist更好的工作。")]),m,b,x,t(o,{id:"flowchart-68",code:"eJwztLUrLkksKrFSeLJr4vPZM7iMbO1S81KA3L0LuBQUuAw1ijLTM0o0de2MuACBXQ+i",preset:"vue"}),t(o,{id:"flowchart-69",code:"eJwzNLS1Ky5JLCqxUniya+Lz2TO4jIxs7fILUosSSzLz84CiO7pf7N37ZPfi5xPaQoN8rOyUkUV0S4tyuIyNbe1S81KAavcu4FLgMjTUKMpMzyjR1LUzMoIzjY25AGN9LTw=",preset:"vue"}),t(o,{id:"flowchart-70",code:"eJwzNLS1Ky5JLCqxUniya+Lz2TO4jIxs7fILUosSSzLz86wUns3pfdq18OnMFc/mrHk2Z9eTHWtf7F3DZWxsa5ealwLUtHcBlwKXoaFGUWZ6Rommrp2REZxpbMwFAAvRJ+c=",preset:"vue"}),L,v,t(p,{id:"77",data:[{title:"cloudflare workers"},{title:"通用二进制"}]},{tab0:e(({title:r,value:d,isActive:u})=>[w,n("p",null,[a("Workers 代码可以在 "),n("a",U,[a("https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js"),t(c)]),a(" 找到，实际使用时需要替换其中的这两个变量：")]),y,S,N]),tab1:e(({title:r,value:d,isActive:u})=>[n("p",null,[a("也可以使用另一台机器进行代理，在 "),n("a",T,[a("https://github.com/alist-org/alist-proxy/releases"),t(c)]),a(" 下载程序并通过 "),z,a(" 查看使用方法。")])]),_:1}),A,n("p",null,[R,a("即管理员账户的"),t(l,{to:"/zh/config/other.html#token"},{default:e(()=>[a("token")]),_:1}),a(".")]),j])}const W=h(f,[["render",C],["__file","common.html.vue"]]);export{W as default};
