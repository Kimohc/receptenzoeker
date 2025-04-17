import{_ as R}from"./nkw2-kCt.js";import{_ as j}from"./Bb7-K5Wx.js";import{a as B}from"./t--hEgTQ.js";import{_ as M,e as a,w as e,r as o,o as c,b as t,h as m,a as u,j as N,d,c as f,F as h,g as v,t as y}from"./Dm6I1m09.js";const z={name:"RecipeSearch",data(){return{recipe:"",recipes:[],searched:!1,isLoading:!1}},methods:{async searchForRecipes(){try{this.isLoading=!0;const l=await B.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.recipe}`);this.recipes=l.data.meals||[],this.searched=!0}catch(l){console.error("Fout bij zoeken:",l),this.recipes=[],this.searched=!0}finally{this.isLoading=!1}}}},K={class:"mt-2"},S={class:"text-h6 mt-4"};function T(l,r,Z,q,s,p){const g=o("v-text-field"),x=o("v-btn"),i=o("v-col"),_=o("v-row"),k=o("v-skeleton-loader"),b=o("v-card-title"),w=R,V=o("v-card"),F=j,C=o("v-icon"),L=o("v-container");return c(),a(L,{class:"py-10"},{default:e(()=>[t(_,{align:"center",justify:"center",class:"mb-6"},{default:e(()=>[t(i,{cols:"12",md:"6"},{default:e(()=>[t(g,{modelValue:s.recipe,"onUpdate:modelValue":r[0]||(r[0]=n=>s.recipe=n),label:"Zoek naar een recept",outlined:"",dense:"",clearable:"",onKeyup:N(p.searchForRecipes,["enter"])},null,8,["modelValue","onKeyup"]),u("div",K,[t(x,{color:"primary",onClick:p.searchForRecipes},{default:e(()=>r[1]||(r[1]=[d(" Zoeken ")])),_:1},8,["onClick"])])]),_:1})]),_:1}),s.isLoading?(c(),a(_,{key:0},{default:e(()=>[(c(),f(h,null,v(6,n=>t(i,{key:n,cols:"12",sm:"6",md:"4"},{default:e(()=>[t(k,{type:"image, heading"})]),_:2},1024)),64))]),_:1})):m("",!0),s.recipes.length>0?(c(),a(_,{key:1},{default:e(()=>[(c(!0),f(h,null,v(s.recipes,n=>(c(),a(i,{key:n.idMeal,cols:"12",sm:"6",md:"4"},{default:e(()=>[t(F,{to:`/recipe/${n.idMeal}`,class:"text-decoration-none"},{default:e(()=>[t(V,{class:"mx-auto","max-width":"344"},{default:e(()=>[t(b,{class:"text-center"},{default:e(()=>[d(y(n.strMeal),1)]),_:2},1024),t(w,{src:s.recipe.strMealThumb,alt:"Recept foto",height:"400",loading:"lazy",format:"webp",quality:"80"},null,8,["src"])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):s.searched?(c(),a(_,{key:2},{default:e(()=>[t(i,{cols:"12",class:"text-center"},{default:e(()=>[t(C,{size:"64",color:"grey lighten-1"},{default:e(()=>r[2]||(r[2]=[d("mdi-food-off")])),_:1}),u("p",S,"Geen recepten gevonden voor "+y(s.recipe),1)]),_:1})]),_:1})):m("",!0)]),_:1})}const U=M(z,[["render",T],["__scopeId","data-v-da3431bf"]]);export{U as default};
