"use strict";(self["webpackChunkadote_um_pet_v2"]=self["webpackChunkadote_um_pet_v2"]||[]).push([[948],{9948:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var s=a(3673),l=a(8880),n=a(2323);const r={class:"block"},o=(0,s._)("br",null,null,-1),i=(0,s._)("label",{for:"searchInput"},"Pesquise aqui pela Espécie que quer adotar",-1),u={class:"absolute-bottom text-subtitle2 text-center"},d=(0,s._)("br",null,null,-1),c=(0,s._)("br",null,null,-1),p=(0,s._)("br",null,null,-1),m=(0,s._)("br",null,null,-1),f=(0,s._)("br",null,null,-1),b=(0,s._)("br",null,null,-1),w=(0,s._)("br",null,null,-1),h=(0,s.Uk)("Adotar"),_=(0,s.Uk)("Mais Informações");function g(e,t,a,g,k,y){const x=(0,s.up)("q-banner"),z=(0,s.up)("q-badge"),U=(0,s.up)("q-img"),q=(0,s.up)("q-card-section"),Z=(0,s.up)("q-btn"),C=(0,s.up)("q-card-actions"),v=(0,s.up)("q-card"),Q=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(Q,{padding:""},{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>k.search=e),id:"searchInput",class:"input-res"},null,512),[[l.nr,k.search]]),o,i]),(0,s.Wm)(x,{"inline-actions":"",class:"text-black bg-primary",style:{"border-radius":"25px"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Atualmente temos "+(0,n.zw)(k.pets.length)+" animais cadastrados, ajude a diminuir esse número escolhendo uma das fofuras abaixo!!! ",1)])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(y.filteredItems,((e,a)=>((0,s.wg)(),(0,s.j4)(v,{class:"my-card",key:a,style:{"border-radius":"25px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(q,{class:"bg-primary text-white"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{src:e.img,style:{"border-radius":"25px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{color:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,n.zw)(k.pets.length-a),1)])),_:2},1024),(0,s._)("div",u,[(0,s.Uk)((0,n.zw)(e.nome)+" ",1),d,(0,s.Uk)(" "+(0,n.zw)(e.sexo)+" ",1),c,(0,s.Uk)(" Espécie: "+(0,n.zw)(e.especie),1),p,(0,s.Uk)(" Idade: "+(0,n.zw)(e.idade),1),m,(0,s.Uk)(" Localização: "+(0,n.zw)(e.local),1)])])),_:2},1032,["src"]),(0,s.wy)((0,s.Wm)(q,{style:{"text-align":"center"}},{default:(0,s.w5)((()=>[(0,s.Uk)(" Vermifugado(a): "+(0,n.zw)(e.vermifugado),1),f,(0,s.Uk)(" Vacinado(a): "+(0,n.zw)(e.vacinado)+" ",1),b,(0,s.Uk)(" Castrado(a): "+(0,n.zw)(e.castrado)+" ",1),w])),_:2},1536),[[l.F8,k.maisinfo]]),(0,s.Wm)(C,{align:"center",style:{"border-radius":"25px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{flat:"",class:"bg-secondary",style:{"font-size":"15px"},href:e.contato},{default:(0,s.w5)((()=>[h])),_:2},1032,["href"]),(0,s.Wm)(Z,{flat:"",class:"bg-info",style:{"font-size":"15px"},onClick:t[1]||(t[1]=e=>this.maisinfo=!this.maisinfo)},{default:(0,s.w5)((()=>[_])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}var k=a(2841),y=a(1914),x=a(1959);const z={setup(){return{model:(0,x.iH)(null),options:["Filhotes","Todos","Castrados"]}},data(){return{pets:[],search:"",copiado:!1,maisinfo:!1}},computed:{filteredItems(){return this.pets.filter((e=>e.especie.toLowerCase().indexOf(this.search.toLowerCase())>-1))}},created(){fetch("https://api.npoint.io/78fb19b494249ab9973c").then((e=>e.json())).then((e=>this.pets=e))},methods:{shareDown(e){const t=(0,k.Z)("important.txt",e);!0===t||console.log("Error: "+t)},copy2(e,t,a,s){(0,y.Z)(e,t,a,s).then((()=>{this.copiado=!0})).catch((()=>{}))}}};var U=a(4260),q=a(4379),Z=a(9994),C=a(5607),v=a(151),Q=a(5589),W=a(4027),I=a(9721),j=a(9367),A=a(8240),B=a(7518),E=a.n(B);const L=(0,U.Z)(z,[["render",g]]),V=L;E()(z,"components",{QPage:q.Z,QSelect:Z.Z,QBanner:C.Z,QCard:v.Z,QCardSection:Q.Z,QImg:W.Z,QBadge:I.Z,QCardActions:j.Z,QBtn:A.Z})}}]);