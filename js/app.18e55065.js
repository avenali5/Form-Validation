(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"00f0":function(t,e,r){t.exports=r.p+"img/stage1.8a17fde2.svg"},"02d2":function(t,e,r){t.exports=r.p+"img/purple-tick.ad095251.svg"},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HelloWorld")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"whole-container"},[s("section",{staticClass:"whole-form-container dark-mode"},[s("section",{staticClass:"whole-left-container"},[s("section",{staticClass:"section-left-info flex "},[s("img",{staticClass:"stage",attrs:{src:t.stage}}),s("div",{staticClass:"second-flex-part"},[s("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.course.title)}}),s("h4",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.course.subtitle)}}),s("p",{staticClass:"price",domProps:{innerHTML:t._s(t.course.price)}}),t._m(0),s("section",{staticClass:"course-final-info flex"},[s("article",{staticClass:"first"},[s("p",{domProps:{innerHTML:t._s(t.course.start.text)}}),s("p",{domProps:{innerHTML:t._s(t.course.start.value)}})]),s("article",{staticClass:"second"},[s("p",{domProps:{innerHTML:t._s(t.course.duration.text)}}),s("p",{domProps:{innerHTML:t._s(t.course.duration.value)}})])])])])]),s("section",{staticClass:"whole-right-container"},[s("VueSlickCarousel",t._b({ref:"carousel",staticClass:"carousel"},"VueSlickCarousel",t.settings,!1),[s("div",{staticClass:"section-right-inputs"},[s("form",{attrs:{action:""}},[s("h2",{domProps:{innerHTML:t._s(t.form.title1)}}),t._l(t.firstInputs,(function(e,a){return s("div",{key:a,staticClass:"input-container relative",attrs:{id:e.containerId}},[s("input",{attrs:{type:e.type,id:e.id,required:"",autocomplete:"off"},on:{keyup:function(r){return t.handleFpart(e.id,e.containerId,e.regex)}}}),s("label",{attrs:{for:e.id},domProps:{innerHTML:t._s(e.label)}}),s("p",{staticClass:"warn",domProps:{innerHTML:t._s(e.warn)}}),s("img",{staticClass:"tick",attrs:{src:r("ff25")}}),s("img",{staticClass:"cross",attrs:{src:r("d8e1")}})])})),s("div",{staticClass:"button-container"},[s("button",{staticClass:"main-button",attrs:{type:"button",disabled:""},domProps:{innerHTML:t._s(t.form.button1)},on:{click:t.secondStage}})])],2)]),s("div",{staticClass:"section-right-inputs second-form"},[s("img",{staticClass:"arrow",attrs:{src:t.arrow},on:{click:t.prevStage}}),s("form",{attrs:{action:""}},[s("h2",{domProps:{innerHTML:t._s(t.form.title2)}}),t._l(t.secondInputs,(function(e,a){return s("div",{key:a,staticClass:"input-container relative",attrs:{id:e.containerId}},[s("input",{attrs:{type:e.type,id:e.id,required:"",autocomplete:"off",maxlength:e.max},on:{keyup:function(r){return t.handleSpart(e.id,e.containerId,e.regex)}}}),s("label",{attrs:{for:e.id},domProps:{innerHTML:t._s(e.label)}}),s("p",{staticClass:"warn",domProps:{innerHTML:t._s(e.warn)}}),s("img",{staticClass:"tick",attrs:{src:r("ff25")}}),s("img",{staticClass:"cross",attrs:{src:r("d8e1")}})])})),s("div",{staticClass:"button-container flex"},[s("button",{staticClass:"secondary-button",attrs:{type:"button"},domProps:{innerHTML:t._s(t.form.button2)}}),s("button",{staticClass:"main-button",attrs:{type:"button",disabled:""},domProps:{innerHTML:t._s(t.form.button3)},on:{click:t.checkInfo}})])],2)])])],1)]),s("section",{staticClass:"modal-container"},[s("article",{staticClass:"modal"},[s("h3",{domProps:{innerHTML:t._s(t.modal.title)}}),s("div",{staticClass:"loader",on:{animationend:t.finishCicle}}),s("h3",{domProps:{innerHTML:t._s(t.modal.subtitle)}}),s("h4",{domProps:{innerHTML:t._s(t.modal.lastMessage)}}),s("button",{staticClass:"main-button",domProps:{innerHTML:t._s(t.modal.button)},on:{click:t.reload}})])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"details"},[s("li",{staticClass:"flex"},[s("img",{attrs:{src:r("02d2"),alt:""}}),t._v(" Materials included ")]),s("li",{staticClass:"flex"},[s("img",{attrs:{src:r("02d2"),alt:""}}),t._v(" Final project ")]),s("li",{staticClass:"flex"},[s("img",{attrs:{src:r("02d2"),alt:""}}),t._v(" Our certificate ")])])}],l=r("ff13"),c=r.n(l),u=(r("01c4"),r("cf9f"),{name:"HelloWorld",components:{VueSlickCarousel:c.a},data(){return{course:{title:"Illustration Toolbox",subtitle:"A method to illustrate",price:"€29.99",start:{text:"Starts",value:"14/10"},duration:{text:"Duration",value:"3 classes"}},form:{title1:"1. Provide your data",button1:"GO TO PAYMENT",title2:"2. Provide your card data",button2:"PAY WITH PAYPAL",button3:"FINISH PAYMENT"},stage:r("00f0"),arrow:r("b94f"),firstInputs:[{containerId:"firstInput",type:"text",id:"first-part-name",label:"NAME",warn:"Give a valid name, please",regex:new RegExp(/(\w.+\s).+/)},{containerId:"secondInput",type:"email",id:"first-part-email",label:"E-MAIL",warn:"Give a valid e-mail, please",regex:new RegExp(".{1,}@[^.]{1,}")}],secondInputs:[{containerId:"thirdInput",type:"text",id:"second-part-name",label:"CARD NAME",warn:"Introduce a valid name, please",regex:new RegExp(/(\w.+\s).+/),max:80},{containerId:"fourthInput",type:"text",id:"second-part-card-number",label:"CARD NUMBER",warn:"Introduce only numbers, please",regex:new RegExp("[0-9]{16,}$"),max:16},{containerId:"fifthInput",type:"text",id:"second-part-exp-date",label:"EXP. DATE",warn:"Introduce a valid exp. date, please",regex:new RegExp("([0-1][0-9][/][0-2][0-9])"),max:5},{containerId:"sixthInput",type:"text",id:"second-part-cvv",label:"CVV",warn:"Introduce only numbers, please",regex:new RegExp("^[0-9]{3,}$"),max:3}],settings:{dots:!1,arrows:!1,adaptiveHeight:!0,infinite:!1,swipe:!1},modal:{title:"Processing your card info",subtitle:"Wait a minute, please",lastMessage:"",button:"BACK TO HOME"},congratUser:{userName:"",mailDir:"your email"}}},methods:{prevStage(){this.$refs.carousel.prev(),this.stage=r("00f0")},secondStage(){this.$refs.carousel.next();let t=document.querySelector("#first-part-name"),e=document.querySelector("#first-part-email");this.congratUser.userName=t.value,this.congratUser.mailDir=e.value,this.stage=r("832a")},handleFpart(t,e,r){let s=document.querySelector("#first-part-name"),a=document.querySelector("#first-part-email"),n=document.querySelector("#"+t),o=document.querySelector(`#${e} label`),i=document.querySelector(`#${e} .warn`),l=document.querySelector(`#${e} .tick`),c=document.querySelector(`#${e} .cross`),u=document.querySelector(".main-button");n.value.length>=1?o.style.transform="translate(0rem, -.8rem) scale(.8)":o.style.transform="translate(.5rem, .6rem) scale(1)",n.value.match(r)?(l.style.display="block",c.style.display="none",i.style.display="none"):(l.style.display="none",c.style.display="block",i.style.display="block"),s.value.match(this.firstInputs[0].regex)&&a.value.match(this.firstInputs[1].regex)?(u.disabled=!1,u.style.opacity="1",u.style.cursor="pointer"):(u.disabled=!0,u.style.opacity=".5",u.style.cursor="not-allowed")},handleSpart(t,e,r){let s=document.querySelector("#second-part-name"),a=document.querySelector("#second-part-card-number"),n=document.querySelector("#second-part-exp-date"),o=document.querySelector("#second-part-cvv"),i=document.querySelector("#"+t),l=document.querySelector(`#${e} label`),c=document.querySelector(`#${e} .warn`),u=document.querySelector(`#${e} .tick`),d=document.querySelector(`#${e} .cross`),p=document.querySelector(".second-form .main-button");document.querySelectorAll(".second-form form input");i.value.length>=1?l.style.transform="translate(0rem, -.8rem) scale(.8)":l.style.transform="translate(.5rem, .6rem) scale(1)",i.value.match(r)?(u.style.display="block",d.style.display="none",c.style.display="none"):(u.style.display="none",d.style.display="block",c.style.display="block"),s.value.match(this.secondInputs[0].regex)&&a.value.match(this.secondInputs[1].regex)&&n.value.match(this.secondInputs[2].regex)&&o.value.match(this.secondInputs[3].regex)?(p.disabled=!1,p.style.opacity="1",p.style.cursor="pointer"):(p.disabled=!0,p.style.opacity=".5",p.style.cursor="not-allowed")},checkInfo(){let t=document.querySelector(".modal-container");t.style.display="block"},finishCicle(){this.modal.title=`Congratulations ${this.congratUser.userName}!`,this.modal.subtitle='You have just acquired our <span class="purple">Illustration Toolbox</span> course.',this.modal.lastMessage=`Soon we will send your receipt to <span class="purple">${this.congratUser.mailDir}</span>`,document.querySelector(".modal-container .modal .loader").style.display="none",document.querySelector(".modal-container .modal .main-button").style.display="block"},reload(){location.reload()}}}),d=u,p=(r("78c9"),r("2877")),m=Object(p["a"])(d,o,i,!1,null,"223adc05",null),f=m.exports,y={name:"App",components:{HelloWorld:f}},b=y,g=(r("5c0b"),Object(p["a"])(b,a,n,!1,null,null,null)),h=g.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"78c9":function(t,e,r){"use strict";r("a7ab")},"832a":function(t,e,r){t.exports=r.p+"img/stage2.486ef306.svg"},"9c0c":function(t,e,r){},a7ab:function(t,e,r){},b94f:function(t,e,r){t.exports=r.p+"img/arrow.e60fdb8d.svg"},d8e1:function(t,e,r){t.exports=r.p+"img/red-cross.942dd484.svg"},ff25:function(t,e,r){t.exports=r.p+"img/green-tick.7788e998.svg"}});
//# sourceMappingURL=app.18e55065.js.map