"use strict";(self["webpackChunkadote_um_pet_v2"]=self["webpackChunkadote_um_pet_v2"]||[]).push([[859],{8859:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var s=a(3673),l=a(8880),r=a(2323);const n=e=>((0,s.dD)("data-v-ca1d0bc8"),e=e(),(0,s.Cn)(),e),c={class:"block"},u=n((()=>(0,s._)("br",null,null,-1))),d=n((()=>(0,s._)("label",{for:"searchInput"},"Pesquise aqui pela Espécie que quer adotar",-1))),o={class:"absolute-bottom text-subtitle2 text-center"},i=n((()=>(0,s._)("br",null,null,-1))),p=n((()=>(0,s._)("br",null,null,-1))),f=n((()=>(0,s._)("br",null,null,-1))),b=n((()=>(0,s._)("br",null,null,-1))),_=(0,s.Uk)("Adotar"),w=(0,s.Uk)("Compartilhar");function h(e,t,a,n,h,m){const g=(0,s.up)("q-img"),k=(0,s.up)("q-btn"),x=(0,s.up)("q-card-actions"),q=(0,s.up)("q-card-section"),y=(0,s.up)("q-card"),v=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(v,{padding:""},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>h.search=e),id:"searchInput",class:"input-res"},null,512),[[l.nr,h.search]]),u,d]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(m.filteredItems,((e,t)=>((0,s.wg)(),(0,s.j4)(y,{class:"my-card",key:t,style:{"border-radius":"25px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{class:"bg-primary text-white"},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{src:e.img,style:{"border-radius":"25px"}},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s.Uk)((0,r.zw)(e.nome)+" ",1),i,(0,s.Uk)(" Sexo: "+(0,r.zw)(e.sexo),1),p,(0,s.Uk)(" Espécie: "+(0,r.zw)(e.especie),1),f,(0,s.Uk)(" Idade: "+(0,r.zw)(e.idade),1),b,(0,s.Uk)(" Localização: "+(0,r.zw)(e.local),1)])])),_:2},1032,["src"]),(0,s.Wm)(x,{align:"center",style:{"border-radius":"25px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{flat:"",class:"bg-positive",style:{"font-size":"15px"},href:e.contato},{default:(0,s.w5)((()=>[_])),_:2},1032,["href"]),(0,s.Wm)(k,{flat:"",class:"bg-info",style:{"font-size":"15px"}},{default:(0,s.w5)((()=>[w])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}const m={data(){return{pets:[],search:""}},computed:{filteredItems(){return this.pets.filter((e=>e.especie.toLowerCase().indexOf(this.search.toLowerCase())>-1))}},created(){fetch("https://api.npoint.io/78fb19b494249ab9973c").then((e=>e.json())).then((e=>this.pets=e))}};var g=a(4260),k=a(4379),x=a(1543),q=a(5589),y=a(4027),v=a(9367),C=a(8240),z=a(7518),U=a.n(z);const I=(0,g.Z)(m,[["render",h],["__scopeId","data-v-ca1d0bc8"]]),Z=I;U()(m,"components",{QPage:k.Z,QCard:x.Z,QCardSection:q.Z,QImg:y.Z,QCardActions:v.Z,QBtn:C.Z})}}]);