import{_ as e}from"./index.d667535a.js";import{_ as A}from"./index.ebe96743.js";import{_ as D,d as a,r as t,j as l,i as r,o,h as s,b as C,w as i,u as B,p as n,B as u,q as E,e as m,C as d}from"./index.96025fc1.js";import{d as c}from"./form.a92198f8.js";import"./assign.01f1c7c4.js";const p=m("br",null,null,-1);var f=D(a({__name:"base",setup(D,{expose:a}){const m=t(),f=l(c((()=>[{name:"cao",age:"",sex:0,isAge:!1,like:void 0,nature:[0,1],address:[],code:""},[{label:"名称",key:"name",type:"input"},{label:"性别",key:"sex",type:"radio-group"},{label:"年龄",key:"age",type:"input-number",config:{change(e){const{value:A,record:D}=e;D.isAge=A>=18}}},{label:"是否成年",key:"isAge",type:"switch"},{label:"性格",key:"nature",type:"checkbox-group"},{label:"爱好",key:"like",type:"select"},{label:"日期",key:"time",type:"date-picker",config:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{label:"备注",key:"remark",type:"textarea"},{label:"code",key:"code",type:"slot"},{label:" ",key:"operation",type:"slot"}],{config:{isForm:!0},optionsData:{nature:[{label:"活泼",value:0},{label:"开朗",value:1}],sex:[{label:"男",value:0},{label:"女",value:1}],isAge:[{label:"是",value:!0},{label:"否",value:!1}],like:[{label:"唱歌",value:"sing"},{label:"跳舞",value:"dance"}]},rules:{name:[{required:!0,trigger:"blur",message:"不能为空"}],like:[{required:!0,trigger:"change",message:"不能为空"}],code:[{required:!0,trigger:"blur",message:"不能为空"}]}}])));function g(){m.value.validate().then((({status:e})=>{if(!e)return d.warning("请填写完整");d.success("提交成功")}))}return a({originCode:"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3CSForm%20ref%3D%22formRef%22%20v-bind%3D%22form%22%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23codeIn%3E%0D%0A%20%20%20%20%20%20%20%20%3CCodeEditor%20v-model%3D%22form.formData.code%22%3E%3C%2FCodeEditor%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%20%20%3Ctemplate%20%23operationIn%3E%0D%0A%20%20%20%20%20%20%20%20%3Ca-button%20type%3D%22primary%22%20%40click%3D%22submit%22%3E%E6%8F%90%E4%BA%A4%3C%2Fa-button%3E%0D%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0D%0A%20%20%20%20%3C%2FSForm%3E%0D%0A%20%20%20%20%3Cbr%20%2F%3E%0D%0A%20%20%20%20%7B%7B%20form.formData%20%7D%7D%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20message%20%7D%20from%20'ant-design-vue'%0D%0Aimport%20%7B%20defineForm%20%7D%20from%20'%40%2Fcommon%2Futils%2Fdefine%2Fform'%0D%0A%0D%0Aconst%20formRef%20%3D%20ref()%0D%0Aconst%20form%20%3D%20reactive(%0D%0A%20%20defineForm(()%20%3D%3E%20%7B%0D%0A%20%20%20%20return%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20name%3A%20'cao'%2C%0D%0A%20%20%20%20%20%20%20%20age%3A%20''%2C%0D%0A%20%20%20%20%20%20%20%20sex%3A%200%2C%0D%0A%20%20%20%20%20%20%20%20isAge%3A%20false%2C%0D%0A%20%20%20%20%20%20%20%20like%3A%20undefined%2C%0D%0A%20%20%20%20%20%20%20%20nature%3A%20%5B0%2C%201%5D%2C%0D%0A%20%20%20%20%20%20%20%20address%3A%20%5B%5D%2C%0D%0A%20%20%20%20%20%20%20%20code%3A%20''%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%5B%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%90%8D%E7%A7%B0'%2C%20key%3A%20'name'%2C%20type%3A%20'input'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E5%88%AB'%2C%20key%3A%20'sex'%2C%20type%3A%20'radio-group'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%B9%B4%E9%BE%84'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'age'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'input-number'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20config%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20change(data%3A%20any)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20%7B%20value%2C%20record%20%7D%20%3D%20data%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(value%20%3E%3D%2018)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20record.isAge%20%3D%20true%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20record.isAge%20%3D%20false%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%98%AF%E5%90%A6%E6%88%90%E5%B9%B4'%2C%20key%3A%20'isAge'%2C%20type%3A%20'switch'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%80%A7%E6%A0%BC'%2C%20key%3A%20'nature'%2C%20type%3A%20'checkbox-group'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%88%B1%E5%A5%BD'%2C%20key%3A%20'like'%2C%20type%3A%20'select'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%97%A5%E6%9C%9F'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20key%3A%20'time'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20type%3A%20'date-picker'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20config%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20valueFormat%3A%20'YYYY-MM-DD%20HH%3Amm%3Ass'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%A4%87%E6%B3%A8'%2C%20key%3A%20'remark'%2C%20type%3A%20'textarea'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'code'%2C%20key%3A%20'code'%2C%20type%3A%20'slot'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%7B%20label%3A%20'%20'%2C%20key%3A%20'operation'%2C%20type%3A%20'slot'%20%7D%2C%0D%0A%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20isForm%3A%20false%2C%0D%0A%20%20%20%20%20%20%20%20config%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20isForm%3A%20true%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20optionsData%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20nature%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%B4%BB%E6%B3%BC'%2C%20value%3A%200%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%BC%80%E6%9C%97'%2C%20value%3A%201%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20sex%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E7%94%B7'%2C%20value%3A%200%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%A5%B3'%2C%20value%3A%201%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20isAge%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E6%98%AF'%2C%20value%3A%20true%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%90%A6'%2C%20value%3A%20false%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20like%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E5%94%B1%E6%AD%8C'%2C%20value%3A%20'sing'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'%E8%B7%B3%E8%88%9E'%2C%20value%3A%20'dance'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20rules%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20name%3A%20%5B%7B%20required%3A%20true%2C%20trigger%3A%20'blur'%2C%20message%3A%20'%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20like%3A%20%5B%7B%20required%3A%20true%2C%20trigger%3A%20'change'%2C%20message%3A%20'%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20code%3A%20%5B%7B%20required%3A%20true%2C%20trigger%3A%20'blur'%2C%20message%3A%20'%E4%B8%8D%E8%83%BD%E4%B8%BA%E7%A9%BA'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5D%0D%0A%20%20%7D)%0D%0A)%0D%0A%0D%0Afunction%20submit()%20%7B%0D%0A%20%20formRef.value.validate().then((%7B%20status%20%7D%3A%20any)%20%3D%3E%20%7B%0D%0A%20%20%20%20if%20(!status)%20%7B%0D%0A%20%20%20%20%20%20return%20message.warning('%E8%AF%B7%E5%A1%AB%E5%86%99%E5%AE%8C%E6%95%B4')%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20message.success('%E6%8F%90%E4%BA%A4%E6%88%90%E5%8A%9F')%0D%0A%20%20%7D)%0D%0A%7D%0D%0A%0D%0Aconst%20%24config%20%3D%20ref(%7B%0D%0A%20%20title%3A%20'%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8'%2C%0D%0A%20%20order%3A%201%2C%0D%0A%20%20context%3A%20'%E5%BF%AB%E9%80%9F%E6%9E%84%E5%BB%BA%E8%A1%A8%E5%8D%95%E3%80%82'%2C%0D%0A%7D)%0D%0AdefineExpose(%7B%0D%0A%20%20%24config%2C%0D%0A%7D)%0D%0A%3C%2Fscript%3E%0D%0A%3Cstyle%20scoped%20lang%3D%22scss%22%3E%3C%2Fstyle%3E%0D%0A",$config:t({title:"基础使用",order:1,context:"快速构建表单。"})}),(D,a)=>{const t=A,l=r("a-button"),d=e;return o(),s("div",null,[C(d,u({ref_key:"formRef",ref:m},B(f)),{codeIn:i((()=>[C(t,{modelValue:B(f).formData.code,"onUpdate:modelValue":a[0]||(a[0]=e=>B(f).formData.code=e)},null,8,["modelValue"])])),operationIn:i((()=>[C(l,{type:"primary",onClick:g},{default:i((()=>[n("提交")])),_:1})])),_:1},16),p,n(" "+E(B(f).formData),1)])}}}),[["__file","D:/我的文件/vue3-ant-dome-dos/vue3-ant-dome-dos/src/views/sform/automation/base.vue"]]);export{f as default};
