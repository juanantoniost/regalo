import{e as a,a as e,i as c,l as n,x as r,o as d}from"./app-895b783b.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const m={props:{},data(){return{form:{name:null,identificador:null,text:null,img:null}}},beforeMount(){},methods:{crear(){let s=new FormData;s.append("name","hols"),s.append("identificador",this.form.identificador),s.append("text",this.form.text),s.append("img",this.form.img),axios.post(route("congratulation.store",s)).then(t=>{console.log(t.data)})},selected_file(s){this.form.img=s.target.files[0]}}},_={class:"container"},p=e("div",{class:"row pt-3 pb-3"},[e("div",{class:"col-12 title text-center"},[e("h1",null,"Felicitar")])],-1),u=e("hr",null,null,-1),h={class:"row pt-3"},v={class:"col-12"},b={class:"row ps-5"},x={class:"col-10"},w=e("label",{for:"name",class:"form-label"},"Nombre",-1),g=e("div",{class:"form-text"}," Escribe un nombre con el que Dennis te pueda identificar ",-1),y={class:"row ps-5 pt-3"},F={class:"col-10"},q=e("label",{for:"name",class:"form-label"},"Identificador",-1),D=e("div",{class:"form-text"}," Un apodo o algo para que Dennis te identifique, puede ser una palabra, la escuela donde estudias o donde se conocieron ",-1),E={class:"row ps-5 pt-3"},M={class:"col-10"},U=e("label",{for:"inputPassword5",class:"form-label"},"Felicitacion",-1),V=e("div",{class:"form-text"}," Escribe un mensaje de felicitaciones para Dennis. Max 400 caracteres ",-1),j={class:"row ps-5 pt-3 pb-5"},k={class:"col-10"},B=e("label",{for:"inputPassword5",class:"form-label"},"Foto",-1),C=e("div",{class:"form-text"}," Opcional ",-1),N=e("hr",null,null,-1),P=e("div",{class:"row justify-content-end"},[e("div",{class:"col-12 form-check pt-2"},[e("button",{type:"submit",class:"btn btn-outline-primary"},"Enviar")])],-1),T=e("div",{class:"row ps-3 justify-content-end pb-5"},[e("div",{class:"col-12 pt-2"},[e("a",{href:"/"},[e("button",{class:"btn btn-outline-danger"},"Atras")])])],-1);function A(s,t,I,O,i,l){return d(),a("div",_,[p,u,e("div",h,[e("div",v,[e("form",{onSubmit:t[4]||(t[4]=c((...o)=>l.crear&&l.crear(...o),["prevent"])),enctype:"multipart/form-data"},[e("div",b,[e("div",x,[w,n(e("input",{required:"","onUpdate:modelValue":t[0]||(t[0]=o=>i.form.name=o),type:"text",class:"form-control"},null,512),[[r,i.form.name]]),g])]),e("div",y,[e("div",F,[q,n(e("input",{required:"","onUpdate:modelValue":t[1]||(t[1]=o=>i.form.identificador=o),type:"text",class:"form-control"},null,512),[[r,i.form.identificador]]),D])]),e("div",E,[e("div",M,[U,n(e("textarea",{maxlength:"400",required:"","onUpdate:modelValue":t[2]||(t[2]=o=>i.form.text=o),class:"form-control",id:"exampleFormControlTextarea1",rows:"5"},null,512),[[r,i.form.text]]),V])]),e("div",j,[e("div",k,[B,e("input",{type:"file",onChange:t[3]||(t[3]=(...o)=>l.selected_file&&l.selected_file(...o)),class:"form-control"},null,32),C])]),N,P],32),T])])])}const G=f(m,[["render",A]]);export{G as default};