(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[555],{6190:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practice/08",function(){return a(3254)}])},9903:function(e,t,a){"use strict";var c=a(5893);a(7294),t.Z=e=>{let{pageTitle:t}=e;return(0,c.jsx)("div",{className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg",children:(0,c.jsx)("h1",{className:"py-4 text-center text-3xl font-bold text-white",children:t})})}},4658:function(e,t,a){"use strict";var c=a(5893),i=a(1664),l=a.n(i),r=a(1163);a(7294),t.Z=()=>{let e=(0,r.useRouter)();return(0,c.jsxs)("div",{className:"w-64 bg-gray-800 text-white shadow-lg",children:[(0,c.jsx)("div",{className:"p-4 text-center text-xl font-bold",children:"メニュー"}),(0,c.jsx)("ul",{className:"space-y-2 p-4",children:[{path:"/practice/03",title:"カウントアップ"},{path:"/practice/04",title:"表示／非表示の切り替え"},{path:"/practice/05",title:"入力値を同時表示"},{path:"/practice/06",title:"背景色を変更"},{path:"/practice/07",title:"フィードバックを表示"},{path:"/practice/08",title:"摂氏温度→華氏温度"},{path:"/practice/09",title:"クイズ"},{path:"/practice/10",title:"デジタル時計表示"},{path:"/practice/11",title:"名言のランダム表示"},{path:"/practice/12",title:"信号機（青→黄→赤）"},{path:"/practice/13",title:"タイマー"},{path:"/practice/15",title:"ポケモンAPIアプリ"},{path:"/practice/16",title:"メモアプリ"},{path:"/practice/17",title:"ToDoアプリ"},{path:"/practice/18",title:"日記アプリ"},{path:"/practice/19",title:"ユーザー検索アプリ"}].map((t,a)=>{let i=e.pathname===t.path;return(0,c.jsx)("li",{children:(0,c.jsx)(l(),{href:t.path,className:"block rounded px-4 py-2 ".concat(i?"bg-gray-700 text-white":"hover:bg-gray-700"),children:t.title})},a)})})]})}},3254:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var c=a(5893),i=a(9903),l=a(4658),r=a(7294);let s=()=>{let[e,t]=(0,r.useState)(0);return{celsius:e,handleChange:e=>{t(Number(e.target.value))},convertFromCelsiusToFahrenheit:e=>9*e/5+32}};var n=()=>{let{celsius:e,handleChange:t,convertFromCelsiusToFahrenheit:a}=s();return(0,c.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,c.jsx)(i.Z,{pageTitle:"摂氏温度→華氏温度"}),(0,c.jsxs)("div",{className:"flex flex-1",children:[(0,c.jsx)(l.Z,{}),(0,c.jsx)("div",{className:"flex-1",children:(0,c.jsx)("div",{className:"mx-auto mt-8 max-w-4xl",children:(0,c.jsx)("div",{className:"flex justify-center",children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"mb-2 flex items-center gap-x-2",children:[(0,c.jsx)("label",{htmlFor:"celsius",children:"摂氏温度："}),(0,c.jsx)("input",{className:"border px-2 py-1 outline-none",id:"celsius",type:"number",onChange:t})]}),(0,c.jsxs)("p",{children:["華氏温度：",a(e)]})]})})})})]})]})}}},function(e){e.O(0,[424,888,774,179],function(){return e(e.s=6190)}),_N_E=e.O()}]);