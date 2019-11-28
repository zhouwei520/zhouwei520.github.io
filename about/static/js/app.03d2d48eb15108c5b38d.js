webpackJsonp([1],{100:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},40:function(n,e){},41:function(n,e,t){t(89);var r=t(15)(t(48),t(100),"data-v-647e008b",null);n.exports=r.exports},42:function(n,e,t){t(87);var r=t(15)(t(49),t(98),"data-v-35c047fd",null);n.exports=r.exports},43:function(n,e,t){t(86);var r=t(15)(t(46),t(97),"data-v-22ce9519",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(15)(t(47),t(99),"data-v-53c8d54c",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(26),s=t.n(i),a=t(25),u=t.n(a),l=t(42),c=t.n(l),d=t(41),h=t.n(d),m=t(40);t.n(m);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:h.a},data:function(){return{interval:3,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是試毅-周伟。\n* 我来写一份简历！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n  /* background: rgb(20,20,20); */\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 开始写简历 */\n",'\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"\n周伟\n----\n23岁，Java软件工程师，三年Java EE 从业经验，目前在深圳工作。\n有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控\n<br/>\n\n\n技能\n----\n* 后端开发\n* 聚合支付\n* 单点登录\n* 权限管理\n* 公众号/小程序开发\n* API接口开发\n* Linux\n* 开源爱好者\n* 博客系统\n\n技术及语言\n----\n  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis、Shiro、Freemarker\n  - **前端**: VueJs、Bootstrap、LayUI、jQuery UI\n  - **数据库**: MySQL/MariaDB、SQLServer、Oracle、MongoDB、redis、memcached\n  - **web 服务器**: Nginx、Tomcat、Apache、Jetty\n  - **OS**: Linux、Windows\n  - **Others**: Git、Svn、Maven、XMind、Visio、IDEA\n\n工作经历\n----\n1. [深圳河马科技有限公司]()\n2. [长沙某家科技有限公司]()\n\n\n联系我\n----\n* 联系QQ：**1695209838** | 微信：**1695209838**\n* 主要涉及技术：**Java后端开发**、**聚合支付**、**公众号开发**、**开源爱好者**、**Linux**\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(16),o=t.n(r),i=t(26),s=t.n(i),a=t(25),u=t.n(a),l=t(42),c=t.n(l),d=t(41),h=t.n(d),m=t(40);t.n(m);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:h.a},data:function(){return{interval:3,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 源码地址 https://gitee.com/zhousiwei/anires\n* 大家好，我是試毅-思伟。\n* 我来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 开始写简历 */\n",'\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"\n周思伟\n----\n23岁，Java软件工程师，三年Java EE 从业经验，目前在杭州工作。\n有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控\n<br/>\n\n- [中英文简历](https://zhousiwei.gitee.io/cv/)\n\n技能\n----\n* 后端开发\n* 聚合支付\n* 单点登录\n* 权限管理\n* 公众号/小程序开发\n* API接口开发\n* Linux\n* 开源爱好者\n* 博客系统\n\n技术及语言\n----\n  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis、Shiro、Freemarker\n  - **前端**: VueJs、Bootstrap、LayUI、jQuery UI\n  - **数据库**: MySQL/MariaDB、SQLServer、Oracle、MongoDB、redis、memcached\n  - **web 服务器**: Nginx、Tomcat、Apache、Jetty\n  - **OS**: Linux、Windows\n  - **Others**: Git、Svn、Maven、XMind、Visio、IDEA\n\n工作经历\n----\n1. [杭州特扬网络科技有限公司](http://www.hztywl.cn/)\n2. [江西三叉数信息科技有限公司](http://www.3xdata.cn/)\n3. [江西益强微盈信息科技有限公司](http://jxyq123.51sole.com/)\n\n开源项目\n----\n1. [基于SpringBoot + Shiro + MyBatisPlus的权限管理框架](https://gitee.com/zhousiwei/bootplus)\n2. [SpringBoot集成MyBatisPlus集成Shiro可以快速开发](https://gitee.com/zhousiwei/springboot_mybatisplus)\n3. [自制spring boot starter for fastjson](https://gitee.com/zhousiwei/fastjson-spring-boot-starter)\n4. [基于web版kettle开发的一套分布式综合调度,管理,ETL开发的用户专业版B/S架构工具](https://github.com/JoeyBling/webkettle)\n5. [一个会动的简历](https://gitee.com/zhousiwei/anires)\n6. [VuePress记录技术开发笔记](https://gitee.com/zhousiwei/ibooks)\n7. [使用GitBook记录开发笔记](https://zhousiwei.gitee.io/myBook/)\n8. [試毅-思伟的技术博客网站](https://gitee.com/zhousiwei/zhousiwei)\n\n链接\n----\n* [技术博客](https://zhousiwei.gitee.io/)\n* [GitHub](https://github.com/JoeyBling)\n* [简书](https://www.jianshu.com/u/02cbf31a043a)\n* [开发笔记](https://zhousiwei.gitee.io/ibooks)\n\n[归档文章](https://zhousiwei.gitee.io/)\n----\n1. [Java](https://zhousiwei.gitee.io/tags/Java/)\n2. [Linux](https://zhousiwei.gitee.io/tags/Linux/)\n3. [ELK日志分析](https://zhousiwei.gitee.io/tags/ELK%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90/)\n4. [MySQL](https://zhousiwei.gitee.io/tags/MySQL)\n5. [Hexo](https://zhousiwei.gitee.io/tags/Hexo)\n6. [日记本](https://zhousiwei.gitee.io/tags/%E6%97%A5%E8%AE%B0%E6%9C%AC/)\n\n联系我\n----\n* 联系QQ：**2434387555** | 微信：**13647910412**\n* 主要涉及技术：**Java后端开发**、**聚合支付**、**公众号开发**、**开源爱好者**、**Linux**\n\n> 如果你喜欢这个效果，Fork [我的项目](https://gitee.com/zhousiwei/anires)，打造你自己的简历！\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){var n=new o.a.Renderer;o.a.setOptions({renderer:n,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1});var e=n.link;return n.link=function(t,r,o){return e.call(n,t,r,o).replace(/^<a /,'<a target="_blank" rel="nofollow" ')},this.enableHtml?o()(this.markdown,{renderer:n}):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(91),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},86:function(n,e){},87:function(n,e){},88:function(n,e){},89:function(n,e){},97:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},98:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},99:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.03d2d48eb15108c5b38d.js.map