"use strict";(self["webpackChunkaudio_vue3"]=self["webpackChunkaudio_vue3"]||[]).push([[320],{507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var a,o,i=n?e:e.iterator,u=e.next;while(!(a=r(u,i)).done)if(o=t(a.value),void 0!==o)return o}},531:function(e,t,n){var r=n(4137),a=n(9565),o=n(9306),i=n(8551),u=n(1767),s=n(8646),l=n(9462),c=n(9539),d=n(6395),f=l((function(){var e,t,n=this.iterator,r=this.mapper;while(1){if(t=this.inner)try{if(e=i(a(t.next,t.iterator)),!e.done)return e.value;this.inner=null}catch(o){c(n,"throw",o)}if(e=i(a(this.next,n)),this.done=!!e.done)return;try{this.inner=s(r(e.value,this.counter++),!1)}catch(o){c(n,"throw",o)}}}));r({target:"Iterator",proto:!0,real:!0,forced:d},{flatMap:function(e){return i(this),o(e),new f(u(this),{mapper:e,inner:null})}})},1698:function(e,t,n){var r=n(4137),a=n(4204),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:a})},2475:function(e,t,n){var r=n(4137),a=n(8527),o=n(4916),i=!o("isSupersetOf",(function(e){return!e}));r({target:"Set",proto:!0,real:!0,forced:i},{isSupersetOf:a})},3320:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=n(3533),a=(n(6422),n(9303),n(641)),o=n(33),i=n(953),u=n(3751),s=n(819),l=n(2018),c=n(1069),d=n(2154);const f=(0,s.b_)({modelValue:{type:[String,Number,Boolean],default:void 0},size:l.mU,disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),v=(0,s.b_)({...f,border:Boolean}),p={[c.l4]:e=>(0,o.Kg)(e)||(0,d.Et)(e)||(0,d.Lm)(e),[c.YU]:e=>(0,o.Kg)(e)||(0,d.Et)(e)||(0,d.Lm)(e)},h=Symbol("radioGroupKey");var m=n(2207),b=n(9766);const g=(e,t)=>{const n=(0,i.KR)(),r=(0,a.WQ)(h,void 0),o=(0,a.EW)((()=>!!r)),u=(0,a.EW)((()=>(0,d.Xj)(e.value)?e.label:e.value)),s=(0,a.EW)({get(){return o.value?r.modelValue:e.modelValue},set(a){o.value?r.changeEvent(a):t&&t(c.l4,a),n.value.checked=e.modelValue===u.value}}),l=(0,m.NV)((0,a.EW)((()=>null==r?void 0:r.size))),f=(0,m.CB)((0,a.EW)((()=>null==r?void 0:r.disabled))),v=(0,i.KR)(!1),p=(0,a.EW)((()=>f.value||o.value&&s.value!==u.value?-1:0));return(0,b.b)({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-radio",ref:"https://element-plus.org/en-US/component/radio.html"},(0,a.EW)((()=>o.value&&(0,d.Xj)(e.value)))),{radioRef:n,isGroup:o,radioGroup:r,focus:v,size:l,disabled:f,tabIndex:p,modelValue:s,actualValue:u}};var y=n(8396),R=n(5980);const k=(0,a.pM)({name:"ElRadio"}),w=(0,a.pM)({...k,props:v,emits:p,setup(e,{emit:t}){const n=e,r=(0,R.DU)("radio"),{radioRef:s,radioGroup:l,focus:d,size:f,disabled:v,modelValue:p,actualValue:h}=g(n,t);function m(){(0,a.dY)((()=>t(c.YU,p.value)))}return(e,t)=>{var n;return(0,a.uX)(),(0,a.CE)("label",{class:(0,o.C4)([(0,i.R1)(r).b(),(0,i.R1)(r).is("disabled",(0,i.R1)(v)),(0,i.R1)(r).is("focus",(0,i.R1)(d)),(0,i.R1)(r).is("bordered",e.border),(0,i.R1)(r).is("checked",(0,i.R1)(p)===(0,i.R1)(h)),(0,i.R1)(r).m((0,i.R1)(f))])},[(0,a.Lk)("span",{class:(0,o.C4)([(0,i.R1)(r).e("input"),(0,i.R1)(r).is("disabled",(0,i.R1)(v)),(0,i.R1)(r).is("checked",(0,i.R1)(p)===(0,i.R1)(h))])},[(0,a.bo)((0,a.Lk)("input",{ref_key:"radioRef",ref:s,"onUpdate:modelValue":e=>(0,i.i9)(p)?p.value=e:null,class:(0,o.C4)((0,i.R1)(r).e("original")),value:(0,i.R1)(h),name:e.name||(null==(n=(0,i.R1)(l))?void 0:n.name),disabled:(0,i.R1)(v),checked:(0,i.R1)(p)===(0,i.R1)(h),type:"radio",onFocus:e=>d.value=!0,onBlur:e=>d.value=!1,onChange:m,onClick:(0,u.D$)((()=>{}),["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","checked","onFocus","onBlur","onClick"]),[[u.XL,(0,i.R1)(p)]]),(0,a.Lk)("span",{class:(0,o.C4)((0,i.R1)(r).e("inner"))},null,2)],2),(0,a.Lk)("span",{class:(0,o.C4)((0,i.R1)(r).e("label")),onKeydown:(0,u.D$)((()=>{}),["stop"])},[(0,a.RG)(e.$slots,"default",{},(()=>[(0,a.eW)((0,o.v_)(e.label),1)]))],42,["onKeydown"])],2)}}});var S=(0,y.A)(w,[["__file","radio.vue"]]);const C=(0,s.b_)({...f}),E=(0,a.pM)({name:"ElRadioButton"}),x=(0,a.pM)({...E,props:C,setup(e){const t=e,n=(0,R.DU)("radio"),{radioRef:r,focus:s,size:l,disabled:c,modelValue:d,radioGroup:f,actualValue:v}=g(t),p=(0,a.EW)((()=>({backgroundColor:(null==f?void 0:f.fill)||"",borderColor:(null==f?void 0:f.fill)||"",boxShadow:(null==f?void 0:f.fill)?`-1px 0 0 0 ${f.fill}`:"",color:(null==f?void 0:f.textColor)||""})));return(e,t)=>{var h;return(0,a.uX)(),(0,a.CE)("label",{class:(0,o.C4)([(0,i.R1)(n).b("button"),(0,i.R1)(n).is("active",(0,i.R1)(d)===(0,i.R1)(v)),(0,i.R1)(n).is("disabled",(0,i.R1)(c)),(0,i.R1)(n).is("focus",(0,i.R1)(s)),(0,i.R1)(n).bm("button",(0,i.R1)(l))])},[(0,a.bo)((0,a.Lk)("input",{ref_key:"radioRef",ref:r,"onUpdate:modelValue":e=>(0,i.i9)(d)?d.value=e:null,class:(0,o.C4)((0,i.R1)(n).be("button","original-radio")),value:(0,i.R1)(v),type:"radio",name:e.name||(null==(h=(0,i.R1)(f))?void 0:h.name),disabled:(0,i.R1)(c),onFocus:e=>s.value=!0,onBlur:e=>s.value=!1,onClick:(0,u.D$)((()=>{}),["stop"])},null,42,["onUpdate:modelValue","value","name","disabled","onFocus","onBlur","onClick"]),[[u.XL,(0,i.R1)(d)]]),(0,a.Lk)("span",{class:(0,o.C4)((0,i.R1)(n).be("button","inner")),style:(0,o.Tr)((0,i.R1)(d)===(0,i.R1)(v)?(0,i.R1)(p):{}),onKeydown:(0,u.D$)((()=>{}),["stop"])},[(0,a.RG)(e.$slots,"default",{},(()=>[(0,a.eW)((0,o.v_)(e.label),1)]))],46,["onKeydown"])],2)}}});var _=(0,y.A)(x,[["__file","radio-button.vue"]]),D=n(465);const I=(0,s.b_)({id:{type:String,default:void 0},size:l.mU,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},fill:{type:String,default:""},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...(0,D.l)(["ariaLabel"])}),W=p;var V=n(7010),z=n(9357),L=n(1651);const $=(0,a.pM)({name:"ElRadioGroup"}),B=(0,a.pM)({...$,props:I,emits:W,setup(e,{emit:t}){const n=e,r=(0,R.DU)("radio"),u=(0,V.Bi)(),s=(0,i.KR)(),{formItem:l}=(0,z.j)(),{inputId:d,isLabeledByFormItem:f}=(0,z.W)(n,{formItemContext:l}),v=e=>{t(c.l4,e),(0,a.dY)((()=>t(c.YU,e)))};(0,a.sV)((()=>{const e=s.value.querySelectorAll("[type=radio]"),t=e[0];!Array.from(e).some((e=>e.checked))&&t&&(t.tabIndex=0)}));const p=(0,a.EW)((()=>n.name||u.value));return(0,a.Gt)(h,(0,i.Kh)({...(0,i.QW)(n),changeEvent:v,name:p})),(0,a.wB)((()=>n.modelValue),(()=>{n.validateEvent&&(null==l||l.validate("change").catch((e=>(0,L.U)(e))))})),(e,t)=>((0,a.uX)(),(0,a.CE)("div",{id:(0,i.R1)(d),ref_key:"radioGroupRef",ref:s,class:(0,o.C4)((0,i.R1)(r).b("group")),role:"radiogroup","aria-label":(0,i.R1)(f)?void 0:e.ariaLabel||"radio-group","aria-labelledby":(0,i.R1)(f)?(0,i.R1)(l).labelId:void 0},[(0,a.RG)(e.$slots,"default")],10,["id","aria-label","aria-labelledby"]))}});var U=(0,y.A)(B,[["__file","radio-group.vue"]]),X=n(4769);const P=(0,X.GU)(S,{RadioButton:_,RadioGroup:U}),q=(0,X.WM)(U);(0,X.WM)(_);var K=n(4490);n(8635),n(5929);const M={class:"survey-container"},F={class:"header"},G={class:"title"},O={class:"question-title"},Q={class:"question-number"},j={class:"option-label"},A={class:"action-buttons"};function N(e,t,n,i,s,l){const c=K.gc,d=K.l7,f=P,v=q,p=r.S2;return(0,a.uX)(),(0,a.CE)("div",M,[(0,a.Lk)("div",F,[(0,a.Lk)("h1",G,(0,o.v_)(s.surveyData.title),1),t[0]||(t[0]=(0,a.Lk)("div",{class:"decorative-line"},null,-1))]),(0,a.bF)(d,{active:s.currentPage+1,"align-center":"",class:"custom-steps"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.surveyData.pages,((e,t)=>((0,a.uX)(),(0,a.Wv)(c,{key:t,title:`Step ${t+1}`},null,8,["title"])))),128))])),_:1},8,["active"]),(0,a.bF)(u.eB,{name:"fade",mode:"out-in"},{default:(0,a.k6)((()=>[((0,a.uX)(),(0,a.CE)("div",{class:"question-card",key:s.currentPage},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.currentQuestions,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"question-item"},[(0,a.Lk)("h3",O,[(0,a.Lk)("span",Q,"Q"+(0,o.v_)(e.id),1),(0,a.eW)(" "+(0,o.v_)(e.text),1)]),(0,a.bF)(v,{modelValue:s.answers[e.id],"onUpdate:modelValue":t=>s.answers[e.id]=t,class:"option-group"},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.options,(e=>((0,a.uX)(),(0,a.Wv)(f,{key:e.value,label:e.value,class:"custom-radio"},{default:(0,a.k6)((()=>[(0,a.Lk)("span",j,(0,o.v_)(e.label),1)])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])))),128))]))])),_:1}),(0,a.Lk)("div",A,[s.currentPage<l.totalPages-1?((0,a.uX)(),(0,a.Wv)(p,{key:0,type:"primary",class:"next-button",onClick:l.nextPage},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)(" 继续答题 ➔ ")]))),_:1},8,["onClick"])):((0,a.uX)(),(0,a.Wv)(p,{key:1,type:"success",class:"submit-button",onClick:l.submitSurvey},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)(" ✓ 提交问卷 ")]))),_:1},8,["onClick"]))])])}n(8111),n(116),n(531),n(7588),n(8237),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var Y={data(){return{surveyData:{},currentPage:0,answers:{},requiredQuestions:new Set}},computed:{currentQuestions(){return this.surveyData.pages?.[this.currentPage]?.questions||[]},totalPages(){return this.surveyData.pages?.length||0}},async mounted(){const e=await fetch("/question.json");this.surveyData=await e.json(),this.surveyData.pages.forEach((e=>{e.questions.forEach((e=>this.requiredQuestions.add(e.id)))}))},methods:{handleAnswer(e){this.requiredQuestions.delete(e)},prevPage(){this.currentPage=Math.max(0,this.currentPage-1)},nextPage(){this.requiredQuestions.size>0?this.$message.error("请完成本页所有题目"):this.currentPage=Math.min(this.totalPages-1,this.currentPage+1)},async submitSurvey(){const e=this.surveyData.pages.flatMap((e=>e.questions)).length,t=Object.entries(this.answers).reduce(((e,[t,n])=>{const r=this.findQuestion(Number(t));return e+(n===r.correct?1:0)}),0),n={score:`${t}/${e}`,answers:this.answers,timestamp:(new Date).toISOString()};try{await this.sendEmail(n),this.$message.success("提交成功！结果已发送")}catch(L){this.$message.error("提交失败，请重试")}},findQuestion(e){return this.surveyData.pages.flatMap((e=>e.questions)).find((t=>t.id===e))},async sendEmail(e){console.log("模拟发送到:",this.surveyData.email),console.log("邮件内容:",JSON.stringify(e,null,2));const t=`问卷结果 - 得分 ${e.score}`,n=`\n          得分：${e.score}\n          完整答案：${JSON.stringify(e.answers,null,2)}\n        `;window.location.href=`mailto:${this.surveyData.email}?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(n)}`}}},T=n(6262);const J=(0,T.A)(Y,[["render",N],["__scopeId","data-v-0c5c5e16"]]);var H=J},3440:function(e,t,n){var r=n(7080),a=n(4402),o=n(9286),i=n(5170),u=n(3789),s=n(8469),l=n(507),c=a.has,d=a.remove;e.exports=function(e){var t=r(this),n=u(e),a=o(t);return i(t)<=n.size?s(t,(function(e){n.includes(e)&&d(a,e)})):l(n.getIterator(),(function(e){c(t,e)&&d(a,e)})),a}},3650:function(e,t,n){var r=n(7080),a=n(4402),o=n(9286),i=n(3789),u=n(507),s=a.add,l=a.has,c=a.remove;e.exports=function(e){var t=r(this),n=i(e).getIterator(),a=o(t);return u(n,(function(e){l(t,e)?c(a,e):s(a,e)})),a}},3789:function(e,t,n){var r=n(9306),a=n(8551),o=n(9565),i=n(1291),u=n(1767),s="Invalid size",l=RangeError,c=TypeError,d=Math.max,f=function(e,t){this.set=e,this.size=d(t,0),this.has=r(e.has),this.keys=r(e.keys)};f.prototype={getIterator:function(){return u(a(o(this.keys,this.set)))},includes:function(e){return o(this.has,this.set,e)}},e.exports=function(e){a(e);var t=+e.size;if(t!==t)throw new c(s);var n=i(t);if(n<0)throw new l(s);return new f(e,n)}},3838:function(e,t,n){var r=n(7080),a=n(5170),o=n(8469),i=n(3789);e.exports=function(e){var t=r(this),n=i(e);return!(a(t)>n.size)&&!1!==o(t,(function(e){if(!n.includes(e))return!1}),!0)}},3853:function(e,t,n){var r=n(4137),a=n(4449),o=n(4916),i=!o("isDisjointFrom",(function(e){return!e}));r({target:"Set",proto:!0,real:!0,forced:i},{isDisjointFrom:a})},4204:function(e,t,n){var r=n(7080),a=n(4402).add,o=n(9286),i=n(3789),u=n(507);e.exports=function(e){var t=r(this),n=i(e).getIterator(),s=o(t);return u(n,(function(e){a(s,e)})),s}},4402:function(e,t,n){var r=n(9504),a=Set.prototype;e.exports={Set:Set,add:r(a.add),has:r(a.has),remove:r(a["delete"]),proto:a}},4449:function(e,t,n){var r=n(7080),a=n(4402).has,o=n(5170),i=n(3789),u=n(8469),s=n(507),l=n(9539);e.exports=function(e){var t=r(this),n=i(e);if(o(t)<=n.size)return!1!==u(t,(function(e){if(n.includes(e))return!1}),!0);var c=n.getIterator();return!1!==s(c,(function(e){if(a(t,e))return l(c,"normal",!1)}))}},4916:function(e,t,n){var r=n(7751),a=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},o=function(e){return{size:e,has:function(){return!0},keys:function(){throw new Error("e")}}};e.exports=function(e,t){var n=r("Set");try{(new n)[e](a(0));try{return(new n)[e](a(-1)),!1}catch(u){if(!t)return!0;try{return(new n)[e](o(-1/0)),!1}catch(s){var i=new n;return i.add(1),i.add(2),t(i[e](o(1/0)))}}}catch(s){return!1}}},5024:function(e,t,n){var r=n(4137),a=n(3650),o=n(4916);r({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:a})},5170:function(e,t,n){var r=n(6706),a=n(4402);e.exports=r(a.proto,"size","get")||function(e){return e.size}},5876:function(e,t,n){var r=n(4137),a=n(3838),o=n(4916),i=!o("isSubsetOf",(function(e){return e}));r({target:"Set",proto:!0,real:!0,forced:i},{isSubsetOf:a})},6706:function(e,t,n){var r=n(9504),a=n(9306);e.exports=function(e,t,n){try{return r(a(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(o){}}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},7642:function(e,t,n){var r=n(4137),a=n(3440),o=n(4916),i=!o("difference",(function(e){return 0===e.size}));r({target:"Set",proto:!0,real:!0,forced:i},{difference:a})},8004:function(e,t,n){var r=n(4137),a=n(9039),o=n(8750),i=n(4916),u=!i("intersection",(function(e){return 2===e.size&&e.has(1)&&e.has(2)}))||a((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:u},{intersection:o})},8237:function(e,t,n){var r=n(4137),a=n(2652),o=n(9306),i=n(8551),u=n(1767),s=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(e){i(this),o(e);var t=u(this),n=arguments.length<2,r=n?void 0:arguments[1],l=0;if(a(t,(function(t){n?(n=!1,r=t):r=e(r,t,l),l++}),{IS_RECORD:!0}),n)throw new s("Reduce of empty iterator with no initial value");return r}})},8469:function(e,t,n){var r=n(9504),a=n(507),o=n(4402),i=o.Set,u=o.proto,s=r(u.forEach),l=r(u.keys),c=l(new i).next;e.exports=function(e,t,n){return n?a({iterator:l(e),next:c},t):s(e,t)}},8527:function(e,t,n){var r=n(7080),a=n(4402).has,o=n(5170),i=n(3789),u=n(507),s=n(9539);e.exports=function(e){var t=r(this),n=i(e);if(o(t)<n.size)return!1;var l=n.getIterator();return!1!==u(l,(function(e){if(!a(t,e))return s(l,"normal",!1)}))}},8646:function(e,t,n){var r=n(9565),a=n(8551),o=n(1767),i=n(851);e.exports=function(e,t){t&&"string"===typeof e||a(e);var n=i(e);return o(a(void 0!==n?r(n,e):e))}},8750:function(e,t,n){var r=n(7080),a=n(4402),o=n(5170),i=n(3789),u=n(8469),s=n(507),l=a.Set,c=a.add,d=a.has;e.exports=function(e){var t=r(this),n=i(e),a=new l;return o(t)>n.size?s(n.getIterator(),(function(e){d(t,e)&&c(a,e)})):u(t,(function(e){n.includes(e)&&c(a,e)})),a}},9286:function(e,t,n){var r=n(4402),a=n(8469),o=r.Set,i=r.add;e.exports=function(e){var t=new o;return a(e,(function(e){i(t,e)})),t}}}]);
//# sourceMappingURL=320.bbe283a4.js.map