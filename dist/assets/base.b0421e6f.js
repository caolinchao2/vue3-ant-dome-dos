import{_ as e}from"./assign.01f1c7c4.js";import{_ as a}from"./index.80726069.js";import{d as t,R as l,K as s,D as o,t as A,r as n,y as r,u as D,g as u,V as i,j as c,c3 as f,f as p,P as v,L as E,o as B,h as m,b as C,G as d,A as y,w as b,l as g,I as k,J as h,e as x,c as F,B as O,v as S,C as _,_ as j}from"./index.96025fc1.js";import{a as w,d as R}from"./form.a92198f8.js";import{_ as L}from"./index.d667535a.js";const M={class:"pagesBox search-form-area"},Y={class:"action"},q={key:0,class:"iconRow"};var H=j(t({__name:"index",props:{fieldList:{type:Array,required:!0},formModel:{type:Object,required:!0},formData:{type:Object,required:!0},presetButton:{type:Boolean,required:!1,default:!0},onOff:{type:Boolean,required:!1},button:{type:Object,required:!1}},emits:["update:onOff","search"],setup(t,{expose:j,emit:R}){const H=l("isInLayout",!1),I=s(),$=o(),z=R,P=t,{fieldList:T,formModel:G,formData:J,presetButton:K,onOff:U,button:V}=A(P),N=n();r((()=>{N.value=T.value.map((e=>({...e,label:"",title:e.label,config:{placeholder:e.label,...e?.config?e.config:{}}}))).filter((e=>!1!==D(e.checked)))}));const Q=w((()=>({span:6,rowAttr:{style:{marginLeft:"-8px",marginRight:"-8px"}},colAttr:{style:{paddingLeft:"8px",paddingRight:"8px"}},config:{keyup({e:e}){"Enter"===e.code&&Ae()}}}))),W=u((()=>i({},Q,G.value))),X=u((()=>N.value.reduce(((e,a)=>e+(a?.config?.span||a?.span||W.value?.span||0)),0))),Z=n(U?.value||!(X.value>=72)),ee=u((()=>24-(Z.value?X.value:le.value)%24)),ae=c({key:"action",span:u((()=>ee.value)),type:"slotOut"}),te=u((()=>{let e;return e=f(N.value),Z.value||H||(e=e.splice(0,3)),e})),le=u((()=>te.value.reduce(((e,a)=>e+(a?.config?.span||a?.span||W.value?.span||0)),0))),se=u((()=>te.value.map((e=>e.key))));function oe(){if($?.onReset)return void $.onReset();Object.keys(J?.value||{}).forEach((e=>{"string"===v(J?.value[e])&&(J.value[e]=void 0),"object"===v(J?.value[e])&&(J.value[e]={}),"array"===v(J?.value[e])&&(J.value[e]=[])})),ne?.value?.resetFields(),$?.onResetPost?.()}async function Ae(e=!0){if($?.["onSearch:false"])return void $?.["onSearch:false"]?.({onOff:Z.value,formData:J.value});let a={status:!0};!1!==e&&(a=await(ne?.value?.validate())??a),!0===a.status?z("search",{onOff:Z.value,formData:J.value}):_.warning("查询条件不符合规则！")}p((()=>Z.value),(e=>{if(z("update:onOff",e),!e){Object.keys(J?.value||{}).forEach((e=>{se.value.includes(e)||("string"===v(J?.value[e])&&(J.value[e]=void 0),"object"===v(J?.value[e])&&(J.value[e]={}),"array"===v(J?.value[e])&&(J.value[e]=[]))}))}}));const ne=n(),re=c({});return E((()=>{if(ne.value){Object.keys(ne.value).forEach((e=>{re[e]=ne.value[e]}))}})),j(re),(t,l)=>{const s=a,o=e;return B(),m("div",M,[C(L,O({ref_key:"formRef",ref:ne},D($),{fieldList:[...D(te),D(ae)],formModel:D(W),formData:D(J)}),d({action:b((()=>[x("div",Y,[!1!==D(K)?(B(),F(s,O({key:0},{onSearch:Ae,onReset:oe,...D(V)||{}},{setup:{search:{text:"搜索"},...D(V)?.setup||{}}}),null,16,["setup"])):S("v-if",!0),g(t.$slots,"default",{onOff:D(Z)},void 0,!0)])])),_:2},[y(D(I),((e,a)=>({name:a,fn:b((e=>[g(t.$slots,a,k(h(e)),void 0,!0)]))})))]),1040,["fieldList","formModel","formData"]),D(X)>=72&&!D(H)?(B(),m("div",q,[D(Z)?(B(),F(o,{key:0,name:"search-up",fontSize:"100px",style:{margin:"auto",height:"20px"},onClick:l[0]||(l[0]=e=>Z.value=!D(Z))})):(B(),F(o,{key:1,name:"search-unfold-flip",fontSize:"100px",style:{margin:"auto",height:"20px"},onClick:l[1]||(l[1]=e=>Z.value=!D(Z))}))])):S("v-if",!0)])}}}),[["__scopeId","data-v-fb56fc62"],["__file","D:/我的文件/vue3-ant-dome-dos/vue3-ant-dome-dos/src/common/components/SpaceUI/SSearchForm/index.vue"]]);const I=x("div",null,"默认插槽",-1);var $=j(t({__name:"base",setup(e,{expose:a}){const t=c(R((()=>[{name:"",sex:null,nature:null,like:null},[{label:"名称",key:"name",type:"input"},{label:"性别",key:"sex",type:"select"},{label:"性格",key:"nature",type:"select"},{label:"爱好",key:"like",type:"select"},{label:"日期",key:"time",type:"date-picker",config:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{label:"备注",key:"remark",type:"textarea",config:{rows:1}}],{optionsData:{nature:[{label:"活泼",value:"lively"},{label:"开朗",value:"outgoing"}],sex:[{label:"男",value:"man"},{label:"女",value:"woman"}],like:[{label:"唱歌",value:"sing"},{label:"跳舞",value:"dance"}]}}]))),l=({onOff:e,formData:a})=>{_.success("搜索")},s=()=>{_.success("清空")};return a({originCode:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3CSSearchForm%0D%0A%20%20%20%20%20%20v-bind%3D%22formOption%22%0D%0A%20%20%20%20%20%20%40search%3D%22search%22%0D%0A%20%20%20%20%20%20%40reset%3D%22reset%22%0D%0A%20%20%20%20%20%20%3ApresetButton%3D%22true%22%0D%0A%20%20%20%20%20%20%3AonOff%3D%22false%22%0D%0A%20%20%20%20%3E%0D%0A%20%20%20%20%20%20%3Cdiv%3E%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%3C%2Fdiv%3E%0D%0A%20%20%20%20%3C%2FSSearchForm%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20message%20%7D%20from%20'ant-design-vue'%0D%0Aimport%20%7B%20defineForm%20%7D%20from%20'%40%2Fcommon%2Futils%2Fdefine%2Fform'%0D%0A%0D%0Aconst%20formOption%20%3D%20reactive(%0D%0A%20%20defineForm(()%20%3D%3E%20%7B%0D%0A%20%20%20%20return%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20''%2C%0D%0A%20%20%20%20%20%20%20%20sex%3A%20null%2C%0D%0A%20%20%20%20%20%20%20%20nature%3A%20null%2C%0D%0A%20%20%20%20%20%20%20%20like%3A%20null%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%90%8D%E7%A7%B0'%2C%20key%3A%20'name'%2C%20type%3A%20'input'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'sex'%2C%20type%3A%20'select'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E6%A0%BC'%2C%20key%3A%20'nature'%2C%20type%3A%20'select'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%88%B1%E5%A5%BD'%2C%20key%3A%20'like'%2C%20type%3A%20'select'%20%7D%2C%0D%0A%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'time'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'date-picker'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20config%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20valueFormat%3A%20'YYYY-MM-DD%20HH%3Amm%3Ass'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%A4%87%E6%B3%A8'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'remark'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'textarea'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20config%3A%20%7B%20rows%3A%201%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20optionsData%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20nature%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%B4%BB%E6%B3%BC'%2C%20value%3A%20'lively'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%BC%80%E6%9C%97'%2C%20value%3A%20'outgoing'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20sex%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%94%B7'%2C%20value%3A%20'man'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%A5%B3'%2C%20value%3A%20'woman'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20like%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%94%B1%E6%AD%8C'%2C%20value%3A%20'sing'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E8%B7%B3%E8%88%9E'%2C%20value%3A%20'dance'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5D%0D%0A%20%20%7D)%0D%0A)%0D%0Aconst%20search%20%3D%20(%7B%20onOff%2C%20formData%20%7D%3A%20%7B%20onOff%3A%20boolean%3B%20formData%3A%20object%20%7D)%20%3D%3E%20%7B%0D%0A%20%20console.log(onOff%2C%20formData%2C%20'msg')%0D%0A%20%20message.success('%E6%90%9C%E7%B4%A2')%0D%0A%7D%0D%0Aconst%20reset%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20message.success('%E6%B8%85%E7%A9%BA')%0D%0A%7D%0D%0Aconst%20%24config%20%3D%20ref(%7B%0D%0A%20%20title%3A%20'%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8'%2C%0D%0A%20%20context%3A%20%60%0D%0A%20%20%E5%9F%BA%E4%BA%8ESForm%E8%BF%9B%E8%A1%8C%E5%B0%81%E8%A3%85%2C%E5%B0%86label%E5%AD%97%E6%AE%B5%E8%BD%AC%E6%8D%A2%E4%B8%BAplaceholder%E8%BF%9B%E8%A1%8C%E5%B1%95%E7%A4%BA%0D%0A%20%20%E6%B7%BB%E5%8A%A0%E4%BA%86%E6%90%9C%E7%B4%A2%E5%92%8C%E9%87%8D%E7%BD%AE(reset)%E4%B8%A4%E4%B8%AA%E9%BB%98%E8%AE%A4%E6%8C%89%E9%92%AE(search)%0D%0A%20%20%60%2C%0D%0A%20%20contextType%3A%20'pre'%2C%0D%0A%7D)%0D%0AdefineExpose(%7B%0D%0A%20%20%24config%2C%0D%0A%7D)%0D%0A%3C%2Fscript%3E%0D%0A%3Cstyle%20scoped%20lang%3D%22scss%22%3E%3C%2Fstyle%3E%0D%0A",$config:n({title:"基础使用",context:"\n  基于SForm进行封装,将label字段转换为placeholder进行展示\n  添加了搜索和重置(reset)两个默认按钮(search)\n  ",contextType:"pre"})}),(e,a)=>{const o=H;return B(),m("div",null,[C(o,O(D(t),{onSearch:l,onReset:s,presetButton:!0,onOff:!1}),{default:b((()=>[I])),_:1},16)])}}}),[["__file","D:/我的文件/vue3-ant-dome-dos/vue3-ant-dome-dos/src/views/SSearchForm/automation/base.vue"]]);export{$ as default};
